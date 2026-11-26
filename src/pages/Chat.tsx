import { useState } from 'react'

export default function Chat() {
  const [showContacts, setShowContacts] = useState(false)
  const [search, setSearch] = useState('')

  // Hawa ni watu wako waliopo kwenye TinTon
  const myChats = [
    { name: 'Neema', msg: 'Mambo!', time: '14:20', color: 'bg-green-600', hasApp: true },
    { name: 'Asha', msg: 'Asante kwa zawadi 🌹', time: '12:05', color: 'bg-green-500', hasApp: true },
  ]

  // Hawa ni majina kutoka kwenye Simu yako - wana App na wasio na App
  const allContacts = [
    { name: 'Mama', phone: '0755000001', hasApp: true },
    { name: 'Juma Kaka', phone: '0765000002', hasApp: true },
    { name: 'Zawadi', phone: '0712000003', hasApp: false },
    { name: 'Baraka Mwanza', phone: '0758000004', hasApp: false },
    { name: 'Mwalimu Peter', phone: '0784000005', hasApp: false },
    { name: 'Neema Dada', phone: '0777000006', hasApp: true },
    { name: 'Kevin', phone: '0759000007', hasApp: false },
  ]

  const filtered = allContacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  const inviteFriend = (contact: any) => {
    const message = `Habari ${contact.name}! 😍 Nimeanza kutumia TinTon - App mpya ya Tanzania ya kuongea, Live na kutengeneza pesa! Pakua hapa: https://tinton-chat.netlify.app`
    // Inatuma kupitia WhatsApp
    window.open(`https://wa.me/255${contact.phone.slice(1)}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="pb-24 bg-white min-h-screen relative">
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold text-green-700">TinTon 🇹🇿</h1>
        <div className="flex gap-1 bg-gray-100 rounded-full p-1"><span className="px-3 py-1 rounded-full bg-white text-sm">SW</span><span className="px-3 py-1 rounded-full bg-green-600 text-white text-sm">EN</span></div>
      </div>

      {/* CHAT ZILIZOPO */}
      {myChats.map((c, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div className={`w-12 h-12 ${c.color} rounded-full flex items-center justify-center text-white text-xl font-bold`}>{c.name.charAt(0)}</div>
          <div className="flex-1">
            <p className="font-bold">{c.name}</p>
            <p className="text-gray-500 text-sm">{c.msg}</p>
          </div>
          <span className="text-xs text-gray-400">{c.time}</span>
        </div>
      ))}

      {/* BUTTON KAMA WHATSAPP - CHINI KULIA */}
      <button
        onClick={() => setShowContacts(true)}
        className="fixed bottom-24 right-4 w-14 h-14 bg-green-600 text-white rounded-full text-3xl shadow-lg z-10 flex items-center justify-center">
        +
      </button>

      {/* POPUP YA MAJINA YOTE */}
      {showContacts && (
        <div className="fixed inset-0 bg-black/50 z-20 flex items-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[85vh] flex flex-col">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="font-bold text-lg">Chat Mpya 💬</h2>
              <button onClick={() => setShowContacts(false)} className="text-2xl">✕</button>
            </div>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Tafuta jina..."
              className="m-3 bg-gray-100 rounded-full px-4 py-2.5 outline-none"
            />

            <p className="px-4 text-xs text-gray-500 font-bold">WANAO TUMIA TINTON - Bonyeza kuongea</p>
            {filtered.filter(c => c.hasApp).map((c, i) => (
              <div key={i} onClick={() => { alert(`Unafungua chat na ${c.name}`); setShowContacts(false) }} className="flex items-center gap-3 px-4 py-3 cursor-pointer">
                <div className="w-11 h-11 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">{c.name.charAt(0)}</div>
                <div className="flex-1"><p className="font-bold">{c.name}</p><p className="text-xs text-green-600">Anao tumia TinTon ✅</p></div>
                <span className="text-gray-400">›</span>
              </div>
            ))}

            <p className="px-4 text-xs text-gray-500 font-bold mt-3">WALIKO SIMUNI - Hawana TinTon Bado</p>
            <p className="px-4 text-xs text-gray-400 mb-1">Waalike wajiunge ili muongee bure!</p>
            {filtered.filter(c => !c.hasApp).map((c, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <div className="w-11 h-11 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">{c.name.charAt(0)}</div>
                <div className="flex-1"><p className="font-bold">{c.name}</p><p className="text-xs text-gray-500">{c.phone} • Hana TinTon</p></div>
                <button onClick={() => inviteFriend(c)} className="bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold">Mwalike 📩</button>
              </div>
            ))}

            <button onClick={() => {
              const msg = `Habari! Nimeanza kutumia TinTon - App mpya ya Tanzania! Pakua hapa: https://tinton-chat.netlify.app`
              window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
            }} className="m-4 bg-black text-white py-3 rounded-full font-bold">📤 Walike Marafiki Wote</button>
          </div>
        </div>
      )}
    </div>
  )
     }
