import { type Lang } from "../i18n";
import { COLORS } from "../theme";
export default function LivePage({ lang }: { lang: Lang }) {
  return (
    <div style={{ padding: 16, background: COLORS.white }}>
      <h2 style={{ color: COLORS.black }}>{lang === "sw" ? "Live Sasa" : "Live Now"}</h2>
      <p style={{ color: COLORS.darkGray }}>Slots: 3 / 15 • Zimebaki: 12</p>
      <div style={{ border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 14 }}>
        <b style={{ color: COLORS.black }}>🔴 Neema Live</b> <span style={{ color: COLORS.black }}>👀 124</span>
        <p style={{ color: COLORS.black }}>Mziki + Zawadi</p>
        <button style={{ padding: 10, background: COLORS.brand, color: "#fff", border: "none", borderRadius: 10, fontWeight: "bold", width: "100%" }}>{lang === "sw" ? "Ingia Live" : "Join Live"}</button>
      </div>
      <div style={{ background: COLORS.lightGray, borderRadius: 14, padding: 14, marginTop: 12 }}>
        <b style={{ color: COLORS.black }}>{lang === "sw" ? "Fungua Live Yangu" : "Start My Live"}</b>
        <p style={{ fontSize: 14, color: COLORS.black }}>30 Dakika = 2 Coins • 60 Dakika = 4 Coins</p>
        <button style={{ width: "100%", padding: 12, background: "#111B21", color: "#fff", border: "none", borderRadius: 10, fontWeight: "bold" }}>30 Dak - 2 Coins</button>
        <button style={{ width: "100%", padding: 12, background: "#111B21", color: "#fff", border: "none", borderRadius: 10, fontWeight: "bold", marginTop: 8 }}>60 Dak - 4 Coins</button>
      </div>
    </div>
  );
          }
