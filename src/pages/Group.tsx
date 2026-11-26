import { useState } from "react";
import { translations, type Lang } from "../i18n";
import { COLORS } from "../theme";
export default function GroupPage({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState([{ name: "Juma", text: "Mpira leo saa 12", me: false }, { name: "Wewe", text: "Sawa nipo!", me: true }]);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 120px)", background: COLORS.chatBackground }}>
      <div style={{ padding: 14, background: COLORS.white, borderBottom: `1px solid ${COLORS.border}` }}><b style={{ color: COLORS.black }}>👥 Group: Wapenda Mpira</b><br/><span style={{ fontSize: 12, color: COLORS.darkGray }}>Wanachama 12 • 3 Online</span></div>
      <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>{msgs.map((m, i) => (<div key={i} style={{ alignSelf: m.me ? "flex-end" : "flex-start", background: m.me ? COLORS.outgoingBubble : COLORS.incomingBubble, color: COLORS.black, padding: "10px 12px", borderRadius: 14, maxWidth: "75%" }}><b style={{ fontSize: 11 }}>{m.name}</b><br/>{m.text}</div>))}</div>
      <div style={{ display: "flex", gap: 8, padding: 10, background: COLORS.white }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder={t.typeMessage} style={{ flex: 1, padding: 12, borderRadius: 20, border: `1px solid ${COLORS.border}`, color: COLORS.black }} />
        <button onClick={() => { if (!text.trim()) return; setMsgs([...msgs, { name: "Wewe", text, me: true }]); setText(""); }} style={{ background: COLORS.brand, color: "#fff", border: "none", borderRadius: 20, padding: "0 18px", fontWeight: "bold" }}>{t.send}</button>
      </div>
    </div>
  );
                                                                                      }
