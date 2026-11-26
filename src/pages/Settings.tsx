import { useState } from 'react'
import { type Lang } from "../i18n";
import { COLORS } from "../theme";

export default function SettingsPage({ lang, setLang }: { lang: Lang, setLang: (l: Lang) => void }) {
  const [notif, setNotif] = useState(true)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const Row = ({ icon, title, subtitle, onClick, right }: any) => (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderBottom: '1px solid #eee', cursor: 'pointer', background: '#fff' }}>
      <div style={{ fontSize: 20 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: '#666' }}>{subtitle}</div>}
      </div>
      {right || <span style={{ color: '#999' }}>›</span>}
    </div>
  )

  // PRIVACY POLICY NDANI YA SETTINGS
  if (showPrivacy) {
    return (
      <div style={{ padding: 20, background: COLORS.white }}>
        <button onClick={() => setShowPrivacy(false)} style={{ background: 'none', border: 'none', fontSize: 16, fontWeight: 700 }}>← {lang === 'sw' ? 'Rudi' : 'Back'}</button>
        <h2>Privacy Policy - TinTon</h2>
        <p style={{ fontSize: 13, color: '#666' }}>Last Updated: 26 Nov 2026</p>
        <p style={{ lineHeight: 1.7, fontSize: 14 }}>
          <b>1. Tunakusanya nini?</b><br />
          Jina, picha, namba ya simu (kwa malipo M-Pesa, Tigo, Airtel, HaloPesa), aina ya simu, na matumizi ya app kupitia Firebase Analytics.<br /><br />
          <b>2. Tunatumiaje?</b><br />
          Kukupa Rewards/Coins, kukutumia pesa ulizotoa, kuonyesha matangazo kupitia Google AdMob, na kuboresha app.<br /><br />
          <b>3. Tunashiriki na nani?</b><br />
          Google (Firebase & AdMob) na Mitandao ya Simu wakati wa malipo tu. Hatushiriki namba yako na mtu mwingine.<br /><br />
          <b>4. Haki yako</b><br />
          Unaweza kufuta akaunti yako wakati wowote kutoka hapa Settings, kubadilisha taarifa, au kuomba tufute data zako.<br /><br />
          <b>5. Watoto</b><br />
          App ni kwa miaka 13+.<br /><br />
          <b>6. Wasiliana nasi</b><br />
          Email: support@tinton.co.tz • Mwanza, Tanzania
        </p>
      </div>
    )
  }

  // TERMS OF SERVICE
  if (showTerms) {
    return (
      <div style={{ padding: 20, background: COLORS.white }}>
        <button onClick={() => setShowTerms(false)} style={{ background: 'none', border: 'none', fontSize: 16, fontWeight: 700 }}>← Rudi</button>
        <h2>Terms of Service - TinTon</h2>
        <p style={{ lineHeight: 1.7, fontSize: 14 }}>
          <b>1. Kutoa Pesa:</b> Kima cha chini ni Coins 25 = TSh 5,000. Pesa inafika ndani ya masaa 24.<br /><br />
          <b>2. Udanganyifu:</b> Ukigundulika unatumia njia za uongo kupata Coins (bots, akaunti nyingi), akaunti yako itafungwa na pesa haitalipwa.<br /><br />
          <b>3. Group Chat:</b> Usitume matusi, spam au picha chafu. Admin anaweza kukutoa.<br /><br />
          <b>4. Akaunti:</b> Wewe ndiye unayehusika na usalama wa akaunti yako. Usimpe mtu password.<br /><br />
          <b>5. Mabadiliko:</b> Tunaweza kubadilisha sheria hizi, tutakujulisha ndani ya app.
        </p>
      </div>
    )
  }

  return (
    <div style={{ padding: 16, background: '#f5f5f5' }}>
      <h2 style={{ color: COLORS.black }}>⚙️ {lang === 'sw' ? 'Mipangilio' : 'Settings'}</h2>

      {/* AKAUNTI */}
      <div style={{ fontSize: 12, fontWeight: 800, color: '#888', margin: '16px 0 8px' }}>👤 AKAUNTI</div>
      <div style={{ borderRadius: 12, overflow: 'hidden' }}>
        <Row icon="👤" title={lang === 'sw' ? 'Wasifu Wangu' : 'My Profile'} subtitle="Jina, picha, namba ya simu" onClick={() => alert('Hapa itafungua Profile')} />
        <Row icon="🔔" title={lang === 'sw' ? 'Taarifa' : 'Notifications'} subtitle={notif ? 'Zimewashwa' : 'Zimezimwa'} right={
          <button onClick={() => setNotif(!notif)} style={{ background: notif ? COLORS.brand : '#ccc', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: 20, fontWeight: 700 }}>{notif ? 'ON' : 'OFF'}</button>
        } />
        <Row icon="🌍" title={lang === 'sw' ? 'Lugha' : 'Language'} subtitle={lang === 'sw' ? 'Kiswahili' : 'English'} right={
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={() => setLang('sw')} style={{ padding: '6px 12px', borderRadius: 20, border: 'none', background: lang === 'sw' ? COLORS.brand : '#eee', color: lang === 'sw' ? '#fff' : '#333', fontWeight: 700 }}>SW</button>
            <button onClick={() => setLang('en')} style={{ padding: '6px 12px', borderRadius: 20, border: 'none', background: lang === 'en' ? COLORS.brand : '#eee', color: lang === 'en' ? '#fff' : '#333', fontWeight: 700 }}>EN</button>
          </div>
        } />
      </div>

      {/* PESA */}
      <div style={{ fontSize: 12, fontWeight: 800, color: '#888', margin: '16px 0 8px' }}>💰 PESA NA MALIPO</div>
      <div style={{ borderRadius: 12, overflow: 'hidden' }}>
        <Row icon="💳" title="Njia za Malipo" subtitle="M-Pesa, Tigo Pesa, Airtel Money, HaloPesa" onClick={() => alert('Hapa itafungua Wallet')} />
        <Row icon="📜" title={lang === 'sw' ? 'Miamala Yangu' : 'My Transactions'} subtitle="Historia ya kutoa na kununua" onClick={() => alert('Hapa itafungua Miamala')} />
      </div>

      {/* SHERIA - HAPA NDIPO PRIVACY POLICY IPO */}
      <div style={{ fontSize: 12, fontWeight: 800, color: '#888', margin: '16px 0 8px' }}>📜 SHERIA NA FARAGHA</div>
      <div style={{ borderRadius: 12, overflow: 'hidden' }}>
        <Row icon="🔒" title="Privacy Policy" subtitle="Jinsi tunavyolinda taarifa zako" onClick={() => setShowPrivacy(true)} />
        <Row icon="📄" title="Terms of Service" subtitle="Sheria za kutumia TinTon" onClick={() => setShowTerms(true)} />
        <Row icon="⭐" title={lang === 'sw' ? 'Tupime App' : 'Rate Us'} subtitle="Tusaidie kwa kuipima 5 nyota" onClick={() => alert('Asante! Itafungua Play Store')} />
        <Row icon="📞" title={lang === 'sw' ? 'Wasiliana Nasi' : 'Contact Us'} subtitle="support@tinton.co.tz" onClick={() => alert('Email: support@tinton.co.tz')} />
      </div>

      {/* HATARI */}
      <div style={{ fontSize: 12, fontWeight: 800, color: '#888', margin: '16px 0 8px' }}>⚠️ HATARI</div>
      <div style={{ borderRadius: 12, overflow: 'hidden' }}>
        <Row icon="🚪" title={lang === 'sw' ? 'Toka (Logout)' : 'Logout'} subtitle="" onClick={() => { if (confirm('Una uhakika unataka kutoka?')) alert('Umetoka!') }} />
        <Row icon="🗑️" title={lang === 'sw' ? 'Futa Akaunti' : 'Delete Account'} subtitle="Futa data zako zote kabisa" onClick={() => { if (confirm('Una uhakika? Data zote zitafutika!')) alert('Ombi la kufuta limetumwa!') }} right={<span style={{ color: 'red', fontWeight: 700 }}>Futa</span>} />
      </div>

      <p style={{ textAlign: 'center', fontSize: 12, color: '#999', marginTop: 20 }}>TinTon v1.0.0 • Mwanza, Tanzania 🇹🇿<br />Made with ❤️ in Tanzania</p>
    </div>
  )
      }
