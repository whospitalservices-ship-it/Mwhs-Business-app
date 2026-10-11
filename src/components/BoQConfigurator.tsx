import React, { useState, useMemo } from 'react';
import { FacilityConfig, BoQItem } from '../types';
import { calculateBoQ } from '../utils/boqCalculator';
import { 
  Calculator, 
  Download, 
  Printer, 
  Building2, 
  Bed, 
  Layers, 
  Gauge, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  FileSpreadsheet,
  Clock,
  Send
} from 'lucide-react';

interface BoQConfiguratorProps {
  onOpenInquiry?: (prefilledNote?: string) => void;
}

export const BoQConfigurator: React.FC<BoQConfiguratorProps> = ({ onOpenInquiry }) => {
  const [config, setConfig] = useState<FacilityConfig>({
    facilityName: 'Metro Life Care Super-Specialty Hospital',
    facilityType: 'superspecialty',
    totalBeds: 250,
    icuBeds: 35,
    modularOTs: 4,
    currency: 'INR',
    oxygenSource: 'lox-manifold',
    vacuumSystem: 'triplex-rotary',
    medicalAir4Bar: true,
    surgicalAir7Bar: true,
    agssRequired: true,
    wallCladding: 'ss304',
    laminarFlowSize: '10x10',
    hermeticDoors: 'motorized-sliding',
    icuBedType: '5-function-electric',
    wardBedType: 'fowler',
    cssdAutoclaveCapacity: 'horizontal-double-door'
  });

  const [selectedFilterCategory, setSelectedFilterCategory] = useState<string>('all');
  const [showQuotationModal, setShowQuotationModal] = useState<boolean>(false);

  const { items, grandTotalUSD, grandTotalINR } = useMemo(() => {
    return calculateBoQ(config);
  }, [config]);

  const filteredItems = useMemo(() => {
    if (selectedFilterCategory === 'all') return items;
    return items.filter(item => item.category === selectedFilterCategory);
  }, [items, selectedFilterCategory]);

  const currencySymbol = config.currency === 'USD' ? '$' : '₹';
  const displayTotal = config.currency === 'USD' 
    ? grandTotalUSD.toLocaleString('en-US') 
    : grandTotalINR.toLocaleString('en-IN');

  const estimatedWeeks = Math.max(6, Math.round(6 + config.modularOTs * 1.5 + (config.totalBeds / 80)));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Configuration Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                Hospital BoQ & Cost Estimator
              </span>
              <span className="text-xs text-slate-400 font-mono">HTM 02-01 & ISO 7396-1 Standard Matrix</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Turnkey Hospital Infrastructure Configurator
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Configure bed capacity, modular surgical suites, gas manifolds, and CSSD capacities to calculate instantaneous engineering BoQ, itemized parts, and commercial estimates.
            </p>
          </div>

          {/* Currency Toggle & Quick Actions */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center">
              <button
                onClick={() => setConfig(prev => ({ ...prev, currency: 'INR' }))}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  config.currency === 'INR'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ₹ INR (India)
              </button>
              <button
                onClick={() => setConfig(prev => ({ ...prev, currency: 'USD' }))}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  config.currency === 'USD'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD (Export)
              </button>
            </div>

            <button
              onClick={() => setShowQuotationModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-cyan-950 transition-all cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              View Formal Proposal
            </button>
          </div>
        </div>

        {/* Form Matrix Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Facility Name & Type */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              Project / Hospital Name
            </label>
            <input
              type="text"
              value={config.facilityName}
              onChange={(e) => setConfig({ ...config, facilityName: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-medium"
              placeholder="e.g. City Care Multispecialty"
            />
            <div className="mt-3">
              <label className="block text-[11px] text-slate-400 mb-1">Facility Tier</label>
              <select
                value={config.facilityType}
                onChange={(e) => setConfig({ ...config, facilityType: e.target.value as any })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="tertiary">Tertiary Teaching Hospital (500+ Beds)</option>
                <option value="superspecialty">Super-Specialty Hospital (200-500 Beds)</option>
                <option value="district">District General Hospital (100-200 Beds)</option>
                <option value="clinic">Day Surgery / Specialty Clinic (&lt;100 Beds)</option>
              </select>
            </div>
          </div>

          {/* Bed Capacities */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-cyan-400" />
              Bed Capacities
            </label>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Total Hospital Beds:</span>
                  <span className="font-mono font-bold text-cyan-400">{config.totalBeds} Beds</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1200"
                  step="10"
                  value={config.totalBeds}
                  onChange={(e) => {
                    const newTotal = Number(e.target.value);
                    setConfig({
                      ...config,
                      totalBeds: newTotal,
                      icuBeds: Math.min(config.icuBeds, Math.round(newTotal * 0.35))
                    });
                  }}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">ICU / Critical Care Beds:</span>
                  <span className="font-mono font-bold text-cyan-400">{config.icuBeds} Beds</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max={Math.round(config.totalBeds * 0.4)}
                  step="2"
                  value={config.icuBeds}
                  onChange={(e) => setConfig({ ...config, icuBeds: Number(e.target.value) })}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Modular OT Suites */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Modular OT Suites
            </label>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Operation Theatres:</span>
                  <span className="font-mono font-bold text-cyan-400">{config.modularOTs} OTs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="16"
                  step="1"
                  value={config.modularOTs}
                  onChange={(e) => setConfig({ ...config, modularOTs: Number(e.target.value) })}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Wall Cladding Material</label>
                <select
                  value={config.wallCladding}
                  onChange={(e) => setConfig({ ...config, wallCladding: e.target.value as any })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="ss304">AISI 304 Stainless Steel (Sterile Spec)</option>
                  <option value="antibacterial-gi">Antibacterial Pre-Painted GI</option>
                  <option value="glass-modular">Modular Toughened Glass Wall</option>
                </select>
              </div>
            </div>
          </div>

          {/* Central Plant & Sterilization */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-cyan-400" />
              Central Plant Spec
            </label>
            
            <div className="space-y-2.5">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Primary Oxygen Source</label>
                <select
                  value={config.oxygenSource}
                  onChange={(e) => setConfig({ ...config, oxygenSource: e.target.value as any })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="lox-manifold">Cryogenic LOX Tank + Manifold</option>
                  <option value="psa-plant">On-Site PSA O2 Generator Plant</option>
                  <option value="cylinder-manifold">Digital Cylinder Manifold (2x15)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">CSSD Autoclave System</label>
                <select
                  value={config.cssdAutoclaveCapacity}
                  onChange={(e) => setConfig({ ...config, cssdAutoclaveCapacity: e.target.value as any })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="horizontal-double-door">Horizontal Pass-Through (EN 285)</option>
                  <option value="vertical-heavy-duty">Vertical High-Pressure Sterilizer</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Turnkey Summary Metrics Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950/40 p-4 rounded-xl">
          <div>
            <div className="text-xs text-slate-400 font-medium">Estimated Project Value</div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-baseline gap-1 mt-0.5">
              <span className="text-cyan-400">{currencySymbol}</span>
              {displayTotal}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-400 font-medium">Execution & Commissioning</div>
            <div className="text-base sm:text-lg font-bold text-slate-200 flex items-center gap-1.5 mt-1 font-mono">
              <Clock className="w-4 h-4 text-cyan-400" />
              {estimatedWeeks} Weeks Turnkey
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-400 font-medium">Standard Compliance</div>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
              <ShieldCheck className="w-4 h-4" />
              HTM 02-01 & ISO 7396-1 Certified
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              onClick={() => onOpenInquiry?.(`Inquiry for Turnkey Project: ${config.facilityName} (${config.totalBeds} Beds, ${config.modularOTs} OTs, Estimated value: ${currencySymbol}${displayTotal})`)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-950 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Submit Turnkey RFQ
            </button>
          </div>
        </div>
      </div>

      {/* Itemized BoQ Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-cyan-400" />
              Itemized Bill of Quantities (BoQ Breakdown)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Showing calculated hardware, manifolds, panels, trunking and sterilization plant quantities.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 overflow-x-auto text-xs">
            <button
              onClick={() => setSelectedFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedFilterCategory === 'all'
                  ? 'bg-cyan-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Items ({items.length})
            </button>
            <button
              onClick={() => setSelectedFilterCategory('mgps')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedFilterCategory === 'mgps'
                  ? 'bg-cyan-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              MGPS
            </button>
            <button
              onClick={() => setSelectedFilterCategory('modular-ot')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedFilterCategory === 'modular-ot'
                  ? 'bg-cyan-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Modular OT
            </button>
            <button
              onClick={() => setSelectedFilterCategory('hospital-furniture')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedFilterCategory === 'hospital-furniture'
                  ? 'bg-cyan-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Furniture
            </button>
            <button
              onClick={() => setSelectedFilterCategory('cssd')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedFilterCategory === 'cssd'
                  ? 'bg-cyan-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CSSD
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Item Code</th>
                <th className="py-3.5 px-4 font-semibold">Description & Engineering Specifications</th>
                <th className="py-3.5 px-4 font-semibold">Standard</th>
                <th className="py-3.5 px-4 font-semibold text-center">Qty</th>
                <th className="py-3.5 px-4 font-semibold text-right">Unit Rate ({currencySymbol})</th>
                <th className="py-3.5 px-4 font-semibold text-right">Total ({currencySymbol})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filteredItems.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-3 px-4 font-mono font-medium text-cyan-400 whitespace-nowrap">
                    {item.itemCode}
                  </td>
                  <td className="py-3 px-4 max-w-md">
                    <div className="font-bold text-white mb-0.5">{item.name}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      {item.specificationSummary}
                    </div>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px] border border-slate-700">
                      {item.complianceStandard}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center font-mono font-bold text-white whitespace-nowrap">
                    {item.quantity} {item.unit}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-slate-300 whitespace-nowrap">
                    {currencySymbol}{item.unitPrice.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-cyan-300 whitespace-nowrap">
                    {currencySymbol}{item.totalPrice.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-950/90 border-t-2 border-slate-700 font-mono">
              <tr>
                <td colSpan={4} className="py-4 px-4 text-right text-slate-300 font-bold uppercase">
                  Grand Total (Ex-Works / Turnkey Supply & Erection):
                </td>
                <td colSpan={2} className="py-4 px-4 text-right text-lg font-black text-cyan-400">
                  {currencySymbol}{displayTotal}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Formal Proposal Modal */}
      {showQuotationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 lg:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Formal Commercial & Technical Proposal
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  MWHS Engineering Quotation Sheet
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print / Save PDF
                </button>
                <button
                  onClick={() => setShowQuotationModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Document Header */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-6">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white">MWHS HOSPITAL SERVICES</h4>
                  <p className="text-xs text-slate-400">
                    Manufacturers & Exporters of Medical Gas Pipeline Systems, Modular OTs, Furniture & CSSD
                  </p>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">
                    Service Centre: 369, BARBARI, THAMAKITILA COLLEGE ROAD, GUWAHATI - 781036, ASSAM
                  </p>
                  <p className="text-xs text-cyan-400 font-mono mt-1">
                    Official Contact: meditrackindia@gmail.com | ISO 13485:2016 Certified
                  </p>
                </div>
                <div className="text-right text-xs">
                  <div className="text-slate-400">Ref: <span className="text-white font-mono">MWHS/QUO/{new Date().getFullYear()}/0482</span></div>
                  <div className="text-slate-400">Date: <span className="text-white font-mono">{new Date().toISOString().split('T')[0]}</span></div>
                  <div className="text-slate-400">Validity: <span className="text-emerald-400">45 Days</span></div>
                  <div className="text-slate-500 text-[10px] mt-1">Institutional RTGS / Bank Wire Only</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-slate-800/80">
                <div>
                  <span className="text-slate-400">Project Name:</span> <strong className="text-white">{config.facilityName}</strong>
                </div>
                <div>
                  <span className="text-slate-400">Scope:</span> <strong className="text-white">{config.totalBeds} Beds | {config.modularOTs} Modular OTs</strong>
                </div>
                <div>
                  <span className="text-slate-400">Primary Gas Plant:</span> <strong className="text-white uppercase">{config.oxygenSource}</strong>
                </div>
                <div>
                  <span className="text-slate-400">OT Wall Specification:</span> <strong className="text-white uppercase">{config.wallCladding}</strong>
                </div>
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="space-y-4 mb-6 text-xs text-slate-300">
              <h5 className="font-bold text-white text-sm">Turnkey Project Scope Inclusions:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Degreased medical copper tubing (BS EN 13348) with inert N2 brazing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% helium pressure leak test & cross-connection anti-confusion audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO 14644 Class 5 laminar airflow velocity balancing & DOP testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Third-party validation documentation for hospital NABH accreditation</span>
                </div>
              </div>
            </div>

            {/* Total Callout */}
            <div className="bg-cyan-950/40 border border-cyan-800/60 p-4 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-xs text-cyan-300 font-semibold">Total Turnkey Investment Estimate:</div>
                <div className="text-2xl font-black text-white font-mono mt-0.5">
                  {currencySymbol}{displayTotal}
                </div>
              </div>
              <button
                onClick={() => {
                  setShowQuotationModal(false);
                  onOpenInquiry?.(`Formal Proposal Follow-up: ${config.facilityName} - Value: ${currencySymbol}${displayTotal}`);
                }}
                className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Request Official Engineering Signoff
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
