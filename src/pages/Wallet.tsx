import { type Lang } from "../i18n";
import { COLORS } from "../theme";
export default function WalletPage({ lang }: { lang: Lang }) {
  return (
    <div style={{ padding: 20, background: COLORS.white }}>
      <h2 style={{ color: COLORS.black }}>{lang === "sw" ? "Pochi Yangu" : "My Wallet"}</h2>
      <div style={{ background: "#111B21", borderRadius: 16, padding: 20 }}>
        <p style={{ color: "#fff", margin: 0 }}>Salio Lako</p>
        <h1 style={{ color: "#fff", margin: "8px 0" }}>0 Coins</h1>
        <p style={{ color: "#fff", fontSize: 14 }}>1 Coin = TZS 200</p>
      </div>
      <h3 style={{ color: COLORS.black }}>Nunua Coins</h3>
      {[
        { coins: 5, price: "TZS 1,000" },
        { coins: 12, price: "TZS 2,000" },
        { coins: 50, price: "TZS 5,000" },
        { coins: 120, price: "TZS 10,000" },
      ].map((p) => (
        <div key={p.coins} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${COLORS.border}`, padding: 14, borderRadius: 12, marginBottom: 10 }}>
          <div><b style={{ color: COLORS.black }}>{p.coins} Coins</b><br/><span style={{ color: COLORS.darkGray }}>{p.price}</span></div>
          <button style={{ background: COLORS.brand, color: "#fff", border: "none", padding: "10px 16px", borderRadius: 10, fontWeight: "bold" }}>Nunua</button>
        </div>
      ))}
    </div>
  );
        }
