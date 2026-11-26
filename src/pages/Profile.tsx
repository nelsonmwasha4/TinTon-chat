import { translations, type Lang } from "../i18n";
import { COLORS } from "../theme";
export default function ProfilePage({ lang, onLang }: { lang: Lang; onLang: (l: Lang) => void }) {
  const t = translations[lang];
  return (
    <div style={{ padding: 20, background: COLORS.white }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: COLORS.brand, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: "bold" }}>N</div>
        <div><b style={{ color: COLORS.black, fontSize: 18 }}>Nelson</b><br/><span style={{ color: COLORS.darkGray }}>@nelson • Tanzania</span></div>
      </div>
      <h3 style={{ color: COLORS.black, marginTop: 24 }}>{t.language}</h3>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => onLang("sw")} style={{ flex: 1, padding: 12, borderRadius: 10, border: `1px solid ${COLORS.border}`, background: lang === "sw" ? COLORS.brand : COLORS.white, color: lang === "sw" ? "#fff" : COLORS.black, fontWeight: "bold" }}>Kiswahili</button>
        <button onClick={() => onLang("en")} style={{ flex: 1, padding: 12, borderRadius: 10, border: `1px solid ${COLORS.border}`, background: lang === "en" ? COLORS.brand : COLORS.white, color: lang === "en" ? "#fff" : COLORS.black, fontWeight: "bold" }}>English</button>
      </div>
      <div style={{ marginTop: 20, background: COLORS.lightGray, padding: 16, borderRadius: 12 }}>
        <b style={{ color: COLORS.black }}>⚙️ {t.settings}</b>
        <p style={{ color: COLORS.black, margin: "8px 0 0" }}>{t.notifications} • {t.privacy} • {t.help}</p>
      </div>
      <p style={{ textAlign: "center", color: COLORS.darkGray, marginTop: 30, fontSize: 13 }}>TinTon Hub v1.0 • Made in Tanzania 🇹🇿</p>
    </div>
  );
               }
