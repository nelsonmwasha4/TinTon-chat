import { useState } from 'react'
import { type Lang } from "../i18n";
import { COLORS } from "../theme";

export default function WalletPage({ lang }: { lang: Lang }) {
  const [coins] = useState(12)
  const [phone, setPhone] = useState('')
  const [method, setMethod] = useState('M-Pesa')
  const [showWithdraw, setShowWithdraw] = useState(false)

  // TANZANIA TU - 1 Coin = TSh 200
  const COIN_VALUE = 200
  const balance = coins * COIN_VALUE
  const MIN_WITHDRAW = 5000
  const canWithdraw = balance >= MIN_WITHDRAW

  const methods = [
    { name: 'M-Pesa', color: '#E40000', desc: 'Vodacom • 075*, 076*' },
    { name: 'Tigo Pesa', color: '#0033A0', desc: 'Tigo • 065*, 067*, 071*' },
    { name: 'Airtel Money', color: '#E40000', desc: 'Airtel • 068*, 069*, 078*' },
    { name: 'HaloPesa', color: '#FF8C00', desc: 'Halotel • 062*' },
  ]

  const transactions = [
    { id: 1, desc: 'Rewards - Ads 25', amount: '+ TSh 200', date: 'Leo', color: '#25D366' },
    { id: 2, desc: 'Daily Login', amount: '+50 Points', date: 'Jana', color: '#25D366' },
    { id: 3, desc: 'Kutoa - M-Pesa 076XXXXXXX', amount: '- TSh 5,000', date: 'Wiki iliyopita', color: '#E40000' },
  ]

  const handleWithdraw = () => {
    if (!phone) {
      alert(lang === 'sw' ? 'Weka namba yako ya simu kwanza!' : 'Enter your phone number first!')
      return
    }
    if (phone.length < 10) {
      alert(lang === 'sw' ? 'Namba si sahihi! Weka kama 076XXXXXXX' : 'Invalid number! Enter like 076XXXXXXX')
      return
    }
    if (!canWithdraw) {
      alert(lang === 'sw' ? `Bado hujafikisha TSh 5,000! Una TSh ${balance.toLocaleString()} tu.` : `You have not reached TSh 5,000 yet!`)
      return
    }
    alert(lang === 'sw' ? `Ombi limetumwa! TSh ${balance.toLocaleString()} itatumwa kwenda ${method} - ${phone} ndani ya masaa 24. 🎉` : `Request sent!`)
    setShowWithdraw(false)
  }

  return (
    <div style={{ padding: 20, background: COLORS.white }}>
      {/* Salio */}
      <div style={{ background: "#111B21", borderRadius: 16, padding: 20, textAlign: 'center', color: "#fff" }}>
        <p style={{ color: "#fff", margin: 0 }}>{lang === 'sw' ? 'Salio Lako' : 'Your Balance'}</p>
        <h1 style={{ color: "#fff", margin: "8px 0" }}>TSh {balance.toLocaleString()}</h1>
        <p style={{ color: "#fff", fontSize: 14 }}>{coins} Coins • 1 Coin = TSh 200</p>
        <p style={{ color: "#fff", fontSize: 12, opacity: 0.8 }}>🇹🇿 Tanzania Tu • M-Pesa / Tigo / Airtel / HaloPesa</p>
      </div>

      <h3 style={{ color: COLORS.black }}>{lang === 'sw' ? 'Toa Pesa' : 'Withdraw'}</h3>

      {!showWithdraw ? (
        <button
          onClick={() => setShowWithdraw(true)}
          style={{ width: '100%', padding: 14, borderRadius: 12, border: 'none', background: canWithdraw ? COLORS.brand : '#ccc', color: '#fff', fontWeight: 800, fontSize: 16 }}
        >
          {canWithdraw ? `Toa TSh ${balance.toLocaleString()} Sasa` : `Fikisha TSh 5,000 Kwanza (${balance.toLocaleString()} / 5,000)`}
        </button>
      ) : (
        <div style={{ background: '#fff', borderRadius: 16, padding: 16, border: '1px solid #eee' }}>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Chagua Njia ya Malipo 🇹🇿</div>
          {methods.map((m) => (
            <div
              key={m.name}
              onClick={() => setMethod(m.name)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 12, marginBottom: 8, cursor: 'pointer', border: method === m.name ? `2px solid ${m.color}` : '1px solid #eee', background: method === m.name ? '#f8fff8' : '#fff' }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{m.name} {method === m.name ? '✅' : ''}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{m.desc}</div>
              </div>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: m.color }}></div>
            </div>
          ))}
          <div style={{ fontWeight: 700, marginTop: 12, marginBottom: 6 }}>Namba ya Simu</div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mfano: 076XXXXXXX"
            style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #ddd', fontSize: 15, boxSizing: 'border-box' }}
          />
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <button onClick={() => setShowWithdraw(false)} style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid #ddd', background: '#fff', fontWeight: 700 }}>Ghairi</button>
            <button onClick={handleWithdraw} style={{ flex: 2, padding: 12, borderRadius: 10, border: 'none', background: COLORS.brand, color: '#fff', fontWeight: 800 }}>Thibitisha Kutoa</button>
          </div>
        </div>
      )}

      <h3 style={{ color: COLORS.black }}>{lang === 'sw' ? 'Miamala Yangu' : 'My Transactions'}</h3>
      {transactions.map((t) => (
        <div key={t.id} style={{ background: '#fff', borderRadius: 12, padding: 14, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{t.desc}</div>
            <div style={{ fontSize: 12, color: '#666' }}>{t.date}</div>
          </div>
          <div style={{ fontWeight: 800, color: t.color }}>{t.amount}</div>
        </div>
      ))}

      <h3 style={{ color: COLORS.black }}>{lang === 'sw' ? 'Nunua Coins' : 'Buy Coins'}</h3>
      {[
        { coins: 5, price: "TZS 1,000" },
        { coins: 12, price: "TZS 2,000" },
        { coins: 50, price: "TZS 5,000" },
        { coins: 120, price: "TZS 10,000" },
      ].map((p) => (
        <div key={p.coins} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 12, border: "1px solid #eee", borderRadius: 12, marginBottom: 8 }}>
          <div><b style={{ color: COLORS.black }}>{p.coins} Coins</b></div>
          <button style={{ background: COLORS.brand, color: "#fff", border: "none", padding: "8px 14px", borderRadius: 8, fontWeight: 700 }}>{p.price}</button>
        </div>
      ))}

      <div style={{ background: '#f8f8f8', borderRadius: 12, padding: 12, fontSize: 12, color: '#666', lineHeight: 1.6, marginTop: 12 }}>
        <b>📜 Sheria za Kutoa - Tanzania:</b><br />
        - Kima cha chini: Coins 25 = TSh 5,000<br />
        - Malipo: M-Pesa, Tigo Pesa, Airtel Money, HaloPesa tu<br />
        - Pesa inafika ndani ya masaa 24
      </div>
    </div>
  );
    }
