"use client";

import { useEffect, useRef, useState } from "react";
import { Gauge, KeyRound, Thermometer, MapPin, Radio } from "lucide-react";

interface AnimatedVehicle {
  id: string;
  plate: string;
  color: string;
  baseSpeed: number;
  ignition: "Açık" | "Park";
  temp: string;
  locationLabel: string;
  waypoints: [number, number][]; // [lat, lng]
  phaseOffset: number;
  speedFactor: number;
}

// Zoom 6 Web Mercator tile window covering all of Turkey
const ZOOM = 6;
const TILE_X_MIN = 36;
const TILE_X_MAX = 40; // 5 tiles wide (5 * 256 = 1280)
const TILE_Y_MIN = 23;
const TILE_Y_MAX = 25; // 3 tiles tall (3 * 256 = 768)
const MAP_WIDTH = (TILE_X_MAX - TILE_X_MIN + 1) * 256; // 1280
const MAP_HEIGHT = (TILE_Y_MAX - TILE_Y_MIN + 1) * 256; // 768
const VIEW_Y_OFFSET = 55; // Crop slightly from top to center Turkey nicely
const VIEW_HEIGHT = 620;

function projectLatLng(lat: number, lng: number): { x: number; y: number } {
  const n = Math.pow(2, ZOOM);
  const xTile = ((lng + 180) / 360) * n;
  const latRad = (lat * Math.PI) / 180;
  const yTile =
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;
  return {
    x: (xTile - TILE_X_MIN) * 256,
    y: (yTile - TILE_Y_MIN) * 256 - VIEW_Y_OFFSET,
  };
}

const TURKEY_VEHICLES: AnimatedVehicle[] = [
  {
    id: "v-bolu",
    plate: "34 LFG 34",
    color: "#00B4D8",
    baseSpeed: 84,
    ignition: "Açık",
    temp: "4,8 °C",
    locationLabel: "Bolu • O-4 Otoyolu",
    waypoints: [
      [40.76, 29.92], // Kocaeli
      [40.78, 30.40], // Sakarya
      [40.84, 31.16], // Düzce
      [40.74, 31.61], // Bolu
      [40.58, 32.12], // Gerede
    ],
    phaseOffset: 0.15,
    speedFactor: 0.045,
  },
  {
    id: "v-adana",
    plate: "01 LFG 01",
    color: "#F7941D",
    baseSpeed: 91,
    ignition: "Açık",
    temp: "16,4 °C",
    locationLabel: "Adana • O-52",
    waypoints: [
      [36.99, 35.12], // Tarsus
      [37.00, 35.33], // Adana
      [37.03, 35.81], // Ceyhan
      [37.07, 36.25], // Osmaniye
      [37.07, 37.38], // Gaziantep
    ],
    phaseOffset: 0.42,
    speedFactor: 0.04,
  },
  {
    id: "v-izmir",
    plate: "35 LFG 35",
    color: "#FB923C",
    baseSpeed: 76,
    ignition: "Açık",
    temp: "12,1 °C",
    locationLabel: "Balıkesir • O-5",
    waypoints: [
      [38.42, 27.14], // İzmir
      [38.62, 27.43], // Manisa
      [38.92, 27.84], // Akhisar
      [39.65, 27.89], // Balıkesir
      [40.02, 28.25], // Susurluk
    ],
    phaseOffset: 0.65,
    speedFactor: 0.038,
  },
  {
    id: "v-ankara",
    plate: "06 LFG 06",
    color: "#38BDF8",
    baseSpeed: 88,
    ignition: "Açık",
    temp: "3,2 °C",
    locationLabel: "Ankara • D-750",
    waypoints: [
      [39.93, 32.86], // Ankara
      [39.55, 33.05], // Gölbaşı güney
      [39.02, 33.42], // Şereflikoçhisar
      [38.37, 34.03], // Aksaray
    ],
    phaseOffset: 0.25,
    speedFactor: 0.042,
  },
  {
    id: "v-samsun",
    plate: "55 LFG 55",
    color: "#2DD4BF",
    baseSpeed: 72,
    ignition: "Açık",
    temp: "9,6 °C",
    locationLabel: "Samsun • D-010",
    waypoints: [
      [41.56, 35.90], // Bafra
      [41.29, 36.33], // Samsun
      [41.13, 37.28], // Ünye
      [40.98, 37.88], // Ordu
    ],
    phaseOffset: 0.55,
    speedFactor: 0.036,
  },
  {
    id: "v-antalya",
    plate: "07 LFG 07",
    color: "#C084FC",
    baseSpeed: 68,
    ignition: "Açık",
    temp: "18,5 °C",
    locationLabel: "Antalya • D-400",
    waypoints: [
      [36.75, 30.56], // Kemer
      [36.89, 30.71], // Antalya
      [36.91, 31.10], // Serik
      [36.79, 31.44], // Manavgat
    ],
    phaseOffset: 0.1,
    speedFactor: 0.044,
  },
  {
    id: "v-erzurum",
    plate: "25 LFG 25",
    color: "#60A5FA",
    baseSpeed: 64,
    ignition: "Açık",
    temp: "-2,4 °C",
    locationLabel: "Erzurum • D-100",
    waypoints: [
      [39.92, 40.68], // Aşkale
      [39.90, 41.27], // Erzurum
      [39.98, 41.68], // Pasinler
      [40.04, 42.17], // Horasan
    ],
    phaseOffset: 0.78,
    speedFactor: 0.035,
  },
  {
    id: "v-diyarbakir",
    plate: "21 LFG 21",
    color: "#F472B6",
    baseSpeed: 81,
    ignition: "Açık",
    temp: "11,2 °C",
    locationLabel: "Diyarbakır • D-370",
    waypoints: [
      [37.91, 40.23], // Diyarbakır
      [37.85, 40.66], // Bismil
      [37.88, 41.13], // Batman
      [37.93, 41.94], // Siirt
    ],
    phaseOffset: 0.35,
    speedFactor: 0.04,
  },
];

