"use client";

import Image from "next/image";
import { Radio } from "lucide-react";

const HIGHWAY_LANES = [
  // Left carriageway (approaching toward foreground left-center)
  {
    id: "lane-left-1",
    path: "M 455 102 C 360 132, 238 175, 212 290 C 194 368, 224 445, 298 545",
    color: "#F7941D",
    glow: "#FDBA74",
    duration: "4.6s",
    delay: "0s",
    plate: "34 LFG 01",
  },
  {
    id: "lane-left-2",
    path: "M 465 104 C 378 138, 266 184, 248 295 C 236 372, 295 445, 420 545",
    color: "#00B4D8",
    glow: "#38BDF8",
    duration: "5.4s",
    delay: "-1.8s",
    plate: "06 LFG 42",
  },
  {
    id: "lane-left-3",
    path: "M 476 106 C 392 142, 296 195, 292 298 C 290 368, 365 445, 530 545",
    color: "#38BDF8",
    glow: "#7DD3FC",
    duration: "4.9s",
    delay: "-3.1s",
    plate: "35 LFG 88",
  },
  // Right carriageway (flowing from foreground right toward horizon)
  {
    id: "lane-right-1",
    path: "M 775 530 C 640 420, 480 330, 385 245 C 335 198, 392 148, 498 106",
    color: "#00B4D8",
    glow: "#67E8F9",
    duration: "5.2s",
    delay: "-0.9s",
    plate: "01 LFG 19",
  },
  {
    id: "lane-right-2",
    path: "M 885 480 C 720 385, 550 305, 428 232 C 365 190, 412 145, 512 108",
    color: "#F7941D",
    glow: "#FDE047",
    duration: "4.3s",
    delay: "-2.4s",
    plate: "16 LFG 77",
  },
  {
    id: "lane-right-3",
    path: "M 690 540 C 570 430, 435 335, 355 250 C 315 202, 378 150, 488 106",
    color: "#E91E63",
    glow: "#F472B6",
    duration: "5.8s",
    delay: "-4.1s",
    plate: "07 LFG 07",
  },
];

export default function AnimatedHeroVisual() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#071930] group">
      {/* Base Highway Image with subtle alive zoom */}
      <div className="relative w-full aspect-[16/9.6] overflow-hidden">
        <Image
          src="/images/hero-fleet-dashboard.jpg"
          alt="LifeGO mobil 4G LTE araç takip sistemi canlı harita ve hareketli otoyol araçları"
          fill
          priority
          className="object-cover transition-transform duration-1000 group-hover:scale-103"
        />

        {/* Animated Traffic Streams & Moving GPS Vehicles SVG Overlay */}
        <svg
          viewBox="0 0 900 540"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="heroVehicleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {HIGHWAY_LANES.map((lane) => (
            <g key={lane.id}>
              {/* Flowing Glowing GPS Data Trail */}
              <path
                id={lane.id}
                d={lane.path}
                fill="none"
                stroke={lane.color}
                strokeWidth="2.4"
                strokeOpacity="0.55"
                strokeDasharray="16 22"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="152"
                  to="0"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Moving Vehicle Headlight / Beacon Group */}
              <g filter="url(#heroVehicleGlow)">
                {/* Outer Radar Pulse */}
                <circle r="13" fill={lane.color} fillOpacity="0.22" stroke={lane.color} strokeWidth="1.4">
                  <animate attributeName="r" values="8;16;8" dur="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.25;0.9" dur="1.6s" repeatCount="indefinite" />
                </circle>

                {/* Sleek Capsule Vehicle Body oriented along highway curve */}
                <rect
                  x="-11"
                  y="-5"
                  width="22"
                  height="10"
                  rx="5"
                  fill="#FFFFFF"
                  stroke={lane.color}
                  strokeWidth="2.4"
                />
                {/* Headlight Beam */}
                <ellipse cx="11" cy="0" rx="7" ry="3.5" fill={lane.glow} fillOpacity="0.85" />

                {/* Motion along exact highway curve */}
                <animateMotion
                  dur={lane.duration}
                  begin={lane.delay}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${lane.id}`} />
                </animateMotion>
              </g>
            </g>
          ))}

          {/* Pulsing Live Telemetry Dots on Right HUD Display */}
          <circle cx="672" cy="195" r="4.5" fill="#00B4D8">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="718" cy="148" r="4" fill="#F7941D">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="788" cy="306" r="4" fill="#22C55E">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Top-Left Live Tracking Pill */}
        <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#061529]/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Radio className="w-3.5 h-3.5 text-[#00B4D8]" />
          Canlı 4G GPS Akışı
        </div>
      </div>

      {/* Bottom Stats Overlay Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#061529]/88 backdrop-blur-md rounded-2xl p-4 border border-white/15 grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-xl sm:text-2xl font-extrabold text-[#00B4D8]">%99.9</div>
          <div className="text-[11px] text-slate-300">Sunucu Kesintisizliği</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-extrabold text-[#F7941D]">&lt; 2m</div>
          <div className="text-[11px] text-slate-300">GPS Konum Hassasiyeti</div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">81 İl</div>
          <div className="text-[11px] text-slate-300">Yetkili Servis Desteği</div>
        </div>
      </div>
    </div>
  );
}
