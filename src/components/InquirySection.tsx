import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  MapPin, 
  FileText, 
  ShieldCheck,
  Check,
  Download
} from 'lucide-react';

interface InquirySectionProps {
  initialNotes?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ initialNotes = '' }) => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    contactName: '',
    email: 'meditrackindia@gmail.com',
    phone: '+91 ',
    cityCountry: 'India / Export',
    facilityType: 'Super-Specialty Hospital',
    bedCount: '250',
    otCount: '4',
    scopeMgps: true,
    scopeModularOt: true,
    scopeFurniture: true,
    scopeCssd: true,
    notes: initialNotes || 'Require turnkey technical quotation and architectural CAD layout review for hospital expansion project.'
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MWHS-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(generatedRef);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {!submittedRef ? (
          <div>
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 uppercase tracking-wider">
                Turnkey Tender & Commercial RFQ
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-2">
                Request Engineering Proposal & Turnkey Quotation
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-lg mx-auto">
                Operations & Engineering Service Centre: <span className="text-slate-300 font-mono">369, BARBARI, THAMAKITILA COLLEGE ROAD, GUWAHATI - 781036, ASSAM</span>
              </p>
              <p className="text-[11px] text-cyan-400 mt-0.5 max-w-lg mx-auto font-medium">
                Submit project spatial specifications for turnkey MGPS, Modular OT, CSSD & ICU furniture budgeting.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Hospital / Medical Center Name *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      value={formData.hospitalName}
                      onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                      placeholder="e.g. Apex Memorial Hospital"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Key Contact Person / Designation *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Dr. A. Sharma (Medical Director)"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Official Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Project Location (City, State / Country)</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.cityCountry}
                      onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Planned Beds & OT Count</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={`${formData.bedCount} Beds`}
                      onChange={(e) => setFormData({ ...formData, bedCount: e.target.value.replace(/\D/g, '') })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white text-center font-mono focus:outline-none focus:border-cyan-500"
                    />
                    <input
                      type="text"
                      value={`${formData.otCount} OTs`}
                      onChange={(e) => setFormData({ ...formData, otCount: e.target.value.replace(/\D/g, '') })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white text-center font-mono focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Scope Checkboxes */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 my-4">
                <label className="block text-slate-300 font-semibold mb-2.5">Turnkey Scope Required:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.scopeMgps}
                      onChange={(e) => setFormData({ ...formData, scopeMgps: e.target.checked })}
                      className="accent-cyan-500 rounded"
                    />
                    <span>MGPS Pipeline</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.scopeModularOt}
                      onChange={(e) => setFormData({ ...formData, scopeModularOt: e.target.checked })}
                      className="accent-cyan-500 rounded"
                    />
                    <span>Modular OTs</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.scopeFurniture}
                      onChange={(e) => setFormData({ ...formData, scopeFurniture: e.target.checked })}
                      className="accent-cyan-500 rounded"
                    />
                    <span>Hospital Furniture</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.scopeCssd}
                      onChange={(e) => setFormData({ ...formData, scopeCssd: e.target.checked })}
                      className="accent-cyan-500 rounded"
                    />
                    <span>CSSD Sterilizers</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Additional Project Specifications / Notes</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  NDA & Medical confidentiality assured. ISO 13485 audited.
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-950 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  Submit Turnkey RFQ
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Turnkey RFQ Registered Successfully</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your facility dossier has been dispatched to the MWHS Lead Project Engineering Team. Our technical consultant will connect within 4 business hours.
            </p>

            <div className="inline-block bg-slate-950 border border-slate-800 p-4 rounded-xl text-left font-mono text-xs">
              <div className="text-slate-400">Reference ID: <strong className="text-cyan-400">{submittedRef}</strong></div>
              <div className="text-slate-400">Hospital: <strong className="text-white">{formData.hospitalName || 'Health Center'}</strong></div>
              <div className="text-slate-400">Target Contact: <strong className="text-white">{formData.email}</strong></div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setSubmittedRef(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Submit Another Facility RFQ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
