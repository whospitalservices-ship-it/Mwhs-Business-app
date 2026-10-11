import React, { useState } from 'react';
import { 
  Layers, 
  Wind, 
  Gauge, 
  ShieldCheck, 
  DoorClosed, 
  Activity, 
  CheckCircle2, 
  Info,
  Maximize2,
  Zap,
  Sliders,
  ChevronRight
} from 'lucide-react';

export const SchematicVisualizer: React.FC = () => {
  const [activeView, setActiveView] = useState<'modular-ot' | 'mgps-network'>('modular-ot');
  const [selectedHotspot, setSelectedHotspot] = useState<string>('laf');
  const [simulatedPressure, setSimulatedPressure] = useState<number>(4.2);
  const [positivePressurePa, setPositivePressurePa] = useState<number>(22);
  const [airVelocity, setAirVelocity] = useState<number>(0.32);

  const otHotspots: Record<string, { title: string; tag: string; desc: string; metrics: { label: string; val: string }[] }> = {
    laf: {
      title: 'Ultraclean Laminar Airflow Plenum (HEPA H14)',
      tag: 'ISO 14644-1 Class 5 (Grade A)',
      desc: 'Uniform downward non-turbulent air distribution at 0.30 m/s covering surgical table and instrument trolleys. Fluid gel perimeter prevents peripheral room air entrainment.',
      metrics: [
        { label: 'Filtration Efficiency', val: '99.997% @ 0.3 μm' },
        { label: 'Face Air Velocity', val: `${airVelocity.toFixed(2)} m/s` },
        { label: 'Air Changes / Hr', val: '32 ACH' },
        { label: 'Noise Level', val: '< 48 dBA' }
      ]
    },
    door: {
      title: 'Hermetically Sealed Motorized Sliding Door',
      tag: 'Class 4 EN 12207 Airtight',
      desc: 'Eccentric drop-and-press sliding track seals against the silicone peripheral gasket to maintain hospital room overpressure of +20 Pa, preventing dust infiltration.',
      metrics: [
        { label: 'Clear Width', val: '1500 x 2100 mm' },
        { label: 'Airtight Rating', val: 'Class 4 @ 50 Pa' },
        { label: 'Lead Equivalent', val: '1.5mm Pb (X-Ray Shielded)' },
        { label: 'Activation', val: 'Contactless Optical Wave' }
      ]
    },
    panel: {
      title: 'Master Surgeon Touchscreen Cockpit Panel',
      tag: 'IEC 60601-1 / IP65 Flush Mounted',
      desc: 'Real-time telemetry showing differential pressure (+22 Pa), temperature (19.5°C), relative humidity (52%), gas manifold pressure alerts, and anesthesia stopwatches.',
      metrics: [
        { label: 'Room Differential', val: `+${positivePressurePa} Pa (Safe Positive)` },
        { label: 'Temperature', val: '20.2 °C' },
        { label: 'Relative Humidity', val: '51 %' },
        { label: 'HEPA D.P. Sensor', val: '145 Pa (Clean Filter)' }
      ]
    },
    scrub: {
      title: 'Aseptic Dual-Bay Surgical Scrub Sink',
      tag: 'HTM 64 / AISI 304 Heavy Gauge',
      desc: 'Deep sloped basin with anti-splash curvature, thermostatic valve regulated at 38°C, contactless infrared faucets, and digital surgical scrub countdown timer.',
      metrics: [
        { label: 'Material', val: 'AISI 316 / 304 Stainless' },
        { label: 'Water Temp', val: '38 °C Preset' },
        { label: 'Disinfection Timer', val: '3 & 5 min Scrub cycles' },
        { label: 'Water Filtration', val: '0.2 μm Sterile Filter' }
      ]
    },
    riser: {
      title: 'Flush Return Air Risers & Low-Level Grilles',
      tag: 'Laminar Air Exhaust Loop',
      desc: 'Low-level stainless steel suction grilles with EU-4 pre-filters extract heavy anesthetics and skin scales, returning air to AHU without creating eddy currents.',
      metrics: [
        { label: 'Exhaust Grille Height', val: '150mm above finished floor' },
        { label: 'Filter Class', val: 'EU4 / MERV 8 Pre-filters' },
        { label: 'Exhaust Ratio', val: '80% recirculated, 20% fresh' },
        { label: 'Dampers', val: 'Motorized airtight backdraft' }
      ]
    }
  };

  const mgpsHotspots: Record<string, { title: string; tag: string; desc: string; metrics: { label: string; val: string }[] }> = {
    source: {
      title: 'Central Medical Gas Manifold & Bulk LOX Plant',
      tag: 'Primary & Secondary Supply Plant',
      desc: 'Automatic digital changeover manifold system with cryogenic vacuum-insulated evaporator tank (VIE) and 2x15 cylinder reserve bank complying with HTM 02-01.',
      metrics: [
        { label: 'Source Purity', val: '99.5% Medical Grade O2' },
        { label: 'Bank Working Pressure', val: '150 bar (Cylinder) / 10 bar (VIE)' },
        { label: 'Delivery Pressure', val: `${simulatedPressure.toFixed(1)} bar nominal` },
        { label: 'Redundancy', val: 'Triple redundancy (N+1+Reserve)' }
      ]
    },
    avsu: {
      title: 'Area Valve Service Unit (AVSU) & Zonal Alarm',
      tag: 'Floor & Department Isolation',
      desc: 'Lockable zone isolation valve box fitted with NIST connections for emergency gas injection and electronic pressure transducers transmitting to hospital BMS.',
      metrics: [
        { label: 'Monitored Gases', val: 'O2, N2O, Air4, Air7, Vac, AGSS' },
        { label: 'Isolation Valves', val: 'Full Bore Degreased Brass' },
        { label: 'Emergency Port', val: 'NIST Gas Specific Couplings' },
        { label: 'Alarm Triggers', val: '±20% Pressure deviation' }
      ]
    },
    riser_pipe: {
      title: 'Degreased Medical Grade Copper Distribution Riser',
      tag: 'BS EN 13348 / ASTM B819',
      desc: 'Seamless phosphorus-deoxidized copper tubing purged continuously with inert nitrogen gas during brazing using copper-phosphorus-silver alloy without corrosive flux.',
      metrics: [
        { label: 'Pipe Standards', val: 'EN 13348 Degreased Medical' },
        { label: 'Test Pressure', val: '1.5x Working (Tested to 18 bar)' },
        { label: 'Jointing Method', val: 'Inert N2 Shielded Silver Brazing' },
        { label: 'Permissible Drop', val: '< 5% at maximum peak flow' }
      ]
    },
    bhu: {
      title: 'Architectural Bed Head Trunking & Terminal Outlets',
      tag: 'ISO 11197 / BS 5682 Quick Connect',
      desc: 'Multi-compartment extruded aluminum medical trunking with gas-specific indexed quick-release terminal units preventing accidental cross-connection.',
      metrics: [
        { label: 'Gas Indexed Keys', val: 'Gas Specific Non-Interchangeable' },
        { label: 'Cycle Durability', val: '> 50,000 insertions verified' },
        { label: 'Electrical Isolation', val: 'Separate shielded conduit duct' },
        { label: 'Leakage Rate', val: '< 0.05 ml/min helium tested' }
      ]
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/60 uppercase tracking-wider">
              Interactive CAD / Engineering Schematics
            </span>
            <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Systems Active
            </span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Turnkey Engineering Architecture Viewer
          </h3>
          <p className="text-sm text-slate-400">
            Inspect cleanroom zoning, laminar flow airflow trajectories, and medical gas pipeline distribution topologies.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => { setActiveView('modular-ot'); setSelectedHotspot('laf'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'modular-ot'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            Modular OT Suite (ISO-5)
          </button>
          <button
            onClick={() => { setActiveView('mgps-network'); setSelectedHotspot('source'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeView === 'mgps-network'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gauge className="w-4 h-4" />
            MGPS Distribution Network
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Visual Canvas (8 cols) */}
        <div className="lg:col-span-8 p-6 bg-slate-950 relative min-h-[460px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
          
          {/* Controls Overlay */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                {activeView === 'modular-ot' ? 'CAD SCHEMATIC: OT-LEVEL-04-A' : 'P&ID SCHEMATIC: MGPS-RISER-SYS'}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800 text-xs">
              <Sliders className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-300">
                {activeView === 'modular-ot' ? `Pressure: +${positivePressurePa} Pa` : `Line: ${simulatedPressure.toFixed(1)} bar`}
              </span>
            </div>
          </div>

          {/* Schematic Graphic Representation */}
          <div className="my-6 relative w-full h-[320px] rounded-xl bg-slate-900/50 border border-slate-800/80 p-4 overflow-hidden flex items-center justify-center">
            
            {/* Grid background */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {activeView === 'modular-ot' ? (
              /* MODULAR OT ROOM DIAGRAM */
              <div className="relative w-full h-full max-w-lg border-2 border-cyan-500/40 rounded-xl bg-slate-950/80 p-3 shadow-inner flex flex-col justify-between">
                {/* Ceiling with Laminar Air Flow Plenum */}
                <div 
                  onClick={() => setSelectedHotspot('laf')}
                  className={`w-3/4 mx-auto p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedHotspot === 'laf' 
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-900/40' 
                      : 'bg-slate-900 border-slate-700 hover:border-cyan-600'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                      Laminar Airflow Plenum (HEPA H14)
                    </span>
                    <span className="bg-cyan-900/60 text-cyan-200 px-1.5 py-0.5 rounded text-[10px]">ISO Class 5</span>
                  </div>
                  {/* Air Stream indicators */}
                  <div className="flex justify-around items-center h-4 text-cyan-400 opacity-70">
                    <span className="text-xs animate-bounce" style={{ animationDuration: '1.2s' }}>↓</span>
                    <span className="text-xs animate-bounce" style={{ animationDuration: '1.4s' }}>↓</span>
                    <span className="text-xs animate-bounce" style={{ animationDuration: '1.1s' }}>↓</span>
                    <span className="text-xs animate-bounce" style={{ animationDuration: '1.3s' }}>↓</span>
                    <span className="text-xs animate-bounce" style={{ animationDuration: '1.5s' }}>↓</span>
                  </div>
                </div>

                {/* Central OT Operating Table Area */}
                <div className="my-auto flex items-center justify-between px-2">
                  {/* Left: Master Touchscreen Control Panel */}
                  <div 
                    onClick={() => setSelectedHotspot('panel')}
                    className={`w-28 p-2 rounded-lg border text-left cursor-pointer transition-all ${
                      selectedHotspot === 'panel'
                        ? 'bg-cyan-950 border-cyan-400 shadow-md'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[10px] font-bold text-slate-300 flex items-center gap-1">
                      <Gauge className="w-3 h-3 text-cyan-400" />
                      OT Cockpit
                    </div>
                    <div className="text-[9px] text-emerald-400 font-mono mt-0.5">+{positivePressurePa} Pa OK</div>
                  </div>

                  {/* Center: Sterile Surgical Core */}
                  <div className="p-3 border-2 border-dashed border-cyan-500/50 rounded-lg bg-cyan-950/20 text-center">
                    <div className="text-xs font-bold text-cyan-200 uppercase tracking-wider">Sterile Surgical Table</div>
                    <div className="text-[10px] text-slate-400">Microbial Velocity Zone (0.32 m/s)</div>
                  </div>

                  {/* Right: Low-level return air riser */}
                  <div 
                    onClick={() => setSelectedHotspot('riser')}
                    className={`w-28 p-2 rounded-lg border text-right cursor-pointer transition-all ${
                      selectedHotspot === 'riser'
                        ? 'bg-cyan-950 border-cyan-400 shadow-md'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[10px] font-bold text-slate-300 flex items-center justify-end gap-1">
                      <Wind className="w-3 h-3 text-cyan-400" />
                      Return Risers
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono mt-0.5">EU-4 Pre-Filter</div>
                  </div>
                </div>

                {/* Bottom Room Perimeter (Door & Scrub Sink) */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  {/* Scrub Sink */}
                  <div 
                    onClick={() => setSelectedHotspot('scrub')}
                    className={`px-3 py-1.5 rounded-lg border cursor-pointer text-xs transition-all ${
                      selectedHotspot === 'scrub'
                        ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Scrub Sink (Sensor/Knee)
                  </div>

                  <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    POSITIVE PRESSURE OVERPRESSURE
                  </div>

                  {/* Hermetic Sliding Door */}
                  <div 
                    onClick={() => setSelectedHotspot('door')}
                    className={`px-3 py-1.5 rounded-lg border cursor-pointer text-xs flex items-center gap-1.5 transition-all ${
                      selectedHotspot === 'door'
                        ? 'bg-cyan-950 border-cyan-400 text-cyan-200'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <DoorClosed className="w-3.5 h-3.5 text-cyan-400" />
                    Hermetic Auto Door
                  </div>
                </div>
              </div>
            ) : (
              /* MGPS DISTRIBUTION NETWORK DIAGRAM */
              <div className="relative w-full h-full max-w-lg flex flex-col justify-between py-2">
                {/* Step 1: Central Supply Plant */}
                <div 
                  onClick={() => setSelectedHotspot('source')}
                  className={`w-full p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    selectedHotspot === 'source'
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-lg'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Central Plant (VIE Cryogenic + Digital Manifold)</div>
                      <div className="text-[10px] text-slate-400">Primary & Secondary Banks (HTM 02-01)</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400">4.2 bar normal</span>
                  </div>
                </div>

                {/* Connecting Pipe Riser */}
                <div 
                  onClick={() => setSelectedHotspot('riser_pipe')}
                  className={`my-1 mx-auto w-3/4 py-1 px-3 rounded border text-center cursor-pointer transition-all ${
                    selectedHotspot === 'riser_pipe'
                      ? 'bg-cyan-950 border-cyan-400'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-cyan-300 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Degreased Copper Riser (EN 13348) purged with N2
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </span>
                </div>

                {/* Step 2: Area Valve Service Unit (AVSU) */}
                <div 
                  onClick={() => setSelectedHotspot('avsu')}
                  className={`w-full p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    selectedHotspot === 'avsu'
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-lg'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Sliders className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Floor Area Valve Service Unit (AVSU Box)</div>
                      <div className="text-[10px] text-slate-400">Zone Isolation + Emergency NIST Ports + Master Alarm</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-cyan-400">Transducer OK</span>
                  </div>
                </div>

                {/* Connecting Pipe */}
                <div className="my-1 mx-auto w-3/4 py-1 px-3 rounded border border-slate-800 bg-slate-950 text-center">
                  <span className="text-[10px] font-mono text-slate-400">Branch Sub-Pipelines to Bedheads & Pendants</span>
                </div>

                {/* Step 3: Terminal Outlets / Bed Head Units */}
                <div 
                  onClick={() => setSelectedHotspot('bhu')}
                  className={`w-full p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    selectedHotspot === 'bhu'
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-lg'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Bed Head Units (BHU) & Surgical Ceiling Pendants</div>
                      <div className="text-[10px] text-slate-400">Gas-Specific Indexed Quick Connect Outlets (BS 5682 / DIN)</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400">Terminal Pts</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Simulation Controls */}
          <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            {activeView === 'modular-ot' ? (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-medium">Simulate Overpressure:</span>
                  <input
                    type="range"
                    min="10"
                    max="35"
                    value={positivePressurePa}
                    onChange={(e) => setPositivePressurePa(Number(e.target.value))}
                    className="accent-cyan-500 cursor-pointer w-28"
                  />
                  <span className="text-xs font-mono font-bold text-cyan-400">+{positivePressurePa} Pa</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-medium">Laminar Velocity:</span>
                  <input
                    type="range"
                    min="0.20"
                    max="0.45"
                    step="0.01"
                    value={airVelocity}
                    onChange={(e) => setAirVelocity(Number(e.target.value))}
                    className="accent-cyan-500 cursor-pointer w-28"
                  />
                  <span className="text-xs font-mono font-bold text-cyan-400">{airVelocity.toFixed(2)} m/s</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-medium">Pipeline Line Pressure:</span>
                  <input
                    type="range"
                    min="3.0"
                    max="5.5"
                    step="0.1"
                    value={simulatedPressure}
                    onChange={(e) => setSimulatedPressure(Number(e.target.value))}
                    className="accent-cyan-500 cursor-pointer w-32"
                  />
                  <span className="text-xs font-mono font-bold text-cyan-400">{simulatedPressure.toFixed(1)} bar</span>
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  {simulatedPressure >= 3.8 && simulatedPressure <= 4.6 ? 'STATUS: NOMINAL (HTM 02-01)' : 'STATUS: ALARM LIMIT TRIGGERED'}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Hotspot Inspection Panel (4 cols) */}
        <div className="lg:col-span-4 p-6 bg-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-400">
                <Info className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                Subsystem Telemetry
              </span>
            </div>

            {(() => {
              const currentItem = activeView === 'modular-ot' 
                ? otHotspots[selectedHotspot] || otHotspots.laf
                : mgpsHotspots[selectedHotspot] || mgpsHotspots.source;

              return (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight leading-snug">
                      {currentItem.title}
                    </h4>
                    <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono border border-slate-700">
                      {currentItem.tag}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    {currentItem.desc}
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Technical Benchmarks
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentItem.metrics.map((m, idx) => (
                        <div key={idx} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/90">
                          <div className="text-[10px] text-slate-400 leading-none mb-1">{m.label}</div>
                          <div className="text-xs font-mono font-bold text-white truncate">{m.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Standard Compliance:</span>
              <span className="text-cyan-400 font-mono font-semibold">ISO 13485 / HTM 02-01</span>
            </div>
            <div className="text-[11px] text-slate-500 italic">
              All systems designed, fabricated, pressure-tested and certified by MWHS engineering team according to international hospital safety codes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
