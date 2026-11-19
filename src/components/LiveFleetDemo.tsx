"use client";

import { useState } from "react";
import {
  Navigation,
  ShieldAlert,
  Lock,
  Unlock,
  BatteryCharging,
  Gauge,
  Radio,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface SimVehicle {
  id: string;
  plate: string;
  label: string;
  device: string;
  city: string;
  speed: number;
  voltage: string;
  fuel: string;
  coords: { x: number; y: number };
  status: "Hareket Halinde" | "Park Halinde";
}

const VEHICLES: SimVehicle[] = [
  {
    id: "v1",
    plate: "34 LFG 2026",
    label: "Bireysel Sedan",
    device: "LG-110 OBD 4G",
    city: "İstanbul • Kadıköy Sahil",
    speed: 64,
    voltage: "14.1V",
    fuel: "%78",
    coords: { x: 34, y: 42 },
    status: "Hareket Halinde",
  },
  {
    id: "v2",
    plate: "06 TRK 480",
    label: "Soğuk Zincir Tır",
    device: "LG-700 Heavy + CAN",
    city: "Ankara • Anadolu Otoyolu",
    speed: 82,
    voltage: "27.8V",
    fuel: "%62 • -18.2°C",
    coords: { x: 64, y: 34 },
    status: "Hareket Halinde",
  },
  {
    id: "v3",
    plate: "35 MOT 912",
    label: "Touring Motosiklet",
    device: "LG-200 Moto IP67",
    city: "İzmir • Urla Marina",
    speed: 0,
    voltage: "12.7V",
    fuel: "Akü Korumalı",
    coords: { x: 24, y: 68 },
    status: "Park Halinde",
  },
  {
    id: "v4",
    plate: "07 KRV 704",
    label: "Akıllı Karavan",
    device: "LG-400 Karavan",
    city: "Antalya • Kaş Kamp",
    speed: 0,
    voltage: "13.2V Solar",
    fuel: "Yaşam Aküsü %96",
    coords: { x: 72, y: 66 },
    status: "Park Halinde",
  },
];

export default function LiveFleetDemo() {
  const [selectedId, setSelectedId] = useState<string>("v1");
  const [blockedIds, setBlockedIds] = useState<Record<string, boolean>>({});
  const [geofenceActive, setGeofenceActive] = useState<boolean>(true);

  const active = VEHICLES.find((v) => v.id === selectedId) ?? VEHICLES[0];
  const isBlocked = !!blockedIds[active.id];

  const toggleBlock = () => {
    setBlockedIds((prev) => ({ ...prev, [active.id]: !prev[active.id] }));
  };

  return (
    <div className="rounded-3xl bg-[#071930] border border-white/10 shadow-2xl overflow-hidden text-white">
      {/* Top Bar */}
      <div className="px-6 py-4 bg-[#0B2545] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-sm sm:text-base">
            LifeGO Bulut Canlı Harita Simülasyonu
          </span>
          <span className="hidden sm:inline-block text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300 font-medium">
            4G LTE • 1 sn Yenileme
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Radio className="w-4 h-4 text-[#00B4D8]" />
          GPS + GLONASS + Galileo Aktif
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Vehicle List */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 p-4 space-y-2.5 bg-[#081D38]">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
            Aktif Araçlar (Test Etmek İçin Seçin)
          </div>
          {VEHICLES.map((v) => {
            const selected = v.id === active.id;
            const vBlocked = !!blockedIds[v.id];
            return (
              <button
                key={v.id}
                onClick={() => setSelectedId(v.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition ${
                  selected
                    ? "bg-[#133B6B]/80 border-[#00B4D8] shadow-lg"
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-white">{v.plate}</span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      vBlocked
                        ? "bg-rose-500/20 text-rose-300"
                        : v.speed > 0
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-amber-500/20 text-amber-300"
                    }`}
                  >
                    {vBlocked ? "Blokaj Aktif" : v.status}
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1">{v.label} • {v.device}</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#F7941D]" />
                  {v.city}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Map Canvas & Telemetry */}
        <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between gap-5">
          {/* Stylized Vector Live Map */}
          <div className="relative h-64 sm:h-72 rounded-2xl bg-[#051224] border border-white/10 overflow-hidden">
            {/* Subtle Map Grid & Roads */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 600 300" preserveAspectRatio="none">
              <defs>
                <pattern id="simGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.35" />
                </pattern>
              </defs>
              <rect width="600" height="300" fill="url(#simGrid)" />
              <path d="M 0 180 Q 150 120 300 155 T 600 95" fill="none" stroke="#00B4D8" strokeWidth="3" strokeDasharray="8 6" />
              <path d="M 80 0 Q 210 140 280 300" fill="none" stroke="#F7941D" strokeWidth="2" strokeOpacity="0.6" />
              <path d="M 420 0 Q 380 150 480 300" fill="none" stroke="#E91E63" strokeWidth="2" strokeOpacity="0.45" />
            </svg>

            {/* Geofence ring */}
            {geofenceActive && (
              <div
                className="absolute w-32 h-32 -ml-16 -mt-16 rounded-full border-2 border-dashed border-[#00B4D8]/60 bg-[#00B4D8]/10 transition-all duration-500"
                style={{ left: `${active.coords.x}%`, top: `${active.coords.y}%` }}
              />
            )}

            {/* Vehicle Pins */}
            {VEHICLES.map((v) => {
              const isCurrent = v.id === active.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedId(v.id)}
                  style={{ left: `${v.coords.x}%`, top: `${v.coords.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isCurrent ? "z-20 scale-115" : "z-10 opacity-65 hover:opacity-100"
                  }`}
                  aria-label={v.plate}
                >
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg border ${
                      isCurrent
                        ? "bg-[#F7941D] text-[#061529] border-white"
                        : "bg-[#0B2545] text-white border-sky-400/50"
                    }`}
                  >
                    <Navigation className="w-3 h-3" />
                    {v.plate}
                  </div>
                </button>
              );
            })}

            {/* Live Overlay Badge */}
            <div className="absolute bottom-3 left-3 bg-[#0B2545]/90 backdrop-blur px-3 py-1.5 rounded-xl border border-white/10 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{active.city}</span>
            </div>
          </div>

          {/* Telemetry Cards + Interactive Controls */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-[#00B4D8]" /> Anlık Hız
              </div>
              <div className="text-lg font-extrabold mt-1">
                {isBlocked ? "0 km/s" : `${active.speed} km/s`}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <BatteryCharging className="w-3.5 h-3.5 text-[#F7941D]" /> Akü Voltajı
              </div>
              <div className="text-lg font-extrabold mt-1">{active.voltage}</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] text-slate-400">Telemetri</div>
              <div className="text-sm font-bold text-sky-300 mt-1.5">{active.fuel}</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] text-slate-400">Güvenlik Çiti</div>
              <button
                onClick={() => setGeofenceActive(!geofenceActive)}
                className={`mt-1.5 text-xs font-bold px-2.5 py-1 rounded-lg transition ${
                  geofenceActive
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {geofenceActive ? "Geofence Aktif" : "Geofence Kapalı"}
              </button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="text-xs text-slate-300 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#F7941D]" />
              {isBlocked
                ? "Motor blokaj komutu gönderildi. Araç güvenli duruş sonrası kilitlendi."
                : "Motor normal çalışma modunda. Acil durumda tek tıkla bloke edebilirsiniz."}
            </div>
            <button
              onClick={toggleBlock}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                isBlocked
                  ? "bg-emerald-500 hover:bg-emerald-400 text-[#061529]"
                  : "bg-rose-600 hover:bg-rose-500 text-white"
              }`}
            >
              {isBlocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              {isBlocked ? "Motor Blokajı Kaldır" : "Motor Blokaj Uygula"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
