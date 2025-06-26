import React from 'react';

// --- Divine SVG Icons & Elements ---
// Custom-designed icons to match the celestial theme.

const ProfileIcon = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z" opacity="0.3" />
    <path d="M12 6v6l4 2" />
    <path d="M12 12l-4 2.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="8" cy="14.5" r="1.5" fill="currentColor" />
    <circle cx="16" cy="8" r="1.5" fill="currentColor" />
  </svg>
);

const ExperienceIcon = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 12.5l6-3 3 6 5-4" opacity="0.5" />
    <path d="M2.5 12.5l19-10" />
    <circle cx="21.5" cy="2.5" r="2" fill="currentColor" />
    <circle cx="2.5" cy="12.5" r="2" fill="currentColor" />
    <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
    <circle cx="11.5" cy="15.5" r="1.5" fill="currentColor" />
    <circle cx="16.5" cy="11.5" r="1.5" fill="currentColor" />
  </svg>
);

const EducationIcon = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v15L12 16z" opacity="0.3" />
    <path d="M12 16l-8 3.5v-15" />
    <path d="M12 6.5l-2.5 2.5m5 0L12 6.5l2.5 2.5-2.5 2.5-2.5-2.5z" />
  </svg>
);

const SkillsIcon = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12l2-3 3 2 3-3 2 3-3 2zM11 11l2-3 3 2 3-3 2 3-3 2z" opacity="0.4" />
    <circle cx="5" cy="9" r="1.5" fill="currentColor" />
    <circle cx="8" cy="11" r="1.5" fill="currentColor" />
    <circle cx="11" cy="8" r="1.5" fill="currentColor" />
    <circle cx="13" cy="8" r="1.5" fill="currentColor" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    <circle cx="19" cy="7" r="1.5" fill="currentColor" />
    <circle cx="21" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

const ProjectsIcon = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" opacity="0.3" />
    <path d="M12 21a9 9 0 0 0 0-18" />
    <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(-30 12 12)" opacity="0.5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const ContactIcon = ({ type, style }) => {
  const icons = {
    email: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>,
    phone: <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>,
    address: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></>,
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>,
    website: <><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></>
  };
  return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icons[type]}</svg>
  );
};

