import { useState } from "react";
import HomePage from "./pages/Home";
import ChatPage from "./pages/Chat";
import GroupPage from "./pages/Group";
import LivePage from "./pages/Live";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Settings";

const COLORS = {
  brand: "#16a34a",
};

const translations: any = {
  sw: { home: "Nyumbani", chat: "Chat", group: "Group", live: "Live", profile: "Profile", settings: "Mipangilio" },
  en: { home: "Home", chat: "Chat", group: "Group", live: "Live", profile: "Profile", settings: "Settings" },
};

type Lang = "sw" | "en";

export default function App() {
  const [lang, setLang] = useState<Lang>("sw");
  const t = translations[lang];
  const [tab, setTab] = useState("home");

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", background: "white", minHeight: "100vh", paddingBottom: 70 }}>
      {/* HEADER - Nyeupe, Jina Kijani - KAMA MWANZO */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px" }}>
        {/* JINA LA APP - KIJANI */}
        <b style={{ fontSize: 22, color: COLORS.brand }}>TinTon 🇹🇿</b>
        <div style={{ display: "flex", gap: 6 }}>
          <button onClick={() => setLang("sw")} style={{ padding: "5px 12px", borderRadius: 20, background: lang === "sw" ? "#16a34a" : "#eee", color: lang === "sw" ? "white" : "black", border: "none" }}>SW</button>
          <button onClick={() => setLang("en")} style={{ padding: "5px 12px", borderRadius: 20, background: lang === "en" ? "#16a34a" : "#eee", color: lang === "en" ? "white" : "black", border: "none" }}>EN</button>
        </div>
      </div>

      {tab === "home" && <HomePage lang={lang} />}
      {tab === "chat" && <ChatPage lang={lang} />}
      {tab === "group" && <GroupPage lang={lang} />}
      {tab === "live" && <LivePage lang={lang} />}
      {tab === "profile" && <ProfilePage lang={lang} />}
      {tab === "settings" && <SettingsPage lang={lang} />}

      {/* MENU CHINI - Nyeupe, Iliyochaguliwa ni Kijani */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, maxWidth: 480, margin: "0 auto", display: "flex", justifyContent: "space-around", background: "white", borderTop: "1px solid #eee", padding: "8px 0" }}>
        <button onClick={() => setTab("home")} style={{ background: "none", border: "none", color: tab === "home" ? "#16a34a" : "#888", fontWeight: tab === "home" ? "bold" : "normal" }}>🏠<br />{t.home}</button>
        <button onClick={() => setTab("chat")} style={{ background: "none", border: "none", color: tab === "chat" ? "#16a34a" : "#888", fontWeight: tab === "chat" ? "bold" : "normal" }}>💬<br />{t.chat}</button>
        <button onClick={() => setTab("group")} style={{ background: "none", border: "none", color: tab === "group" ? "#16a34a" : "#888", fontWeight: tab === "group" ? "bold" : "normal" }}>👥<br />{t.group}</button>
        <button onClick={() => setTab("live")} style={{ background: "none", border: "none", color: tab === "live" ? "#16a34a" : "#888", fontWeight: tab === "live" ? "bold" : "normal" }}>🎥<br />{t.live}</button>
        <button onClick={() => setTab("profile")} style={{ background: "none", border: "none", color: tab === "profile" ? "#16a34a" : "#888", fontWeight: tab === "profile" ? "bold" : "normal" }}>👤<br />{t.profile}</button>
        <button onClick={() => setTab("settings")} style={{ background: "none", border: "none", color: tab === "settings" ? "#16a34a" : "#888", fontWeight: tab === "settings" ? "bold" : "normal" }}>⚙️<br />{t.settings}</button>
      </div>
    </div>
  );
            }
