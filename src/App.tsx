import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Gauge, 
  Calculator, 
  FileSpreadsheet, 
  BookOpen, 
  Send, 
  ShieldCheck, 
  Award, 
  Globe2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  Activity,
  Bed,
  Sparkles,
  ChevronRight,
  MapPin,
  Smartphone,
  Download,
  Share2,
  Wrench,
  Check
} from 'lucide-react';
import { BoQConfigurator } from './components/BoQConfigurator';
import { SchematicVisualizer } from './components/SchematicVisualizer';
import { ProductCatalog } from './components/ProductCatalog';
import { ProjectsTracker } from './components/ProjectsTracker';
import { TechnicalLibrary } from './components/TechnicalLibrary';
import { InquirySection } from './components/InquirySection';
import { MobileAppModal } from './components/MobileAppModal';
import { SupportHub } from './components/SupportHub';
import { ProductItem } from './types';
import { COMPANY_CONTACT, KEY_HOSPITALS_ASSAM } from './data/mockData';

export function App() {
  const [activeTab, setActiveTab] = useState<'boq' | 'schematics' | 'catalog' | 'projects' | 'assam' | 'standards' | 'support' | 'rfq'>('boq');
  const [inquiryPrefill, setInquiryPrefill] = useState<string>('');
  const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);
  const [isMobileMode, setIsMobileMode] = useState<boolean>(false);

  const handleSelectProductForQuote = (product: ProductItem) => {
    setInquiryPrefill(`Inquiry for equipment: ${product.name} (Code: ${product.code}) - Category: ${product.categoryLabel}`);
    setActiveTab('rfq');
  };

  const handleOpenInquiryWithNote = (note?: string) => {
    if (note) setInquiryPrefill(note);
    setActiveTab('rfq');
  };

  // Main application content
  const appContent = (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Engineering Compliance & Service Centre Banner */}
      <div className="bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ISO 13485:2016 Certified
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300">HTM 02-01 & ISO 7396-1 Standard Compliance</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-cyan-300 flex items-center gap-1 font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Operations Centre: {COMPANY_CONTACT.serviceCentreAddress}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 shrink-0">
            <span className="flex items-center gap-1 font-mono text-slate-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              {COMPANY_CONTACT.email}
            </span>
            <button
              onClick={() => setIsMobileModalOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800/80 hover:bg-cyan-900 text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <Smartphone className="w-3 h-3 text-cyan-400" />
              <span>Get Mobile App</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Company Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-950 font-black text-lg shrink-0">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white">MWHS</h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/80 font-bold uppercase">
                  Hospital Services
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 hidden sm:inline">
                  Assam & Global Export
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-none mt-0.5">
                Medical Gas Pipeline Systems • Modular OT • Hospital Furniture • CSSD
              </p>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('boq')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'boq'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              BoQ Estimator
            </button>

            <button
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'catalog'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Equipment Catalog (15)
            </button>

            <button
              onClick={() => setActiveTab('assam')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'assam'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              Assam Hospitals ({KEY_HOSPITALS_ASSAM.length})
            </button>

            <button
              onClick={() => setActiveTab('schematics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'schematics'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              CAD & Schematics
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Installations & SOP
            </button>

            <button
              onClick={() => setActiveTab('standards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'standards'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              HTM Standards
            </button>

            <button
              onClick={() => setActiveTab('support')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'support'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              Support & Diagnostics
            </button>

            <button
              onClick={() => setActiveTab('rfq')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'rfq'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-emerald-400 hover:text-white bg-emerald-950/40 border border-emerald-800/60'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              Tender RFQ
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Quick Capabilities Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-900/60 border border-slate-800 p-3 rounded-2xl">
          <div className="flex items-center gap-3 px-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
              <Gauge className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">MGPS Engineering</div>
              <div className="text-[10px] text-slate-400">HTM 02-01 & ISO 7396-1</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Modular OT Suites</div>
              <div className="text-[10px] text-slate-400">Class 1 ISO-5 HEPA H14</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
              <Bed className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Hospital Furniture</div>
              <div className="text-[10px] text-slate-400">5-Function Motorized ICU</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-1">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">CSSD & Suction</div>
              <div className="text-[10px] text-slate-400">EN 285 Pass-Through & Rotary Skids</div>
            </div>
          </div>
        </div>

        {/* Dynamic Tab Body */}
        {activeTab === 'boq' && (
          <BoQConfigurator onOpenInquiry={handleOpenInquiryWithNote} />
        )}

        {activeTab === 'catalog' && (
          <ProductCatalog onSelectProductForQuote={handleSelectProductForQuote} />
        )}

        {/* DEDICATED ASSAM KEY HOSPITALS TAB */}
        {activeTab === 'assam' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase tracking-wider">
                    Assam Healthcare Infrastructure
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-2 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                    Key Hospitals Maintained in Assam
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                    Active Comprehensive Maintenance Contracts (CMC) covering Medical Gas Pipeline Systems, Modular OTs, Central Vacuum plants, and Cryogenic Oxygen grids.
                  </p>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Service Engineering Centre</div>
                  <div className="text-white font-mono text-[11px] font-bold mt-0.5">
                    {COMPANY_CONTACT.serviceCentreAddress}
                  </div>
                </div>
              </div>

              {/* Grid of the 7 official Assam hospitals */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {KEY_HOSPITALS_ASSAM.map((hosp, idx) => (
                  <div 
                    key={hosp.id}
                    className="bg-slate-950 border border-slate-800/90 hover:border-cyan-500/60 rounded-2xl p-5 shadow-lg transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-black text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                          #{idx + 1}
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/80">
                          {hosp.serviceStatus}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white tracking-tight mb-1">
                        {hosp.name}
                      </h4>
                      <div className="text-[11px] text-cyan-400 font-medium flex items-center gap-1 mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {hosp.city}
                      </div>
                      <p className="text-xs text-slate-400 mb-3 font-medium">
                        {hosp.type} • <span className="text-slate-300 font-mono">{hosp.bedCapacity}</span>
                      </p>

                      {/* Systems maintained */}
                      <div className="space-y-1.5 mb-4 bg-slate-900/70 p-3 rounded-xl border border-slate-800/80 text-xs">
                        <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                          Infrastructure Maintained:
                        </div>
                        {hosp.systemsMaintained.map((sys, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{sys}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Inspection Status:</span>
                      <span className="font-mono text-emerald-400 font-medium">{hosp.lastInspection}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schematics' && (
          <SchematicVisualizer />
        )}

        {activeTab === 'projects' && (
          <ProjectsTracker />
        )}

        {activeTab === 'standards' && (
          <TechnicalLibrary />
        )}

        {activeTab === 'support' && (
          <SupportHub />
        )}

        {activeTab === 'rfq' && (
          <InquirySection initialNotes={inquiryPrefill} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-black text-sm">
                  M
                </div>
                <span className="text-base font-extrabold text-white">MWHS Hospital Services</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Manufacturers and exporter of medical gas pipeline systems, modular operation theatres, hospital furniture, and CSSD sterilization plants.
              </p>
              
              <div className="space-y-1 text-[11px] font-mono text-slate-300 pt-1">
                <div className="text-cyan-400 font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  Engineering & Service Centre:
                </div>
                <div className="text-slate-400 pl-4">{COMPANY_CONTACT.serviceCentreAddress}</div>
                <div className="text-slate-400 pl-4 text-cyan-400">{COMPANY_CONTACT.email}</div>
              </div>
            </div>

            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Key Hospitals in Assam</div>
              <ul className="space-y-1.5 text-[11px]">
                {KEY_HOSPITALS_ASSAM.slice(0, 5).map(h => (
                  <li key={h.id} className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('assam')}>
                    • {h.name}
                  </li>
                ))}
                <li className="text-cyan-400 font-bold hover:underline cursor-pointer" onClick={() => setActiveTab('assam')}>
                  + View All Assam Facilities
                </li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Standards & Certifications</div>
              <ul className="space-y-1.5 text-[11px]">
                <li>• HTM 02-01 (Medical Gas Pipeline System)</li>
                <li>• ISO 7396-1 (Pipeline Systems for Medical Gases)</li>
                <li>• ISO 14644-1 (Cleanrooms & Controlled Environs)</li>
                <li>• ISO 13485:2016 (Medical Devices Quality)</li>
                <li>• EN 285 (Large Steam Sterilizers)</li>
                <li>• BS 5682 & DIN 13260-2 Terminal Units</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Mobile & Store Access</div>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                Install on your Android or iPhone device directly from Google Play or Apple App Store framework.
              </p>
              <button
                onClick={() => setIsMobileModalOpen(true)}
                className="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-cyan-950 flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                Google Play & App Store
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
            <div>
              © {new Date().getFullYear()} MWHS Hospital Services. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span>Medical Gas Systems</span>
              <span>•</span>
              <span>Modular OT</span>
              <span>•</span>
              <span>Hospital Furniture</span>
              <span>•</span>
              <span>CSSD</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Google Play & App Store Modal */}
      <MobileAppModal
        isOpen={isMobileModalOpen}
        onClose={() => setIsMobileModalOpen(false)}
        isMobileMode={isMobileMode}
        onToggleMobileMode={() => setIsMobileMode(!isMobileMode)}
      />
    </div>
  );

  // If in interactive mobile simulator mode, wrap inside a sleek smartphone viewport frame!
  if (isMobileMode) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-2 sm:p-6 font-sans">
        {/* Top Desktop Controls Bar */}
        <div className="w-full max-w-sm mb-3 flex items-center justify-between bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-white font-mono">Mobile App Mode</span>
          </div>
          <button
            onClick={() => setIsMobileMode(false)}
            className="text-cyan-400 hover:text-cyan-300 font-bold underline cursor-pointer"
          >
            Exit to Desktop View
          </button>
        </div>

        {/* Smartphone Shell */}
        <div className="relative w-full max-w-[410px] h-[850px] max-h-[92vh] bg-black rounded-[48px] p-3 shadow-2xl border-4 border-slate-800 shadow-cyan-950/50 flex flex-col overflow-hidden">
          {/* Phone Speaker & Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-50 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-slate-950 mr-2"></div>
            <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
          </div>

          {/* Phone Screen Area */}
          <div className="w-full h-full rounded-[38px] overflow-y-auto bg-slate-950 flex flex-col relative pt-6">
            {appContent}
          </div>
        </div>
      </div>
    );
  }

  return appContent;
}

export default App;
