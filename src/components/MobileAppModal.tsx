import React, { useState } from 'react';
import { 
  Smartphone, 
  Download, 
  CheckCircle2, 
  Share2, 
  PlusSquare, 
  ShieldCheck, 
  QrCode, 
  Globe2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface MobileAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMobileMode: boolean;
  onToggleMobileMode: () => void;
}

export const MobileAppModal: React.FC<MobileAppModalProps> = ({
  isOpen,
  onClose,
  isMobileMode,
  onToggleMobileMode
}) => {
  const [activePlatform, setActivePlatform] = useState<'android' | 'ios'>('android');
  const [installedNotice, setInstalledNotice] = useState(false);

  if (!isOpen) return null;

  const handleInstallClick = () => {
    setInstalledNotice(true);
    setTimeout(() => setInstalledNotice(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-cyan-950">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">MWHS Mobile Application</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Ready for Play Store & App Store
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official PWA & Native-Ready App for Hospital Administrators & Biomedical Engineers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer font-bold"
          >
            ✕
          </button>
        </div>

        {/* Quick Simulator Switch */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              Interactive Mobile Device Viewport
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Preview this application exactly as it appears on an iPhone or Android phone screen.
            </div>
          </div>

          <button
            onClick={() => {
              onToggleMobileMode();
              onClose();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              isMobileMode
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg'
                : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-950'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            {isMobileMode ? 'Switch to Desktop Mode' : 'Launch Mobile App View'}
          </button>
        </div>

        {/* Platform Selector */}
        <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 mb-6">
          <button
            onClick={() => setActivePlatform('android')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activePlatform === 'android'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Google Play Store (Android)</span>
          </button>
          <button
            onClick={() => setActivePlatform('ios')}
            className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activePlatform === 'ios'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Apple App Store (iOS)</span>
          </button>
        </div>

        {/* Platform Content */}
        {activePlatform === 'android' ? (
          <div className="space-y-4 text-xs text-slate-300">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">Google Play Store & Android APK / PWA</div>
                  <div className="text-slate-400 text-[11px]">Package: com.mwhs.business.hospital</div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  Android 8.0+
                </span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                This web application contains a standalone web application manifest (<code className="text-cyan-400">manifest.json</code>) configured for Google Play TWA (Trusted Web Activity) bundling and instant home-screen install.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleInstallClick}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download className="w-4 h-4" />
                  Install App on Android Device
                </button>
              </div>

              {installedNotice && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-xl flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Installation instruction initiated: Check browser prompt or tap Chrome options → "Install app".</span>
                </div>
              )}
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-white mb-2">How to install on Android phone:</div>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-400 text-[11px]">
                <li>Open this URL in Google Chrome on your Android mobile device.</li>
                <li>Tap the three vertical dots (Menu) at the top-right corner.</li>
                <li>Tap <strong className="text-white">"Install app"</strong> or <strong className="text-white">"Add to Home screen"</strong>.</li>
                <li>The MWHS icon will be placed directly on your phone home screen like a native Play Store app.</li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-slate-300">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">Apple App Store & iOS Web App</div>
                  <div className="text-slate-400 text-[11px]">Bundle: com.mwhs.business.ios</div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  iOS 14.0+
                </span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                Optimized for Apple Safari standalone mode with full touch gesture support, offline asset caching, and high-DPI retina display rendering.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="font-bold text-white mb-2">How to install on iPhone / iPad (Safari):</div>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-400 text-[11px]">
                <li>Open this URL in <strong className="text-white">Safari</strong> on your iPhone or iPad.</li>
                <li>Tap the <strong className="text-white">Share</strong> button (box with an upward arrow) at the bottom.</li>
                <li>Scroll down and tap <strong className="text-white">"Add to Home Screen"</strong> (<PlusSquare className="w-3.5 h-3.5 inline mx-1 text-cyan-400" />).</li>
                <li>Tap <strong className="text-white">"Add"</strong> in the top right corner. The app will launch in full-screen standalone mode.</li>
              </ol>
            </div>
          </div>
        )}

        {/* Certifications & Publishing Info */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PWA Manifest v1.0 • HTTPS TLS 1.3 Certified</span>
          </div>
          <button
            onClick={onClose}
            className="text-cyan-400 font-bold hover:underline cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