const CelestialResumeTheme = ({ formData }) => {
  // --- Divine Color Palette ---
  const palette = {
    background: '#0a0910', // Deep space black/purple
    textPrimary: '#e0e0e9', // Soft starlight white
    textSecondary: '#a0a0b2', // Nebulae grey
    accentGold: '#c9a468', // Antique gold
    accentViolet: '#9881da', // Cosmic violet
    border: 'rgba(201, 164, 104, 0.2)', // Faint gold border
    panelBg: 'rgba(25, 24, 38, 0.5)', // Translucent panel
  };

  // --- Base Styles ---

  const sectionStyle = {
    marginBottom: '35px',
    pageBreakInside: 'avoid',
  };

  const sectionTitle = (title, icon) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '0 0 25px 0', paddingBottom: '15px', borderBottom: `1px solid ${palette.border}` }}>
      {icon}
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', margin: 0, fontWeight: 600, color: palette.textPrimary, letterSpacing: '1px' }}>
        {title}
      </h3>
    </div>
  );

  const timelineItem = (item, isLast) => (
    <div key={item.id} style={{ display: 'flex', gap: '20px', position: 'relative', paddingBottom: isLast ? 0 : '30px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '14px', height: '14px', background: palette.accentGold, borderRadius: '50%', border: `3px solid ${palette.background}`, zIndex: 1 }} />
        {!isLast && <div style={{ width: '1px', flexGrow: 1, background: palette.border }} />}
      </div>
      <div style={{ flex: 1, paddingBottom: '10px' }}>
        <h4 style={{ margin: '0 0 4px 0', fontSize: '17px', fontWeight: 600, color: palette.textPrimary }}>{item.title || item.degree}</h4>
        <p style={{ margin: '0 0 8px 0', fontSize: '15px', color: palette.accentViolet, fontWeight: 500 }}>{item.company || item.institution}</p>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: palette.textSecondary }}>{item.description}</p>
      </div>
    </div>
  );

  return (
    <div style={{
    background: palette.background,
    backgroundImage: `radial-gradient(${palette.accentViolet} 0.5px, transparent 0.5px), radial-gradient(${palette.accentGold} 0.5px, ${palette.background} 0.5px)`,
    backgroundSize: '30px 30px, 30px 30px',
    backgroundPosition: '0 0, 15px 15px',
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
    display: 'flex',
    fontFamily: "'Inter', sans-serif", // Modern, clean font
    color: palette.textPrimary,
  }} id="resume-preview">
      {/* Left Column (Main Content) */}
      <main style={{
    width: '135mm',
    padding: '50px 40px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  }}>
        {/* Header */}
        <header style={{ marginBottom: '50px', display: 'flex', alignItems: 'center', gap: '30px' }}>
          {formData.photo ?
            <img src={formData.photo} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${palette.accentGold}` }} /> :
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: palette.panelBg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${palette.border}`, fontSize: '40px', color: palette.accentGold }}>
              {(formData.name || 'A').charAt(0)}
            </div>
          }
          <div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", margin: '0 0 5px 0', fontSize: '56px', fontWeight: 700, color: '#fff' }}>{formData.name || "Elysia Spectre"}</h1>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 400, color: palette.accentGold, letterSpacing: '4px', textTransform: 'uppercase' }}>{formData.professionalTitle || "Quantum Dream Weaver"}</h2>
          </div>
        </header>

        {/* Profile Summary */}
        {formData.summary && (
          <section style={sectionStyle}>
            {sectionTitle('Profile', <ProfileIcon style={{ width: '30px', color: palette.accentGold }} />)}
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.8', color: palette.textSecondary }}>{formData.summary}</p>
          </section>
        )}

        {/* Experience */}
        {formData.experience?.some(e => e.title) && (
          <section style={sectionStyle}>
            {sectionTitle('Experience', <ExperienceIcon style={{ width: '30px', color: palette.accentGold }} />)}
            <div>
              {formData.experience.map((exp, index) => exp.title && timelineItem(exp, index === formData.experience.length - 1))}
            </div>
          </section>
        )}

        {/* Projects */}
        {formData.projects?.some(p => p.title) && (
          <section style={sectionStyle}>
            {sectionTitle('Projects', <ProjectsIcon style={{ width: '30px', color: palette.accentGold }} />)}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              {formData.projects.map(proj => proj.title && (
                <div key={proj.id} style={{ background: palette.panelBg, padding: '20px', borderRadius: '8px', border: `1px solid ${palette.border}` }}>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: palette.accentViolet }}>{proj.title}</h4>
                  <p style={{ margin: '0 0 15px 0', fontSize: '13px', lineHeight: '1.6', color: palette.textSecondary, height: '55px', overflow: 'hidden' }}>{proj.description}</p>
                  {proj.link && <a href={proj.link} style={{ color: palette.accentGold, textDecoration: 'none', fontSize: '13px' }}>View Project →</a>}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Right Column (Sidebar) */}
      <aside style={{
        width: '75mm',
        padding: '50px 30px',
        background: palette.panelBg,
        backdropFilter: 'blur(10px)',
        borderLeft: `1px solid ${palette.border}`,
        boxSizing: 'border-box',
      }}>
        {/* Contact Info */}
        <section style={sectionStyle}>
          {sectionTitle('Contact', <span />)}
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            {Object.entries({
              email: formData.email,
              phone: formData.phone,
              address: [formData.address?.city, formData.address?.state, formData.address?.pincode].filter(Boolean).join(', '),
              linkedin: formData.linkedin,
              github: formData.github,
              website: formData.website
            }).map(([key, value]) => value && (
              <li key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '15px' }}>
                <ContactIcon type={key} style={{ width: '20px', color: palette.accentViolet, flexShrink: 0 }} />
                {['linkedin', 'github', 'website'].includes(key) ?
                  <a href={value} target="_blank" rel="noopener noreferrer" style={{ color: palette.textSecondary, textDecoration: 'none' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</a> :
                  <span>{value}</span>
                }
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        {formData.education?.some(e => e.degree) && (
          <section style={sectionStyle}>
            {sectionTitle('Education', <EducationIcon style={{ width: '30px', color: palette.accentGold }} />)}
            <div>
              {formData.education.map(edu => edu.degree && (
                <div key={edu.id} style={{ marginBottom: '20px' }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 600, color: palette.textPrimary }}>{edu.degree}</h4>
                  <p style={{ margin: '0 0 4px 0', color: palette.accentViolet, fontSize: '14px' }}>{edu.institution}</p>
                  <p style={{ margin: '0', color: palette.textSecondary, fontSize: '13px' }}>{edu.passingYear}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {formData.skills?.some(s => s.name) && (
          <section style={sectionStyle}>
            {sectionTitle('Skills', <SkillsIcon style={{ width: '30px', color: palette.accentGold }} />)}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {formData.skills.map(skill => skill.name && (
                <span key={skill.id} style={{
                  background: 'rgba(152, 129, 218, 0.1)',
                  border: `1px solid black`,
                  color: palette.accentViolet,
                  padding: '5px 12px',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}>

                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}
      </aside>
    </div>
  );
};

export default CelestialResumeTheme;