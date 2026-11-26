import { useState } from "react";
import { translations, type Lang } from "../i18n";
import { COLORS } from "../theme";

export default function ChatPage({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [open, setOpen] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState<{ me: boolean; text: string }[]>([
    { me: false, text: lang === "sw" ? "Karibu TinTon Hub!" : "Welcome to TinTon Hub!" },
  ]);

  const chats = [
    { name: "Neema", msg: "Mambo!", time: "14:20" },
    { name: "Asha", msg: "Asante kwa zawadi 🌹", time: "12:05" },
  ];

  if (open) return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 120px)", background: COLORS.chatBackground }}>
      <div style={{ padding: 14, background: COLORS.white, borderBottom: `1px solid ${COLORS.border}`, display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={() => setOpen(null)} style={{ border: "none", background: "none", fontSize: 20, color: COLORS.black }}>←</button>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: COLORS.brand, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>{open[0]}</div>
        <div><b style={{ color: COLORS.black }}>{open}</b><br/><span style={{ color: COLORS.brand, fontSize: 12 }}>● {t.online}</span></div>
      </div>
      <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ alignSelf: m.me ? "flex-end" : "flex-start", background: m.me ? COLORS.outgoingBubble : COLORS.incomingBubble, color: COLORS.black, padding: "10px 12px", borderRadius: 14, maxWidth: "75%", fontSize: 15 }}>{m.text}</div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, padding: 10, background: COLORS.white }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder={t.typeMessage} style={{ flex: 1, padding: 12, borderRadius: 20, border: `1px solid ${COLORS.border}`, color: COLORS.black, background: COLORS.white }} />
        <button onClick={() => { if (!text.trim()) return; setMsgs([...msgs, { me: true, text }]); setText(""); }} style={{ background: COLORS.brand, color: "#fff", border: "none", borderRadius: 20, padding: "0 18px", fontWeight: "bold" }}>{t.send}</button>
      </div>
    </div>
  );

  return (
    <div style={{ background: COLORS.white }}>
      {chats.map((c) => (
        <div key={c.name} onClick={() => setOpen(c.name)} style={{ display: "flex", gap: 12, padding: "14px 16px", borderBottom: `1px solid ${COLORS.border}` }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, background: COLORS.brand, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: 20 }}>{c.name[0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><b style={{ color: COLORS.black }}>{c.name}</b><span style={{ fontSize: 12, color: COLORS.darkGray }}>{c.time}</span></div>
            <div style={{ color: COLORS.darkGray, fontSize: 14 }}>{c.msg}</div>
          </div>
        </div>
      ))}
    </div>
  );
      }
