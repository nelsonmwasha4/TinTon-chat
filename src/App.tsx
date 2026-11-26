import { useState } from "react";
import { translations, type Lang } from "./i18n";
import { COLORS } from "./theme";
import HomePage from "./pages/Home";
import ChatPage from "./pages/Chat";
import GroupPage from "./pages/Group";
import LivePage from "./pages/Live";
import WalletPage from "./pages/Wallet";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Settings";

export default function App() {
  const [lang, setLang] = useState<Lang>("sw");
  const t = translations[lang];
  const [tab, setTab] = useState("home");

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", background: COLORS.white, minHeight: "100vh" }}>

      {/* HEADER - Nyeupe, Jina Kijani - KAMA MWANZO */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: COLORS.white }}>
        {/* JINA LA APP - KIJANI */}
        <b style={{ fontSize: 22, color: COLORS.brand }}>TinTon 🇹🇿</b>
        <div style={{ display: "flex", gap: 6 }}>
          <button onClick={() => setLang("sw")} style={{ background: lang === "sw" ? COLORS.brand : "#eee", color: lang === "sw" ? "#fff" : "#333", border: "none", padding: "6px 12px", borderRadius: 20, fontWeight: 700 }}>SW</button>
          <button onClick={() => setLang("en")} style={{ background: lang === "en" ? COLORS.brand : "#eee", color: lang === "en" ? "#fff" : "#333", border: "none", padding: "6px 12px", borderRadius: 20, fontWeight: 700 }}>EN</button>
        </div>
      </div>

      {tab === "home" && <HomePage lang={lang} />}
      {tab === "chat" && <ChatPage lang={lang} />}
      {tab === "group" && <GroupPage lang={lang} />}
      {tab === "live" && <LivePage lang={lang} />}
      {tab === "wallet" && <WalletPage lang={lang} />}
      {tab === "profile" && <ProfilePage lang={lang} />}
      {tab === "settings" && <SettingsPage lang={lang} setLang={setLang} />}

      {/* MENU CHINI - Nyeupe, Iliyochan... - KAMA MWANZO */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: COLORS.white, borderTop: "1px solid #eee", display: "flex", justifyContent: "space-around", padding: "10px 0" }}>
        <button onClick={() => setTab("home")} style={{ background: "none", border: "none", color: tab === "home" ? COLORS.brand : "#888", fontWeight: 700 }}>🏠<br />{t.home}</button>
        <button onClick={() => setTab("chat")} style={{ background: "none", border: "none", color: tab === "chat" ? COLORS.brand : "#888", fontWeight: 700 }}>💬<br />Chat</button>
        <button onClick={() => setTab("group")} style={{ background: "none", border: "none", color: tab === "group" ? COLORS.brand : "#888", fontWeight: 700 }}>👥<br />Group</button>
        <button onClick={() => setTab("live")} style={{ background: "none", border: "none", color: tab === "live" ? COLORS.brand : "#888", fontWeight: 700 }}>🎥<br />Live</button>
        <button onClick={() => setTab("wallet")} style={{ background: "none", border: "none", color: tab === "wallet" ? COLORS.brand : "#888", fontWeight: 700 }}>💰<br />Wallet</button>
        <button onClick={() => setTab("profile")} style={{ background: "none", border: "none", color: tab === "profile" ? COLORS.brand : "#888", fontWeight: 700 }}>👤<br />Profile</button>
        <button onClick={() => setTab("settings")} style={{ background: "none", border: "none", color: tab === "settings" ? COLORS.brand : "#888", fontWeight: 700 }}>⚙️<br />Settings</button>
      </div>

    </div>
  );
      }
