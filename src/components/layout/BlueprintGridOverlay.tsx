import React from 'react';
import { Grid, EyeOff } from 'lucide-react';

interface BlueprintGridOverlayProps {
  showGrid: boolean;
  onToggleGrid: () => void;
}

export const BlueprintGridOverlay: React.FC<BlueprintGridOverlayProps> = ({
  showGrid,
  onToggleGrid,
}) => {
  return (
    <>
      {showGrid && (
        <div className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden">
          {/* Engineering subtle grid */}
          <div className="absolute inset-0 bg-blueprint-lines opacity-40"></div>
          
          {/* Corner coordinate crosshairs */}
          <div className="absolute top-4 left-4 font-mono-tech text-[10px] text-[#E5A910] opacity-75">
            + [LAT 28.5562° N / LON 77.1000° E] // SCALE 1:100
          </div>
          <div className="absolute top-4 right-4 font-mono-tech text-[10px] text-[#E5A910] opacity-75 text-right">
            GRID SYS: WGS84 // REF: MINT-ENG-2026
          </div>
          <div className="absolute bottom-4 left-4 font-mono-tech text-[10px] text-[#E5A910] opacity-75">
            + QA/QC REV: 04.2 // TOLERANCE: ±2.0mm
          </div>
          <div className="absolute bottom-4 right-4 font-mono-tech text-[10px] text-[#E5A910] opacity-75 text-right">
            STATUS: ACTIVE TECHNICAL OVERLAY
          </div>

          {/* Vertical axis line */}
          <div className="absolute top-0 bottom-0 left-12 w-px bg-[#E5A910]/15 hidden xl:block"></div>
          <div className="absolute top-0 bottom-0 right-12 w-px bg-[#E5A910]/15 hidden xl:block"></div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          id="btn-toggle-engineering-grid"
          onClick={onToggleGrid}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-mono-tech font-semibold tracking-wider uppercase rounded shadow-lg border transition-all duration-200 ${
            showGrid
              ? 'bg-[#111315] text-[#E5A910] border-[#E5A910] ring-1 ring-[#E5A910]/40'
              : 'bg-white/90 backdrop-blur text-neutral-700 border-neutral-300 hover:border-neutral-800 hover:text-black'
          }`}
          title="Toggle Technical Blueprint Grid"
        >
          {showGrid ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-[#E5A910]" />
              <span>Grid Mode: Active</span>
            </>
          ) : (
            <>
              <Grid className="w-3.5 h-3.5 text-neutral-500" />
              <span>Technical Grid</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
