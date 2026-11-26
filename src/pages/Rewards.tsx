import { useState } from 'react'

export default function Rewards({ lang }: { lang: string }) {
  const [points, setPoints] = useState(0)
  const [coins, setCoins] = useState(0)
  const [watched, setWatched] = useState(0)
  const [claimed, setClaimed] = useState(false)

  // SHERIA YA KUGAVANA FAIDA 50/50
  // Ad 1 = Points 40
  // Points 1000 = Coin 1 = TSh 200
  // Ads 25 = Coin 1
  // LIMIT: Mtu 1 = Ads 5 tu kwa siku
  const POINTS_PER_AD = 40
  const POINTS_FOR_COIN = 1000
  const COIN_VALUE = 200
  const MAX_ADS_PER_DAY = 5

  const money = coins * COIN_VALUE
  const progress = Math.min((points / POINTS_FOR_COIN) * 100, 100)
  const remainingAds = MAX_ADS_PER_DAY - watched
  const isLimitReached = watched >= MAX_ADS_PER_DAY

  const watchAd = () => {
    // ZUIA KAMA AMESHAFIKISHA LIMIT YA 5
    if (isLimitReached) {
      alert(lang === 'sw' ? 'Umefikisha limit ya leo! Umeangalia Ads 5. Rudi kesho! ⏰' : 'You reached today limit! You watched 5 Ads. Come back tomorrow! ⏰')
      return
    }

    const newPoints = points + POINTS_PER_AD
    setWatched(w => w + 1)

    // Kama amefikisha 1000, badilisha kuwa Coin 1
    if (newPoints >= POINTS_FOR_COIN) {
      const newCoins = Math.floor(newPoints / POINTS_FOR_COIN)
      const remainingPoints = newPoints % POINTS_FOR_COIN
      setCoins(c => c + newCoins)
      setPoints(remainingPoints)
      alert(lang === 'sw' ? `Hongera! Umefikisha Points 1000! Umepata Coin ${newCoins} = TSh ${newCoins * COIN_VALUE} 🎉` : `Congrats! You reached 1000 Points! You earned ${newCoins} Coin`)
    } else {
      setPoints(newPoints)
      alert(lang === 'sw' ? `+${POINTS_PER_AD} Points! Una Points ${newPoints} / 1000` : `+${POINTS_PER_AD} Points! You have ${newPoints} / 1000`)
    }
  }

  const claimDaily = () => {
    if (claimed) return
    setPoints(p => p + 50)
    setClaimed(true)
    alert(lang === 'sw' ? 'Hongera! Umepata +50 Points kwa kuingia leo 🎉' : 'Congrats! You got +50 Points for daily login 🎉')
  }

  const inviteFriend = () => {
    alert(lang === 'sw' ? 'Link yako: https://tinton.app/invite/USER123 - Ukialika rafiki unapata Points 200!' : 'Your link: https://tinton.app/invite/USER123 - Invite friend to get 200 Points!')
  }

  return (
    <div style={{ padding: 16 }}>
      {/* Kadi ya Coins */}
      <div style={{ background: 'linear-gradient(135deg, #FFD700, #FF8C00)', borderRadius: 16, padding: 20, textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: 14 }}>🪙 Coins Zako</div>
        <div style={{ fontSize: 36, fontWeight: 800 }}>{coins} Coins = TSh {money.toLocaleString()}</div>
        <div style={{ fontSize: 12, opacity: 0.9, marginTop: 4 }}>Tunagawana Faida 50/50 🤝 • 1 Coin = TSh 200</div>
      </div>

      {/* Kadi ya Points */}
      <div style={{ background: '#fff', borderRadius: 16, padding: 16, marginTop: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 700 }}>⭐ Points Zako</span>
          <span style={{ fontWeight: 700, color: '#FF8C00' }}>{points} / 1000</span>
        </div>
        {/* Progress Bar */}
        <div style={{ background: '#eee', height: 12, borderRadius: 10, marginTop: 10, overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, background: '#FF8C00', height: '100%', transition: '0.3s' }}></div>
        </div>
        <div style={{ fontSize: 12, color: '#666', marginTop: 8, textAlign: 'center' }}>
          Points {POINTS_FOR_COIN - points} zimebaki kupata Coin 1 • Umetazama Ads {watched} / {MAX_ADS_PER_DAY} leo
        </div>
      </div>

      <h3 style={{ marginTop: 20 }}>🎁 Pata Points</h3>

      <div style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700 }}>📺 Tazama Tangazo</div>
          <div style={{ fontSize: 12, color: '#666' }}>+40 Points kwa Ad 1 • Zimebaki {remainingAds} leo</div>
        </div>
        <button onClick={watchAd} disabled={isLimitReached} style={{ padding: '10px 16px', borderRadius: 10, border: 'none', background: isLimitReached ? '#ccc' : '#FF8C00', color: '#fff', fontWeight: 700 }}>
          {isLimitReached ? '⏰ Kesho' : 'Tazama'}
        </button>
      </div>

      {isLimitReached && (
        <div style={{ background: '#FFF3CD', borderRadius: 12, padding: 12, fontSize: 12, color: '#856404', marginBottom: 12, textAlign: 'center' }}>
          ⏰ Umefikisha limit ya leo (Ads 5). Rudi kesho kuendelea kupata Points!
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700 }}>📅 Ingia Kila Siku</div>
          <div style={{ fontSize: 12, color: '#666' }}>+50 Points kila siku</div>
        </div>
        <button onClick={claimDaily} disabled={claimed} style={{ padding: '10px 16px', borderRadius: 10, border: 'none', background: claimed ? '#ccc' : '#25D366', color: '#fff', fontWeight: 700 }}>
          {claimed ? '✅ Tayari' : 'Dai'}
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 700 }}>👥 Alika Rafiki</div>
          <div style={{ fontSize: 12, color: '#666' }}>+200 Points kwa kila rafiki</div>
        </div>
        <button onClick={inviteFriend} style={{ padding: '10px 16px', borderRadius: 10, border: 'none', background: '#128C7E', color: '#fff', fontWeight: 700 }}>
          Alika
        </button>
      </div>

      <div style={{ background: '#f8f8f8', borderRadius: 12, padding: 12, fontSize: 12, color: '#666', lineHeight: 1.6 }}>
        <b>📜 Sheria za Rewards - Tunagawana 50/50:</b><br />
        - Ad 1 = Points 40<br />
        - Points 1,000 (Ads 25) = Coin 1<br />
        - Coin 1 = TSh 200<br />
        - LIMIT: Mtu 1 = Ads 5 tu kwa siku ⏰<br />
        - Faida ya AdMob tunagawana nusu kwa nusu 🤝<br />
        - Kima cha chini cha kutoa: Coins 25 = TSh 5,000
      </div>

      <button style={{ width: '100%', marginTop: 16, padding: 14, borderRadius: 12, border: 'none', background: '#25D366', color: '#fff', fontWeight: 800, fontSize: 16 }}>
        💰 Badilisha {coins} Coins = TSh {money.toLocaleString()}
      </button>
    </div>
  )
}
