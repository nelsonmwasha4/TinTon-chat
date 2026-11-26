type Props = {
  balance: number
  t: any
}

export default function WalletCard({ balance, t }: Props) {
  return (
    <div style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', borderRadius: 16, padding: 20, margin: '16px' }}>
      <div style={{ fontSize: 13, opacity: 0.9 }}>{t.balance || 'Salio Lako'}</div>
      <div style={{ fontSize: 32, fontWeight: 800, margin: '8px 0' }}>TSh {balance.toLocaleString()}</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ flex: 1, padding: 10, borderRadius: 10, border: 'none', background: '#fff', color: '#128C7E', fontWeight: 700 }}>➕ {t.topUp || 'Weka Pesa'}</button>
        <button style={{ flex: 1, padding: 10, borderRadius: 10, border: 'none', background: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 700 }}>💸 {t.withdraw || 'Toa Pesa'}</button>
      </div>
    </div>
  )
}
