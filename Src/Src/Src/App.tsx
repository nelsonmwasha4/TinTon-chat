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
    <div style={{ maxWidth: 480, margin: "0 auto", minHeight: "100vh", background: "#fff", paddingBottom: 70, fontFamily: "system-ui", color: "#111" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
        <b style={{ fontSize: 20, color: COLORS.brand }}>TinTon Hub</b>
        <div style={{ display: "flex", gap: 4, background: "#eee", borderRadius: 20, padding: 3 }}>
          <button onClick={() => setLang("sw")} style={{ border: "none", padding: "6px 12px", borderRadius: 16, background: lang === "sw" ? COLORS.brand : "transparent", color: lang === "sw" ? "#fff" : "#000", fontWeight: "bold" }}>SW</button>
          <button onClick={() => setLang("en")} style={{ border: "none", padding: "6px 12px", borderRadius: 16, background: lang === "en" ? COLORS.brand : "transparent", color: lang === "en" ? "#fff" : "#000", fontWeight: "bold" }}>EN</button>
        </div>
      </div>

      {tab === "home" && <HomePage lang={lang} onGoChat={() => setTab("chat")} onGoLive={() => setTab("live")} />}
      {tab === "chat" && <ChatPage lang={lang} />}
      {tab === "group" && <GroupPage lang={lang} />}
      {tab === "live" && <LivePage lang={lang} />}
      {tab === "wallet" && <WalletPage lang={lang} />}
      {tab === "profile" && <ProfilePage lang={lang} />}

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, display: "flex", background: "#fff", borderTop: "1px solid #eee" }}>
        <button onClick={() => setTab("home")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "home" ? COLORS.brand : "#000", fontWeight: "bold" }}>🏠<br/>{t.home}</button>
        <button onClick={() => setTab("chat")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "chat" ? COLORS.brand : "#000", fontWeight: "bold" }}>💬<br/>{t.chat}</button>
        <button onClick={() => setTab("group")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "group" ? COLORS.brand : "#000", fontWeight: "bold" }}>👥<br/>{lang === "sw" ? "Group" : "Groups"}</button>
        <button onClick={() => setTab("live")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "live" ? COLORS.brand : "#000", fontWeight: "bold" }}>📺<br/>{t.live}</button>
        <button onClick={() => setTab("wallet")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "wallet" ? COLORS.brand : "#000", fontWeight: "bold" }}>👛<br/>{t.wallet}</button>
        <button onClick={() => setTab("profile")} style={{ flex: 1, padding: 10, border: "none", background: "none", color: tab === "profile" ? COLORS.brand : "#000", fontWeight: "bold" }}>👤<br/>{lang === "sw" ? "Mimi" : "Me"}</button>
      </div>
    </div>
  );
                 }
