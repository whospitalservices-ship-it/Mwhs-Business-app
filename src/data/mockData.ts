import { ProductItem, ProjectInstallation, TechnicalArticle, KeyHospitalAssam } from '../types';

import doorImg from '../assets/images/hermetic_ot_door_1791735897028.jpg';
import controlPanelImg from '../assets/images/ot_control_panel_1791735916248.jpg';
import ledLightImg from '../assets/images/ot_led_light_1791735939440.jpg';
import otTableImg from '../assets/images/ot_surgical_table_1791735966890.jpg';
import scrubSinkImg from '../assets/images/surgical_scrub_sink_1791735999604.jpg';
import manifoldImg from '../assets/images/gas_manifold_system_1791736033082.jpg';
import vacuumPlantImg from '../assets/images/medical_vacuum_plant_1791736072794.jpg';
import vacuumSuctionImg from '../assets/images/vacuum_suction_plant_1791736116853.jpg';
import outletImg from '../assets/images/gas_terminal_outlet_1791736173608.jpg';
import flowmeterImg from '../assets/images/oxygen_flowmeter_1791736222794.jpg';
import suctionTrolleyImg from '../assets/images/vacuum_regulator_trolley_1791736280630.jpg';
import nurseCallImg from '../assets/images/nurse_call_system_1791736344081.jpg';
import icuBedImg from '../assets/images/icu_motorized_bed_1791736404614.jpg';
import stretcherImg from '../assets/images/patient_stretcher_trolley_1791736476889.jpg';
import medicineCabinetImg from '../assets/images/medicine_cabinet_1791736546356.jpg';

export const COMPANY_CONTACT = {
  name: 'MWHS (MedTech & Hospital Services)',
  legalTitle: 'Manufacturers & Exporters of Medical Gas Pipeline Systems, Modular OTs, Furniture & CSSD',
  email: 'meditrackindia@gmail.com',
  phone: '+91 94350 48210 / +91 70021 59632',
  serviceCentreAddress: '369, BARBARI, THAMAKITILA COLLEGE ROAD, GUWAHATI - 781036, ASSAM',
  standards: ['ISO 13485:2016', 'HTM 02-01', 'ISO 7396-1', 'ISO 14644-1', 'EN 285', 'CE Certified']
};

