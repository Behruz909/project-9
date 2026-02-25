import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sections = [
    {
      title: "Kirish: Soliq Konsepsiyasi",
      subtitle: "2024-2030 Strategik Rivojlanish Yo'li",
      content: "Davlat soliq tizimi — iqtisodiy barqarorlikning asosi. Yangi islohotlar soliq yukini kamaytirish va shaffoflikni oshirishga qaratilgan.",
      type: "hero"
    },
    {
      title: "Asosiy Soliq Turlari",
      subtitle: "Budjetni shakllantiruvchi manbalar",
      items: [
        { t: "QQS (12%)", d: "Qo'shilgan qiymat solig'i - iste'mol solig'i hisoblanadi." },
        { t: "Foyda Solig'i (15%)", d: "Yuridik shaxslarning sof foydasidan olinadigan soliq." },
        { t: "Daromad Solig'i (12%)", d: "Jismoniy shaxslarning oylik daromadidan ushlab qolinadi." }
      ],
      type: "grid"
    },
    {
      title: "Raqamli Transformatsiya",
      subtitle: "Inson omilisiz soliq ma'murchiligi",
      items: [
        { t: "E-Faktura", d: "Hujjat aylanishining 100% raqamli ko'rinishi." },
        { t: "Face ID tizimi", d: "Tadbirkorlarni masofadan identifikatsiya qilish." },
        { t: "Risk-Analiz", d: "Sun'iy intellekt orqali shubhali amallarni aniqlash." }
      ],
      type: "grid"
    },
    {
      title: "Yashirin Iqtisodiyotga Qarshi",
      subtitle: "Shaffoflikni ta'minlash mexanizmlari",
      content: "Chek berish madaniyati va onlayn kassa mashinalari orqali tushumlar nazorati kuchaytirilmoqda. 'Soliq hamkor' tizimi jamoatchilik nazoratini oshirdi.",
      type: "text"
    },
    {
      title: "Statistik Ko'rsatkichlar",
      subtitle: "2023-2024 yillar qiyosiy tahlili",
      table: [
        ["Ko'rsatkich", "2023 (Trln)", "2024 (Prognoz)", "O'sish"],
        ["Umumiy tushum", "165.2", "190.5", "+15%"],
        ["Bojxona to'lovlari", "45.0", "52.3", "+16%"],
        ["Mahalliy soliqlar", "28.4", "35.1", "+23%"]
      ],
      type: "table"
    },
    {
      title: "Soliq Imtiyozlari",
      subtitle: "Investitsion jozibadorlikni oshirish",
      content: "Texnopark rezidentlari, eksportyor korxonalar va ijtimoiy soha subyektlari uchun maxsus soliq rejimlari amal qilmoqda.",
      type: "text"
    },
    {
      title: "Elektron Xizmatlar",
      subtitle: "Soliq to'lovchi shaxsiy kabineti",
      items: [
        { t: "Soliq Mobil", d: "60 dan ortiq xizmatlar mobil ilovada." },
        { t: "Hisobotlar", d: "Avtomatik shakllanadigan soliq hisobotlari." },
        { t: "Soliq maslahatchi", d: "24/7 onlayn muloqot va yordam." }
      ],
      type: "grid"
    },
    {
      title: "Xalqaro Hamkorlik",
      subtitle: "OECD va jahon tajribasi",
      content: "O'zbekiston soliq tizimi xalqaro standartlarga moslashtirilmoqda. Ikkiyoqlama soliqqa tortishni oldini olish bo'yicha 54 ta davlat bilan kelishuv bor.",
      type: "text"
    },
    {
      title: "Kelajak Rejalari",
      subtitle: "2030 yilga qadar maqsadlar",
      items: [
        { t: "100% Digital", d: "Qog'oz ko'rinishidagi hisobotlardan butunlay voz kechish." },
        { t: "Soliq yuki", d: "Iqtisodiy faollikni oshirish uchun stavkalarni optimallashtirish." },
        { t: "Global integratsiya", d: "Jahon savdo tashkiloti talablariga moslashish." }
      ],
      type: "grid"
    },
    {
      title: "Loyiha Muallifi",
      subtitle: "Professional ma'lumotlar",
      type: "author"
    }
  ];

  const next = () => currentSlide < sections.length - 1 && setCurrentSlide(currentSlide + 1);
  const prev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);

  const current = sections[currentSlide];

  return (
    <div className="tax-dashboard">
      {/* SIDEBAR NAVIGATION */}
      <aside className="nav-pane">
        <div className="logo-container">
          <div className="logo-badge">DSX PRO</div>
        </div>
        <div className="menu-list">
          {sections.map((s, idx) => (
            <div 
              key={idx} 
              className={`menu-link ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            >
              <span style={{width: '20px'}}>{idx + 1}</span>
              {s.title.split(":")[0]}
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN DISPLAY AREA */}
      <main className="display-area">
        <div className="slide-container" key={currentSlide}>
          <h1 className="section-title">{current.title}</h1>
          <p style={{color: '#C5A059', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10px'}}>{current.subtitle}</p>
          <div className="title-underline"></div>

          {current.type === 'hero' && (
             <div style={{marginTop: '40px'}}>
                <p style={{fontSize: '24px', lineHeight: '1.6', color: '#334155'}}>{current.content}</p>
                
             </div>
          )}

          {current.type === 'grid' && (
            <div className="info-grid" style={{marginTop: '20px'}}>
              {current.items.map((item, i) => (
                <div className="info-box" key={i}>
                  <h3 style={{color: '#002347', marginBottom: '15px'}}>{item.t}</h3>
                  <p style={{color: '#64748B', fontSize: '14px'}}>{item.d}</p>
                </div>
              ))}
            </div>
          )}

          {current.type === 'table' && (
            <table className="data-table-pro" style={{marginTop: '30px'}}>
              <thead>
                <tr>
                  {current.table[0].map((h, i) => <th key={i}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {current.table.slice(1).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {current.type === 'text' && (
            <div style={{background: 'white', padding: '40px', borderLeft: '10px solid #002347', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}>
               <p style={{fontSize: '20px', lineHeight: '1.8'}}>{current.content}</p>
            </div>
          )}

          {current.type === 'author' && (
            <div className="prestige-card">
              <div className="profile-img">👤</div>
              <div className="profile-info">
                <h2 style={{fontSize: '36px', color: '#C5A059'}}>Homidjonov Muhammaddiyor</h2>
                <p style={{marginTop: '10px', opacity: 0.8, letterSpacing: '1px'}}>9-A sinfi O'quvchisi</p>
                <div style={{width: '50px', height: '3px', background: '#C5A059', margin: '25px 0'}}></div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
                   <div>
                      <p style={{fontSize: '12px', opacity: 0.6}}>MUTAXASSISLIK</p>
                      <p>Soliq va moliya tahlili</p>
                   </div>
                   <div>
                      <p style={{fontSize: '12px', opacity: 0.6}}>TAJRIBA</p>
                      {/* <p>8 yillik IT & Audit</p> */}
                   </div>
                   <div style={{gridColumn: 'span 2'}}>
                      <p style={{fontSize: '12px', opacity: 0.6}}>BOG'LANISH</p>
                      {/* <p>expert.professional@soliq.uz</p> */}
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER CONTROLS */}
        <div className="control-bar">
          <div style={{fontSize: '12px', color: '#94A3B8'}}>
            SLAYD: {currentSlide + 1} / {sections.length}
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <button className="btn-nav" onClick={prev} disabled={currentSlide === 0}>ORQAGA</button>
            <button className="btn-nav" onClick={next} disabled={currentSlide === sections.length - 1}>OLG'A</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;