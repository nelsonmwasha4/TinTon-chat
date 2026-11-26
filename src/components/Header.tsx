type Props = {
  lang: string
  setLang: (l: string) => void
  t: any
}

export default function Header({ lang, setLang, t }: Props) {
  return (
    <header style={{ background: '#fff', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ fontWeight: 800, fontSize: 20, color: '#25D366' }}>TinTon</div>
      <div style={{ display: 'flex', gap: 6 }}>
        <button onClick={() => setLang('sw')} style={{ padding: '6px 12px', borderRadius: 20, border: 'none', background: lang === 'sw' ? '#25D366' : '#f0f0f0', color: lang === 'sw' ? '#fff' : '#333', fontWeight: 700 }}>SW</button>
        <button onClick={() => setLang('en')} style={{ padding: '6px 12px', borderRadius: 20, border: 'none', background: lang === 'en' ? '#25D366' : '#f0f0f0', color: lang === 'en' ? '#fff' : '#333', fontWeight: 700 }}>EN</button>
      </div>
    </header>
  )
      }