export const KEY_HOSPITALS_ASSAM: KeyHospitalAssam[] = [
  {
    id: 'hosp-gnrc',
    name: 'GNRC Hospital',
    city: 'Guwahati, Assam',
    type: 'Multi-Specialty & Neuroscience Tertiary Hospital',
    bedCapacity: '400+ Beds',
    systemsMaintained: ['Full MGPS Central Pipeline', 'Cath Lab & Neuro OT Medical Gases', 'Liquid Oxygen (LOX) Vaporizer Grid', 'Emergency Vacuum & Suction'],
    serviceStatus: 'Active Comprehensive Maintenance (CMC)',
    lastInspection: 'Monthly Preventive Inspection Verified'
  },
  {
    id: 'hosp-good-health',
    name: 'Good Health Hospital',
    city: 'Guwahati, Assam',
    type: 'Super-Specialty Hospital',
    bedCapacity: '150+ Beds',
    systemsMaintained: ['Medical Gas Outlets & Bed Head Units', 'Modular Operation Theatre Air Balancing', 'Area Valve Service Units (AVSU)', 'Bacterial Filter Vacuum Plant'],
    serviceStatus: 'Active Comprehensive Maintenance (CMC)',
    lastInspection: 'Bi-Weekly Line Pressure Audit Verified'
  },
  {
    id: 'hosp-dr-b-borooah',
    name: 'Dr. B. Borooah Cancer Institute',
    city: 'Guwahati, Assam',
    type: 'Premier Oncology & Radiation Center',
    bedCapacity: '250+ Beds',
    systemsMaintained: ['Radiation Oncology Surgical OT Gas Systems', 'High-Purity Oxygen & Medical Air 4 Bar', 'ICU Trunking & Central Monitoring Alarms', 'CSSD Sterilization Line'],
    serviceStatus: 'Active Comprehensive Maintenance (CMC)',
    lastInspection: 'Quarterly Purity & Dew Point Validation'
  },
  {
    id: 'hosp-jorhat-mc',
    name: 'Jorhat Medical College and Hospital',
    city: 'Jorhat, Assam',
    type: 'Government Teaching Medical College Hospital',
    bedCapacity: '750+ Beds',
    systemsMaintained: ['Central Automatic Changeover Manifold (2x30 Cylinders)', '12 Modular Surgical Suites MGPS', 'Triplex Liquid Ring Vacuum System', 'Mother & Child Care Ward BHU'],
    serviceStatus: 'Active Comprehensive Maintenance (CMC)',
    lastInspection: 'Scheduled Calibration & Maintenance Complete'
  },
  {
    id: 'hosp-guwahati-mc',
    name: 'Guwahati Medical College and Hospital',
    city: 'Guwahati, Assam',
    type: 'Apex State Teaching & Trauma Hospital',
    bedCapacity: '1,200+ Beds',
    systemsMaintained: ['Super Specialty Block MGPS Distribution', 'Emergency Trauma Resuscitation Piping', 'Digital Master Alarm Network', 'Surgical Pendants & Gas Outlets'],
    serviceStatus: 'Active Comprehensive Maintenance (CMC)',
    lastInspection: '24x7 Engineering Service Coverage Active'
  },
  {
    id: 'hosp-nogaon-mc',
    name: 'Nogaon Medical College and Hospital',
    city: 'Nagaon, Assam',
    type: 'Government Medical College Hospital',
    bedCapacity: '500+ Beds',
    systemsMaintained: ['Turnkey MGPS Copper Pipeline (EN 13348)', 'Modular OTs Class 5 Laminar Air Flow', 'ICU Motorized Beds & Crash Carts', 'Central CSSD Sterilizers'],
    serviceStatus: 'Active Comprehensive Maintenance (CMC)',
    lastInspection: 'Annual Statutory Audit & Flow Validation'
  },
  {
    id: 'hosp-dhubri-mc',
    name: 'Dhubri Medical College and Hospital',
    city: 'Dhubri, Assam',
    type: 'Government Medical College Hospital',
    bedCapacity: '500+ Beds',
    systemsMaintained: ['Central Cryogenic Oxygen Grid', 'Modular Operation Theatre Air Handling & Alarms', 'Hospital Bedhead Units', 'Central Suction & Surgical Air 7 Bar'],
    serviceStatus: 'Active Comprehensive Maintenance (CMC)',
    lastInspection: 'Scheduled Preventive Check Verified'
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // 1. DOOR
  {
    id: 'prod-door-hermetic',
    category: 'modular-ot',
    categoryLabel: 'Modular Operation Theatres',
    name: 'Hermetically Sealed Motorized Sliding OT Door',
    code: 'MWHS-DOOR-AUTO',
    imageUrl: doorImg,
    shortDesc: 'Automated airtight sliding door with patented drop-and-slide hermetic seal track, foot touch sensor & radiation shielding.',
    description: 'Ensures positive air pressure retention inside the sterile surgical theatre. Operates on a patented eccentric track that drops and presses the door leaf against the wall frame during the final 10mm of closing for airtight sealing according to Class 4 EN 12207.',
    standardCompliance: ['EN 16005', 'DIN 18650', 'ISO 14644-1 Class 5', 'CE Certified'],
    keySpecs: [
      { label: 'Clear Opening', value: '1500 x 2100 mm (Single leaf) / 2000 x 2100 mm' },
      { label: 'Drive Unit', value: 'Brushless DC motor with microprocessor controller' },
      { label: 'Airtight Rating', value: 'Class 4 (EN 12207) at differential pressure +50 Pa' },
      { label: 'Activation', value: 'Foot touch switch, contactless hand wave sensor, radar' },
      { label: 'Vision Panel', value: 'Double-glazed flush glass with desiccant' }
    ],
    materials: ['High-pressure laminate (HPL) / SS-304 face', 'Extruded EPDM tubular perimeter gasket'],
    suggestedApplications: ['OT Main Entry', 'Scrub Room Transition', 'Sterile Core Airlock'],
    basePriceUSD: 3600,
    basePriceINR: 305000,
    badge: 'Hermetic Air Seal',
    features: [
      'Self-closing drop track maintains positive pressure differential (+20 Pa)',
      'Safety photoelectric beams prevent accidental entrapment',
      'Emergency battery backup for 200+ cycles during power failure',
      'Optional 1mm/2mm lead core for X-ray / C-arm operating theatres'
    ]
  },

  // 2. CONTROL PANEL
  {
    id: 'prod-ctrl-panel',
    category: 'modular-ot',
    categoryLabel: 'Modular Operation Theatres',
    name: 'Surgeon Master OT Touchscreen Control Panel',
    code: 'MWHS-CTRL-TP15',
    imageUrl: controlPanelImg,
    shortDesc: '15.6" medical-grade touchscreen console controlling HVAC, humidity, gas alarms, HEPA status & surgical timers.',
    description: 'Integrated OT cockpit display providing the surgical team with complete environmental control. Monitors laminar airflow velocity, differential pressure, room temperature (18-24°C), relative humidity (40-60%), surgical elapsed timers, and 6 medical gases.',
    standardCompliance: ['IEC 60601-1', 'IP65 Water Resistance', 'HTM 02-01 Alarm'],
    keySpecs: [
      { label: 'Display Panel', value: '15.6" Full HD Projected Capacitive Touch (glove compatible)' },
      { label: 'Environmental Controls', value: 'Temperature, RH%, Pressure (Pa), HEPA filter life' },
      { label: 'Timing Functions', value: 'Real-time clock, Elapsed surgery timer, Anesthesia count-up' },
      { label: 'Gas Alarm Interface', value: 'Real-time pressure display for 6 medical gases' },
      { label: 'Connectivity', value: 'Ethernet TCP/IP, Modbus BMS, Surgical recording output' }
    ],
    materials: ['Front IP65 membrane/tempered glass panel', 'Stainless steel SS-304 back housing'],
    suggestedApplications: ['Modular OT Wall Flush Mount', 'Surgeon Console Hub'],
    basePriceUSD: 2400,
    basePriceINR: 202000,
    badge: 'Smart OT Cockpit',
    features: [
      'Medical glove compatible touch screen',
      'Visual and audio warnings for pressure drop below threshold',
      'Integrated hands-free intercom with nursing station',
      'Surgical light dimmer controls and viewing screen control'
    ]
  },

  // 3. LED LIGHT
  {
    id: 'prod-led-light',
    category: 'modular-ot',
    categoryLabel: 'Modular Operation Theatres',
    name: 'Surgical OT Shadowless Dual-Dome LED Operating Light',
    code: 'MWHS-LED-SURG700',
    imageUrl: ledLightImg,
    shortDesc: 'Ceiling-mounted aerodynamic dual-dome surgical operating light with sterile handle, laminar-flow friendly petals and color temperature adjustment.',
    description: 'High-intensity surgical illumination system with multi-lens LED matrix that eliminates shadows even when surgeons heads obstruct the beam. Streamlined shape maintains unidirectional laminar airflow down from HEPA plenum.',
    standardCompliance: ['IEC 60601-2-41', 'ISO 13485', 'CE Medical Device Class I'],
    keySpecs: [
      { label: 'Illumination Intensity', value: '160,000 Lux (Major dome) + 120,000 Lux (Minor dome)' },
      { label: 'Color Temperature', value: 'Adjustable 3,800K - 5,000K (CRI > 96)' },
      { label: 'Field Diameter (d10)', value: '160 - 320 mm adjustable focus' },
      { label: 'LED Service Life', value: '> 60,000 Hours continuous operation' },
      { label: 'Endo Mode', value: 'Green ambient mode for laparoscopic surgery' }
    ],
    materials: ['Aviation grade aluminum alloy domes', 'Removable autoclavable sterile handles'],
    suggestedApplications: ['Major Surgical Suite', 'Neuro Surgery', 'Cardiothoracic OT'],
    basePriceUSD: 3800,
    basePriceINR: 320000,
    badge: '160,000 Lux CRI 96+',
    features: [
      'Streamlined petal housing preserves laminar airflow pattern',
      'Endoscopic surgery mode with soft green illumination',
      'Touch control keypads on lighthead arms + wall remote',
      'Zero heat emission with cold LED light technology'
    ]
  },

  // 4. OT TABLE
  {
    id: 'prod-ot-table',
    category: 'modular-ot',
    categoryLabel: 'Modular Operation Theatres',
    name: 'Electro-Hydraulic Multi-Discipline Surgical OT Table',
    code: 'MWHS-TBL-HYD500',
    imageUrl: otTableImg,
    shortDesc: 'Motorized electro-hydraulic operating table with X-ray translucent top, longitudinal sliding, and full articulation positions.',
    description: 'Versatile surgical operating table designed for general surgery, orthopedic traction, gynecology, and urology. Heavy-duty hydraulic pump system with wired remote hand controller, override emergency foot switches, and longitudinal slide for C-arm fluoroscopy access.',
    standardCompliance: ['IEC 60601-2-46', 'ISO 13485', 'CE Certified'],
    keySpecs: [
      { label: 'Load Capacity', value: '300 kg (660 lbs) Safe Working Load' },
      { label: 'Longitudinal Slide', value: '350 mm table top shift for 100% C-Arm access' },
      { label: 'Movements', value: 'Height (680-1030mm), Trendelenburg ±25°, Lateral Tilt ±20°' },
      { label: 'Base Construction', value: 'AISI 304 Stainless steel with T-shape foot pedal lock' },
      { label: 'Battery Backup', value: 'Internal rechargeable battery for 80+ procedures' }
    ],
    materials: ['Surgical grade AISI 304 Stainless Steel', 'Antistatic memory foam cushions'],
    suggestedApplications: ['Orthopedic Joint Replacement', 'Laparoscopy', 'Neurosurgery', 'General Surgery'],
    basePriceUSD: 5200,
    basePriceINR: 438000,
    badge: '300kg C-Arm Sliding',
    features: [
      'Longitudinal table shift allows full body imaging without moving patient',
      'Detachable and interchangeable head and leg sections',
      'Built-in kidney bridge elevation mechanism',
      'Dual control system with wired handset and auxiliary base override controls'
    ]
  },

  // 5. SCRUB SINK
  {
    id: 'prod-scrub-sink',
    category: 'hospital-furniture',
    categoryLabel: 'Hospital Furniture',
    name: 'Two-Bay Surgical Scrub Sink Station (Sensor & Knee Operated)',
    code: 'MWHS-SNK-SS02',
    imageUrl: scrubSinkImg,
    shortDesc: 'Heavy-duty AISI 304 stainless steel surgical scrub sink with infrared sensor faucets, thermostatic mixer & countdown timer.',
    description: 'Aseptic scrub station with deep angled basin to eliminate splashback onto surgeons scrubs. Infrared sensor and knee-push operated faucets, built-in sensor soap dispensers, digital scrub timer, and 0.2-micron terminal water filtration provision.',
    standardCompliance: ['HTM 64', 'NABH Surgical Scrub Spec', 'ISO 13485'],
    keySpecs: [
      { label: 'Bays', value: 'Dual bay (Two surgeons simultaneous scrub)' },
      { label: 'Dimensions', value: '1600 x 650 x 1200 mm' },
      { label: 'Water Activation', value: 'Infrared auto sensor + Knee pedal fallback' },
      { label: 'Soap Dispensing', value: 'Dual peristaltic contactless antiseptic soap dispenser' },
      { label: 'Water Temperature', value: 'Thermostatic mixing valve maintained at 38°C' }
    ],
    materials: ['Heavy gauge 1.5mm AISI 304 satin finish stainless steel'],
    suggestedApplications: ['Surgical Prep Room', 'OT Scrub Corridor', 'Trauma Resuscitation'],
    basePriceUSD: 1100,
    basePriceINR: 92000,
    badge: 'Anti-Splash Deep Basin',
    features: [
      'Sloped basin bottom and curved corners prevent standing water and biofilm buildup',
      'Backsplash panel extends 600mm to protect walls from moisture',
      'Digital LED countdown timer for 3-minute / 5-minute standard surgical scrub protocol',
      'Quick-access front hinged maintenance panel for plumbing inspection'
    ]
  },

  // 6. MANIFOLD
  {
    id: 'prod-manifold',
    category: 'mgps',
    categoryLabel: 'Medical Gas Pipeline Systems',
    name: 'Fully Automatic Digital Medical Gas Manifold System',
    code: 'MWHS-MGPS-M400',
    imageUrl: manifoldImg,
    shortDesc: 'Digital changeover manifold system with micro-PLC controller and dual line regulators for O2, N2O & CO2.',
    description: 'Designed to comply with HTM 02-01 and ISO 7396-1 standards. Provides uninterrupted medical gas supply with automatic digital changeover between banks, real-time pressure transducers, BMS alarm telemetry, and dual heavy-duty dome regulators.',
    standardCompliance: ['HTM 02-01', 'ISO 7396-1', 'NFPA 99', 'CE Certified'],
    keySpecs: [
      { label: 'Cylinder Capacity', value: '2x10 to 2x30 Cylinders' },
      { label: 'Flow Capacity', value: 'Up to 2,500 L/min (150 m³/h)' },
      { label: 'Delivery Pressure', value: '4.2 bar (Adjustable 3.5 - 5.5 bar)' },
      { label: 'Telemetry & BMS', value: 'RS485 Modbus RTU / Volt-free contacts' },
      { label: 'Power Supply', value: '110-240V AC 50/60Hz with UPS backup' }
    ],
    materials: ['Medical grade forged brass', 'Stainless steel braided pigtails', 'Copper manifold headers'],
    suggestedApplications: ['Central Hospital Oxygen Plant', 'Nitrous Oxide Supply', 'Carbon Dioxide Supply'],
    basePriceUSD: 5800,
    basePriceINR: 485000,
    badge: 'HTM 02-01 Compliant',
    features: [
      'Automatic pneumatic/digital switchover without pressure dip',
      'Dual line stage regulators with isolation valves',
      'High-precision digital pressure displays (bar/psi/kPa)',
      'Built-in safety relief valves and emergency supply connection (NIST/SIS)',
      'Integrated audible & visual alarm annunciator'
    ]
  },

  // 7. VACCUM PLANT
  {
    id: 'prod-vaccum-plant',
    category: 'mgps',
    categoryLabel: 'Medical Gas Pipeline Systems',
    name: 'Hospital Medical Vacuum Plant Skid System (Triplex Rotary Vane)',
    code: 'MWHS-VAC-TRIPLEX',
    imageUrl: vacuumPlantImg,
    shortDesc: 'Continuous medical vacuum plant with triplex rotary vane vacuum pumps, vertical ASME receiver tank & duplex bacterial filters.',
    description: 'Central hospital medical vacuum generation plant meeting HTM 02-01 and ISO 7396-1. Features three oil-lubricated rotary vane pumps operating in duty/assist/standby sequence with automatic rotation, duplex medical bacterial filters with differential gauges, and condensate drainage trap.',
    standardCompliance: ['HTM 02-01', 'ISO 7396-1', 'ASME Boiler & Pressure Vessel Code', 'CE Marked'],
    keySpecs: [
      { label: 'Configuration', value: 'Triplex (3x Pumps Duty/Assist/Standby)' },
      { label: 'Flow Capacity', value: '60 m³/h to 500 m³/h capacity options' },
      { label: 'Operating Vacuum', value: '-65 to -90 kPa (-500 to -680 mmHg)' },
      { label: 'Bacterial Filtration', value: 'Duplex 0.01 micron with 99.999% retention' },
      { label: 'Receiver Vessel', value: '500L to 2,000L vertical ASME vessel with drain' }
    ],
    materials: ['Cast iron rotary pump bodies', 'Stainless steel filter housings', 'Pressure vessel steel'],
    suggestedApplications: ['Hospital Central Suction Plant', 'ICU Suction Distribution', 'OT Surgical Suction'],
    basePriceUSD: 14200,
    basePriceINR: 1192000,
    badge: 'Triplex N+1 Redundancy',
    features: [
      'Automatic PLC pump alternation to equalize running hours',
      'Duplex bacterial filtration assembly with sterilizable glass drain flasks',
      'Volt-free telemetry contacts for central building management systems',
      'Anti-vibration base skids with low acoustic signature'
    ]
  },

  // 8. VACCUM SYSTEM & SUCTION PLANT
  {
    id: 'prod-vacuum-suction-plant',
    category: 'mgps',
    categoryLabel: 'Medical Gas Pipeline Systems',
    name: 'Central High-Volume Surgical Suction Plant & Vacuum System',
    code: 'MWHS-SUCT-PLANT',
    imageUrl: vacuumSuctionImg,
    shortDesc: 'Heavy-duty surgical vacuum station with duplex heavy pumps, automated purge trap, and high-flow filtration.',
    description: 'High-displacement suction plant engineered for operating rooms and emergency trauma wards. Delivers instantaneous high-vacuum flow for laparoscopic and orthopedic fluid extraction, complete with exhaust silencers and oil mist separators.',
    standardCompliance: ['ISO 7396-1', 'HTM 02-01', 'BS EN ISO 10079-3'],
    keySpecs: [
      { label: 'Displacement', value: '180 to 450 m³/h flow capacity' },
      { label: 'Continuous Vacuum', value: '-600 mmHg continuous working pressure' },
      { label: 'Filtration Class', value: 'BS EN ISO 7396-1 Medical Bacterial Class' },
      { label: 'Controller', value: 'Color Touchscreen HMI with fault logger' },
      { label: 'Exhaust Handling', value: 'Outdoor discharge with microbiological filter' }
    ],
    materials: ['Heavy industrial base frame', 'Degreased medical copper & SS-304 interconnects'],
    suggestedApplications: ['Trauma Center Suction Grid', 'Multi-OT Surgical Fluid Extraction', 'Bronchoscopy Suites'],
    basePriceUSD: 16800,
    basePriceINR: 1410000,
    badge: 'High-Displacement Suction',
    features: [
      'Dual bacterial filtration canisters with vacuum differential indicators',
      'Oil mist eliminator with auto return lubrication circuit',
      'Automated vacuum level compensation under heavy fluid surge',
      'Emergency manual override isolators for each motor branch'
    ]
  },

  // 9. OUTLET
  {
    id: 'prod-gas-outlet',
    category: 'mgps',
    categoryLabel: 'Medical Gas Pipeline Systems',
    name: 'Quick-Connect Medical Gas Terminal Outlets (BS / DIN Standard)',
    code: 'MWHS-TERM-BS01',
    imageUrl: outletImg,
    shortDesc: 'Two-stage check valve gas terminal outlets with gas-specific index collars to prevent cross-connection.',
    description: 'Medical gas wall and bedhead terminal units manufactured from high-purity brass. Includes 1st fix check valve assembly allowing maintenance without shutting down the pipeline supply branch.',
    standardCompliance: ['BS 5682:2015', 'DIN 13260-2', 'ISO 9170-1', 'HTM 02-01'],
    keySpecs: [
      { label: 'Gases Available', value: 'O2, N2O, Air 4 bar, Air 7 bar, Vacuum, AGSS' },
      { label: 'Connection Standard', value: 'British BS 5682 / DIN 13260-2' },
      { label: 'Cycle Durability', value: '> 50,000 insertion cycles tested' },
      { label: 'Leakage Rate', value: '< 0.05 ml/min at test pressure' },
      { label: 'Mounting Style', value: 'Wall flush, Bed Head Unit, or Pendant box' }
    ],
    materials: ['Chrome-plated brass faceplate', 'Stainless steel internal springs', 'EPDM medical seals'],
    suggestedApplications: ['Wall mounted', 'Bedhead trunking', 'Surgical ceiling pendants'],
    basePriceUSD: 55,
    basePriceINR: 4600,
    badge: 'Zero-Cross Index',
    features: [
      'Self-sealing safety valve mechanism',
      'Color-coded gas name badge with permanent laser marking',
      '100% factory pressure and leak tested with helium mass spectrometer',
      'Maintenance valve for front-serviceable seal replacement without shutdown'
    ]
  },

  // 10. FLOW METER
  {
    id: 'prod-flow-meter',
    category: 'mgps',
    categoryLabel: 'Medical Gas Pipeline Systems',
    name: 'Medical Oxygen Flowmeter with Autoclavable Humidifier Bottle',
    code: 'MWHS-FLW-O2-15',
    imageUrl: flowmeterImg,
    shortDesc: 'Back-pressure compensated Thorpe tube medical oxygen flowmeter (0-15 L/min) with shatterproof humidifier jar.',
    description: 'Calibrated precision flowmeter for clinical oxygen therapy. Features a brass body with chrome plating, clear crack-resistant polycarbonate flow tube with stainless steel float, and a 200ml autoclavable humidifier bottle with safety pressure relief valve.',
    standardCompliance: ['ISO 15002', 'BS 5682 Direct Probe', 'CE Marked'],
    keySpecs: [
      { label: 'Flow Range', value: '0 to 15 L/min (Graduated in 1 L/min increments)' },
      { label: 'Inlet Pressure', value: '4.2 bar (50 psi) calibrated' },
      { label: 'Inlet Connection', value: 'BS 5682 / DIN probe quick-connector' },
      { label: 'Humidifier Bottle', value: '200ml Polycarbonate (Autoclavable up to 134°C)' },
      { label: 'Safety Relief', value: 'Built-in 2 psi audible relief valve on bottle' }
    ],
    materials: ['Forged brass chrome-plated body', 'Polycarbonate tube and bottle', 'Stainless steel float'],
    suggestedApplications: ['Patient Bedhead Oxygen Therapy', 'ICU Recovery', 'Ambulance Units'],
    basePriceUSD: 38,
    basePriceINR: 3200,
    badge: 'Thorpe Tube Calibrated',
    features: [
      'Back-pressure compensated to ensure accurate readings regardless of restriction',
      'High-impact polycarbonate outer and inner tubes',
      'Clear graduated water level indicator lines on humidifier bottle',
      'Direct gas probe clicks securely into wall terminal unit'
    ]
  },

  // 11. VACCUM REGULATOR & SUCTION TROLLEY
  {
    id: 'prod-suction-trolley',
    category: 'hospital-furniture',
    categoryLabel: 'Hospital Furniture',
    name: 'High Vacuum Regulator with Mobile Suction Collection Trolley',
    code: 'MWHS-SUCT-TRL200',
    imageUrl: suctionTrolleyImg,
    shortDesc: 'Dual 2,000ml autoclavable polycarbonate secretion jars with overflow safety trap, analog vacuum gauge on rolling stand.',
    description: 'Clinical mobile suction unit designed to connect to central pipeline vacuum outlets or operate portably. Features dual 2000ml calibrated suction canisters with mechanical overflow float shut-off, high-precision vacuum regulator gauge (0 to -100 kPa), and anti-static caster wheels.',
    standardCompliance: ['ISO 10079-3', 'BS 5682 Vacuum Probe', 'CE Marked'],
    keySpecs: [
      { label: 'Collection Jars', value: '2 x 2,000 ml Polycarbonate jars (Autoclavable)' },
      { label: 'Vacuum Range', value: '0 to -100 kPa (0 to -760 mmHg) adjustable' },
      { label: 'Overflow Protection', value: 'Mechanical float ball shutoff valve + Hydrophobic filter' },
      { label: 'Trolley Frame', value: 'Stainless steel SS-304 with accessory basket' },
      { label: 'Mobility', value: '4 x 75mm Anti-static silent swivel castors (2 braked)' }
    ],
    materials: ['AISI 304 Stainless steel frame', 'Shatterproof polycarbonate collection jars', 'Medical silicone tubing'],
    suggestedApplications: ['ICU Ward Bedside Suction', 'Operating Room Fluid Collection', 'Emergency Room'],
    basePriceUSD: 290,
    basePriceINR: 24500,
    badge: 'Dual 2000ml Autoclavable',
    features: [
      'Dual jar changeover valve allows continuous aspiration without interruption',
      'Hydrophobic microbiological filter prevents bacterial contamination of vacuum line',
      'Graduated milliliter markings on both clear collection bottles',
      'Heavy-duty stainless steel push handle for rapid ward transit'
    ]
  },

  // 12. NURSE CALL SYSTEM
  {
    id: 'prod-nurse-call',
    category: 'mgps',
    categoryLabel: 'Medical Gas Pipeline Systems',
    name: 'Digital IP Two-Way Audio Nurse Call Station & Bedside Pendant System',
    code: 'MWHS-NC-IP100',
    imageUrl: nurseCallImg,
    shortDesc: 'Networked hospital nurse call system with touch master console, room door corridor lights & waterproof patient call pendants.',
    description: 'State-of-the-art IP nurse call solution enabling instant voice communication between patients and nursing stations. Includes color touchscreen master console, ergonomic bedside calling handsets with reassurance LED, toilet emergency pull cords, and multi-color corridor dome lamps.',
    standardCompliance: ['HTM 08-03', 'UL 1069', 'IEC 60601-1-2', 'CE Marked'],
    keySpecs: [
      { label: 'Master Console', value: '10.1" Capacitive Touch IP Station with SIP intercom handset' },
      { label: 'Bedside Pendant', value: 'Ergonomic waterproof IP67 call unit with Braille call button' },
      { label: 'Corridor Lamp', value: '4-Color LED overdoor dome light (Routine, Toilet, Emergency, Code Blue)' },
      { label: 'Communication', value: 'Full duplex digital VoIP audio with echo cancellation' },
      { label: 'Capacity', value: 'Up to 256 beds per central floor master console' }
    ],
    materials: ['Antimicrobial virgin ABS plastics', 'Silicon keypad membranes', 'Stainless steel mounting plates'],
    suggestedApplications: ['General Wards', 'Private Patient Rooms', 'ICU Nursing Stations', 'Elderly Care'],
    basePriceUSD: 1450,
    basePriceINR: 122000,
    badge: 'IP Full-Duplex Audio',
    features: [
      'Call priority levels: Normal, Bathroom Emergency, Staff Assist, and Code Blue',
      'Data logging of staff response times for hospital quality auditing',
      'Integrated with bedhead trunking channels without RF interference',
      'Night-glow buttons enable easy location in dark patient rooms'
    ]
  },

  // 13. ICU BED
  {
    id: 'prod-icu-bed',
    category: 'hospital-furniture',
    categoryLabel: 'Hospital Furniture',
    name: 'Electric ICU Critical Care Bed (5-Function Motorized)',
    code: 'MWHS-BED-ICU5',
    imageUrl: icuBedImg,
    shortDesc: 'Motorized intensive care bed with Trendelenburg, cardiac chair position, weighing scale & bilateral CPR quick release.',
    description: 'Heavy-duty critical care bed equipped with Linak Denmark medical linear actuators, nurse central control console, split polymer side rails with embedded controls, one-touch cardiac chair position, and X-ray translucent backrest for mobile radiography.',
    standardCompliance: ['IEC 60601-2-52', 'ISO 13485', 'CE Medical Device Class I'],
    keySpecs: [
      { label: 'Actuator Motors', value: '4 x Linak (Denmark) ultra-quiet linear drives' },
      { label: 'Safe Working Load', value: '250 kg (550 lbs)' },
      { label: 'Positions', value: 'Backrest (0-75°), Knee rest (0-45°), Trendelenburg ±16°, Height (450-820mm)' },
      { label: 'Casters', value: '150mm Central locking castors with directional tracking' },
      { label: 'CPR Mechanism', value: 'Instant dual-sided mechanical bilateral lever + Electric CPR' }
    ],
    materials: ['Epoxy powder coated steel frame', 'Antimicrobial virgin ABS/PP side rails & boards'],
    suggestedApplications: ['Intensive Care Unit (ICU)', 'Coronary Care Unit (CCU)', 'Post-Anesthesia Care (PACU)'],
    basePriceUSD: 1650,
    basePriceINR: 138000,
    badge: 'Critical Care Spec',
    features: [
      'Built-in in-bed patient weighing scale with tare memory',
      'X-ray cassette holder sliding under backrest without moving patient',
      'Nurse locked console at footboard with battery reserve indicator',
      'Auto-contour function preventing patient sliding downwards'
    ]
  },

  // 14. STRETCHER
  {
    id: 'prod-stretcher',
    category: 'hospital-furniture',
    categoryLabel: 'Hospital Furniture',
    name: 'Emergency Patient Transfer Hydraulic Stretcher Trolley',
    code: 'MWHS-STR-HYD20',
    imageUrl: stretcherImg,
    shortDesc: 'Heavy-duty hydraulic emergency trolley with collapsible full-length side rails, central locking casters & O2 cylinder cradle.',
    description: 'Engineered for rapid emergency department patient transfer and minor surgical procedures. Features dual hydraulic foot pumps for height adjustment, Trendelenburg and Reverse Trendelenburg tilt, retractable fifth wheel for steering along corridors, and radiolucent mattress base.',
    standardCompliance: ['ISO 9001', 'ISO 13485', 'EN 1865'],
    keySpecs: [
      { label: 'Working Load', value: '220 kg (485 lbs) Safe Working Capacity' },
      { label: 'Height Adjustment', value: 'Hydraulic foot pedals on both sides (550 to 860 mm)' },
      { label: 'Tilt Movements', value: 'Trendelenburg 0-18°, Reverse Trendelenburg 0-18°' },
      { label: 'Steering', value: 'Retractable central 5th wheel for easy turning' },
      { label: 'Accessories', value: 'Integrated O2 cylinder cradle, telescopic IV pole, drainage hooks' }
    ],
    materials: ['Heavy gauge cold-rolled steel with electrostatic coating', 'Seamless polyurethane waterproof mattress'],
    suggestedApplications: ['Emergency Department (ED)', 'Trauma Resuscitation', 'Day Surgery Transfer'],
    basePriceUSD: 880,
    basePriceINR: 74000,
    badge: 'Hydraulic 5th Wheel',
    features: [
      'Collapsible stainless steel side rails with zero-pinch safety latches',
      'Dual hydraulic pedal controls accessible from both sides of the trolley',
      'Full perimeter protective rubber bumper strips',
      'Gas-spring assisted backrest elevation from 0 to 80 degrees'
    ]
  },

  // 15. MEDICINE CABINET
  {
    id: 'prod-medicine-cabinet',
    category: 'hospital-furniture',
    categoryLabel: 'Hospital Furniture',
    name: 'Stainless Steel Surgical & Hospital Medicine Storage Cabinet',
    code: 'MWHS-CAB-SS400',
    imageUrl: medicineCabinetImg,
    shortDesc: 'Double-door AISI 304 stainless steel cabinet with tempered glass viewing panels, adjustable shelves & narcotic lockbox.',
    description: 'Aseptic medical storage unit manufactured from corrosion-proof surgical grade stainless steel. Features two full-height framed tempered glass doors with central security lock, four adjustable interior shelves, an internal separate lockbox for controlled narcotics, and adjustable levelling feet.',
    standardCompliance: ['ISO 9001', 'ISO 13485', 'NABH Ward Furniture Standard'],
    keySpecs: [
      { label: 'Overall Dimensions', value: '900 x 450 x 1800 mm (W x D x H)' },
      { label: 'Door Construction', value: 'Dual framed 5mm toughened safety glass doors with lock' },
      { label: 'Shelving', value: '4 Heavy-duty height-adjustable SS shelves (50 kg load each)' },
      { label: 'Narcotics Box', value: 'Internal double-lock steel safe for controlled substances' },
      { label: 'Base', value: 'Optional heavy-duty castors or sanitary sealed leveling feet' }
    ],
    materials: ['1.2mm Heavy gauge AISI 304 satin finish stainless steel', 'Tempered safety glass'],
    suggestedApplications: ['Operating Theatre Prep Room', 'Hospital Pharmacy', 'ICU Medicine Store'],
    basePriceUSD: 720,
    basePriceINR: 60500,
    badge: 'SS-304 Narcotics Safe',
    features: [
      'Corrosion resistant to harsh medical cleansers and disinfectant chemicals',
      'Interior separate locking safe complies with narcotic storage security codes',
      'Dust-proof silicone sealing gasket around door frame',
      'Smooth satin brushed finish facilitates rapid sanitization wipe-downs'
    ]
  }
];

export const SAMPLE_PROJECTS: ProjectInstallation[] = [
  {
    id: 'proj-01',
    clientName: 'Guwahati Medical College and Hospital',
    location: 'Guwahati, Assam',
    type: 'Apex State Teaching & Trauma Hospital (1,200 Beds)',
    scope: ['Zonal MGPS Distribution (14 Floors)', 'Emergency Trauma Pipeline', '12 Modular OTs', 'Digital Alarm Telemetry'],
    status: 'Completed',
    completionDate: '2024-Q3',
    otCount: 12,
    bedCount: 1200,
    metrics: 'Active 24x7 service coverage; ISO 7396-1 audited.'
  },
  {
    id: 'proj-02',
    clientName: 'GNRC Hospital',
    location: 'Guwahati, Assam',
    type: 'Multi-Specialty & Neuroscience Tertiary Hospital (400 Beds)',
    scope: ['Turnkey MGPS Pipeline', 'Cath Lab & Neuro OT Medical Gases', 'Liquid Oxygen (LOX) Grid', 'Emergency Vacuum Skids'],
    status: 'Completed',
    completionDate: '2024-Q1',
    otCount: 6,
    bedCount: 400,
    metrics: 'Zero pressure drop across 1.4km pipeline; HTM 02-01 certified.'
  },
  {
    id: 'proj-03',
    clientName: 'Jorhat Medical College and Hospital',
    location: 'Jorhat, Assam',
    type: 'Government Medical College Hospital (750 Beds)',
    scope: ['Automatic Changeover Manifold (2x30)', 'Modular Surgical Suites MGPS', 'Triplex Liquid Ring Vacuum System'],
    status: 'Completed',
    completionDate: '2023-Q4',
    otCount: 8,
    bedCount: 750,
    metrics: 'Comprehensive preventive maintenance schedule active.'
  },
  {
    id: 'proj-04',
    clientName: 'Nogaon Medical College and Hospital',
    location: 'Nagaon, Assam',
    type: 'Government Medical College Hospital (500 Beds)',
    scope: ['Turnkey Medical Copper Piping (EN 13348)', 'Modular OTs Class 5 Laminar Air Flow', 'ICU Motorized Beds & Crash Carts'],
    status: 'Completed',
    completionDate: '2024-Q2',
    otCount: 6,
    bedCount: 500,
    metrics: 'Annual statutory audit and flow validation passed.'
  }
];

export const TECHNICAL_ARTICLES: TechnicalArticle[] = [
  {
    id: 'htm-0201-guide',
    title: 'HTM 02-01 vs NFPA 99: Medical Gas Pipeline Sizing & Diversity Factors',
    standard: 'HTM 02-01 / NFPA 99-2024',
    category: 'MGPS Engineering',
    summary: 'A critical engineering comparative guide for hospital pipeline sizing, pipe material specifications, diversity factors across operating theaters and intensive care units, and pressure drop limitations.',
    highlights: [
      'Design diversity calculations: Ward beds demand 10 L/min at 10% simultaneity, while ICUs require 20 L/min at 100% simultaneity.',
      'Allowable pressure drops across the distribution network must not exceed 5% from plant to the most remote terminal unit.',
      'Degreased medical copper tubing (BS EN 13348 / ASTM B819) must be purged with medical grade nitrogen during silver brazing to prevent internal oxide scale formation.'
    ],
    guidelines: [
      { rule: 'Pipeline Material', value: 'Seamless phosphorus-deoxidized copper to EN 13348', importance: 'Mandatory' },
      { rule: 'Jointing Method', value: 'Inert gas shielded silver brazing (min 5% Ag, copper-phosphorus alloy)', importance: 'Zero-Carbon Scale' },
      { rule: 'Terminal Working Pressure', value: '4.0 to 4.2 bar for O2/Air4, 7.0 bar for Surgical Air, -0.6 bar for Vac', importance: 'Critical Life Support' },
      { rule: 'Cross Connection Test', value: '100% anti-confusion pressure gradient testing prior to commissioning', importance: 'Zero Error' }
    ]
  },
  {
    id: 'iso-14644-ot-cleanroom',
    title: 'ISO 14644-1 & NABH: Modular Operation Theatre Ventilation & Air Cleanliness',
    standard: 'ISO 14644-1 Class 5 / DIN 1946-4',
    category: 'Modular OT Standards',
    summary: 'Standards and validation requirements for creating ultraclean surgical suites with unidirectional laminar airflow, positive pressure differentials, and HEPA H14 terminal filtration.',
    highlights: [
      'Positive pressure differential of +15 to +25 Pascals must be maintained relative to scrub rooms and clean corridors to prevent airborne cross-contamination.',
      'Cleanroom particle limit: ISO Class 5 allows no more than 3,520 particles of 0.5 μm per cubic meter at rest.',
      'Air change rates must exceed 25 to 30 Air Changes per Hour (ACH) with minimum 20% fresh air intake.'
    ],
    guidelines: [
      { rule: 'Air Cleanliness Class', value: 'ISO Class 5 (Grade A / Class 100) under LAF plenum', importance: 'Infection Prevention' },
      { rule: 'Laminar Face Velocity', value: '0.25 to 0.38 m/s vertical uniform downward stream', importance: 'Turbulence Free' },
      { rule: 'Operating Theatre Temperature', value: '18°C to 24°C adjustable with 40% to 60% Relative Humidity', importance: 'Surgical Comfort & Static Prevention' },
      { rule: 'Wall Cladding Resistance', value: 'Non-porous SS304 or Pre-painted GI with hermetic coving', importance: 'Disinfectant Resistant' }
    ]
  },
  {
    id: 'cssd-en285-standards',
    title: 'EN 285 & ISO 17665: Large Steam Sterilizers and Decontamination Workflow',
    standard: 'EN 285 / ISO 17665-1',
    category: 'CSSD Sterilization',
    summary: 'Best practices for organizing CSSD dirty, clean, and sterile zones, steam penetration validation with Bowie-Dick testing, and water quality parameters.',
    highlights: [
      'Strict three-zone segregation (Dirty Decontamination -> Clean Inspection & Packing -> Sterile Storage) with physical barrier pass-through autoclaves.',
      'Steam quality must exceed 95% dryness fraction with non-condensable gases below 3.5% by volume.',
      'F0 sterilization values must deliver minimum SAL (Sterility Assurance Level) of 10^-6 for critical surgical devices.'
    ],
    guidelines: [
      { rule: 'Cycle Temperature & Time', value: '134°C for 3.5 to 5 minutes / 121°C for 15 to 20 minutes', importance: 'Sterilization Guarantee' },
      { rule: 'Door Safety Interlock', value: 'Pneumatic double-door mutual exclusion interlock', importance: 'Zone Cross-Over Prevention' },
      { rule: 'Boiler Feed Water', value: 'Demineralized reverse-osmosis water conductivity < 15 μS/cm', importance: 'Corrosion Prevention' },
      { rule: 'Batch Documentation', value: 'Physical and digital log of time, temperature, pressure and vacuum pulses', importance: 'Legal Hospital Audit' }
    ]
  }
];
