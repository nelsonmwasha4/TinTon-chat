import { type Lang } from "../i18n";

export default function PrivacyPolicyPage({ lang }: { lang: Lang }) {
  const isSw = lang === "sw";
  return (
    <div style={{ padding: 16, background: "#fff", minHeight: "100vh", lineHeight: 1.6 }}>
      <h2 style={{ color: "#075E54" }}>TinTon - Privacy Policy</h2>
      <p style={{ color: "#888", fontSize: 13 }}>{isSw ? "Imesasishwa: 26 Novemba 2026" : "Last Updated: November 26, 2026"}</p>

      <h3>1. {isSw ? "Taarifa Tunazokusanya" : "Information We Collect"}</h3>
      <p>{isSw ? "Tunakusanya jina lako, namba ya simu, picha ya wasifu, na ujumbe unaotuma kwenye TinTon ili app ifanye kazi. Hatukusanyi ujumbe wako wa siri bila ruhusa yako." : "We collect your name, phone number, profile photo, and messages you send on TinTon so the app can work. We do not collect your private messages without your permission."}</p>

      <h3>2. {isSw ? "Tunatumiaje Taarifa Zako" : "How We Use Your Information"}</h3>
      <p>{isSw ? "Tunatumia taarifa zako ku: Kukuruhusu kuchat na marafiki, Kukuonyesha Live, Kusimamia Wallet na Coins zako, Kuboresha app na kukulinda dhidi ya utapeli." : "We use your information to: Allow you to chat with friends, Show you Live, Manage your Wallet and Coins, Improve the app and protect you from fraud."}</p>

      <h3>3. {isSw ? "Kushiriki Taarifa" : "Sharing Information"}</h3>
      <p>{isSw ? "Hatuuzi taarifa zako kwa mtu yeyote. Tunashiriki na M-Pesa / Tigo Pesa / Airtel Money tu unapolipia Coins, na kwa polisi tu kama sheria inatulazimu." : "We do not sell your information to anyone. We only share with M-Pesa / Tigo Pesa / Airtel Money when you pay for Coins, and with police only if the law requires us."}</p>

      <h3>4. {isSw ? "Usalama Wako" : "Your Security"}</h3>
      <p>{isSw ? "Ujumbe wako umehifadhiwa kwa usalama. Unaweza kufuta akaunti yako muda wowote kwenye Settings > Futa Akaunti. Ukifuta, taarifa zako zote zinafutwa kabisa ndani ya siku 30." : "Your messages are stored securely. You can delete your account anytime in Settings > Delete Account. If you delete, all your information is permanently deleted within 30 days."}</p>

      <h3>5. {isSw ? "Watoto" : "Children"}</h3>
      <p>{isSw ? "TinTon ni kwa watu wenye umri wa miaka 13 na kuendelea. Kama una chini ya miaka 18, tumia app kwa ruhusa ya mzazi." : "TinTon is for people aged 13 and above. If you are under 18, use the app with parental permission."}</p>

      <h3>6. {isSw ? "Wasiliana Nasi" : "Contact Us"}</h3>
      <p>Email: <b>tinton.tz@gmail.com</b><br />WhatsApp: <b>+255 XXX XXX XXX</b><br />Mwanza, Tanzania 🇹🇿</p>

      <div style={{ background: "#E8F5E9", padding: 12, borderRadius: 10, marginTop: 20 }}>
        <b>✅ {isSw ? "Kwa kutumia TinTon, unakubali Privacy Policy hii." : "By using TinTon, you agree to this Privacy Policy."}</b>
      </div>
    </div>
  );
      }
