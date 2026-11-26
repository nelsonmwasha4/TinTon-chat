import { translations, type Lang } from "../i18n";
import { COLORS } from "../theme";
export default function HomePage({ lang, onGoChat, onGoLive }: { lang: Lang; onGoChat: () => void; onGoLive: () => void }) {
  const t = translations[lang];
  return (
    <div style={{ padding: 20, background: "#FFFFFF" }}>
      <h1 style={{ color: "#111B21" }}>{t.welcome}</h1>
      <p style={{ color: "#667781" }}>{t.welcomeDesc}</p>
      <div style={{ background: "#128C4A", color: "#fff", padding: 16, borderRadius: 14 }}>
        <b>🔴 Live Sasa: 3 / 15 Slots</b>
        <p style={{ fontSize: 14 }}>Watu 3 wana Live Video sasa.</p>
        <button onClick={onGoLive} style={{ background: "#fff", color: "#128C4A", border: "none", padding: "10px 16px", borderRadius: 10, fontWeight: "bold" }}>{lang === "sw" ? "Tazama Live" : "Watch Live"}</button>
      </div>
      <button onClick={onGoChat} style={{ width: "100%", marginTop: 16, padding: 14, background: "#111B21", color: "#fff", border: "none", borderRadius: 12, fontWeight: "bold" }}>{t.startChat}</button>
      <div style={{ marginTop: 16, padding: 14, background: "#F0F2F5", borderRadius: 12 }}><b style={{ color: "#111B21" }}>🪙 Pochi</b><p style={{ color: "#111B21" }}>0 Coins • 1 Coin = TZS 200</p></div>
    </div>
  );
      }
