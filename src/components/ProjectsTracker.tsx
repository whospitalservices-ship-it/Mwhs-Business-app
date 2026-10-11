import React, { useState } from 'react';
import { SAMPLE_PROJECTS, KEY_HOSPITALS_ASSAM, COMPANY_CONTACT } from '../data/mockData';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Bed, 
  ShieldCheck, 
  FileCheck2,
  Calendar,
  Sparkles,
  ArrowRight,
  Activity,
  Wrench,
  Check
} from 'lucide-react';

export const ProjectsTracker: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'assam-hospitals' | 'turnkey-projects'>('assam-hospitals');

  const executionSteps = [
    {
      step: '01',
      title: 'Facility Survey & Gas Load Calculations',
      desc: 'On-site survey of architectural layout, pipe route shafts, plant room acoustics, and peak diversity gas flow calculation as per HTM 02-01.'
    },
    {
      step: '02',
      title: 'CAD / BIM 3D Design Approval',
      desc: 'Creation of coordinated CAD drawings for laminar flow plenums, hermetic door tracks, bedhead conduits, and AVSU corridor locations.'
    },
    {
      step: '03',
      title: 'Factory Modular Pre-Fabrication',
      desc: 'Precision CNC shearing, PUF sandwich panel foaming, degreasing of medical copper manifolds, and pre-testing of motorized door brushless drives.'
    },
    {
      step: '04',
      title: 'On-Site Inert N2 Shielded Brazing',
      desc: 'Piping installation purged with high-purity nitrogen to prevent internal oxide flakes, and erection of antibacterial coved modular OT walls.'
    },
    {
      step: '05',
      title: 'Helium Leak, Pressure & DOP Tests',
      desc: '1.5x working pressure hold test for 24 hours, cross-connection anti-confusion testing, and ISO 14644 HEPA filter smoke DOP validation.'
    },
    {
      step: '06',
      title: 'Statutory Handover & NABH Audit',
      desc: 'Third-party validation documentation, as-built schematic manuals, biomedical engineering staff training, and final handover certificate.'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? SAMPLE_PROJECTS 
    : SAMPLE_PROJECTS.filter(p => selectedFilter === 'completed' ? p.status === 'Completed' : p.status !== 'Completed');

  return (
    <div className="space-y-10">
      
      {/* Engineering Service Centre Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-cyan-800/50 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase tracking-wider">
              Operations & Engineering Service Centre
            </span>
            <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              24x7 Maintenance Hotline
            </span>
          </div>
          <h4 className="text-lg font-bold text-white tracking-tight">
            MWHS Central Engineering & Hospital Services Hub
          </h4>
          <p className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            {COMPANY_CONTACT.serviceCentreAddress}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-slate-300">
            <div className="text-[10px] text-slate-500 uppercase font-semibold">Support Desk</div>
            <div className="font-mono text-cyan-400 font-bold">{COMPANY_CONTACT.email}</div>
          </div>
        </div>
      </div>

      {/* Main Switcher: Assam Maintained Hospitals vs Turnkey Projects */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('assam-hospitals')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'assam-hospitals'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Key Hospitals Maintained in Assam ({KEY_HOSPITALS_ASSAM.length})
          </button>

          <button
            onClick={() => setActiveTab('turnkey-projects')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'turnkey-projects'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            Turnkey Installations & SOP Roadmap
          </button>
        </div>
      </div>

      {/* TAB 1: KEY HOSPITALS MAINTAINED IN ASSAM */}
      {activeTab === 'assam-hospitals' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Key Hospitals Maintained in Assam
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Premier government medical colleges, apex oncology institutes, and private healthcare institutions under MWHS Comprehensive Maintenance Contracts.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
              100% HTM 02-01 & ISO 7396-1 Compliance
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {KEY_HOSPITALS_ASSAM.map((hosp, idx) => (
              <div 
                key={hosp.id}
                className="bg-slate-900 border border-slate-800 hover:border-cyan-500/60 rounded-2xl p-5 shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-black text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/80">
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

                  {/* Systems maintained list */}
                  <div className="space-y-1.5 mb-4 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs">
                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                      Systems & Infrastructure Maintained:
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
                  <span className="text-slate-500">Audit Status:</span>
                  <span className="font-mono text-emerald-400 font-medium">{hosp.lastInspection}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: TURNKEY ROADMAP & ALL PROJECTS */}
      {activeTab === 'turnkey-projects' && (
        <div className="space-y-10">
          {/* Execution Roadmap */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase tracking-wider">
                Standard Operating Protocol (SOP)
              </span>
              <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mt-2">
                6-Stage Turnkey Execution & Commissioning Methodology
              </h3>
              <p className="text-xs lg:text-sm text-slate-400 mt-1 max-w-2xl">
                From initial hospital blueprint audit to final NABH accreditation handover, our engineers guarantee zero-leak and sterile compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {executionSteps.map((st) => (
                <div key={st.step} className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 hover:border-cyan-600/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xl font-black text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60">
                        {st.step}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{st.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Showcase Header & Filter */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  Turnkey Hospital Commissioning Dossier
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verified medical gas pipeline and modular operation theatre installations.
                </p>
              </div>

              <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedFilter === 'all' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All Projects ({SAMPLE_PROJECTS.length})
                </button>
                <button
                  onClick={() => setSelectedFilter('completed')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedFilter === 'completed' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Commissioned
                </button>
              </div>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-slate-900 border border-slate-800 hover:border-cyan-600/50 rounded-2xl p-6 transition-all shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[11px] font-mono font-medium text-cyan-400 flex items-center gap-1 mb-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {proj.location}
                        </span>
                        <h4 className="text-lg font-bold text-white tracking-tight">{proj.clientName}</h4>
                        <p className="text-xs text-slate-400 font-medium">{proj.type}</p>
                      </div>

                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap bg-emerald-950/80 text-emerald-400 border-emerald-800/80">
                        {proj.status}
                      </span>
                    </div>

                    {/* Key Capacity Badges */}
                    <div className="flex items-center gap-3 my-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span className="font-bold text-white font-mono">{proj.otCount}</span>
                        <span className="text-slate-400">Modular OTs</span>
                      </div>
                      <div className="w-px h-4 bg-slate-800"></div>
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-cyan-400" />
                        <span className="font-bold text-white font-mono">{proj.bedCount}</span>
                        <span className="text-slate-400">Hospital Beds</span>
                      </div>
                      <div className="w-px h-4 bg-slate-800"></div>
                      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {proj.completionDate}
                      </div>
                    </div>

                    {/* Scope Breakdown */}
                    <div className="space-y-2 mb-4">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Turnkey Scope Executed:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.scope.map((sc, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/80"
                          >
                            {sc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Validation Metrics */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200 font-mono flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{proj.metrics}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
