"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Loader2,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  LogOut,
  User,
} from "lucide-react";
import { buildWhatsappUrl } from "@/lib/site";
import LiveFleetDemo from "@/components/LiveFleetDemo";

const EXTERNAL_PANEL_URL =
  process.env.NEXT_PUBLIC_PANEL_URL || "https://www.petamobil.com.tr/auth/login";

export default function CustomerLoginClient() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [forgotOpen, setForgotOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lifego_panel_user");
      if (saved) {
        setUsername(saved);
        setRememberMe(true);
      }
      const activeSession = sessionStorage.getItem("lifego_active_user");
      if (activeSession) {
        setLoggedInUser(activeSession);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const canSubmit = username.trim().length > 0 && password.trim().length > 0;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || connecting) return;

    const cleanUser = username.trim();
    try {
      if (rememberMe) {
        localStorage.setItem("lifego_panel_user", cleanUser);
      } else {
        localStorage.removeItem("lifego_panel_user");
      }
      sessionStorage.setItem("lifego_active_user", cleanUser);
    } catch {
      // ignore
    }

    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setLoggedInUser(cleanUser);
    }, 650);
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem("lifego_active_user");
    } catch {
      // ignore
    }
    setLoggedInUser(null);
    setPassword("");
  };

  // Logged-in In-Site Customer Panel View
  if (loggedInUser) {
    return (
      <section className="min-h-[calc(100vh-116px)] bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Active Session Bar */}
          <div className="rounded-3xl bg-[#0B2545] text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl lifego-gradient-bg flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-sky-300 font-bold uppercase tracking-wider">
                  LifeGO Müşteri Paneli • Aktif Oturum
                </div>
                <div className="text-base sm:text-lg font-extrabold">{loggedInUser}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={EXTERNAL_PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl lifego-gradient-bg text-white text-xs sm:text-sm font-extrabold inline-flex items-center gap-2 shadow-md hover:opacity-95 transition"
              >
                Canlı Takip Sunucusuna Bağlan
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Çıkış Yap
              </button>
            </div>
          </div>

          {/* Info banner explaining direct server handoff */}
          <div className="rounded-2xl bg-sky-50 border border-sky-200 px-5 py-3.5 text-xs sm:text-sm text-[#0B2545] flex flex-wrap items-center justify-between gap-3">
            <span>
              <strong>Oturum Açıldı:</strong> Aşağıda LifeGO canlı harita ve telemetri arayüzünü
              kullanabilir veya sağ üstteki butonla doğrudan{" "}
              <a
                href={EXTERNAL_PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-[#0077B6]"
              >
                {EXTERNAL_PANEL_URL}
              </a>{" "}
              sunucusuna bağlanabilirsiniz.
            </span>
          </div>

          {/* Interactive Live Fleet Panel */}
          <LiveFleetDemo />
        </div>
      </section>
    );
  }

  return (
    <div className="relative min-h-[calc(100vh-116px)] w-full flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Full-bleed Scenic Highway & Fleet Background */}
      <Image
        src="/images/sector-logistics-fleet.jpg"
        alt="LifeGO mobil Araç Takip Müşteri Paneli Arka Plan"
        fill
        priority
        className="object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#061529]/75 via-[#0B2545]/55 to-[#061529]/75 backdrop-blur-[2px]" />

      {/* Centered White Login Card */}
      <div className="relative z-10 w-full max-w-[440px] bg-white rounded-[28px] shadow-2xl border border-white/60 px-7 sm:px-9 py-9 sm:py-10">
        {/* Back link */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#0B2545] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Ana Sayfa
          </Link>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" /> 256-Bit SSL
          </span>
        </div>

        {/* LifeGO Logo */}
        <div className="flex justify-center py-3">
          <Image
            src="/images/lifegomobil-logo.jpg"
            alt="LifeGO mobil Logo"
            width={240}
            height={60}
            priority
            className="h-13 w-auto object-contain"
          />
        </div>

        <div className="border-b border-slate-200 my-5" />

        {forgotOpen ? (
          <div className="space-y-4 py-2 text-center">
            <CheckCircle2 className="w-10 h-10 text-[#00B4D8] mx-auto" />
            <h2 className="text-lg font-extrabold text-[#0B2545]">Parola Sıfırlama Desteği</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Güvenliğiniz için müşteri paneli şifre yenileme işlemleri 7/24 teknik destek hattımız
              veya WhatsApp üzerinden anında yapılmaktadır.
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={buildWhatsappUrl("Merhaba, LifeGO mobil müşteri paneli parolamı sıfırlamak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
              >
                WhatsApp ile Parola Sıfırla
              </a>
              <button
                type="button"
                onClick={() => setForgotOpen(false)}
                className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition cursor-pointer"
              >
                Giriş Ekranına Dön
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email / Username */}
            <div>
              <label
                htmlFor="lifego-username"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                E-posta veya kullanıcı adı
              </label>
              <input
                id="lifego-username"
                type="text"
                required
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ornek@lifegomobil.com"
                className="w-full px-4 py-3 rounded-xl bg-sky-50/75 border border-slate-200 text-sm text-[#0B2545] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="lifego-password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Parola
                </label>
                <button
                  type="button"
                  onClick={() => setForgotOpen(true)}
                  className="text-xs font-semibold text-[#0077B6] hover:text-[#F7941D] transition cursor-pointer"
                >
                  Parolanızı mı unuttunuz?
                </button>
              </div>
              <div className="relative">
                <input
                  id="lifego-password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-4 pr-11 py-3 rounded-xl bg-sky-50/75 border border-slate-200 text-sm text-[#0B2545] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Parolayı Göster/Gizle"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0B2545] transition cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-2.5 pt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded-full accent-[#0B2545] cursor-pointer"
              />
              <span className="text-sm text-slate-600">Beni Hatırla</span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!canSubmit || connecting}
              className={`w-full py-3.5 rounded-full font-extrabold text-sm transition flex items-center justify-center gap-2 mt-2 ${
                canSubmit && !connecting
                  ? "lifego-gradient-bg text-white shadow-lg hover:opacity-95 cursor-pointer"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {connecting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Müşteri Paneline Bağlanılıyor...
                </>
              ) : (
                "Oturum aç"
              )}
            </button>

            <div className="text-center pt-1">
              <a
                href={EXTERNAL_PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0077B6] transition"
              >
                Doğrudan Takip Sunucusundan Giriş Yap
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </form>
        )}

        {/* Store Badges */}
        <div className="border-t border-slate-200 mt-7 pt-6">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={EXTERNAL_PANEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-black hover:bg-slate-900 text-white rounded-xl px-3.5 py-2.5 transition"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none">
                <path d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.2-9.2v-.2L3.7 2.3l-.1.1z" fill="#00B4D8" />
                <path d="M16 15.6l-3.1-3.1v-.2l3.1-3.1.1.1 3.6 2.1c1 .6 1 1.6 0 2.2l-3.6 2.1-.1-.1z" fill="#F7941D" />
                <path d="M16.1 15.5L12.9 12.3 3.6 21.6c.4.4 1 .4 1.7 0l10.8-6.1z" fill="#E91E63" />
                <path d="M16.1 9.1L5.3 3c-.7-.4-1.3-.4-1.7 0l9.3 9.3 3.2-3.2z" fill="#22C55E" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[9px] uppercase tracking-wider text-slate-300">GET IT ON</div>
                <div className="text-xs font-bold">Google Play</div>
              </div>
            </a>

            <a
              href={EXTERNAL_PANEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-black hover:bg-slate-900 text-white rounded-xl px-3.5 py-2.5 transition"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.09-.52 2.72-1.3z" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[9px] text-slate-300">Download on the</div>
                <div className="text-xs font-bold">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
