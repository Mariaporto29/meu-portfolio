import React, { useMemo } from "react";

export default function CodeBackground() {
  const lines = useMemo(() => {
    const sample = [
      "SELECT * FROM accidents WHERE severity > 2;",
      "const analyze = (rows) => rows.filter(r => r.valid);",
      "# load dataset: /data/acidentes.csv",
      "for (let i=0;i<rows.length;i++) process(rows[i]);",
      "if (speed > threshold) flag++;",
      "UPDATE reports SET status='review' WHERE risk>0.8;",
      "map(filter(data, cond), transform)",
      "df.groupby('region').sum()",
      "await fetch('/api/stats')",
    ];

    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      text: sample[i % sample.length],
      left: `${5 + Math.random() * 90}%`,
      delay: `${-Math.random() * 12}s`,
      duration: `${10 + Math.random() * 12}s`,
      opacity: 0.06 + Math.random() * 0.06,
    }));
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {lines.map((l) => (
        <pre
          key={l.id}
          style={{
            position: "absolute",
            left: l.left,
            bottom: "-10%",
            margin: 0,
            transform: "translateY(0)",
            color: `rgba(110,185,255,${l.opacity})`,
            fontSize: "12px",
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            animationName: "codeFloat",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: l.duration,
            animationDelay: l.delay,
            filter: "blur(0.6px)",
          }}
        >
          {l.text}
        </pre>
      ))}
    </div>
  );
}
