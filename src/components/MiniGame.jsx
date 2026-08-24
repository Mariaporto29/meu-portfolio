import React from 'react';

export default function MiniGame() {
  const pieces = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${5 + i * 12}%`,
    delay: `${i * 0.35}s`,
    duration: `${1.6 + i * 0.25}s`,
    size: `${14 + Math.floor(i % 3) * 8}px`,
    color: ["#ef4444", "#22c55e", "#facc15", "#3b82f6", "#f97316", "#a855f7", "#ec4899", "#06b6d4"][i],
  }));

  return (
    <>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-30px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(120px) rotate(200deg); opacity: 0; }
        }
      `}</style>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "100%", pointerEvents: "none", overflow: "hidden", zIndex: 0,
      }}>
        {pieces.map((p) => (
          <div key={p.id} style={{
            position: "absolute",
            left: p.left,
            top: "-20px",
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: "4px",
            opacity: 0,
            animation: `fall ${p.duration} ${p.delay} infinite linear`,
            boxShadow: `0 0 12px ${p.color}`,
          }} />
        ))}
      </div>
    </>
  );
}
