type Props = {
  tab: string
  setTab: (t: string) => void
  t: any
}

export default function BottomNav({ tab, setTab, t }: Props) {
  const items = [
    { id: 'home', icon: '🏠', label: t.home },
    { id: 'chat', icon: '💬', label: t.chat },
    { id: 'group', icon: '👥', label: t.group },
    { id: 'live', icon: '📺', label: t.live },
    { id: 'wallet', icon: '💰', label: t.wallet },
    { id: 'profile', icon: '👤', label: t.profile },
  ]
  return (
    <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', background: '#fff', borderTop: '1px solid #eee', padding: '10px 0', zIndex: 100 }}>
      {items.map((it) => (
        <button key={it.id} onClick={() => setTab(it.id)} style={{ background: 'none', border: 'none', fontSize: 12, color: tab === it.id ? '#25D366' : '#666', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <span style={{ fontSize: 22 }}>{it.icon}</span>
          {it.label}
        </button>
      ))}
    </nav>
  )
     }
