<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TinTon - Settings</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}
  body{background:#f0f2f5;padding:15px}
  .header{display:flex;justify-content:space-between;align-items:center;background:white;padding:15px;border-radius:15px;box-shadow:0 2px 10px rgba(0,0,0,0.1);margin-bottom:15px}
  .history-btn{background:#6a00ff;color:white;border:none;padding:8px 14px;border-radius:20px;font-size:14px;cursor:pointer}
  
  /* LEADER AI */
  .leader-card{background:linear-gradient(135deg,#6a00ff,#ff00a8);color:white;padding:18px;border-radius:18px;margin-bottom:15px}
  .leader-top{display:flex;justify-content:space-between;align-items:center}
  .badge{background:white;color:#6a00ff;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:bold}
  .switch{position:relative;width:55px;height:28px;background:#ddd;border-radius:30px;cursor:pointer;transition:0.3s;flex-shrink:0}
  .switch.active{background:#00c853}
  .switch::after{content:'';position:absolute;top:3px;left:3px;width:22px;height:22px;background:white;border-radius:50%;transition:0.3s}
  .switch.active::after{left:30px}

  /* AI LIST */
  .ai-card{background:white;padding:15px;border-radius:15px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 5px rgba(0,0,0,0.08)}
  .ai-info h4{font-size:16px}
  .ai-info p{font-size:12px;color:#666;margin-top:3px;line-height:1.3}
  .status{font-size:11px;font-weight:bold;margin-top:4px}
  .on{color:green}.off{color:red}

  /* SHERIA SECTION - ULICHOANDIKA KWENYE KARATASI */
  .section-title{font-size:16px;font-weight:bold;margin:20px 0 10px 5px}
  .law-card{background:white;padding:15px;border-radius:15px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 1px 5px rgba(0,0,0,0.08);cursor:pointer}
  .law-card h4{font-size:15px}
  .law-card p{font-size:12px;color:#666;margin-top:3px}
  .law-card span{font-size:18px;color:#999}
  .danger-card{background:#fff5f5;border:1px solid #ffcdd2}
  .danger-card h4{color:#d32f2f}

  /* MODAL */
  .modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:99;justify-content:center;align-items:flex-start;padding-top:40px}
  .modal.show{display:flex}
  .modal-box{background:white;width:92%;max-width:420px;border-radius:18px;overflow:hidden;max-height:85vh;display:flex;flex-direction:column}
  .modal-head{background:#6a00ff;color:white;padding:15px;display:flex;justify-content:space-between;align-items:center}
  .modal-head button{background:none;border:none;color:white;font-size:20px;cursor:pointer}
  .modal-body{padding:15px;overflow-y:auto;font-size:13px;line-height:1.6;color:#333}
  .modal-body h3{margin:10px 0 5px}
  .close-btn{width:100%;padding:12px;border:none;background:#f0f0f0;font-weight:bold;cursor:pointer}
</style>
</head>
<body>

<div class="header">
  <h2>⚙️ Settings</h2>
  <button class="history-btn" onclick="openHistory()">🕒 History ya AI</button>
</div>

<!-- LEADER AI -->
<div class="leader-card">
  <div class="leader-top">
    <h3>👑 LEADER AI - Kiongozi</h3>
    <span class="badge" id="leaderBadge">AMEWASHWA</span>
  </div>
  <p style="font-size:13px;opacity:0.9;margin-top:5px;line-height:1.4">Anakagua AI wote, anarekebisha makosa kupitia History ya Chat ya mmiliki, na anamuonyesha mmiliki kila kitu AI wanavyoongea.</p>
  <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:center">
    <span style="font-size:13px">Msimamizi wa AI wote</span>
    <div class="switch active" id="leaderSwitch" onclick="toggleLeader()"></div>
  </div>
</div>

<!-- LIST OF ALL AI -->
<div id="aiList"></div>

<!-- SHERIA - HAPA NDIPO PRIVACY POLICY IPO - KAMA KWENYE KARATASI YAKO -->
<div class="section-title">📜 Sheria na Ulinzi - Hapa ndipo Privacy Policy ipo</div>

<div class="law-card" onclick="openModal('privacy')">
  <div><h4>🔒 Privacy Policy</h4><p>Sera ya Faragha - Jinsi TinTon inavyolinda taarifa zako, pesa zako na Chat zako.</p></div>
  <span>›</span>
</div>

<div class="law-card" onclick="openModal('terms')">
  <div><h4>📋 Terms of Service</h4><p>Masharti ya Kutumia App - Sheria za kutumia TinTon, Soko, Live na Wallet.</p></div>
  <span>›</span>
</div>

<div class="law-card" onclick="openModal('sheria')">
  <div><h4>⚖️ Sheria za Tanzania</h4><p>TinTon inafuata Sheria za Tanzania, Benki Kuu, na Sheria za Mitandao.</p></div>
  <span>›</span>
</div>

<div class="law-card danger-card" onclick="openModal('danger')">
  <div><h4>⚠️ Habari / Dangerous - Tahadhari!</h4><p>Usimtumie mtu PIN yako! Usinunue bila Video Call ya dakika 5! AI wa Wallet hatawahi kukuomba PIN kwenye Chat.</p></div>
  <span>›</span>
</div>

<div style="text-align:center;font-size:11px;color:#999;margin:20px 0">TinTon v1.0 - Imetengenezwa Tanzania 🇹🇿</div>

<!-- HISTORY MODAL -->
<div class="modal" id="historyModal">
  <div class="modal-box">
    <div class="modal-head"><b>📜 Mazungumzo ya AI</b><button onclick="closeHistory()">✕</button></div>
    <div class="modal-body" id="historyList"></div>
    <button class="close-btn" onclick="closeHistory()">Funga</button>
  </div>
</div>

<!-- SHERIA MODAL -->
<div class="modal" id="lawModal">
  <div class="modal-box">
    <div class="modal-head"><b id="lawTitle">Sheria</b><button onclick="closeLaw()">✕</button></div>
    <div class="modal-body" id="lawBody"></div>
    <button class="close-btn" onclick="closeLaw()">Nimeelewa ✅</button>
  </div>
</div>

<script>
  let ais = [
    {id:'chat', name:'🤖 AI wa Chat', desc:'Mhudumu wa Wateja - Anarekebisha spelling, anasema meseji imefika, imefunguliwa, au mwenzako hana bando.', on:true},
    {id:'wallet', name:'🤖 AI wa Wallet', desc:'Mhasibu + Designer + Wakala - Anasimamia pesa, coins, anakutengenezea Profile nzuri, hawezi kutoa pesa bila PIN.', on:true},
    {id:'soko', name:'🤖 AI wa Soko', desc:'Muuzaji + Dalali - Anakuuzia bidhaa Sokoni na Live, anapanga Video Call ya dakika 5.', on:true},
    {id:'nyumbani', name:'🤖 AI wa Nyumbani', desc:'Mwalimu - Anakufundisha App inavyofanya kazi na jinsi ya kupata fedha ndani ya TinTon.', on:true},
  ];

  let history = [
    {from:'AI Chat → Leader', text:'Mmiliki anataka kutuma 100,000 kwa Juma', type:'chat'},
    {from:'👑 Leader AI', text:'HAPANA! Nimeangalia History ya Chat ya mmiliki - alisema 10,000 siyo 100,000. Nimekurekebisha.', type:'leader'},
    {from:'👑 Leader → AI Wallet', text:'Tuma 10,000 tu. Hii ndiyo sahihi.', type:'leader'},
    {from:'AI Wallet → Mmiliki', text:'Weka PIN ili nitume 10,000 kwa Juma', type:'wallet'},
  ];

  function renderAI(){
    let html='';
    ais.forEach((ai,i)=>{
      html+=`<div class="ai-card"><div class="ai-info"><h4>${ai.name}</h4><p>${ai.desc}</p><div class="status ${ai.on?'on':'off'}">${ai.on?'🟢 AMEWASHWA':'🔴 AMEZIMWA'}</div></div><div class="switch ${ai.on?'active':''}" onclick="toggleAI(${i})"></div></div>`;
    });
    document.getElementById('aiList').innerHTML=html;
  }
  function toggleAI(i){
    ais[i].on=!ais[i].on;
    history.push({from:'👑 Leader AI', text:`Mmiliki ame${ais[i].on?'mwasha':'mzima'} ${ais[i].name}. Nimewaambia AI wengine wasimtume kazi.`, type:'leader'});
    renderAI(); renderHistory();
  }
  function toggleLeader(){
    let sw=document.getElementById('leaderSwitch'); let badge=document.getElementById('leaderBadge');
    let isActive=sw.classList.contains('active');
    if(isActive){ sw.classList.remove('active'); badge.textContent='AMEZIMWA'; alert('⚠️ Leader AI amezimwa! AI wote hawatakaguliwa tena.'); }
    else{ sw.classList.add('active'); badge.textContent='AMEWASHWA'; alert('✅ Leader AI amewashwa!'); }
  }
  function renderHistory(){
    let html='';
    history.forEach(h=>{ html+=`<div style="padding:10px;border-radius:10px;margin-bottom:10px;background:#f5f5f5"><b>${h.from}</b><br>${h.text}</div>`; });
    document.getElementById('historyList').innerHTML=html;
  }
  function openHistory(){ renderHistory(); document.getElementById('historyModal').classList.add('show'); }
  function closeHistory(){ document.getElementById('historyModal').classList.remove('show'); }

  // SHERIA MODALS - ULIZOANDIKA
  function openModal(type){
    let title='', body='';
    if(type=='privacy'){ title='🔒 Privacy Policy'; body=`<h3>TinTon Privacy Policy</h3><p><b>1. Taarifa zako ni zako.</b> Hatumuuzi mtu namba yako, Chat zako au pesa zako.</p><p><b>2. AI wanaona nini?</b> AI wanaona History ya Chat ili kurekebisha makosa, lakini hawawezi kutuma Chat yako kwa mtu mwingine bila ruhusa yako.</p><p><b>3. Pesa zako:</b> AI wa Wallet hawezi kutoa pesa bila PIN yako. Leader AI anakagua kila muamala.</p><p><b>4. Unaweza kufuta:</b> Unaweza kufuta History ya AI wakati wowote kwenye Settings.</p>`; }
    if(type=='terms'){ title='📋 Terms of Service'; body=`<h3>Masharti ya Kutumia TinTon</h3><p>1. Lazima uwe na umri wa miaka 18+ kutumia Wallet.</p><p>2. Usitapeli, usiibe, usitume maneno machafu.</p><p>3. Kila bidhaa lazima ionekane kwenye Video Call ya dakika 5 kabla ya kulipa.</p><p>4. Ukivunja sheria, Leader AI atakuripoti na akaunti yako itafungwa.</p>`; }
    if(type=='sheria'){ title='⚖️ Sheria za Tanzania'; body=`<h3>Sheria</h3><p>TinTon inafuata Sheria za Tanzania:</p><p>• Sheria ya Ulinzi wa Taarifa Binafsi</p><p>• Sheria za Benki Kuu kuhusu pesa za mtandaoni</p><p>• Sheria za Mitandao na Uhalifu wa Mtandaoni</p><p><b>Hapa ndipo Privacy Policy ipo</b> - ndani ya Settings, ili kila mtu aione kabla hajatumia App.</p>`; }
    if(type=='danger'){ title='⚠️ Habari / Dangerous'; body=`<h3 style="color:red">TAHADHARI! USITAPELIWE!</h3><p>🚨 <b>USIMTUMIE MTU PIN YAKO!</b> Hata kama anasema ni AI wa Wallet!</p><p>🚨 <b>AI wa Wallet hatawahi kukuomba PIN kwenye Chat.</b> PIN unaweka kwenye ukurasa wa Wallet tu.</p><p>🚨 <b>Usilipie bidhaa bila Video Call ya dakika 5.</b> Kama muuzaji anakataa Video Call, ni tapeli!</p><p>🚨 <b>Ukiona kitu cha hatari, ripoti kwa Leader AI mara moja.</b></p>`; }
    document.getElementById('lawTitle').innerText=title;
    document.getElementById('lawBody').innerHTML=body;
    document.getElementById('lawModal').classList.add('show');
  }
  function closeLaw(){ document.getElementById('lawModal').classList.remove('show'); }
  renderAI(); renderHistory();
</script>
</body>
</html>
