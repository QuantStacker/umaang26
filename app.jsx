import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
<<<<<<< HEAD
import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc, getDocs, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
=======
import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc, getDocs } from 'firebase/firestore';
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { db, auth } from './firebase';
import './style.css';




import kalashImg from './assets/images/kalash.jpeg';
import shraddhaImg from './assets/images/shraddha.jpeg';
import asthaImg from './assets/images/astha.jpeg';
<<<<<<< HEAD
import atharvImg from './assets/images/atharvk.jpeg';
import snehalImg from './assets/images/snehal.jpeg';
import placeholderImg from './assets/images/gs-boy.jpg';


=======
import atharvImg from './assets/images/atharv.jpeg';
import snehalImg from './assets/images/snehal.jpeg';
import placeholderImg from './assets/images/gs-boy.jpg';

>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
/* ================= DAY TOASTS ================= */
const DayToasts = () => {
  const [visibleToasts, setVisibleToasts] = useState({});
  const location = useLocation();

  const toasts = [
    { id: 'confession', title: 'Psst...', desc: 'You can add a confession!', className: 'toast-confession', delay: 3000, isConfession: true },
<<<<<<< HEAD
    { id: 'group', title: '📸 Album – Group Day', desc: '11 Feb', className: 'toast-group-day', delay: 4500, link: '/group-day-album' },
=======
    { id: 'group', title: 'Group Day', desc: '11 Feb', className: 'toast-group-day', delay: 4500 },
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
    { id: 'mismatch', title: 'Mismatch Day', desc: '12 Feb', className: 'toast-mismatch-day', delay: 6000 },
    { id: 'traditional', title: 'Traditional Day', desc: '13 Feb', className: 'toast-traditional-day', delay: 7500 },
    { id: 'bollywood', title: 'Bollywood Day', desc: '14 Feb', className: 'toast-bollywood-day', delay: 9000 },
    { id: 'signature', title: 'Signature Day', desc: '15 Feb', className: 'toast-signature-day', delay: 10500 },
<<<<<<< HEAD
    { id: 'umang1', title: '📸 Album – Day 1', desc: '16 Feb', className: 'toast-umang-day-1', delay: 12000, link: '/day1-album' },
=======
    { id: 'umang1', title: 'UMANG Day 1', desc: '16 Feb', className: 'toast-umang-day-1', delay: 12000 },
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
    { id: 'umang2', title: 'UMANG Day 2!', desc: 'Add Photo on 17 Feb after 11 AM', className: 'toast-umang-day-2', delay: 13500 },
  ];

  useEffect(() => {
    if (location.pathname.includes('admin')) {
      setVisibleToasts({});
      return;
    }

    if (location.pathname === '/confession') {
      setVisibleToasts(prev => {
        const next = { ...prev };
        delete next.confession;
        return next;
      });
    }

    const timers = toasts.map(toast => {
      if (toast.id === 'confession' && location.pathname === '/confession') {
        return null;
      }
      return setTimeout(() => {
        setVisibleToasts(prev => ({ ...prev, [toast.id]: true }));
      }, toast.delay);
    });

    return () => timers.forEach(timer => timer && clearTimeout(timer));
  }, [location]);

  const closeToast = (id) => {
    setVisibleToasts(prev => ({ ...prev, [id]: false }));
  };

  const scrollToTimeline = () => {
    const el = document.getElementById('timeline');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        visibleToasts[toast.id] && (
          <div key={toast.id} className="confession-toast">
            <button className="toast-close" onClick={() => closeToast(toast.id)}>×</button>
<<<<<<< HEAD
            {toast.isConfession || toast.link ? (
              <Link to={toast.link || "/confession"} className="toast-content">
                <div className="toast-icon">{toast.id === 'confession' ? '🤫' : '✨'}</div>
                <div className="toast-text">
                  <span className="toast-title">{toast.title}</span>
                  <span className="toast-desc">{toast.desc}</span>
                  {toast.link && (
                    <div className="group-photo-link">
                      <span className="link-icon">📸</span>
                      <span className="link-text">View Album</span>
                    </div>
                  )}
=======
            {toast.isConfession ? (
              <Link to="/confession" className="toast-content">
                <div className="toast-icon">🤫</div>
                <div className="toast-text">
                  <span className="toast-title">{toast.title}</span>
                  <span className="toast-desc">{toast.desc}</span>
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
                </div>
              </Link>
            ) : (
              <div className="toast-content" onClick={scrollToTimeline}>
                <div className="toast-icon">✨</div>
                <div className="toast-text">
                  <span className="toast-title">{toast.title}</span>
                  <span className="toast-desc">{toast.desc}</span>
<<<<<<< HEAD
                  {toast.id === 'group' && null}
=======
                  {toast.id === 'group' && (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe6KNRGJ9zuyDS2f2WuqJwUXBq8PHgRAakyswgG7XGPnuL3Jw/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group-photo-link"
                    >
                      <span className="link-icon">📷</span>
                      <span className="link-text">Add Group Photos</span>
                    </a>
                  )}
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
                  {toast.id === 'mismatch' && (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfCOMj4NFEAVcPhVVrBdCf7DzR7mMAYwZAHPipBV6rOZCVqVA/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group-photo-link"
                    >
                      <span className="link-icon">📷</span>
                      <span className="link-text">Add Mismatch Photos</span>
                    </a>
                  )}
                  {toast.id === 'traditional' && (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdit-u3GKCFm6BG8IxVt6Dw2DiqyUsggDtsXCKPlU3MfvomoA/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group-photo-link"
                    >
                      <span className="link-icon">📷</span>
                      <span className="link-text">Add Traditional Photos</span>
                    </a>
                  )}
                  {toast.id === 'bollywood' && (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd1zrOmOLmVgTTP7fvaESoY35SVx8VMkSOVshTNc8vmTAjfLg/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group-photo-link"
                    >
                      <span className="link-icon">📷</span>
                      <span className="link-text">Add Bollywood Photos</span>
                    </a>
                  )}
                  {toast.id === 'signature' && (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLScNHLRQre72eUGqozzCnf6hEwb2n09bFgXRi_7pNViyeALgfg/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group-photo-link"
                    >
                      <span className="link-icon">📷</span>
                      <span className="link-text">Add Signature Photos</span>
                    </a>
                  )}
<<<<<<< HEAD
                  {toast.id === 'umang1' && null}
=======
                  {toast.id === 'umang1' && (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf9hcwC_T0aPFzpad7FFUa5Nz1VCARBgwJ4UcRcXdL41GcbCw/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group-photo-link"
                    >
                      <span className="link-icon">📷</span>
                      <span className="link-text">Add UMANG Day 1 Photos</span>
                    </a>
                  )}
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
                  {toast.id === 'umang2' && (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfK_Hq2v7Ddk4Da4ONzqQVaOBnhLiNHQUXHIyfpX-iAeOgNnw/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group-photo-link"
                    >
                      <span className="link-icon">📷</span>
                      <span className="link-text">Add UMANG Day 2 Photos</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      ))}
    </div>
  );
};

/* ================= HEADER ================= */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for hash links
  const handleNavClick = (e, id) => {
    if (location.pathname !== '/') return; // Let Link handle navigation if not on home
    
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src="/assets/images/sipna-logo.png" className="college-logo" alt="Sipna Logo" />
      </div>

      <div className={`nav-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

      <nav className={`main-nav ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/confession">Confession</Link></li>
          <li>
            {location.pathname === '/' ? (
              <a href="#timeline" onClick={(e) => handleNavClick(e, 'timeline')}>Timeline</a>
            ) : (
              <Link to="/#timeline">Timeline</Link>
            )}
          </li>
          <li><Link to="/developers">Developers</Link></li>
          <li>
            {location.pathname === '/' ? (
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
            ) : (
              <Link to="/#about">About Us</Link>
            )}
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

/* ================= COUNTDOWN ================= */
const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("Feb 11, 2026 10:00:00").getTime();

    const t = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) return clearInterval(t);

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="countdown-container">
      {Object.entries(time).map(([k, v]) => (
        <div className="timer-card" key={k}>
          <div className="timer-value">{v}</div>
          <div className="timer-label">{k}</div>
        </div>
      ))}
    </div>
  );
};

/* ================= HERO ================= */
const Hero = () => {
  return (
    <section className="hero">

<img
  src="assets/images/mandala.png"
  className="mandala mandala-top-left"
/>
<img
  src="assets/images/mandala.png"
  className="mandala mandala-top-right"
/>



      {/* TITLE */}
<h1 className="hero-title">
  <span style={{ "--i": 0 }}>U</span>
  <span style={{ "--i": 1 }}>M</span>
  <span style={{ "--i": 2 }}>A</span>
  <span style={{ "--i": 3 }}>N</span>
  <span style={{ "--i": 4 }}>G</span>
</h1>




      {/* <div className="hero-year">2026</div> */}

      {/* CENTER VISUAL */}
      <div className="hero-visual">
        <img src="assets/images/mandala.png" className="hero-mandala" />
        <img src="assets/images/dancer.png" className="hero-dancer" />
      </div>

      {/* COUNTDOWN */}
      <Countdown />

    </section>
  );
};




/* ================= TIMELINE ================= */
const timelineDays = [
<<<<<<< HEAD
  { title: "Group Day", date: "11 Feb", image: "/assets/anime/group.png", link: "/group-day-album", isInternal: true, showPhotos: true },
  { title: "Mismatch Day", date: "12 Feb", image: "/assets/anime/mismatch.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSe6KNRGJ9zuyDS2f2WuqJwUXBq8PHgRAakyswgG7XGPnuL3Jw/viewform?usp=header" },
  { title: "Traditional Day", date: "13 Feb", image: "/assets/anime/traditional.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSdit-u3GKCFm6BG8IxVt6Dw2DiqyUsggDtsXCKPlU3MfvomoA/viewform?usp=header" },
  { title: "Bollywood Day", date: "14 Feb", image: "/assets/anime/bollywood.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSd1zrOmOLmVgTTP7fvaESoY35SVx8VMkSOVshTNc8vmTAjfLg/viewform?usp=header" },
  { title: "Signature Day", date: "15 Feb", image: "/assets/anime/signature.png", link: "https://docs.google.com/forms/d/e/1FAIpQLScNHLRQre72eUGqozzCnf6hEwb2n09bFgXRi_7pNViyeALgfg/viewform?usp=header" },
  { title: "UMANG Day 1", date: "16 Feb", image: "/assets/anime/umang1.png", link: "/day1-album", isInternal: true },
=======
  { title: "Group Day", date: "11 Feb", image: "/assets/anime/group.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSe6KNRGJ9zuyDS2f2WuqJwUXBq8PHgRAakyswgG7XGPnuL3Jw/viewform?usp=header" },
  { title: "Mismatch Day", date: "12 Feb", image: "/assets/anime/mismatch.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSfCOMj4NFEAVcPhVVrBdCf7DzR7mMAYwZAHPipBV6rOZCVqVA/viewform?usp=header" },
  { title: "Traditional Day", date: "13 Feb", image: "/assets/anime/traditional.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSdit-u3GKCFm6BG8IxVt6Dw2DiqyUsggDtsXCKPlU3MfvomoA/viewform?usp=header" },
  { title: "Bollywood Day", date: "14 Feb", image: "/assets/anime/bollywood.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSd1zrOmOLmVgTTP7fvaESoY35SVx8VMkSOVshTNc8vmTAjfLg/viewform?usp=header" },
  { title: "Signature Day", date: "15 Feb", image: "/assets/anime/signature.png", link: "https://docs.google.com/forms/d/e/1FAIpQLScNHLRQre72eUGqozzCnf6hEwb2n09bFgXRi_7pNViyeALgfg/viewform?usp=header" },
  { title: "UMANG Day 1", date: "16 Feb", image: "/assets/anime/umang1.png", link: "https://docs.google.com/forms/d/e/1FAIpQLSf9hcwC_T0aPFzpad7FFUa5Nz1VCARBgwJ4UcRcXdL41GcbCw/viewform?usp=header" },
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
  { title: "UMANG Day 2", date: "17 Feb", image: "/assets/anime/umang2.jpg", link: "https://docs.google.com/forms/d/e/1FAIpQLSfK_Hq2v7Ddk4Da4ONzqQVaOBnhLiNHQUXHIyfpX-iAeOgNnw/viewform?usp=header" },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const [animateActive, setAnimateActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Grid Configuration
  // We use a fixed viewBox coordinate system for the SVG
  // But the CSS Grid will handle responsive layout
  const numCols = 7;
  const colWidth = 200; // Arbitrary unit for SVG coordinate calculation
  const totalWidth = numCols * colWidth; // 1400
  const containerHeight = 400;
  const centerY = containerHeight / 2;
  const amplitude = 40; // Wave height

  // Generate Path Data matching Grid Centers
  const generateSnakePath = () => {
    let d = `M 0 ${centerY}`;
    
    // We want the curve to pass through the center of each column
    // at the peak or trough.
    
    // Previous point (Start)
    let prevX = 0;
    let prevY = centerY;

    for (let i = 0; i < numCols; i++) {
      const cx = i * colWidth + colWidth / 2; // Center of column
      // Alternating Peak/Trough
      // i=0 (Card Top) -> Curve Peak (y = centerY - amp)
      // i=1 (Card Bottom) -> Curve Trough (y = centerY + amp)
      const cy = centerY + (i % 2 === 0 ? -amplitude : amplitude);

      // We need a smooth curve from prev to current.
      // Since it's a wave, we can use cubic bezier.
      // Control point 1: halfway in X, same Y as prev
      // Control point 2: halfway in X, same Y as curr
      // actually, for a sine-like wave, CP should be around the midpoint x
      
      const midX = (prevX + cx) / 2;
      
      // If it's the first point, we just curve to it.
      if (i === 0) {
        d += ` Q ${cx * 0.5} ${cy} ${cx} ${cy}`;
      } else {
        // Smooth S-curve
        d += ` C ${prevX + colWidth * 0.5} ${prevY}, ${cx - colWidth * 0.5} ${cy}, ${cx} ${cy}`;
      }
      
      prevX = cx;
      prevY = cy;
    }

    // End segment (Symmetric to start)
    // Start was: Q 50 160 100 160 (Midpoint x=50)
    // End should be: Q 1350 160 1400 200 (Midpoint x=1350)
    const lastCPX = prevX + (totalWidth - prevX) * 0.5;
    d += ` Q ${lastCPX} ${prevY} ${totalWidth} ${centerY}`;

    return d;
  };

  return (
    <section className={`timeline-section ${animateActive ? 'animate-active' : ''}`} id="timeline" ref={timelineRef}>
      <h2 className="section-title">THE JOURNEY TO UMANG 2026</h2>
      <p className="section-subtitle">
        A colorful saga of events.
      </p>

      <div className="timeline-container">
        {/* ===== SVG BACKGROUND ===== */}
        <svg
          className="timeline-svg"
          viewBox={`0 0 ${totalWidth} ${containerHeight}`}
          preserveAspectRatio="none"
        >
          {/* Path */}
          <path
            d={generateSnakePath()}
            className="snake-path"
            stroke="#8B4513"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Nodes */}
          {timelineDays.map((_, i) => {
            const cx = i * colWidth + colWidth / 2;
            const cy = centerY + (i % 2 === 0 ? -amplitude : amplitude);
            return (
              <g key={`node-${i}`} className="timeline-node">
                <circle cx={cx} cy={cy} r="8" fill="#8B4513" />
                <circle cx={cx} cy={cy} r="4" fill="#f4c430" />
              </g>
            );
          })}
        </svg>

        {/* ===== GRID CONTENT ===== */}
        <div className="timeline-grid">
          {timelineDays.map((d, i) => {
            const isTop = i % 2 === 0;
            const CardContent = (
              <div className="timeline-card" style={{ animationDelay: `${i * 0.4}s` }}>
                <img
                  src={d.image}
                  className="timeline-img"
                  alt={d.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/anime/group.png";
                  }}
                />
                <div className="card-content">
                  <h3>{d.title}</h3>
                  <p className="event-date">{d.date}</p>
<<<<<<< HEAD
                  {d.showPhotos && <span className="album-badge">Album 📸</span>}
=======
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
                </div>
              </div>
            );

            return (
              <div key={i} className={`timeline-col ${isTop ? "col-top" : "col-bottom"}`}>
                {d.link ? (
<<<<<<< HEAD
                  d.isInternal ? (
                    <Link to={d.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                      {CardContent}
                    </Link>
                  ) : (
                    <a 
                      href={d.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      {CardContent}
                    </a>
                  )
=======
                  <a 
                    href={d.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    {CardContent}
                  </a>
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ================= GALLERY CARD (Interactive) ================= */
const GalleryCard = ({ ev, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (max 15deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Set CSS variables for 3D effect and light position
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--opacity', '1');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Reset rotation and hide light
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--opacity', '0');
  };

  return (
    <div 
      className="gallery-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="card-inner">
        <div className="card-image-wrapper">
          <img src={ev.image} alt={ev.name} className="gallery-poster" loading="lazy" />
          {/* Mouse Follow Light Effect */}
          <div className="mouse-light"></div>
        </div>
        <div className="card-info">
          <h3 className="card-title">{ev.name}</h3>
          <div className="card-meta">
            <span>📅 {ev.date}</span>
            <span>⏰ {ev.time}</span>
          </div>
          <p className="card-venue">📍 {ev.venue}</p>
        </div>
      </div>
    </div>
  );
};

/* ================= EVENTS GALLERY (Merged Schedule & Posters) ================= */
const EventsGallery = () => {
  const events = [
    { name: "Aura of Arts", date: "16 Feb", time: "11:30 AM", venue: "MBA class", image: "/assets/images/auraofart.jpg" },
    { name: "Jalljosh DJ Night", date: "17 Feb", time: "8:00 PM", venue: "Basketball Court", image: "/assets/images/jallosh.jpg" },
    { name: "Jalsa", date: "16 Feb", time: "5:00 PM", venue: "Sipna Auditorium", image: "/assets/images/jalsa.jpg" },
    { name: "Theatre & Variety", date: "17 Feb", time: "10:00 AM", venue: "Sipna Auditorium", image: "/assets/images/theater.jpg" },
    { name: "Fashion Show", date: "17 Feb", time: "6:00 PM", venue: "Basketball Court", image: "/assets/images/fashionshow.jpg" },
    { name: "Rockerz", date: "16 Feb", time: "2:00 PM", venue: "Sipna Auditorium", image: "/assets/images/rockerz.jpg" },
  ];

  return (
    <section className="events-gallery-section" id="gallery">
      <h2 className="section-title">UMANG EVENTS GALLERY</h2>
      
      {/* Background Decor */}
      <img src="assets/images/mandala.png" className="bg-decor corner-tl" alt="" />
      <img src="assets/images/mandala.png" className="bg-decor corner-tr" alt="" />
      <img src="assets/images/mandala.png" className="bg-decor corner-bl" alt="" />
      <img src="assets/images/mandala.png" className="bg-decor corner-br" alt="" />
      
      <div className="gallery-container">
        <div className="gallery-grid">
            {events.map((ev, i) => (
                <GalleryCard key={i} ev={ev} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
};


/* ================= TEASER (SAFE PLACEHOLDER) ================= */
const TeaserSection = () => (
  <section className="teaser-section">
    <h2 className="section-title">OFFICIAL TEASER</h2>
    <div className="video-container">
      <video className="teaser-video" controls>
        <source src="/assets/teaser/umang-teaser.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
);

const memories2025 = [
  {
    title: "Inauguration",
    icon: "🎉",
    photos: [
      "/assets/memories/2025/inauguration/1.jpg",
      "/assets/memories/2025/inauguration/2.jpg",
      "/assets/memories/2025/inauguration/3.jpg",
      "/assets/memories/2025/inauguration/4.jpg",
      "/assets/memories/2025/inauguration/5.jpg",
      "/assets/memories/2025/inauguration/6.jpg",
      "/assets/memories/2025/inauguration/7.jpg",
      "/assets/memories/2025/inauguration/8.jpg",
      "/assets/memories/2025/inauguration/9.jpg",
      "/assets/memories/2025/inauguration/10.jpg",
    ],
  },
  {
    title: "Dance",
    icon: "💃",
    photos: Array.from({ length: 10 }, (_, i) => `/assets/memories/2025/dance/${i+1}.jpg`)
  },
  {
    title: "DJ Night",
    icon: "🎧",
    photos: Array.from({ length: 10 }, (_, i) => `/assets/memories/2025/dj/${i+1}.jpg`)
  },
  {
    title: "Fashion Show",
    icon: "👗",
    photos: Array.from({ length: 10 }, (_, i) => `/assets/memories/2025/fashion/${i+1}.jpg`)
  },
  {
    title: "Prize Distribution",
    icon: "🏆",
    photos: Array.from({ length: 10 }, (_, i) => `/assets/memories/2025/prize/${i+1}.jpg`)
  },
];

const Memories2025 = () => {
  const openLightbox = (src) => {
    const lb = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    lb.classList.add("show");
  };

  return (
    <section className="memories-reels-section">
      <h2 className="section-title">MEMORIES OF UMANG 2025</h2>
      <p className="section-subtitle">
        Relive the moments. Feel the energy.
      </p>

      {memories2025.map((event, index) => (
        <div className="memory-reel" key={index}>
          <h3 className="memory-reel-title">
            <span>{event.icon}</span> {event.title}
          </h3>

          <div className="memory-reel-track">
            {event.photos.map((src, i) => (
              <div
                className="memory-reel-item"
                key={i}
                onClick={() => openLightbox(src)}
              >
                <img src={src} alt={event.title} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* LIGHTBOX */}
      <div id="lightbox" onClick={() => document.getElementById("lightbox").classList.remove("show")}>
        <img id="lightbox-img" alt="" />
      </div>
    </section>
  );
};
const GSSection = () => {
  return (
    <section className="gs-section">
      <h2 className="section-title">THE FACES OF UMANG 2026</h2>
      <p className="section-subtitle">
        Leading the spirit, energy, and celebration.
      </p>

      <div className="gs-wrapper">
        

        {/* GS BOY */}
        <div className="gs-person">
          <div className="spotlight-glow"></div>
          <div className="gs-photo gs-boy"></div>
          <h3 className="gs-name">Shrivatsa Nandkishor Khandare</h3>
          <p className="gs-role">GENERAL SECRETARY</p>
        </div>

        {/* GS GIRL */}
        <div className="gs-person">
          <div className="spotlight-glow"></div>
          <div className="gs-photo gs-girl"></div>
          <h3 className="gs-name">Shravani Shrikant Rote</h3>
          <p className="gs-role">GENERAL SECRETARY</p>
        </div>
      </div>
    </section>
  );
};
const InchargeAndTeam = () => {
  const coreTeam = [
    { name: "Vansh Bijwe", image:  "/assets/images/vansh.jpeg"  },
    { name: "Atharv Dabhade", image: "/assets/images/atharv.jpeg" },
    { name: "Mayuresh Dharamkar", image:  "/assets/images/Mayuresh.jpeg"  },
    { name: "Himanshu Mehare", image:  "/assets/images/himanshu.jpeg"  },
    { name: "Janhavi Padole", image:  "/assets/images/janhavi.jpeg" },
    { name: "Om Harne", image:  "/assets/images/om.jpeg"  },
    { name: "Gauri Taywade", image: "/assets/images/gauri.jpeg"  },
    { name: "Laher Yadav", image:  "/assets/images/laher.jpeg" },
    { name: "Pranav Maske", image:  "/assets/images/pranav.jpeg" },
    { name: "Sahil Dhurate", image:  "/assets/images/sahil.jpeg" }
  ];

  const techTeam = [
    { name: "Uday Purswani", image: "/assets/images/uday.jpeg" },
    { name: "Krishna Bodkhe", image:  "/assets/images/krishna.png"  },
    { name: "Rudresh Suryawanshi", image:  "/assets/images/rudresh.jpeg"  },
    { name: "Ayush Ingole", image: "/assets/images/ayush.jpeg"  },
    { name: "Harsh Vaidya", image:  "/assets/images/harsh.jpeg"  },
    { name: "Sohit Ardak", image:  "/assets/images/sohit.jpeg"  },
    { name: "Nandini Sontake", image: "/assets/images/nandini.jpeg"  },
    { name: "Disha Deshmukh", image: "/assets/images/disha.jpeg"  },
    { name: "Shreerang Topare", image:  "/assets/images/shreerang.jpeg" },
    { name: "Aditya Rathod", image:  "/assets/images/aditya.jpeg" }
  ];

  return (
    <section className="umang-team-section" id="team">

      {/* ===== UMANG IN-CHARGES ===== */}
      <div className="umang-incharge">
        <h3 className="incharge-title">UMANG 2026 In-Charges</h3>

        <div className="incharge-wrapper">
          <div className="incharge-card">
            <div className="incharge-name">Smita Jirapure Ma'am</div>
            <div className="incharge-role">Faculty In-Charge</div>
          </div>

          <div className="incharge-card">
            <div className="incharge-name">Sumit Jamkar Sir</div>
            <div className="incharge-role">Faculty In-Charge</div>
          </div>
        </div>
      </div>

      {/* ===== Core Committee ===== */}
      <div className="team-block">
        <h3 className="team-heading">Core Committee</h3>
        <div className="team-grid">
          {coreTeam.map((member, i) => (
            <div key={i} className="team-pill">
              <div 
                className="gs-photo" 
                style={member.image ? { backgroundImage: `url(${member.image})` } : {}}
              ></div>
              <div className="gs-name" style={{ fontSize: '1.2rem', marginBottom: 0 }}>{member.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Technical Team ===== */}
      <div className="team-block">
        <h3 className="team-heading">Technical Team</h3>
        <div className="team-grid">
          {techTeam.map((member, i) => (
            <div key={i} className="team-pill">
              <div 
                className="gs-photo" 
                style={member.image ? { backgroundImage: `url(${member.image})` } : {}}
              ></div>
              <div className="gs-name" style={{ fontSize: '1.2rem', marginBottom: 0 }}>{member.name}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
const Footer = () => {
  useEffect(() => {
    const KEY = "yuvanand_visits";
<<<<<<< HEAD
    const OFFSET = 2000;
=======
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
    let count = Number(localStorage.getItem(KEY)) || 0;
    count++;
    localStorage.setItem(KEY, count);

    const el = document.getElementById("visitorCount");
<<<<<<< HEAD
    if (el) el.textContent = (count + OFFSET).toLocaleString();

    // Firebase Global Visitor Count
    const updateGlobalVisitorCount = async () => {
      const counterRef = doc(db, "analytics", "visitors");
      try {
        const snap = await getDoc(counterRef);
        if (!el) return;

        if (!snap.exists()) {
          await setDoc(counterRef, { count: 1 });
          el.innerText = (OFFSET + 1).toLocaleString();
        } else {
          const newCount = snap.data().count + 1;
          await updateDoc(counterRef, { count: increment(1) });
          el.innerText = (newCount + OFFSET).toLocaleString();
        }
      } catch (error) {
        console.error("Error updating global visitor count:", error);
      }
    };

    updateGlobalVisitorCount();
=======
    if (el) el.textContent = count.toLocaleString();
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839

    // Observer for footer animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const footerReveals = document.querySelectorAll('.reveal-footer');
    footerReveals.forEach(el => observer.observe(el));

    return () => footerReveals.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-image-col">
             <div className="about-image-wrapper">
                <img src="assets/images/sipnaclg.jpg" alt="Sipna College" className="about-img" />
             </div>
          </div>
          <div className="about-content-col">
             <span className="about-subtitle">About the Institution</span>
             <h2 className="about-title">Sipna College of Engineering & Technology</h2>
             <p className="about-text">
               Sipna College of Engineering & Technology, established in 1999, is a premier institute in Amravati, dedicated to providing high-quality technical education. The college is NAAC Accredited with an 'A' Grade and offers a wide range of Undergraduate and Postgraduate programs in Engineering, Technology, and Management.
             </p>
             <p className="about-text">
               With state-of-the-art infrastructure, experienced faculty, and a vibrant campus life, Sipna COET fosters innovation, research, and holistic development. Our annual cultural fest, <strong>UMANG</strong>, is a testament to the creative spirit and unity of our students.
             </p>
             
             <div className="about-badges-grid">
               <div className="about-badge">
                 <span className="badge-icon">📍</span>
                 <span className="badge-label">Amravati<br/>Maharashtra</span>
               </div>
               <div className="about-badge">
                 <span className="badge-icon">🏛️</span>
                 <span className="badge-label">Established<br/>1999</span>
               </div>
               <div className="about-badge">
                 <span className="badge-icon">✅</span>
                 <span className="badge-label">AICTE<br/>Approved</span>
               </div>
               <div className="about-badge">
                 <span className="badge-icon">🎓</span>
                 <span className="badge-label">SGBAU<br/>Affiliated</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        {/* Premium Gradient Overlay & Texture */}
        <div className="footer-bg-overlay"></div>
        <img src="assets/images/mandala.png" className="footer-mandala footer-mandala-left" alt="" />
        <img src="assets/images/mandala.png" className="footer-mandala footer-mandala-right" alt="" />

        <div className="footer-container">
          {/* Column 1: College Info & Socials */}
          <div className="footer-col reveal-footer">
            <div className="footer-logo-block">
              <h3 className="footer-heading-primary">Sipna COET</h3>
              <p className="footer-desc">
                Sipna College of Engineering & Technology, Amravati. A premier institute fostering innovation and cultural heritage since 1999.
              </p>
            </div>
            
            <div className="social-icons-premium">
              <a href="https://www.facebook.com/sipnacoet/" target="_blank" className="social-icon-box" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="social-svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/sipnacoet/" target="_blank" className="social-icon-box" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="social-svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/channel/..." target="_blank" className="social-icon-box" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="social-svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col reveal-footer">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#guests">Events</a></li>
              <li><a href="#team">Contact</a></li>
              <li><Link to="/admin-login">Admin Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="footer-col reveal-footer">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Badnera Road, Amravati, 444701</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>+91 721 252 2341</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>office@sipnaengg.ac.in</p>
              </div>
            </div>
          </div>

          {/* Column 4: Map */}
          <div className="footer-col reveal-footer">
            <h4 className="footer-heading">Locate Us</h4>
            <div className="footer-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24668.1993061204!2d77.74311466078488!3d20.881957887214917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a52cf3db0cc7%3A0x68088c517ec9dc77!2sSipna%20College%20Of%20Engineering%20And%20Technology!5e1!3m2!1sen!2sin!4v1770442191420!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© UMANG 2026 | Sipna College of Engineering & Technology | All Rights Reserved</p>
          <div className="visitor-wrapper">
            <i className="fas fa-eye"></i> Visitors: <span id="visitorCount">...</span>
          </div>
        </div>
      </footer>


    </>
  );
};


/* ================= DEVELOPERS PAGE ================= */
const DevelopersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const devTeam = [
    { name: "Kalashsingh Solanke", image: kalashImg },
    { name: "Shraddha Koturwar", image: shraddhaImg },
    { name: "Astha Jaiswal", image: asthaImg },
    { name: "Atharv Katade", image: atharvImg },
    { name: "Snehal Dhage", image: snehalImg }
  ];

  return (
    <>
      <header>
        <div className="logo-container">
          <img src="/assets/images/sipna-logo.png" className="college-logo" alt="Sipna Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/developers" className="active">Developers</Link></li>
          </ul>
        </nav>
      </header>

      <section className="umang-team-section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="team-block">
          <h3 className="team-heading">Meet the Developers</h3>
          <div className="team-grid">
            {devTeam.map((member, i) => (
              <div key={i} className="team-pill">
                <img 
                  src={member.image} 
                  className="developer-img" 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = placeholderImg;
                  }}
                />
                <div className="gs-name" style={{ fontSize: '1.2rem', marginTop: '15px', marginBottom: 0 }}>{member.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

<<<<<<< HEAD
/* ================= GROUP DAY ALBUM ================= */
// Dynamic Image Import for Group Day
const groupDayImages = import.meta.glob('./assets/albums/group-day/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

const GroupDayAlbum = () => {
  // Convert dynamic imports to photos array
  const photos = Object.entries(groupDayImages).map(([path, module], index) => ({
    id: `gd${index}`,
    url: module.default || module
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isBig = (index) => {
    return index % 7 === 0 || index % 7 === 3;
  };

  return (
    <div className="album-page-wrapper">
      <Header />
      
      <section className="album-hero">
        <div className="sparkles"></div>
        <h1 className="album-title-animated">
          <span className="title-word">GROUP</span>
          <span className="title-word">DAY</span>
          <span className="title-word">ALBUM</span>
        </h1>
        <p className="album-subtitle">Capturing the festive spirit of UMANG 2026</p>
      </section>

      <div className="album-container">
        {photos.length === 0 ? (
          <div className="empty-album">
            <div className="empty-icon">📸</div>
            <p>No photos uploaded yet. Be the first to share!</p>
          </div>
        ) : (
          <div className="album-masonry">
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className={`album-item ${isBig(index) ? 'item-big' : 'item-standard'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="album-card-glass">
                  <div className="album-image-wrapper">
                    <img 
                              src={photo.url} 
                              alt={`Group Day Memory ${index + 1}`} 
                              className="album-img"
                            />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

=======
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
/* ================= CONFESSION BOX ================= */
const ConfessionBox = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [confessions, setConfessions] = useState([]);

  // Real-time fetching of confessions
  useEffect(() => {
    // Create a query against the collection, ordered by time descending
    // Note: If 'time' field is missing in some docs or different types, might need index or simple fetch
    // For now assuming 'time' exists as per recent update
    const q = query(collection(db, "confessions"), orderBy("time", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedConfessions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setConfessions(fetchedConfessions);
    }, (error) => {
      console.error("Error fetching confessions: ", error);
      // Fallback if index is missing or other error: try fetching without ordering first to debug or show something
      if (error.code === 'failed-precondition') {
          // This often happens if an index is required. 
          // We can try simple collection fetch for now or guide user to console.
          const simpleQ = collection(db, "confessions");
          onSnapshot(simpleQ, (snap) => {
             const simpleFetched = snap.docs.map(doc => ({id: doc.id, ...doc.data()}));
             setConfessions(simpleFetched);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setStatus("submitting");
    try {
      await addDoc(collection(db, "confessions"), {
        text: text,
        time: new Date(),
      });
      setStatus("success");
      setText("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Error submitting confession:", err);
      setStatus("error");
    }
  };

  return (
    <section className="confession-section" id="confession">
      <div className="confession-container">
        {/* SUBMISSION CARD */}
        <div className="confession-card">
          <div className="confession-header">
            <Link to="/admin-login" className="lock-icon" title="Admin Login">
              <i className="fas fa-user-secret"></i>
            </Link>
            <h2 className="confession-title">Anonymous Confession Box</h2>
            <p className="confession-subtitle">Share your thoughts safely and anonymously.</p>
          </div>
          
          {status === "success" ? (
            <div className="confession-success">
              <div className="success-icon">✨</div>
              <p>Your confession has been submitted anonymously.</p>
              <button onClick={() => setStatus("idle")} className="confession-btn-reset">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="confession-form">
              <textarea
                className="confession-input"
                placeholder="Write your confession here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={500}
                required
              ></textarea>
              <div className="char-count">{text.length}/500</div>
              
              <button 
                type="submit" 
                className={`confession-submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                disabled={status === 'submitting' || !text.trim()}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Anonymously'}
              </button>
              {status === "error" && <p className="error-msg">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>

        {/* FEED CARD */}
        <div className="confession-feed">
          <h3 className="feed-title">Recent Confessions 💌</h3>
          <div className="confession-list" id="confessionList">
            {confessions.length === 0 ? (
              <p className="empty-feed">No confessions yet. Be the first!</p>
            ) : (
              confessions.map((confession) => (
                <div key={confession.id} className="confession-item">
                  <p className="confession-text">{confession.text}</p>
                  <div className="confession-time">
                    {confession.time && confession.time.seconds 
                      ? new Date(confession.time.seconds * 1000).toLocaleString() 
                      : (confession.time instanceof Date ? confession.time.toLocaleString() : "")}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= ADMIN LOGIN ================= */
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin-dashboard');
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2 className="admin-title">Admin Login</h2>
        <p className="admin-subtitle">Secure access for authorized personnel only.</p>
        
        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleLogin} className="admin-form">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="admin@sipna.ac.in"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="admin-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ================= ADMIN DASHBOARD ================= */
const AdminDashboard = () => {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "confessions"), orderBy("time", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setConfessions(fetched);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this confession?")) {
      try {
        await deleteDoc(doc(db, "confessions", id));
      } catch (err) {
        alert("Error deleting confession: " + err.message);
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin-login');
  };

  const downloadCSV = () => {
    const csvRows = [];
    const headers = ["ID", "Confession Text", "Date", "Time"];
    csvRows.push(headers.join(","));

    confessions.forEach(c => {
      let dateStr = "";
      if (c.time) {
        const dateObj = c.time.seconds ? new Date(c.time.seconds * 1000) : new Date(c.time);
        dateStr = dateObj.toLocaleString();
      }
      
      // Escape quotes in text
      const safeText = `"${c.text.replace(/"/g, '""')}"`;
      const row = [c.id, safeText, dateStr];
      csvRows.push(row.join(","));
    });

    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "confessions_export.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (loading) return <div className="loading-screen">Loading Dashboard...</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <div className="dashboard-actions">
          <button onClick={downloadCSV} className="btn-export">
            📥 Export CSV
          </button>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="stats-bar">
          <div className="stat-card">
            <h3>Total Confessions</h3>
            <p>{confessions.length}</p>
          </div>
        </div>

        <div className="confessions-table-wrapper">
          <table className="confessions-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Confession</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {confessions.map((c) => (
                <tr key={c.id}>
                  <td className="col-time">
                    {c.time && (c.time.seconds 
                      ? new Date(c.time.seconds * 1000).toLocaleString() 
                      : new Date(c.time).toLocaleString())}
                  </td>
                  <td className="col-text">{c.text}</td>
                  <td className="col-actions">
                    <button 
                      onClick={() => handleDelete(c.id)}
                      className="btn-delete"
                      title="Delete Confession"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
              {confessions.length === 0 && (
                <tr>
                  <td colSpan="3" style={{textAlign: 'center', padding: '20px'}}>
                    No confessions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading-screen">Verifying Access...</div>;
  if (!user) return <Navigate to="/admin-login" replace />;

  return children;
};

/* ================= PAGES ================= */

const Developers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

<<<<<<< HEAD
  const developers = [
    { name: "Kalashsingh Solanke", image: kalashImg },
    { name: "Shraddha Koturwar", image: shraddhaImg },
    { name: "Astha Jaiswal", image: asthaImg },
    { name: "Atharv Katade", image: atharvImg },
    { name: "Snehal Dhage", image: snehalImg }
=======
  const devTeam = [
    { name: "Kalashsingh Solanke", image: null },
    { name: "Shraddha Koturwar", image: null },
    { name: "Astha Jaiswal", image: null },
    { name: "Atharv Katade", image: null },
    { name: "Snehal Dhage", image: null }
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
  ];

  return (
    <>
      <Header />
<<<<<<< HEAD
      <div className="team-section"> 
        <h2>Developers Team</h2> 
      
        <div className="developer-circle-container"> 
          {developers.map((dev, index) => ( 
            <div key={index} className="developer-circle-card"> 
              <div className="developer-circle-image-wrapper"> 
                <img 
                  src={dev.image} 
                  alt={dev.name} 
                  className="developer-circle-image" 
                /> 
              </div> 
              <p className="developer-name">{dev.name}</p> 
            </div> 
          ))} 
        </div> 
      </div> 
=======
      <div className="dev-page" style={{paddingTop: '120px', minHeight: '100vh', paddingBottom: '50px', background: 'var(--cream)'}}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <h2 className="section-title" style={{textAlign: 'center', color: 'var(--maroon)', marginBottom: '50px', fontFamily: 'var(--font-heading)'}}>Meet the Developers</h2>
          
          {/* Developers Grid */}
          <div className="dev-grid" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {devTeam.map((member, i) => (
              <div key={i} className="dev-card">
                {/* GS Style Image */}
                <div 
                  className="gs-photo" 
                  style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    backgroundColor: '#ddd',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    marginBottom: '25px',
                    border: '4px solid var(--gold)',
                    boxShadow: '0 15px 35px rgba(122, 12, 12, 0.15)',
                    backgroundImage: member.image ? `url(${member.image})` : 'none'
                  }}
                ></div>
                
                {/* Name */}
                <div className="gs-name" style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: 0,
                  textAlign: 'center',
                  color: 'var(--maroon)',
                  fontWeight: '600',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
      <Footer />
    </>
  );
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <Timeline />
      <EventsGallery />
      <TeaserSection />
      <Memories2025 />
      <GSSection />
      <InchargeAndTeam />
      <Footer />
    </>
  );
};

const ConfessionPage = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <ConfessionBox />
    </div>
  );
};

<<<<<<< HEAD
/* ================= DAY 1 ALBUM ================= */
// Dynamic Image Import for Day 1
const day1Images = import.meta.glob('./assets/albums/day1/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

const Day1Album = () => {
  // Convert dynamic imports to photos array
  const photos = Object.entries(day1Images).map(([path, module], index) => ({
    id: `d1_${index}`,
    url: module.default || module
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isBig = (index) => {
    return index % 7 === 0 || index % 7 === 3;
  };

  return (
    <div className="album-page-wrapper">
      <Header />
      
      <section className="album-hero">
        <div className="sparkles"></div>
        <h1 className="album-title-animated">
          <span className="title-word">UMANG</span>
          <span className="title-word">DAY 1</span>
          <span className="title-word">ALBUM</span>
        </h1>
        <p className="album-subtitle">Cherishing the first day memories of UMANG 2026</p>
      </section>

      <div className="album-container">
        {photos.length === 0 ? (
          <div className="empty-album">
            <div className="empty-icon">📸</div>
            <p>No photos uploaded yet. Be the first to share!</p>
          </div>
        ) : (
          <div className="album-masonry">
            {photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className={`album-item ${isBig(index) ? 'item-big' : 'item-standard'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="album-card-glass">
                  <div className="album-image-wrapper">
                    <img 
                              src={photo.url} 
                              alt={`Day 1 Memory ${index + 1}`} 
                              className="album-img"
                            />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

=======
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
/* ================= MAIN APP COMPONENT ================= */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/confession" element={<ConfessionBox />} />
<<<<<<< HEAD
        <Route path="/group-day-album" element={<GroupDayAlbum />} />
        <Route path="/day1-album" element={<Day1Album />} />
=======
>>>>>>> e4336e8ffa7f2d88cd8d5738e599a972a1cc4839
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      <DayToasts />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
