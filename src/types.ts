export type ProductCategory = 
  | 'mgps' 
  | 'modular-ot' 
  | 'hospital-furniture' 
  | 'cssd';

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  category: ProductCategory;
  categoryLabel: string;
  name: string;
  code: string;
  shortDesc: string;
  description: string;
  standardCompliance: string[];
  keySpecs: TechnicalSpec[];
  materials: string[];
  suggestedApplications: string[];
  basePriceUSD: number;
  basePriceINR: number;
  badge?: string;
  features: string[];
  imageUrl?: string;
}

export interface KeyHospitalAssam {
  id: string;
  name: string;
  city: string;
  type: string;
  bedCapacity: string;
  systemsMaintained: string[];
  serviceStatus: string;
  lastInspection: string;
}

export interface FacilityConfig {
  facilityName: string;
  facilityType: 'tertiary' | 'superspecialty' | 'district' | 'general' | 'clinic';
  totalBeds: number;
  icuBeds: number;
  modularOTs: number;
  currency: 'INR' | 'USD';
  // MGPS options
  oxygenSource: 'lox-manifold' | 'cylinder-manifold' | 'psa-plant';
  vacuumSystem: 'triplex-rotary' | 'duplex-liquid-ring';
  medicalAir4Bar: boolean;
  surgicalAir7Bar: boolean;
  agssRequired: boolean;
  // Modular OT options
  wallCladding: 'ss304' | 'antibacterial-gi' | 'glass-modular';
  laminarFlowSize: '8x8' | '10x10' | '12x12';
  hermeticDoors: 'motorized-sliding' | 'manual-hermetic';
  // Furniture & CSSD
  icuBedType: '5-function-electric' | '3-function-motorized';
  wardBedType: 'semi-fowler' | 'fowler';
  cssdAutoclaveCapacity: 'horizontal-double-door' | 'vertical-heavy-duty';
}

export interface BoQItem {
  id: string;
  category: ProductCategory;
  itemCode: string;
  name: string;
  specificationSummary: string;
  complianceStandard: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
}

export interface ProjectInstallation {
  id: string;
  clientName: string;
  location: string;
  type: string;
  scope: string[];
  status: 'Completed' | 'Commissioning' | 'Piping & Fabrication' | 'Design Approved';
  completionDate: string;
  otCount: number;
  bedCount: number;
  metrics: string;
}

export interface TechnicalArticle {
  id: string;
  title: string;
  standard: string;
  category: string;
  summary: string;
  highlights: string[];
  guidelines: { rule: string; value: string; importance: string }[];
}
