import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  Wrench, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Mail, 
  MapPin, 
  LifeBuoy, 
  Sliders, 
  Activity,
  Layers,
  Gauge,
  Flame,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface TroubleshootingIssue {
  id: string;
  category: 'mgps' | 'modular-ot' | 'vacuum' | 'manifold' | 'outlets';
  symptom: string;
  severity: 'Critical' | 'Warning' | 'Routine';
  standardRef: string;
  probableCauses: string[];
  diagnosticSteps: string[];
  correctiveAction: string;
  preventionTip: string;
}

interface TechnicalFaq {
  id: string;
  category: 'standards' | 'maintenance' | 'safety' | 'commissioning';
  question: string;
  standard: string;
  answer: string;
  keyRule: string;
}

export const SupportHub: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'troubleshoot' | 'faqs'>('troubleshoot');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedIssueId, setExpandedIssueId] = useState<string | null>('issue-1');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  const troubleshootingIssues: TroubleshootingIssue[] = [
    {
      id: 'issue-1',
      category: 'mgps',
      symptom: 'Sudden pressure dip on Medical Oxygen line below 3.8 bar during peak surgical hours',
      severity: 'Critical',
      standardRef: 'HTM 02-01 Clause 4.18 / ISO 7396-1',
      probableCauses: [
        'Liquid Oxygen (LOX) atmospheric vaporizer icing causing restricted thermal gas expansion',
        'Secondary line stage dome regulator diaphragm sticking or incorrect setpoint',
        'Simultaneous demand exceeds diversity design capacity without reserve bank triggering'
      ],
      diagnosticSteps: [
        'Inspect external LOX vaporizer fins for heavy solid ice bridging > 15mm thickness',
        'Verify manifold inlet pressure gauge vs secondary stage delivery gauge on central panel',
        'Check Area Valve Service Unit (AVSU) pressure transducer readings on affected floors'
      ],
      correctiveAction: 'Switch to alternate parallel vaporizer bank immediately. If manual changeover is required, activate reserve manifold cylinders (Bank B) and defrost primary vaporizer with low-pressure warm water spray (never flame).',
      preventionTip: 'Implement automatic duplex vaporizer changeover timer (8-hour alternation) during humid monsoon conditions.'
    },
    {
      id: 'issue-2',
      category: 'vacuum',
      symptom: 'Central Vacuum Plant failing to achieve and maintain -60 kPa (-450 mmHg) target',
      severity: 'Critical',
      standardRef: 'HTM 02-01 Table 22 / ISO 7396-1',
      probableCauses: [
        'Bacterial filter duplex assembly saturated with biological matter or trapped moisture',
        'Rotary vane vacuum pump oil level depleted or internal vanes glazed',
        'Uncapped suction outlets or leaky silicone tubing left running in vacant wards'
      ],
      diagnosticSteps: [
        'Check differential pressure gauge on medical bacterial filter canisters (replace if > 15 kPa drop)',
        'Inspect vacuum receiver condensate drain flask for accumulated liquid',
        'Isolate floor AVSU valves sequentially to determine if leak is in riser or ward branch'
      ],
      correctiveAction: 'Rotate the bacterial filter valve to the clean standby canister. Drain condensate trap into biohazard disposal. Top up vacuum pump synthetic lubricant to sight glass indicator center.',
      preventionTip: 'Schedule weekly drainage of receiver trap and mandatory 30-day differential pressure filter inspection.'
    },
    {
      id: 'issue-3',
      category: 'modular-ot',
      symptom: 'Laminar Airflow face velocity drops below 0.25 m/s or OT room pressure drops below +15 Pa',
      severity: 'Critical',
      standardRef: 'ISO 14644-1 Class 5 / NABH OT Standard',
      probableCauses: [
        'Terminal HEPA H14 filter dust loading causing elevated static pressure differential',
        'Hermetic sliding door bottom drop-track gasket worn, permitting air leakage',
        'AHU pre-filters (EU-4 / EU-7) clogged or belt slip on supply blower motor'
      ],
      diagnosticSteps: [
        'Read Magnehelic differential pressure gauge across HEPA plenum (normal: 100-250 Pa; saturated: > 350 Pa)',
        'Check smoke pencil airflow direction at door perimeter—air must flow OUT of the OT into the scrub corridor',
        'Measure air velocity at 6 points 1 meter below plenum using calibrated hot-wire anemometer'
      ],
      correctiveAction: 'Replace primary EU-4 pre-filters in AHU. Inspect perimeter silicone seals on motorized hermetic door. If HEPA pressure drop exceeds 380 Pa, schedule DOP tested filter replacement.',
      preventionTip: 'Wash return air riser pre-filters every 15 days; cleanroom doors must remain closed when surgical suites are idle.'
    },
    {
      id: 'issue-4',
      category: 'outlets',
      symptom: 'Gas terminal unit continues hissing/leaking after probe/flowmeter is removed',
      severity: 'Warning',
      standardRef: 'BS 5682:2015 / ISO 9170-1',
      probableCauses: [
        'Second-fix check valve O-ring seal cracked, dried out, or contaminated with particulate matter',
        'Internal stainless steel return spring fatigue preventing instant shut-off seat engagement'
      ],
      diagnosticSteps: [
        'Insert and remove a test probe twice to check if seal reseats',
        'Listen with ultrasound leak detector or apply soapy water leak bubble solution (approved medical formulation only)'
      ],
      correctiveAction: 'Isolate local AVSU zone if required, or utilize front maintenance valve key to replace the elastomeric front seal cartridge without shutting down the main hospital pipeline.',
      preventionTip: 'Replace gas outlet front seal kits every 3 years as part of preventive CMC maintenance.'
    },
    {
      id: 'issue-5',
      category: 'manifold',
      symptom: 'Automatic digital manifold displays "Cylinder Bank Depleted" but manual pressure gauge shows pressure',
      severity: 'Warning',
      standardRef: 'HTM 02-01 Electronic Telemetry Standard',
      probableCauses: [
        '4-20mA pressure transmitter sensor drift or moisture in terminal junction box',
        'Cylinder pigtail non-return valve stuck closed, preventing gas flow into header'
      ],
      diagnosticSteps: [
        'Compare digital PLC display bar reading against analog dial gauge on manifold header',
        'Inspect braided pigtail flexible copper hoses for kinking or frozen check valves'
      ],
      correctiveAction: 'Re-zero pressure transducer through technician menu or replace transmitter. Verify individual cylinder spindle valves are opened at least 2 full turns counter-clockwise.',
      preventionTip: 'Perform weekly manual bank changeover test to ensure shuttle valve moves freely without hesitation.'
    }
  ];

  const technicalFaqs: TechnicalFaq[] = [
    {
      id: 'faq-1',
      category: 'standards',
      question: 'Why is nitrogen gas purging mandatory during medical copper pipe silver brazing?',
      standard: 'HTM 02-01 Clause 12.35 / EN 13348',
      answer: 'When medical grade copper is heated to brazing temperature (650°C-750°C) in the presence of oxygen, a black copper oxide scale (cupric oxide) forms inside the tube. In medical gas systems, this brittle scale will flake off and travel through the pipeline, clogging anesthesia machines, ventilator flow valves, and gas outlet check valves. Flowing inert high-purity dry nitrogen gas through the pipe during brazing displaces atmospheric oxygen, resulting in a 100% clean, mirror-smooth interior surface.',
      keyRule: 'Purge with Nitrogen at 2-5 L/min continuous flow until the joint cools below 200°C.'
    },
    {
      id: 'faq-2',
      category: 'standards',
      question: 'What are the permissible test pressures and duration for statutory pipeline commissioning?',
      standard: 'HTM 02-01 Part 1 Section 15 / ISO 7396-1',
      answer: 'Medical gas pipeline distribution networks must undergo two distinct pressure test phases before clinical commissioning: 1) Initial mechanical strength test at 1.5 times maximum design pressure for 15 minutes. 2) Static leak test at normal working pressure (4.2 bar for medical gases, 7.0 bar for surgical air, and -0.8 bar for vacuum) maintained over a 24-hour duration with temperature compensation. The maximum allowable pressure drop is zero measurable drop attributable to leakage.',
      keyRule: 'Zero pressure drop permitted over 24-hour temperature-compensated hold test.'
    },
    {
      id: 'faq-3',
      category: 'maintenance',
      question: 'What is the standard procedure for cross-connection (anti-confusion) validation?',
      standard: 'ISO 7396-1 / HTM 02-01 Anti-Confusion Protocol',
      answer: 'Cross-connection testing is a non-negotiable life-safety audit designed to guarantee that no gas line is cross-connected to an incorrect terminal outlet (e.g., Nitrous Oxide delivered to an Oxygen outlet). The standard test procedure pressurizes only one gas service at a time with test gas (or nitrogen) while all other pipelines are vented to atmospheric zero. Every single terminal unit in the facility is tested to confirm gas exits solely from the matching keyed socket.',
      keyRule: '100% of all outlets must be individually verified; sample testing is strictly prohibited.'
    },
    {
      id: 'faq-4',
      category: 'safety',
      question: 'What are the required cleanroom particle counts and air changes for Class 1 Modular OTs?',
      standard: 'ISO 14644-1 Class 5 / NABH Cleanroom Guidelines',
      answer: 'For ultraclean orthopedic joint replacement, organ transplant, and cardiovascular surgical theatres, the sterile zone directly under the Laminar Airflow (LAF) plenum must satisfy ISO Class 5 (Grade A). This specifies no more than 3,520 particles of 0.5 μm per cubic meter at rest. The HVAC system must deliver between 25 and 35 Air Changes per Hour (ACH) with a minimum 20% fresh air component, maintaining unidirectional downward velocity between 0.25 and 0.38 m/s.',
      keyRule: 'Air velocity: 0.25 to 0.38 m/s; Room positive differential: +15 to +25 Pascals.'
    },
    {
      id: 'faq-5',
      category: 'commissioning',
      question: 'How often must medical bacterial filters on vacuum plants be replaced?',
      standard: 'HTM 02-01 Routine Maintenance Matrix',
      answer: 'Medical vacuum bacterial filters capture micro-organisms and fluids extracted during surgeries to prevent atmospheric contamination. Under HTM 02-01 guidelines, bacterial filter elements must be inspected monthly via differential pressure gauge and replaced when pressure drop reaches 15-20 kPa across the filter, or at least every 6 months, whichever occurs first. Drain flasks must be autoclaved or disinfected weekly.',
      keyRule: 'Replace elements every 6 months or whenever differential pressure indicator triggers.'
    }
  ];

  const filteredIssues = useMemo(() => {
    return troubleshootingIssues.filter((issue) => {
      const matchesCat = selectedCategory === 'all' || issue.category === selectedCategory;
      const matchesQuery = 
        issue.symptom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.correctiveAction.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.standardRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.probableCauses.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const filteredFaqs = useMemo(() => {
    return technicalFaqs.filter((faq) => {
      const matchesQuery = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.standard.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesQuery;
    });
  }, [searchQuery]);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase tracking-wider flex items-center gap-1.5">
                <LifeBuoy className="w-3.5 h-3.5" />
                Technical Support & Site Troubleshooting
              </span>
              <span className="text-xs text-slate-400 font-mono">HTM 02-01 & ISO 7396-1 Engineering Guide</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Hospital Engineering Support Hub
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Rapid diagnostic protocols, HTM 02-01 standards troubleshooting, and preventive maintenance guides for biomedical engineers and hospital facility teams.
            </p>
          </div>

          {/* Quick Contact Desk Button */}
          <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs shrink-0">
            <div className="text-[10px] text-slate-500 uppercase font-semibold">24x7 Engineering Service Desk</div>
            <div className="font-mono text-cyan-400 font-bold mt-0.5">{COMPANY_CONTACT.email}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">{COMPANY_CONTACT.serviceCentreAddress}</div>
          </div>
        </div>

        {/* Search & Mode Switcher */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
            <button
              onClick={() => setActiveSection('troubleshoot')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'troubleshoot'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              Site Issue Diagnostics ({troubleshootingIssues.length})
            </button>
            <button
              onClick={() => setActiveSection('faqs')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'faqs'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              HTM Standards & FAQs ({technicalFaqs.length})
            </button>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search symptom, pressure drop, HTM rule..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-medium"
            />
          </div>
        </div>
      </div>

      {/* SECTION 1: TROUBLESHOOTING ISSUES */}
      {activeSection === 'troubleshoot' && (
        <div className="space-y-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'all', label: 'All Subsystems' },
              { id: 'mgps', label: 'Oxygen & Gas Pipelines' },
              { id: 'vacuum', label: 'Central Vacuum Skids' },
              { id: 'modular-ot', label: 'Modular OT & Laminar Flow' },
              { id: 'manifold', label: 'Digital Manifolds' },
              { id: 'outlets', label: 'Terminal Outlets' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Issue Cards */}
          <div className="space-y-3">
            {filteredIssues.map((issue) => {
              const isExpanded = expandedIssueId === issue.id;

              return (
                <div
                  key={issue.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-md"
                >
                  {/* Card Header / Click to Expand */}
                  <div
                    onClick={() => setExpandedIssueId(isExpanded ? null : issue.id)}
                    className="p-5 cursor-pointer flex items-start justify-between gap-4 hover:bg-slate-850/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        issue.severity === 'Critical'
                          ? 'bg-rose-950/80 border border-rose-800 text-rose-400'
                          : 'bg-amber-950/80 border border-amber-800 text-amber-400'
                      }`}>
                        <AlertTriangle className="w-4 h-4" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            issue.severity === 'Critical'
                              ? 'bg-rose-950 text-rose-300 border-rose-800'
                              : 'bg-amber-950 text-amber-300 border-amber-800'
                          }`}>
                            {issue.severity}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                            {issue.standardRef}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {issue.symptom}
                        </h4>
                      </div>
                    </div>

                    <button className="text-slate-400 hover:text-white p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Card Expanded Details */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 space-y-4 text-xs text-slate-300">
                      
                      {/* Probable Causes */}
                      <div>
                        <div className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-1.5">
                          Probable Root Causes:
                        </div>
                        <ul className="space-y-1">
                          {issue.probableCauses.map((cause, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Diagnostic Steps */}
                      <div>
                        <div className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-1.5">
                          Recommended On-Site Diagnostic Sequence:
                        </div>
                        <div className="space-y-1">
                          {issue.diagnosticSteps.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2 text-[11px] text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                              <span className="font-mono font-bold text-cyan-400">Step {sIdx + 1}:</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Immediate Corrective Action */}
                      <div className="p-3.5 bg-emerald-950/40 border border-emerald-800/60 rounded-xl">
                        <div className="font-bold text-emerald-400 text-xs mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          Immediate Corrective Action:
                        </div>
                        <p className="text-slate-200 text-xs leading-relaxed">
                          {issue.correctiveAction}
                        </p>
                      </div>

                      {/* Prevention Tip */}
                      <div className="text-[11px] text-slate-400 italic flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Preventive Maintenance: {issue.preventionTip}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 2: HTM 02-01 & STANDARDS FAQS */}
      {activeSection === 'faqs' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md transition-all"
                >
                  <div
                    onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                    className="p-5 cursor-pointer flex items-start justify-between gap-4 hover:bg-slate-850/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                          {faq.standard}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {faq.question}
                      </h4>
                    </div>

                    <button className="text-slate-400 hover:text-white p-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-800 text-xs space-y-3 text-slate-300">
                      <p className="leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-200">
                        {faq.answer}
                      </p>

                      <div className="p-3 bg-cyan-950/40 border border-cyan-800/60 rounded-xl flex items-start gap-2 text-cyan-200 font-mono text-[11px]">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Mandatory Code Rule: {faq.keyRule}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Engineering Service Escort Box */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-cyan-800/60 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">Require On-Site Emergency Engineering Assistance?</h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Our certified medical gas pipeline auditors and cleanroom validation engineers deploy directly across Assam and export sites.
          </p>
          <div className="text-xs text-cyan-300 font-mono mt-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            {COMPANY_CONTACT.serviceCentreAddress}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`mailto:${COMPANY_CONTACT.email}?subject=Emergency Technical Service Assistance`}
            className="px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-950 transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Dispatch Technical Query
          </a>
        </div>
      </div>
    </div>
  );
};
