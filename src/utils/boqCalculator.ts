import { FacilityConfig, BoQItem } from '../types';

export function calculateBoQ(config: FacilityConfig): { items: BoQItem[]; grandTotalUSD: number; grandTotalINR: number } {
  const items: BoQItem[] = [];
  const rateMultiplier = config.currency === 'USD' ? 1 : 84; // 1 USD = 84 INR approximate

  // 1. MGPS Central Plants
  if (config.oxygenSource === 'lox-manifold') {
    items.push({
      id: 'boq-mgps-01',
      category: 'mgps',
      itemCode: 'MWHS-MGPS-LOX-M',
      name: 'Cryogenic Liquid Medical Oxygen (LMO) Control Panel & Back-up Manifold (2x15 Cylinders)',
      specificationSummary: 'Automatic duplex switchover panel with dual line dome regulators, heater vaporizers, safety relief & telemetry',
      complianceStandard: 'HTM 02-01 / ISO 7396-1',
      quantity: 1,
      unit: 'Set',
      unitPrice: config.currency === 'USD' ? 9500 : 798000,
      totalPrice: config.currency === 'USD' ? 9500 : 798000
    });
  } else if (config.oxygenSource === 'psa-plant') {
    items.push({
      id: 'boq-mgps-01b',
      category: 'mgps',
      itemCode: 'MWHS-MGPS-PSA-100',
      name: 'On-site Medical Oxygen PSA Generator Plant (93% ± 3% purity, 15-30 Nm³/h)',
      specificationSummary: 'Duplex molecular sieve bed towers with refrigerated air dryer, oil-free compressor & purity telemetry',
      complianceStandard: 'ISO 10083 / European Pharmacopoeia',
      quantity: 1,
      unit: 'Plant',
      unitPrice: config.currency === 'USD' ? 28000 : 2352000,
      totalPrice: config.currency === 'USD' ? 28000 : 2352000
    });
  } else {
    items.push({
      id: 'boq-mgps-01c',
      category: 'mgps',
      itemCode: 'MWHS-MGPS-M400',
      name: 'Fully Automatic Digital Medical Gas Manifold System (2x12 Cylinders)',
      specificationSummary: 'Auto changeover manifold with dual high-flow stage regulators, digital display, emergency NIST point',
      complianceStandard: 'HTM 02-01 / ISO 7396-1',
      quantity: 1,
      unit: 'Set',
      unitPrice: config.currency === 'USD' ? 5800 : 487200,
      totalPrice: config.currency === 'USD' ? 5800 : 487200
    });
  }

  // Medical Air & Vacuum Plants
  items.push({
    id: 'boq-mgps-02',
    category: 'mgps',
    itemCode: 'MWHS-VAC-TRIPLEX',
    name: 'Hospital Medical Vacuum Plant (Triplex Rotary Vane Skid System)',
    codeSummary: 'Three vacuum pumps with bacteria filter duplex assembly and vertical receiver tank',
    specificationSummary: 'Triplex configuration with ASME receiver tank, dual exhaust line, drainage trap and automatic alternation controller',
    complianceStandard: 'HTM 02-01 / ISO 7396-1',
    quantity: 1,
    unit: 'Skid System',
    unitPrice: config.currency === 'USD' ? 14200 : 1192800,
    totalPrice: config.currency === 'USD' ? 14200 : 1192800
  } as any);

  if (config.medicalAir4Bar || config.surgicalAir7Bar) {
    items.push({
      id: 'boq-mgps-03',
      category: 'mgps',
      itemCode: 'MWHS-AIR-DUPLEX',
      name: 'Medical Breathing Air & Surgical Tool Air Compressor Plant (4 bar & 7 bar)',
      specificationSummary: 'Duplex oil-free scroll/tooth compressors, desiccant dryers (-40°C pressure dew point), and CO/CO2 catalyst filter',
      complianceStandard: 'HTM 02-01 Class 1 Sterile Air',
      quantity: 1,
      unit: 'Plant',
      unitPrice: config.currency === 'USD' ? 18500 : 1554000,
      totalPrice: config.currency === 'USD' ? 18500 : 1554000
    });
  }

  // Area Valve Service Units (AVSU) & Alarms (roughly 1 per 25 beds + 1 per OT)
  const avsuCount = Math.max(2, Math.ceil(config.totalBeds / 25) + config.modularOTs);
  items.push({
    id: 'boq-mgps-04',
    category: 'mgps',
    itemCode: 'MWHS-AVSU-A6',
    name: 'Area Valve Service Unit (AVSU) with Emergency NIST & Digital Sensor',
    specificationSummary: 'Zone isolation ball valve box with dual action emergency pull window, transducer output and color markings',
    complianceStandard: 'HTM 02-01',
    quantity: avsuCount,
    unit: 'Boxes',
    unitPrice: config.currency === 'USD' ? 850 : 71400,
    totalPrice: (config.currency === 'USD' ? 850 : 71400) * avsuCount
  });

  // Bed Head Units (ICU + Wards)
  const icuBhuCount = config.icuBeds;
  const wardBhuCount = Math.max(0, config.totalBeds - config.icuBeds);

  if (icuBhuCount > 0) {
    items.push({
      id: 'boq-mgps-05',
      category: 'mgps',
      itemCode: 'MWHS-BHU-ICU-2000',
      name: 'ICU Heavy-Duty Multi-Tier Bed Head Trunking (6 Gas Outlets, 8 Power Sockets)',
      specificationSummary: 'Heavy extruded alloy 6063-T6, dual gas/electric compartment separation, integrated equipment mounting track',
      complianceStandard: 'ISO 11197 / BS 5682',
      quantity: icuBhuCount,
      unit: 'Units',
      unitPrice: config.currency === 'USD' ? 520 : 43680,
      totalPrice: (config.currency === 'USD' ? 520 : 43680) * icuBhuCount
    });
  }

  if (wardBhuCount > 0) {
    items.push({
      id: 'boq-mgps-06',
      category: 'mgps',
      itemCode: 'MWHS-BHU-WARD-1200',
      name: 'Standard Ward Bed Head Unit (O2 + Vacuum + Dual Universal Power)',
      specificationSummary: 'Extruded aluminum channel with reading light, night lamp and 2 gas terminal units',
      complianceStandard: 'ISO 11197',
      quantity: wardBhuCount,
      unit: 'Units',
      unitPrice: config.currency === 'USD' ? 240 : 20160,
      totalPrice: (config.currency === 'USD' ? 240 : 20160) * wardBhuCount
    });
  }

  // Degreased Medical Copper Tubing & Fittings (estimate 18 meters per bed average)
  const totalMetersCopper = Math.round(config.totalBeds * 18 + config.modularOTs * 120);
  items.push({
    id: 'boq-mgps-07',
    category: 'mgps',
    itemCode: 'MWHS-COPPER-EN13348',
    name: 'Medical Degreased Seamless Copper Piping & Fittings (12mm to 54mm)',
    specificationSummary: 'BS EN 13348 certified degreased medical tubing purged under pure Nitrogen gas with silver alloy brazing',
    complianceStandard: 'EN 13348 / HTM 02-01',
    quantity: totalMetersCopper,
    unit: 'Meters (Est)',
    unitPrice: config.currency === 'USD' ? 22 : 1850,
    totalPrice: (config.currency === 'USD' ? 22 : 1850) * totalMetersCopper
  });

  // 2. MODULAR OPERATION THEATRES
  if (config.modularOTs > 0) {
    const otQty = config.modularOTs;

    // LAF Plenum
    items.push({
      id: 'boq-mot-01',
      category: 'modular-ot',
      itemCode: `MWHS-LAF-${config.laminarFlowSize}`,
      name: `Laminar Air Flow Plenum Ceiling (${config.laminarFlowSize} ft) with HEPA H14 Filters`,
      specificationSummary: 'Class ISO-5 unidirectional ultraclean plenum with gel-seal H14 filters, DOP test ports, and surgical light provision',
      complianceStandard: 'ISO 14644-1 / NABH OT Standards',
      quantity: otQty,
      unit: 'Theatres',
      unitPrice: config.currency === 'USD' ? 6200 : 520800,
      totalPrice: (config.currency === 'USD' ? 6200 : 520800) * otQty
    });

    // Wall Cladding
    const wallLabel = config.wallCladding === 'ss304' 
      ? 'AISI 304 Seamless Stainless Steel Antibacterial Wall Cladding' 
      : config.wallCladding === 'glass-modular' 
      ? 'Toughened Anti-Reflective Modular Glass Wall System with LED backlighting' 
      : 'Pre-Painted Antibacterial Galvanized Steel Sandwich Modular Wall System';
    
    const wallPriceUSD = config.wallCladding === 'ss304' ? 9800 : config.wallCladding === 'glass-modular' ? 12500 : 7500;
    const wallPriceINR = wallPriceUSD * 84;

    items.push({
      id: 'boq-mot-02',
      category: 'modular-ot',
      itemCode: 'MWHS-WALL-MOD',
      name: wallLabel,
      specificationSummary: 'Prefabricated modular panels with rigid high density core, flush coved corners, return air risers and cavity space',
      complianceStandard: 'ISO 14644-1 / Class 0 Fire Rating',
      quantity: otQty,
      unit: 'Complete Suites',
      unitPrice: config.currency === 'USD' ? wallPriceUSD : wallPriceINR,
      totalPrice: (config.currency === 'USD' ? wallPriceUSD : wallPriceINR) * otQty
    });

    // Hermetic Doors
    items.push({
      id: 'boq-mot-03',
      category: 'modular-ot',
      itemCode: 'MWHS-DOOR-HERM',
      name: 'Hermetically Sealed Motorized Sliding OT Door with Foot Sensor',
      specificationSummary: 'Drop-and-slide track airtight hermetic door with brushless controller, safety photocell and lead shielding core',
      complianceStandard: 'EN 16005 / DIN 18650',
      quantity: otQty * 2, // 2 doors per OT: main entrance + scrub room
      unit: 'Door Sets',
      unitPrice: config.currency === 'USD' ? 3600 : 302400,
      totalPrice: (config.currency === 'USD' ? 3600 : 302400) * (otQty * 2)
    });

    // Master Control Panel
    items.push({
      id: 'boq-mot-04',
      category: 'modular-ot',
      itemCode: 'MWHS-CTRL-TP15',
      name: 'Surgeon Master OT Touchscreen Control Panel (15.6" IP65)',
      specificationSummary: 'Monitors differential pressure, temperature, humidity, HEPA lifecycle, elapsed surgery timer and gas alarms',
      complianceStandard: 'IEC 60601-1 / IP65',
      quantity: otQty,
      unit: 'Panels',
      unitPrice: config.currency === 'USD' ? 2400 : 201600,
      totalPrice: (config.currency === 'USD' ? 2400 : 201600) * otQty
    });

    // Surgical Scrub Station
    items.push({
      id: 'boq-mot-05',
      category: 'hospital-furniture',
      itemCode: 'MWHS-SNK-SS02',
      name: 'Two-Bay Surgical Scrub Sink Station (Sensor & Knee Operated SS-304)',
      specificationSummary: 'Deep splash-free basin with thermostatic water mixer, contactless sensor taps and scrub countdown timer',
      complianceStandard: 'HTM 64 / NABH Spec',
      quantity: otQty,
      unit: 'Stations',
      unitPrice: config.currency === 'USD' ? 1100 : 92400,
      totalPrice: (config.currency === 'USD' ? 1100 : 92400) * otQty
    });
  }

  // 3. HOSPITAL FURNITURE
  if (config.icuBeds > 0) {
    const icuBedPrice = config.icuBedType === '5-function-electric' ? 1650 : 1150;
    items.push({
      id: 'boq-furn-01',
      category: 'hospital-furniture',
      itemCode: 'MWHS-BED-ICU5',
      name: `${config.icuBedType === '5-function-electric' ? '5-Function Motorized ICU Bed with Weighing Scale & CPR' : '3-Function Motorized ICU Bed'}`,
      specificationSummary: 'Linak Denmark actuators, dual CPR bilateral levers, split ABS safety rails and central locking castors',
      complianceStandard: 'IEC 60601-2-52 / CE',
      quantity: config.icuBeds,
      unit: 'Beds',
      unitPrice: config.currency === 'USD' ? icuBedPrice : icuBedPrice * 84,
      totalPrice: (config.currency === 'USD' ? icuBedPrice : icuBedPrice * 84) * config.icuBeds
    });
  }

  // Crash Carts (1 for every 15 beds + 1 per OT)
  const crashCartQty = Math.max(1, Math.ceil(config.totalBeds / 15) + config.modularOTs);
  items.push({
    id: 'boq-furn-02',
    category: 'hospital-furniture',
    itemCode: 'MWHS-CART-EM01',
    name: 'Emergency Code-Blue Resuscitation Crash Cart Trolley',
    specificationSummary: 'Modular drawers with tamper seals, defibrillator swivel tray, oxygen bottle bracket, IV pole and CPR board',
    complianceStandard: 'ISO 13485',
    quantity: crashCartQty,
    unit: 'Trolleys',
    unitPrice: config.currency === 'USD' ? 520 : 43680,
    totalPrice: (config.currency === 'USD' ? 520 : 43680) * crashCartQty
  });

  // 4. CSSD EQUIPMENT
  const cssdAutoclaveQty = Math.max(1, Math.ceil(config.totalBeds / 200));
  const autoclaveUSD = config.cssdAutoclaveCapacity === 'horizontal-double-door' ? 24500 : 12000;
  items.push({
    id: 'boq-cssd-01',
    category: 'cssd',
    itemCode: 'MWHS-CSSD-AUT800',
    name: `${config.cssdAutoclaveCapacity === 'horizontal-double-door' ? 'Horizontal Pass-Through High-Pressure Steam Autoclave (800L EN 285)' : 'Heavy-Duty Vertical Sterilizer System (250L)'}`,
    specificationSummary: 'Pneumatic double door interlock between clean and sterile zones, liquid ring vacuum pump, PLC microcomputer recorder',
    complianceStandard: 'EN 285 / ASME Code / ISO 17665-1',
    quantity: cssdAutoclaveQty,
    unit: 'Units',
    unitPrice: config.currency === 'USD' ? autoclaveUSD : autoclaveUSD * 84,
    totalPrice: (config.currency === 'USD' ? autoclaveUSD : autoclaveUSD * 84) * cssdAutoclaveQty
  });

  items.push({
    id: 'boq-cssd-02',
    category: 'cssd',
    itemCode: 'MWHS-CSSD-ULT60',
    name: 'Medical Ultrasonic Surgical Instrument Cleaner with Sweep & Degas (60L)',
    specificationSummary: '40 kHz multi-transducer cavitation tank with heating up to 80°C and SS-316 stainless steel chamber',
    complianceStandard: 'ISO 15883 / HTM 2030',
    quantity: Math.max(1, Math.ceil(config.modularOTs / 4)),
    unit: 'Units',
    unitPrice: config.currency === 'USD' ? 1450 : 121800,
    totalPrice: (config.currency === 'USD' ? 1450 : 121800) * Math.max(1, Math.ceil(config.modularOTs / 4))
  });

  items.push({
    id: 'boq-cssd-03',
    category: 'cssd',
    itemCode: 'MWHS-CSSD-ROT100',
    name: 'Medical Rotary Continuous Pouch Heat Sealing Machine with Printer',
    specificationSummary: 'Validatable ISO 11607-2 continuous band heat sealer with automatic expiry date and batch code printing',
    complianceStandard: 'ISO 11607-2',
    quantity: Math.max(1, Math.ceil(config.modularOTs / 4)),
    unit: 'Units',
    unitPrice: config.currency === 'USD' ? 980 : 82320,
    totalPrice: (config.currency === 'USD' ? 980 : 82320) * Math.max(1, Math.ceil(config.modularOTs / 4))
  });

  const grandTotal = items.reduce((acc, curr) => acc + curr.totalPrice, 0);

  return {
    items,
    grandTotalUSD: config.currency === 'USD' ? grandTotal : Math.round(grandTotal / 84),
    grandTotalINR: config.currency === 'INR' ? grandTotal : Math.round(grandTotal * 84)
  };
}