function interpolatePath(
  points: { x: number; y: number }[],
  t: number
): { x: number; y: number } {
  const clamped = Math.max(0, Math.min(1, t));
  const totalSegments = points.length - 1;
  const scaled = clamped * totalSegments;
  const idx = Math.min(Math.floor(scaled), totalSegments - 1);
  const localT = scaled - idx;
  const p1 = points[idx];
  const p2 = points[idx + 1];
  return {
    x: p1.x + (p2.x - p1.x) * localT,
    y: p1.y + (p2.y - p1.y) * localT,
  };
}

export default function TurkeyLiveFleetMap() {
  const [selectedId, setSelectedId] = useState<string>(TURKEY_VEHICLES[0].id);
  const [tick, setTick] = useState<number>(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsedSec = (ts - startRef.current) / 1000;
      setTick(elapsedSec);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Pre-project all vehicle routes
  const projectedVehicles = TURKEY_VEHICLES.map((v) => {
    const pts = v.waypoints.map(([lat, lng]) => projectLatLng(lat, lng));
    // Smooth ping-pong motion along highway route
    const raw = (tick * v.speedFactor + v.phaseOffset) % 2;
    const progress = raw <= 1 ? raw : 2 - raw;
    const pos = interpolatePath(pts, progress);
    const liveSpeed = Math.round(v.baseSpeed + Math.sin(tick * 1.4 + v.phaseOffset * 10) * 3);
    const polyline = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    return { ...v, pts, pos, liveSpeed, polyline };
  });

  const activeVehicle =
    projectedVehicles.find((v) => v.id === selectedId) ?? projectedVehicles[0];

  return (
    <section className="py-16 bg-[#061529] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#00B4D8]">
              <Radio className="w-3.5 h-3.5 text-[#F7941D] animate-pulse" />
              81 İlde Canlı 4G LTE Araç Takip Simülasyonu
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Türkiye Genelinde <span className="lifego-gradient-text">Canlı Hareketli Filo</span> Haritası
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            Harita üzerinde hareket eden araçlardan herhangi birine tıklayarak anlık hız, kontak,
            sıcaklık ve konum verilerini inceleyebilirsiniz.
          </p>
        </div>

        {/* Interactive Dark Turkey Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0D1117]">
          {/* Responsive Aspect Ratio Box matching 1280 x 620 */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[1280/620] overflow-hidden select-none">
            {/* Local Dark Turkey Satellite + Highway Map (Zero API Key, Pixel-Aligned Web Mercator) */}
            <img
              src="/images/turkey-dark-map.jpg"
              alt="Türkiye Canlı Araç Takip Haritası"
              draggable={false}
              style={{
                position: "absolute",
                left: "0%",
                top: `${(-VIEW_Y_OFFSET / VIEW_HEIGHT) * 100}%`,
                width: "100%",
                height: `${(MAP_HEIGHT / VIEW_HEIGHT) * 100}%`,
                objectFit: "fill",
              }}
            />

            {/* Subtle top/bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#061529]/35 via-transparent to-[#061529]/65 pointer-events-none" />

            {/* Top-Right Country Badge */}
            <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-lg bg-[#0B2545]/90 backdrop-blur border border-white/15 text-xs font-bold text-white shadow">
              Türkiye • Canlı Harita
            </div>

            {/* SVG Route Trails + Animated Vehicles Overlay */}
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${VIEW_HEIGHT}`}
              className="absolute inset-0 w-full h-full z-10"
              preserveAspectRatio="none"
            >
              {projectedVehicles.map((v) => {
                const isSelected = v.id === activeVehicle.id;
                return (
                  <g
                    key={v.id}
                    onClick={() => setSelectedId(v.id)}
                    className="cursor-pointer"
                  >
                    {/* Glowing Highway Trail */}
                    <polyline
                      points={v.polyline}
                      fill="none"
                      stroke={v.color}
                      strokeWidth={isSelected ? 4.5 : 3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity={isSelected ? 0.92 : 0.62}
                    />

                    {/* Outer Radar Pulse Ring */}
                    <circle
                      cx={v.pos.x}
                      cy={v.pos.y}
                      r={isSelected ? 20 : 14}
                      fill={v.color}
                      fillOpacity={0.18}
                      stroke={v.color}
                      strokeWidth={1.8}
                      strokeOpacity={0.85}
                    />

                    {/* Inner Core Vehicle Dot */}
                    <circle
                      cx={v.pos.x}
                      cy={v.pos.y}
                      r={isSelected ? 7.5 : 5.5}
                      fill="#FFFFFF"
                      stroke={v.color}
                      strokeWidth={3.5}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Floating Plate + Live Speed Tooltips for Featured/Selected Vehicles */}
            {projectedVehicles
              .filter((v) => v.id === activeVehicle.id || v.id === "v-bolu" || v.id === "v-adana")
              .map((v) => {
                const leftPct = (v.pos.x / MAP_WIDTH) * 100;
                const topPct = (v.pos.y / VIEW_HEIGHT) * 100;
                const isSelected = v.id === activeVehicle.id;
                return (
                  <button
                    key={`label-${v.id}`}
                    type="button"
                    onClick={() => setSelectedId(v.id)}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                    }}
                    className={`absolute z-20 -translate-x-1/2 -translate-y-[155%] px-3 py-1 rounded-lg text-[11px] sm:text-xs font-extrabold whitespace-nowrap shadow-xl border transition cursor-pointer ${
                      isSelected
                        ? "bg-[#0B2545] text-white border-[#00B4D8] scale-105"
                        : "bg-[#0B2545]/90 text-slate-100 border-white/20 hover:border-[#F7941D]"
                    }`}
                  >
                    {v.plate} • <span className="text-[#00B4D8]">{v.liveSpeed} km/sa</span>
                  </button>
                );
              })}

            {/* Bottom Center Glassmorphic Live Telemetry HUD Card (like screenshot!) */}
            <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-[650px] rounded-2xl bg-[#0B1C33]/92 backdrop-blur-md border border-white/15 p-4 shadow-2xl">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="inline-flex items-center rounded-lg overflow-hidden border border-slate-300/80 bg-white text-[#0B2545] shadow-sm">
                  <span className="bg-[#1D4ED8] text-white text-[10px] font-black px-1.5 py-1">
                    TR
                  </span>
                  <span className="px-2.5 py-0.5 text-sm font-black tracking-wide">
                    {activeVehicle.plate}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  LifeGO Canlı Demo Verileri
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                <div className="rounded-xl bg-[#132947]/90 border border-white/10 p-2.5">
                  <div className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-[#F7941D]" /> Hız
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    {activeVehicle.liveSpeed} km/sa
                  </div>
                </div>

                <div className="rounded-xl bg-[#132947]/90 border border-white/10 p-2.5">
                  <div className="text-[11px] text-slate-300 flex items-center gap-1">
                    <KeyRound className="w-3.5 h-3.5 text-[#F7941D]" /> Kontak
                  </div>
                  <div className="text-sm font-extrabold text-emerald-400 mt-0.5">
                    {activeVehicle.ignition}
                  </div>
                </div>

                <div className="rounded-xl bg-[#132947]/90 border border-white/10 p-2.5">
                  <div className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-[#00B4D8]" /> Sıcaklık
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    {activeVehicle.temp}
                  </div>
                </div>

                <div className="rounded-xl bg-[#132947]/90 border border-white/10 p-2.5">
                  <div className="text-[11px] text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E91E63]" /> Konum
                  </div>
                  <div className="text-xs font-extrabold text-white mt-1 truncate">
                    {activeVehicle.locationLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile HUD Card (below map on small screens) */}
          <div className="md:hidden p-4 bg-[#0B1C33] border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center rounded-md overflow-hidden bg-white text-[#0B2545]">
                <span className="bg-[#1D4ED8] text-white text-[10px] font-black px-1.5 py-0.5">
                  TR
                </span>
                <span className="px-2 py-0.5 text-xs font-black">{activeVehicle.plate}</span>
              </div>
              <span className="text-[11px] text-slate-400">{activeVehicle.locationLabel}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-white/5 p-2">
                <div className="text-[10px] text-slate-400">Hız</div>
                <div className="text-xs font-extrabold">{activeVehicle.liveSpeed} km/sa</div>
              </div>
              <div className="rounded-lg bg-white/5 p-2">
                <div className="text-[10px] text-slate-400">Kontak</div>
                <div className="text-xs font-extrabold text-emerald-400">{activeVehicle.ignition}</div>
              </div>
              <div className="rounded-lg bg-white/5 p-2">
                <div className="text-[10px] text-slate-400">Sıcaklık</div>
                <div className="text-xs font-extrabold">{activeVehicle.temp}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Vehicle Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {projectedVehicles.map((v) => (
            <button
              key={`pill-${v.id}`}
              type="button"
              onClick={() => setSelectedId(v.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition cursor-pointer inline-flex items-center gap-1.5 ${
                v.id === activeVehicle.id
                  ? "bg-white text-[#0B2545] border-white"
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: v.color }}
              />
              {v.plate}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
