import React from 'react';

/**
 * Tiny SVG sparkline for price history.
 * props: data (number[]), width (number or "100%"), height, color
 * Pass width="100%" for fluid / card mode — uses a viewBox so it scales.
 */
export default function Sparkline({ data = [], width = 80, height = 32 }) {
  const W = 200; // internal coordinate width (viewBox)

  if (data.length < 2) {
    return <svg width={width} height={height} viewBox={`0 0 ${W} ${height}`} />;
  }

  const min   = Math.min(...data);
  const max   = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(' ');

  const lastColor = data[data.length - 1] >= data[0] ? '#4ade80' : '#f87171';

  // Area fill path: line down to baseline and back
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * W,
    y: height - ((v - min) / range) * (height - 4) - 2,
  }));
  const areaPath = [
    `M ${pts[0].x} ${height}`,
    ...pts.map(p => `L ${p.x} ${p.y}`),
    `L ${pts[pts.length - 1].x} ${height}`,
    'Z',
  ].join(' ');

  const fillColor = data[data.length - 1] >= data[0] ? 'rgba(74,222,128,0.12)' : 'rgba(248,113,113,0.12)';

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${W} ${height}`}
      preserveAspectRatio="none"
      style={{ display:'block', overflow:'visible' }}
    >
      {/* Area fill */}
      <path d={areaPath} fill={fillColor} />
      {/* Line */}
      <polyline
        points={points}
        fill="none"
        stroke={lastColor}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* End dot */}
      <circle
        cx={pts[pts.length - 1].x}
        cy={pts[pts.length - 1].y}
        r="3"
        fill={lastColor}
      />
    </svg>
  );
}
