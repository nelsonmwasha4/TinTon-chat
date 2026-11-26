import { useEffect } from 'react'

// BADILISHA HAPA BAADAYE UKIPATA AdMob ID YAKO KWELI
// Sasa ni TEST ID ya Google - itaonyesha tangazo la kujaribu
const AD_UNIT_ID = 'ca-app-pub-3940256099942544/6300978111'

export default function AdBanner() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [])

  return (
    <div style={{ background: '#f8f8f8', border: '1px dashed #ccc', borderRadius: 12, padding: 12, margin: '12px 16px', textAlign: 'center' }}>
      <div style={{ fontSize: 10, color: '#999', marginBottom: 6 }}>ADVERTISEMENT - AdMob</div>
      {/* Hapa ndipo tangazo la AdMob litaonekana baada ya kuweka ID yako */}
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={AD_UNIT_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <div style={{ fontSize: 12, color: '#666', padding: '16px 0', background: '#fff', borderRadius: 8, marginTop: 6 }}>
        📢 Nafasi ya Tangazo - AdMob itaonekana hapa
        <br />
        <span style={{ fontSize: 11, color: '#999' }}>Weka AdMob ID yako kwenye AdBanner.tsx</span>
      </div>
    </div>
  )
}
