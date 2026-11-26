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

        {/* WALLET NDANI YA PROFILE - BON YEZA KUFUNGUA */}
        <button onClick={() => setShowWallet(!showWallet)} className="w-full bg-gray-50 rounded-2xl p-3 mt-4 text-left">
          <div className="flex justify-between items-center">
            <span className="font-bold">⭐ Level 5 - Mzalendo</span>
            <span className="font-bold text-yellow-600">🪙 12 Coins • TSh 2,400 {showWallet ? '▲' : '▼'}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden"><div className="h-full bg-green-500 w-[65%]"></div></div>
          <p className="text-xs text-gray-500 mt-1">Bonyeza hapa kuona Wallet yako 👆</p>
        </button>

        {/* WALLET INAFUNGUKA HAPA HAPA */}
        {showWallet && (
          <div className="bg-black text-white rounded-2xl p-4 mt-2">
            <p className="text-sm text-gray-300">Salio Lako</p>
            <p className="text-3xl font-bold">TSh 2,400</p>
            <p className="text-xs text-yellow-400 mt-1">12 Coins • 1 Coin = TSh 200</p>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-green-500 py-2.5 rounded-full font-bold">+ Nunua Coins</button>
              <button className="flex-1 bg-white text-black py-2.5 rounded-full font-bold">Toa Pesa</button>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-bold text-sm">Miamala Yangu</p>
              <div className="flex justify-between bg-white/10 p-2 rounded-lg text-sm"><span>✅ Ulipokea - M-Pesa</span><b className="text-green-400">+TSh 2,000</b></div>
              <div className="flex justify-between bg-white/10 p-2 rounded-lg text-sm"><span>🎁 Zawadi - Live Neema</span><b className="text-red-400">-TSh 400</b></div>
              <div className="flex justify-between bg-white/10 p-2 rounded-lg text-sm"><span>✅ Ulipokea - Tigo Pesa</span><b className="text-green-400">+TSh 1,000</b></div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">M-Pesa • Tigo • Airtel • HaloPesa</p>
          </div>
        )}

        {/* BADGES */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
          <span className="bg-yellow-100 px-3 py-1 rounded-full text-xs">🏆 Mwanzo Mpya</span>
          <span className="bg-red-100 px-3 py-1 rounded-full text-xs">🔥 Active 7 Siku</span>
          <span className="bg-green-100 px-3 py-1 rounded-full text-xs">💎 Mzalendo wa TZ</span>
        </div>

        {/* TABS */}
        <div className="flex border-b mt-5">
          <button onClick={()=>setTab('posts')} className={`flex-1 py-3 font-bold ${tab==='posts'?'border-b-2 border-green-600':''}`}>Machapisho</button>
          <button onClick={()=>setTab('liked')} className={`flex-1 py-3 font-bold ${tab==='liked'?'border-b-2 border-green-600':''}`}>Nimependa ❤️</button>
          <button onClick={()=>setTab('live')} className={`flex-1 py-3 font-bold ${tab==='live'?'border-b-2 border-green-600':''}`}>Live 🎥</button>
        </div>
        {tab==='posts' && <div className="grid grid-cols-3 gap-1 mt-2"><div className="aspect-square bg-green-100 rounded-lg flex items-center justify-center text-3xl">🎨</div><div className="aspect-square bg-yellow-100 rounded-lg flex items-center justify-center text-3xl">🇹🇿</div><div className="aspect-square bg-blue-100 rounded-lg flex items-center justify-center text-3xl">📸</div></div>}
        {tab==='liked' && <p className="text-center py-8 text-gray-500">Hujapenda chochote bado ❤️</p>}
        {tab==='live' && <p className="text-center py-8 text-gray-500">Hujafanya Live bado 🎥</p>}
      </div>
    </div>
  )
  }
