import React, { useState, useMemo } from 'react';
import { ProductItem, ProductCategory } from '../types';
import { PRODUCTS_CATALOG } from '../data/mockData';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Tag, 
  ArrowRight, 
  SlidersHorizontal, 
  ExternalLink, 
  Check, 
  Layers, 
  Gauge, 
  Bed, 
  Sparkles,
  ChevronRight,
  Info,
  Maximize2
} from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForQuote?: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'mgps', label: 'Medical Gas Pipelines (MGPS)' },
    { id: 'modular-ot', label: 'Modular Operation Theatres' },
    { id: 'hospital-furniture', label: 'Hospital Furniture' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.standardCompliance.some(std => std.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search & Category Filter Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input & Currency */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search code, spec, standard..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center shrink-0">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer ${currency === 'INR' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
            >
              ₹
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer ${currency === 'USD' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
            >
              $
            </button>
          </div>
        </div>
      </div>

      {/* Equipment Count Banner */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Showing {filteredProducts.length} verified hospital engineering equipment items</span>
        <span className="text-cyan-400 font-mono">Standards: HTM 02-01 • ISO 13485:2016 • ISO 7396-1</span>
      </div>

      {/* Product Cards Grid with High-Res Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const displayPrice = currency === 'USD' 
            ? `$${product.basePriceUSD.toLocaleString()}` 
            : `₹${product.basePriceINR.toLocaleString()}`;

          return (
            <div
              key={product.id}
              className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/70 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              <div>
                {/* Equipment Real Photograph Container */}
                <div 
                  onClick={() => setSelectedProduct(product)}
                  className="relative w-full h-52 bg-slate-950 overflow-hidden cursor-pointer group-hover:brightness-105 transition-all"
                >
                  {product.imageUrl ? (
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-600">
                      <Gauge className="w-12 h-12" />
                    </div>
                  )}

                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="font-mono text-[11px] font-bold text-white bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/80 shadow-md">
                      {product.code}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-700/80 shadow-md">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Zoom hint on hover */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white flex items-center gap-1">
                    <Maximize2 className="w-3 h-3" />
                    <span>Enlarge Dossier</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Category label */}
                  <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    {product.categoryLabel}
                  </div>

                  {/* Title & Desc */}
                  <h3 
                    onClick={() => setSelectedProduct(product)}
                    className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2 cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {product.shortDesc}
                  </p>

                  {/* Key Spec Snippet */}
                  <div className="space-y-1 mb-4 bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs">
                    {product.keySpecs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400 truncate mr-2">{spec.label}:</span>
                        <span className="font-mono font-medium text-slate-200 text-right shrink-0">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Standards tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.standardCompliance.map((std, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 font-mono border border-slate-800"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Actions Footer */}
              <div className="p-5 pt-3 border-t border-slate-800/80 flex items-center justify-between bg-slate-900/60">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Ex-Works Rate</div>
                  <div className="text-base font-black text-white font-mono">{displayPrice}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                    title="View Technical Dossier"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onSelectProductForQuote?.(product)}
                    className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md shadow-cyan-950 cursor-pointer flex items-center gap-1.5"
                  >
                    Add to RFQ
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Detail Dossier Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    {selectedProduct.code}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{selectedProduct.categoryLabel}</span>
                  {selectedProduct.badge && (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-xs text-slate-300">
              
              {/* Product Photograph Banner */}
              {selectedProduct.imageUrl && (
                <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner relative">
                  <img 
                    src={selectedProduct.imageUrl} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-white font-mono">
                    MWHS Official Production Photograph • {selectedProduct.code}
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Engineering & Architectural Overview</h4>
                <p className="leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Technical Specifications Matrix</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.keySpecs.map((spec, i) => (
                    <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800/90 flex justify-between items-center">
                      <span className="text-slate-400 font-medium">{spec.label}:</span>
                      <span className="font-mono font-bold text-cyan-300 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Manufacturing & Safety Highlights</h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials & Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="font-bold text-white mb-1.5">Materials & Finishes:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.materials.map((m, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="font-bold text-white mb-1.5">Standard Compliance:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.standardCompliance.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Estimated Base Rate</div>
                  <div className="text-xl font-black text-cyan-400 font-mono">
                    {currency === 'USD' ? `$${selectedProduct.basePriceUSD.toLocaleString()}` : `₹${selectedProduct.basePriceINR.toLocaleString()}`}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const prod = selectedProduct;
                    setSelectedProduct(null);
                    onSelectProductForQuote?.(prod);
                  }}
                  className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  Configure into BoQ
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
