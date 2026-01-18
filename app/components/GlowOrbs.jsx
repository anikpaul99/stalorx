"use client";

export default function GlowOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="glow-orb glow-orb-purple"
        style={{
          width: "500px",
          height: "500px",
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="glow-orb glow-orb-blue"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          right: "10%",
        }}
      />
      <div
        className="glow-orb glow-orb-purple"
        style={{
          width: "400px",
          height: "400px",
          bottom: "10%",
          left: "50%",
        }}
      />
    </div>
  );
}
