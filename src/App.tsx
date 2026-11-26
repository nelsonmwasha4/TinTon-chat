import { useState } from "react";
import { translations, type Lang } from "./i18n";
import { COLORS } from "./theme";
import HomePage from "./pages/Home";
import ChatPage from "./pages/Chat";
import GroupPage from "./pages/Group";
import LivePage from "./pages/Live";
import WalletPage from "./pages/Wallet";
import ProfilePage from "./pages/Profile";

export default function App() {
  const [lang, setLang] = useState<Lang>("sw");
  const t = translations[lang];
  const [tab, setTab] = useState("home");

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", minHeight: "100vh", background: COLORS.white, paddingBottom: 70, fontFamily: "system-ui", color: COLORS.black }}>
      
      {/* HEADER - Nyeupe, Jina Kijani */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: COLORS.white, borderBottom: `1px solid ${COLORS.border}`, position: "sticky", top: 0, zIndex: 10 }}>
        {/* JINA LA APP - KIJANI */}
        <b style={{ fontSize: 22, color: COLORS.brand, letterSpacing: 0.5 }}>TinTon Hub</b>
        <div style={{ display: "flex", gap: 4, background: COLORS.lightGray, borderRadius: 20, padding: 3 }}>
          <button onClick={() => setLang("sw")} style={{ border: "none", padding: "6px 12px", borderRadius: 16, background: lang === "sw" ? COLORS.brand : "transparent", color: lang === "sw" ? "#fff" : COLORS.black, fontWeight: "bold" }}>SW</button>
          <button onClick={() => setLang("en")} style={{ border: "none", padding: "6px 12px", borderRadius: 16, background: lang === "en" ? COLORS.brand : "transparent", color: lang === "en" ? "#fff" : COLORS.black, fontWeight: "bold" }}>EN</button>
        </div>
      </div>

      {tab === "home" && <HomePage lang={lang} onGoChat={() => setTab("chat")} onGoLive={() => setTab("live")} />}
      {tab === "chat" && <ChatPage lang={lang} />}
      {tab === "group" && <GroupPage lang={lang} />}
      {tab === "live" && <LivePage lang={lang} />}
      {tab === "wallet" && <WalletPage lang={lang} />}
      {tab === "profile" && <ProfilePage lang={lang} />}

      {/* MENU CHINI - Nyeupe, Iliyochaguliwa Kijani */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, display: "flex", background: COLORS.white, borderTop: `1px solid ${COLORS.border}` }}>
        <button onClick={() => setTab("home")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "home" ? COLORS.brand : COLORS.black, fontWeight: "bold" }}>🏠<br/>{t.home}</button>
        <button onClick={() => setTab("chat")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "chat" ? COLORS.brand : COLORS.black, fontWeight: "bold" }}>💬<br/>{t.chat}</button>
        <button onClick={() => setTab("group")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "group" ? COLORS.brand : COLORS.black, fontWeight: "bold" }}>👥<br/>Group</button>
        <button onClick={() => setTab("live")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "live" ? COLORS.brand : COLORS.black, fontWeight: "bold" }}>📺<br/>{t.live}</button>
        <button onClick={() => setTab("wallet")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "wallet" ? COLORS.brand : COLORS.black, fontWeight: "bold" }}>👛<br/>{t.wallet}</button>
        <button onClick={() => setTab("profile")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "profile" ? COLORS.brand : COLORS.black, fontWeight: "bold" }}>👤<br/>Mimi</button>
      </div>
    </div>
  );
      }
