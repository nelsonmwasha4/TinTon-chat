import { useState, useRef } from 'react'

export default function Profile() {
  const [name, setName] = useState('Nelson')
  const [bio, setBio] = useState('Designer wa Tanzania 🇹🇿 | Mwanza')
  const [profilePic, setProfilePic] = useState<string | null>(null)
  const [statusPic, setStatusPic] = useState<string | null>(null)
  const [showWallet, setShowWallet] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [tab, setTab] = useState('posts')

  const picInput = useRef<HTMLInputElement>(null)
  const statusInput = useRef<HTMLInputElement>(null)

  // Kuchagua picha kutoka Gallery
  const handlePic = (e: any) => {
    const file = e.target.files[0]
    if (file) setProfilePic(URL.createObjectURL(file))
  }
  const handleStatus = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      setStatusPic(URL.createObjectURL(file))
      alert('Status yako imewekwa! ✅ Watu wataiona kwa masaa 24')
    }
  }

  return (
    <div className="pb-24 bg-white min-h-screen">
      {/* COVER */}
      <div className="h-32 bg-gradient-to-r from-green-600 via-emerald-500 to-black relative">
        <p className="absolute top-3 right-3 text-white text-xs bg-black/40 px-2 py-1 rounded-full">TinTon Hub • Made in Tanzania 🇹🇿</p>
      </div>

      <div className="px-4 -mt-10">
        {/* AVATAR - BON YEZA KUBADILISHA PICHA */}
        <div className="flex items-end justify-between">
          <div className="relative">
            <div 
              onClick={() => picInput.current?.click()}
              className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-green-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg cursor-pointer relative">
              {profilePic ? (
                <img src={profilePic} className="w-full h-full object-cover" />
              ) : (
                <span>{name.charAt(0)}</span>
              )}
              <div className="absolute bottom-0 right-0 bg-black/60 w-full text-center text-[10px] py-0.5">📷 Badilisha</div>
            </div>
            {/* STATUS BUTTON */}
            <button 
              onClick={() => statusInput.current?.click()}
              className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-2 border-white rounded-full text-white font-bold">
              +
            </button>
            <input ref={picInput} type="file" accept="image/*" className="hidden" onChange={handlePic} />
            <input ref={statusInput} type="file" accept="image/*,video/*" className="hidden" onChange={handleStatus} />
          </div>

          <button onClick={() => setIsEditing(!isEditing)} className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
            {isEditing ? 'Hifadhi ✅' : 'Hariri Wasifu ✏️'}
          </button>
        </div>

        {/* STATUS INAONEKANA */}
        {statusPic && (
          <div className="mt-3 flex items-center gap-2 bg-green-50 p-2 rounded-xl">
            <img src={statusPic} className="w-10 h-10 rounded-full object-cover border-2 border-green-500" />
            <div className="flex-1"><p className="text-sm font-bold">Status Yako 🟢</p><p className="text-xs text-gray-500">Watu 24 wameiona • Itafutika baada ya 24h</p></div>
            <button onClick={() => setStatusPic(null)} className="text-xs text-red-500">Futa</button>
          </div>
        )}
        {!statusPic && (
          <button onClick={() => statusInput.current?.click()} className="mt-3 w-full bg-gray-100 py-2 rounded-full text-sm">+ Weka Status kutoka Gallery 📸</button>
        )}

        {/* NAME + BIO */}
        <div className="mt-3">
          <h1 className="text-2xl font-bold">{name} <span className="text-blue-500">✓</span></h1>
          <p className="text-gray-500">@nelson • Mwanza</p>
          <p className="text-sm mt-1">{bio}</p>
        </div>

        <div className="flex gap-6 mt-4">
          <div><b>1.2K</b> <span className="text-gray-500 text-sm">Wafuasi</span></div>
          <div><b>340</b> <span className="text-gray-500 text-sm">Ninaowafuata</span></div>
          <div><b>5.4K</b> <span className="text-gray-500 text-sm">Likes ❤️</span></div>
        </div>

        {/* WALLET NDANI YA PROFILE - INAONEKANA KAMA PICHA */}
{showWallet && (
  <div className="mt-2">
    {/* BALANCE - Kama kwenye picha */}
    <div className="bg-black text-white rounded-2xl p-5 text-center">
      <p className="text-white/90">Your Balance</p>
      <p className="text-4xl font-bold mt-1">TSh 2,400</p>
      <p className="mt-2 text-white/90">12 Coins • 1 Coin = TSh 200</p>
      <p className="text-sm mt-1">🇹🇿 Tanzania Tu • M-Pesa / Tigo / Airtel / HaloPesa</p>
    </div>

    {/* WITHDRAW */}
    <h3 className="font-bold text-lg mt-5">Withdraw</h3>
    <button className="w-full bg-gray-300 text-white font-bold py-3 rounded-xl mt-2">
      Fikisha TSh 5,000 Kwanza (2,400 / 5,000)
    </button>

    {/* TRANSACTIONS - HAPA NDIPO TULIPOREKEBISHA */}
    <h3 className="font-bold text-lg mt-5">My Transactions</h3>
    <div className="space-y-2 mt-2">
      <div className="flex justify-between items-center bg-white border rounded-xl p-3 shadow-sm">
        <div><p className="font-bold">Rewards - Ads 25</p><p className="text-xs text-gray-500">Leo</p></div>
        <span className="text-green-500 font-bold">+ TSh 200</span>
      </div>

      {/* ✅ IMEKEREBISHWA: 5 Points SIO 50 */}
      <div className="flex justify-between items-center bg-white border rounded-xl p-3 shadow-sm">
        <div><p className="font-bold">Daily Login</p><p className="text-xs text-gray-500">Jana</p></div>
        <span className="text-green-500 font-bold">+5 Points</span>
      </div>

      <div className="flex justify-between items-center bg-white border rounded-xl p-3 shadow-sm">
        <div><p className="font-bold">Kutoa - M-Pesa 076XXXXXXX</p><p className="text-xs text-gray-500">Wiki iliyopita</p></div>
        <span className="text-red-500 font-bold">- TSh 5,000</span>
      </div>
    </div>

    {/* BUY COINS */}
    <h3 className="font-bold text-lg mt-5">Buy Coins</h3>
    <div className="flex justify-between items-center bg-white border rounded-xl p-3 shadow-sm mt-2">
      <p className="font-bold">5 Coins</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">TZS 1,000</button>
    </div>
    <div className="flex justify-between items-center bg-white border rounded-xl p-3 shadow-sm mt-2">
      <p className="font-bold">10 Coins</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">TZS 2,000</button>
    </div>
    <div className="flex justify-between items-center bg-white border rounded-xl p-3 shadow-sm mt-2">
      <p className="font-bold">25 Coins ⭐ Maarufu</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">TZS 5,000</button>
    </div>
  </div>
)}
