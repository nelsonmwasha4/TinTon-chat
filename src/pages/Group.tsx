import { useState } from 'react'
import { type Lang } from "../i18n";
import { COLORS } from "../theme";

type Msg = { id: number, sender: string, text: string, time: string, me: boolean }
type Group = { id: number, name: string, members: number, lastMsg: string, online: number, color: string }

export default function GroupPage({ lang }: { lang: Lang }) {
  const [groups] = useState<Group[]>([
    { id: 1, name: 'Wapenzi wa Tinton 🇹🇿', members: 245, lastMsg: 'Neema: Karibu sana...', online: 32, color: '#25D366' },
    { id: 2, name: 'Biashara Mwanza', members: 120, lastMsg: 'Juma: Bei ya leo...', online: 18, color: '#FF8C00' },
    { id: 3, name: 'Michezo & Burudani', members: 89, lastMsg: 'Baraka: Mechi leo...', online: 12, color: '#128C7E' },
    { id: 4, name: 'Wajasiriamali TZ', members: 310, lastMsg: 'Zawadi: Nani ana...', online: 45, color: '#7B61FF' },
  ])
  const [selected, setSelected] = useState<Group | null>(null)
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, sender: 'Neema', text: 'Karibu sana kwenye group yetu! 🎉', time: '10:02', me: false },
    { id: 2, sender: 'Juma', text: 'Asante! Nimefurahi kujiunga', time: '10:05', me: false },
    { id: 3, sender: 'Wewe', text: 'Mambo! Leo kuna nini kipya?', time: '10:06', me: true },
  ])
  const [newMsg, setNewMsg] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const [groupName, setGroupName] = useState('')

  const sendMsg = () => {
    if (!newMsg.trim()) return
    setMessages(m => [...m, { id: Date.now(), sender: 'Wewe', text: newMsg, time: 'Sasa', me: true }])
    setNewMsg('')
  }

  const createGroup = () => {
    if (!groupName.trim()) {
      alert('Weka jina la group kwanza!')
      return
    }
    alert(`Group "${groupName}" imeundwa! 🎉 Sasa walike marafiki wajiunge.`)
    setGroupName('')
    setShowCreate(false)
  }

  // KAMA AMEINGIA NDANI YA GROUP - ONYESHA CHAT KAMA WHATSAPP
  if (selected) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#ECE5DD' }}>
        {/* Header ya Group kama WhatsApp */}
        <div style={{ background: '#075E54', color: '#fff', padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20 }}>←</button>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: selected.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18 }}>{selected.name[0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700 }}>{selected.name}</div>
            <div style={{ fontSize: 12, opacity: 0.9 }}>{selected.members} members • {selected.online} online</div>
          </div>
          <span>📞</span><span>⋮</span>
        </div>

        {/* Ujumbe */}
        <div style={{ flex: 1, padding: 12, overflowY: 'auto' }}>
          {messages.map((m) => (
            <div key={m.id} style={{ display: 'flex', justifyContent: m.me ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
              <div style={{ background: m.me ? '#DCF8C6' : '#fff', padding: '8px 12px', borderRadius: 12, maxWidth: '75%' }}>
                {!m.me && <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.brand }}>{m.sender}</div>}
                <div style={{ fontSize: 14 }}>{m.text}</div>
                <div style={{ fontSize: 10, color: '#888', textAlign: 'right', marginTop: 2 }}>{m.time} ✓✓</div>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'center', fontSize: 11, color: '#888', background: '#FFF3CD', padding: 6, borderRadius: 8, margin: '10px 0' }}>🔒 Ujumbe umelindwa • Admin: Wewe</div>
        </div>

        {/* Kuandika kama WhatsApp */}
        <div style={{ background: '#fff', padding: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 20 }}>😊</span>
          <span style={{ fontSize: 20 }}>📎</span>
          <input value={newMsg} onChange={(e) => setNewMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMsg()} placeholder={lang === 'sw' ? 'Andika ujumbe...' : 'Type message...'} style={{ flex: 1, padding: 10, borderRadius: 20, border: '1px solid #ddd', outline: 'none' }} />
          <button onClick={sendMsg} style={{ background: '#25D366', color: '#fff', border: 'none', width: 42, height: 42, borderRadius: '50%', fontSize: 18 }}>➤</button>
        </div>
      </div>
    )
  }

  // ORODHA YA GROUPS
  return (
    <div style={{ padding: 16, background: COLORS.white }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: COLORS.black }}>👥 Groups</h2>
        <button onClick={() => setShowCreate(true)} style={{ background: COLORS.brand, color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 20, fontWeight: 700 }}>+ Unda Group</button>
      </div>

      {showCreate && (
        <div style={{ background: '#f0fff0', borderRadius: 12, padding: 14, marginBottom: 12, border: '1px solid #25D366' }}>
          <div style={{ fontWeight: 700 }}>Unda Group Mpya</div>
          <input value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="Jina la group, mfano: Wapenzi wa Mwanza" style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #ddd', marginTop: 8, boxSizing: 'border-box' }} />
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button onClick={() => setShowCreate(false)} style={{ flex: 1, padding: 10, borderRadius: 10, border: '1px solid #ddd', background: '#fff' }}>Ghairi</button>
            <button onClick={createGroup} style={{ flex: 2, padding: 10, borderRadius: 10, border: 'none', background: '#25D366', color: '#fff', fontWeight: 800 }}>Unda Group 🎉</button>
          </div>
        </div>
      )}

      {groups.map((g) => (
        <div key={g.id} onClick={() => setSelected(g)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderBottom: '1px solid #eee', cursor: 'pointer' }}>
          <div style={{ width: 50, height: 50, borderRadius: '50%', background: g.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20 }}>{g.name[0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}><span>{g.name}</span><span style={{ fontSize: 11, color: '#888' }}>🟢 {g.online} online</span></div>
            <div style={{ fontSize: 13, color: '#666' }}>{g.lastMsg}</div>
            <div style={{ fontSize: 11, color: '#999' }}>{g.members} members</div>
          </div>
          <span style={{ fontSize: 18 }}>›</span>
        </div>
      ))}

      <div style={{ background: '#f8f8f8', borderRadius: 12, padding: 12, fontSize: 12, color: '#666', lineHeight: 1.6, marginTop: 16 }}>
        <b>📜 Sheria za Group:</b><br />
        - Admin anaweza kutoa mtu / kufuta ujumbe<br />
        - Usitume spam, matusi au picha chafu<br />
        - Group inaweza kuwa na watu hadi 1,000
      </div>
    </div>
  )
     }
