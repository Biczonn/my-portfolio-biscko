"use client"

import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home")

  const navItems = ["Home", "About", "Education", "Hobbies", "Contact"]

  // Warm Brown & Cream Color Palette
  const colors = {
    bgMain: "#FAF7F2",        // Warm Cream background
    bgCard: "#FFFFFF",        // Pure white card surface
    bgAccentLight: "#F3EBE1", // Soft Latte / Sand tint
    border: "#E6D8C8",        // Warm Taupe border
    primary: "#6F4E37",       // Rich Coffee Brown
    secondary: "#A67B5B",     // Warm Caramel / Mocha
    textDark: "#2C1E16",      // Deep Espresso text
    textMuted: "#6B584C",     // Muted Warm Brown-Gray text
  }

  const hobbiesList = [
    {
      icon: "📷",
      title: "Photography",
      desc: "Capturing street landscapes and warm golden-hour architecture during evening walks.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
    },
    {
      icon: "🎮",
      title: "Gaming",
      desc: "Enthusiast for strategy, tactical, and immersive story-driven RPG games.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop",
    },
    {
      icon: "🎵",
      title: "Music & Guitar",
      desc: "Playing acoustic guitar and unwinding with indie, lo-fi, and classic rock tracks.",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=500&auto=format&fit=crop",
    },
    {
      icon: "🏃‍♂️",
      title: "Fitness & Running",
      desc: "Staying active and disciplined through regular workout sessions and weekend runs.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=500&auto=format&fit=crop",
    },
    {
      icon: "✈️",
      title: "Travel & Hiking",
      desc: "Exploring scenic trails, nature parks, and discovering local coffee spots.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=500&auto=format&fit=crop",
    },
    {
      icon: "📖",
      title: "Reading & Tech",
      desc: "Fascinated by software architecture, tech history, and sci-fi novels.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=500&auto=format&fit=crop",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: colors.bgMain, color: colors.textDark, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* Navigation Bar */}
      <header style={{ width: "100%", borderBottom: `1px solid ${colors.border}`, backgroundColor: "rgba(250, 247, 242, 0.92)", backdropFilter: "blur(8px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: "920px", margin: "0 auto", padding: "0 20px", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => setActiveTab("Home")}
            style={{ fontWeight: "800", fontSize: "19px", color: colors.textDark, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span style={{ color: colors.primary, fontFamily: "monospace", backgroundColor: colors.bgAccentLight, padding: "4px 8px", borderRadius: "6px" }}>&lt;/&gt;</span>
            <span>Rjohn<span style={{ color: colors.primary }}>.dev</span></span>
          </button>

          <nav style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {navItems.map((item) => {
              const isActive = activeTab === item
              return (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    backgroundColor: isActive ? colors.primary : "transparent",
                    color: isActive ? "#FFFFFF" : colors.textMuted,
                    boxShadow: isActive ? "0 2px 6px rgba(111, 78, 55, 0.25)" : "none",
                  }}
                >
                  {item}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main style={{ maxWidth: "880px", margin: "0 auto", padding: "48px 20px" }}>
        
        {/* 1. HOME TAB */}
        {activeTab === "Home" && (
          <div>
            {/* Hero Card */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "36px", marginBottom: "44px", flexWrap: "wrap", backgroundColor: colors.bgCard, padding: "36px", borderRadius: "20px", border: `1px solid ${colors.border}`, boxShadow: "0 8px 24px rgba(111, 78, 55, 0.06)" }}>
              
              {/* Left Side: Bio */}
              <div style={{ flex: 1, minWidth: "280px" }}>
                <span style={{ display: "inline-block", padding: "6px 14px", backgroundColor: colors.bgAccentLight, color: colors.primary, border: `1px solid ${colors.border}`, borderRadius: "9999px", fontSize: "12px", fontWeight: "700", marginBottom: "16px" }}>
                  ☕ Full-Stack Web Developer
                </span>
                
                <h1 style={{ fontSize: "40px", fontWeight: "800", margin: "0 0 14px 0", color: colors.textDark, lineHeight: "1.15" }}>
                  Hi, I&apos;m <span style={{ color: colors.primary }}>Rjohn Agrito</span> 👋
                </h1>
                
                <p style={{ fontSize: "16px", color: colors.textMuted, lineHeight: "1.65", margin: "0 0 26px 0" }}>
                  Frontend &amp; Web Developer specializing in Next.js, React, and modern UI engineering. Building clean, warm, and responsive digital experiences.
                </p>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button 
                    onClick={() => setActiveTab("Contact")}
                    style={{ padding: "12px 24px", backgroundColor: colors.primary, color: "#FFFFFF", borderRadius: "10px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", boxShadow: "0 4px 12px rgba(111, 78, 55, 0.25)" }}
                  >
                    Get in Touch →
                  </button>

                  <button 
                    onClick={() => setActiveTab("About")}
                    style={{ padding: "12px 24px", backgroundColor: colors.bgMain, color: colors.textDark, border: `1px solid ${colors.border}`, borderRadius: "10px", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
                  >
                    About Me
                  </button>
                </div>
              </div>

              {/* Right Side: Profile Picture */}
              <div style={{ position: "relative", width: "160px", height: "160px", flexShrink: 0, margin: "0 auto" }}>
                <div style={{ width: "160px", height: "160px", borderRadius: "50%", padding: "5px", background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, boxShadow: "0 12px 24px rgba(111, 78, 55, 0.18)" }}>
                  
                </div>
                <span style={{ position: "absolute", bottom: "8px", right: "8px", width: "18px", height: "18px", backgroundColor: "#2E7D32", border: "3px solid #FFFFFF", borderRadius: "50%" }} title="Available for projects"></span>
              </div>

            </div>

            {/* Feature Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "44px" }}>
              <div style={{ padding: "24px", border: `1px solid ${colors.border}`, borderRadius: "16px", backgroundColor: colors.bgCard }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: colors.bgAccentLight, color: colors.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold", marginBottom: "14px", fontFamily: "monospace" }}>&lt;/&gt;</div>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "17px", fontWeight: "700", color: colors.textDark }}>Clean Code</h3>
                <p style={{ margin: 0, fontSize: "14px", color: colors.textMuted, lineHeight: "1.55" }}>
                  Writing maintainable, modern TypeScript code with structured component architecture.
                </p>
              </div>

              <div style={{ padding: "24px", border: `1px solid ${colors.border}`, borderRadius: "16px", backgroundColor: colors.bgCard }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: colors.bgAccentLight, color: colors.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold", marginBottom: "14px", fontFamily: "monospace" }}>&gt;_</div>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "17px", fontWeight: "700", color: colors.textDark }}>Full-Stack Capability</h3>
                <p style={{ margin: 0, fontSize: "14px", color: colors.textMuted, lineHeight: "1.55" }}>
                  Designing responsive interfaces and integrating APIs down to cloud deployments.
                </p>
              </div>

              <div style={{ padding: "24px", border: `1px solid ${colors.border}`, borderRadius: "16px", backgroundColor: colors.bgCard }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: colors.bgAccentLight, color: colors.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "14px" }}>✨</div>
                <h3 style={{ margin: "0 0 8px 0", fontSize: "17px", fontWeight: "700", color: colors.textDark }}>Modern UI/UX</h3>
                <p style={{ margin: 0, fontSize: "14px", color: colors.textMuted, lineHeight: "1.55" }}>
                  Crafting thoughtful, accessible, and user-centered layouts with refined aesthetics.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ padding: "28px", borderRadius: "16px", backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: colors.textDark }}>Core Tech Stack</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Shadcn UI", "MySQL", "Git"].map((tech) => (
                  <span key={tech} style={{ padding: "7px 14px", backgroundColor: colors.bgAccentLight, color: colors.primary, borderRadius: "8px", fontSize: "13px", fontWeight: "600", border: `1px solid ${colors.border}` }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. ABOUT TAB */}
        {activeTab === "About" && (
          <div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "8px", color: colors.textDark }}>About Me</h1>
            <p style={{ fontSize: "16px", color: colors.textMuted, marginBottom: "32px" }}>
              A closer look at my background, passion, and technical skillset.
            </p>

            {/* Story + Side Photo Card */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", padding: "28px", border: `1px solid ${colors.border}`, borderRadius: "18px", backgroundColor: colors.bgCard, marginBottom: "24px", alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: colors.primary }}>My Story</h2>
                <p style={{ fontSize: "15px", color: colors.textMuted, lineHeight: "1.7", marginBottom: "14px" }}>
                  I am a dedicated Full-Stack Web Developer passionate about crafting responsive, reliable, and user-friendly web applications. My journey in technology began with a curiosity about how clean design and solid engineering come together on the web.
                </p>
                <p style={{ fontSize: "15px", color: colors.textMuted, lineHeight: "1.7" }}>
                  Today, I focus on modern React and Next.js ecosystems—turning ideas into fast, well-structured, and production-ready applications.
                </p>
              </div>

              <div style={{ borderRadius: "14px", overflow: "hidden", border: `3px solid ${colors.bgAccentLight}`, height: "240px" }}>
                
              </div>
            </div>

            {/* Skills Box */}
            <div style={{ padding: "28px", border: `1px solid ${colors.border}`, borderRadius: "18px", backgroundColor: colors.bgCard }}>
              <h2 style={{ fontSize: "19px", fontWeight: "700", marginBottom: "16px", color: colors.textDark }}>Skills &amp; Technologies</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["JavaScript / TypeScript", "React & Next.js", "Tailwind CSS", "Node.js & Express", "MySQL / Oracle", "Git & GitHub", "REST APIs & GraphQL", "Shadcn UI"].map((skill) => (
                  <span key={skill} style={{ padding: "7px 14px", backgroundColor: colors.bgAccentLight, color: colors.primary, border: `1px solid ${colors.border}`, borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. EDUCATION TAB */}
        {activeTab === "Education" && (
          <div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "8px", color: colors.textDark }}>Education</h1>
            <p style={{ fontSize: "16px", color: colors.textMuted, marginBottom: "32px" }}>
              Academic background and formal training.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ padding: "28px", border: `1px solid ${colors.border}`, borderRadius: "18px", backgroundColor: colors.bgCard }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "24px", backgroundColor: colors.bgAccentLight, padding: "10px", borderRadius: "12px" }}>🎓</span>
                    <div>
                      <h2 style={{ fontSize: "19px", fontWeight: "700", color: colors.textDark }}>BS in Information Technology</h2>
                      <p style={{ fontSize: "14px", color: colors.primary, fontWeight: "600" }}>Naga College Foundation</p>
                    </div>
                  </div>
                  <span style={{ padding: "4px 12px", backgroundColor: colors.bgAccentLight, color: colors.primary, borderRadius: "9999px", fontSize: "12px", fontWeight: "700" }}>Present</span>
                </div>
                <p style={{ fontSize: "14px", color: colors.textMuted, lineHeight: "1.6", marginBottom: "14px" }}>
                  Focused on software engineering, full-stack web development, data structures, and modern UI/UX frameworks.
                </p>
                <div style={{ padding: "12px 16px", backgroundColor: colors.bgMain, borderRadius: "10px", fontSize: "13px", color: colors.textDark, border: `1px solid ${colors.border}` }}>
                  <strong style={{ color: colors.primary }}>Key Highlights:</strong> Full-Stack Web Projects, React &amp; Next.js Development, Database Management
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. HOBBIES TAB (With Photos) */}
        {activeTab === "Hobbies" && (
          <div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "8px", color: colors.textDark }}>Hobbies &amp; Interests</h1>
            <p style={{ fontSize: "16px", color: colors.textMuted, marginBottom: "32px" }}>
              Moments and activities I enjoy outside of coding.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              {hobbiesList.map((hobby) => (
                <div key={hobby.title} style={{ border: `1px solid ${colors.border}`, borderRadius: "16px", backgroundColor: colors.bgCard, overflow: "hidden" }}>
                  <div style={{ height: "150px", width: "100%", overflow: "hidden", position: "relative" }}>
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "rgba(255, 255, 255, 0.92)", padding: "6px 10px", borderRadius: "10px", fontSize: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
                      {hobby.icon}
                    </span>
                  </div>
                  <div style={{ padding: "18px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: "700", marginBottom: "6px", color: colors.textDark }}>{hobby.title}</h3>
                    <p style={{ fontSize: "13px", color: colors.textMuted, lineHeight: "1.55" }}>{hobby.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. CONTACT TAB */}
        {activeTab === "Contact" && (
          <div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "8px", color: colors.textDark }}>Contact Me</h1>
            <p style={{ fontSize: "16px", color: colors.textMuted, marginBottom: "32px" }}>
              Have a question, collaboration idea, or project in mind? Reach out below!
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {/* Left Info Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ padding: "20px", border: `1px solid ${colors.border}`, borderRadius: "16px", backgroundColor: colors.bgCard, display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "20px", backgroundColor: colors.bgAccentLight, padding: "10px", borderRadius: "10px" }}>✉️</span>
                  <div>
                    <p style={{ fontSize: "12px", color: colors.textMuted, fontWeight: "600" }}>Email</p>
                    <p style={{ fontSize: "14px", fontWeight: "700", color: colors.textDark }}>rbagrito@ncf.edu.ph</p>
                  </div>
                </div>

                <div style={{ padding: "20px", border: `1px solid ${colors.border}`, borderRadius: "16px", backgroundColor: colors.bgCard, display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "20px", backgroundColor: colors.bgAccentLight, padding: "10px", borderRadius: "10px" }}>📞</span>
                  <div>
                    <p style={{ fontSize: "12px", color: colors.textMuted, fontWeight: "600" }}>Phone</p>
                    <p style={{ fontSize: "14px", fontWeight: "700", color: colors.textDark }}>+63 (900) 000-0000</p>
                  </div>
                </div>

                <div style={{ padding: "20px", border: `1px solid ${colors.border}`, borderRadius: "16px", backgroundColor: colors.bgCard, display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontSize: "20px", backgroundColor: colors.bgAccentLight, padding: "10px", borderRadius: "10px" }}>📍</span>
                  <div>
                    <p style={{ fontSize: "12px", color: colors.textMuted, fontWeight: "600" }}>Location</p>
                    <p style={{ fontSize: "14px", fontWeight: "700", color: colors.textDark }}>Naga City, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div style={{ padding: "28px", border: `1px solid ${colors.border}`, borderRadius: "18px", backgroundColor: colors.bgCard }}>
                <h2 style={{ fontSize: "19px", fontWeight: "700", marginBottom: "4px", color: colors.textDark }}>Send a Message</h2>
                <p style={{ fontSize: "13px", color: colors.textMuted, marginBottom: "20px" }}>
                  Fill out the form below and I&apos;ll get back to you soon.
                </p>

                <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "5px", color: colors.textDark }}>Name</label>
                      <input type="text" placeholder="Your Name" style={{ width: "100%", padding: "10px 12px", border: `1px solid ${colors.border}`, backgroundColor: colors.bgMain, borderRadius: "8px", fontSize: "14px", color: colors.textDark }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "5px", color: colors.textDark }}>Email</label>
                      <input type="email" placeholder="you@example.com" style={{ width: "100%", padding: "10px 12px", border: `1px solid ${colors.border}`, backgroundColor: colors.bgMain, borderRadius: "8px", fontSize: "14px", color: colors.textDark }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "5px", color: colors.textDark }}>Subject</label>
                    <input type="text" placeholder="Project Inquiry / Hello" style={{ width: "100%", padding: "10px 12px", border: `1px solid ${colors.border}`, backgroundColor: colors.bgMain, borderRadius: "8px", fontSize: "14px", color: colors.textDark }} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "5px", color: colors.textDark }}>Message</label>
                    <textarea rows={4} placeholder="Your message here..." style={{ width: "100%", padding: "10px 12px", border: `1px solid ${colors.border}`, backgroundColor: colors.bgMain, borderRadius: "8px", fontSize: "14px", resize: "vertical", color: colors.textDark }} />
                  </div>

                  <button type="submit" style={{ padding: "12px 24px", backgroundColor: colors.primary, color: "#FFFFFF", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer", alignSelf: "flex-start", boxShadow: "0 4px 12px rgba(111, 78, 55, 0.25)" }}>
                    🚀 Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  )
}