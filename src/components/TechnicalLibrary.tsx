import React, { useState } from 'react';
import { TECHNICAL_ARTICLES } from '../data/mockData';
import { 
  BookOpen, 
  ShieldCheck, 
  FileText, 
  Check, 
  ArrowRight, 
  Calculator, 
  Scale, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const TechnicalLibrary: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(TECHNICAL_ARTICLES[0].id);

  // Pipe Sizing Quick Tool
  const [gasFlowLpm, setGasFlowLpm] = useState<number>(350);
  const [gasType, setGasType] = useState<string>('o2');

  const selectedArticle = TECHNICAL_ARTICLES.find(a => a.id === selectedArticleId) || TECHNICAL_ARTICLES[0];

  // Medical pipe diameter estimation based on HTM 02-01 (velocity limit < 15 m/s)
  const estimatedPipeSize = useMemoSizing(gasFlowLpm);

  function useMemoSizing(lpm: number) {
    if (lpm <= 120) return { od: '15 mm', id: '13 mm', pressureDrop: '< 0.05 bar/100m', standard: 'EN 13348 Cu' };
    if (lpm <= 350) return { od: '22 mm', id: '19.8 mm', pressureDrop: '< 0.08 bar/100m', standard: 'EN 13348 Cu' };
    if (lpm <= 800) return { od: '28 mm', id: '25.6 mm', pressureDrop: '< 0.12 bar/100m', standard: 'EN 13348 Cu' };
    if (lpm <= 1600) return { od: '42 mm', id: '39 mm', pressureDrop: '< 0.14 bar/100m', standard: 'EN 13348 Cu' };
    return { od: '54 mm', id: '50.6 mm', pressureDrop: '< 0.15 bar/100m', standard: 'EN 13348 Cu' };
  }

  return (
    <div className="space-y-8">
      {/* Interactive Gas Velocity & Copper Pipe Sizing Tool */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                Engineering Utility
              </span>
              <span className="text-xs text-slate-400 font-mono">HTM 02-01 Table 18 Benchmark</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Medical Gas Pipe Sizing & Velocity Estimator
            </h3>
            <p className="text-xs text-slate-400">
              Calculate recommended outside diameter (OD) and permissible pressure gradient across distribution mains.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950 p-5 rounded-xl border border-slate-800">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Medical Gas Service
            </label>
            <select
              value={gasType}
              onChange={(e) => setGasType(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="o2">Medical Oxygen (4.2 bar g)</option>
              <option value="n2o">Nitrous Oxide (4.2 bar g)</option>
              <option value="air4">Medical Air 4 bar (Respiratory)</option>
              <option value="air7">Surgical Air 7 bar (Pneumatic Tools)</option>
              <option value="vac">Medical Vacuum (-0.6 to -0.8 bar)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-300 font-semibold uppercase tracking-wider">Simultaneous Flow:</span>
              <span className="font-mono font-bold text-cyan-400">{gasFlowLpm} L/min</span>
            </div>
            <input
              type="range"
              min="50"
              max="2500"
              step="25"
              value={gasFlowLpm}
              onChange={(e) => setGasFlowLpm(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer mt-1"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>50 L/min</span>
              <span>1200 L/min</span>
              <span>2500 L/min</span>
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Recommended Copper Tube:</div>
              <div className="text-2xl font-black text-cyan-400 font-mono mt-0.5">
                {estimatedPipeSize.od} <span className="text-xs text-slate-400 font-sans font-normal">(OD)</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-2 border-t border-slate-800">
              <span>Internal ID: {estimatedPipeSize.id}</span>
              <span className="text-emerald-400">{estimatedPipeSize.pressureDrop}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Standards Articles Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Navigation / List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            Technical Standards Library
          </div>
          {TECHNICAL_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticleId(art.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedArticleId === art.id
                  ? 'bg-cyan-950/80 border-cyan-500 shadow-lg shadow-cyan-950/40 text-white'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1.5">
                <span>{art.category}</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300">{art.standard}</span>
              </div>
              <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">{art.title}</h4>
            </div>
          ))}
        </div>

        {/* Selected Dossier (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
          <div className="border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800">
                {selectedArticle.standard}
              </span>
              <span className="text-xs text-slate-400 font-medium">Standard Compliance Dossier</span>
            </div>
            <h3 className="text-xl font-bold text-white">{selectedArticle.title}</h3>
          </div>

          <div className="space-y-6 text-xs text-slate-300 leading-relaxed">
            <p className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300">
              {selectedArticle.summary}
            </p>

            <div>
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                Critical Engineering Tenets
              </h4>
              <ul className="space-y-2">
                {selectedArticle.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-lg border border-slate-800/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4 text-cyan-400" />
                Mandatory Specification Parameters
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">Parameter</th>
                      <th className="py-2.5 px-3 font-semibold">Mandated Standard Value</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Engineering Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                    {selectedArticle.guidelines.map((g, i) => (
                      <tr key={i}>
                        <td className="py-2.5 px-3 font-bold text-white whitespace-nowrap">{g.rule}</td>
                        <td className="py-2.5 px-3 font-mono text-cyan-300">{g.value}</td>
                        <td className="py-2.5 px-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-medium text-[10px]">
                            {g.importance}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
