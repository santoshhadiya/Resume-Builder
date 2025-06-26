import React from 'react';
// Using a different set of icons for a more modern and refined look.
// We'll use Lucide React icons here, but the principle is the same.
// As a fallback, I'll create simple SVG icons to ensure it works without external libraries.
// NOTE: For a real project, you would install lucide-react.
// For this example, we will use inline SVGs to guarantee rendering.

// --- SVG Icon Components ---
const MailIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const PhoneIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MapPinIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const LinkedinIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const GithubIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const GlobeIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
);
const BriefcaseIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const GraduationCapIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"></path></svg>
);
const CodeIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const SparklesIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M9.94 14.34 2.29 16.7a.5.5 0 0 0-.29.7l3.39 3.39a.5.5 0 0 0 .7.29l2.35-7.65Z M12.06 9.66 14.34 2.3a.5.5 0 0 1 .7.29l3.39 3.39a.5.5 0 0 1 .29.7l-7.65 2.35Z M18 12h-6 M22 6l-3 3 M3.5 18.5 6 16"></path></svg>
);
const UserIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);


const DivineTheme = ({ formData }) => {

    // --- Style Palette ---
    const palette = {
        background: '#f8f7f4', // Soft, luxurious ivory
        dark: '#1a232e',      // Deep charcoal blue
        primary: '#b9975b',   // Muted, elegant gold
        textDark: '#2d3748',  // A softer black for body text
        textLight: '#718096', // Grey for subtitles and metadata
        subtleBorder: '#e2e8f0', // Light border color
        highlightBg: '#f0ebe4' // A subtle background for highlights
    };



    // --- Style Objects ---
    // Using 'Playfair Display' for headings and 'Lato' for body.
    // These fonts would need to be imported in the main HTML file.
    // e.g., <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

    const pageStyle = {
        background: palette.background,
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        boxShadow: '0 10px 35px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Lato', sans-serif",
        color: palette.textDark,

    };

    const headerStyle = {
        background: palette.dark,
        color: '#fff',
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        position: 'relative',
        overflow: 'hidden'
    };

    const headerNameStyle = {
        fontFamily: "'Playfair Display', serif",
        fontSize: '52px',
        color: '#fff',
        margin: '0 0 5px 0',
        fontWeight: '700',
        letterSpacing: '1px'
    };

    const headerTitleStyle = {
        fontSize: '18px',
        color: palette.primary,
        margin: '0',
        fontWeight: '400',
        letterSpacing: '3px',
        textTransform: 'uppercase'
    };

    const photoStyle = {
        width: '130px',
        height: '130px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: `3px solid ${palette.primary}`,
        padding: '5px', // Creates a double-border effect
        background: palette.dark,
        flexShrink: 0
    };


    const leftColumnStyle = {
        width: '130mm',
        padding: '40px 30px 40px 40px',
        boxSizing: 'border-box',
        overflow: 'hidden',
    };

    const rightColumnStyle = {
        width: '80mm',
        padding: '40px 40px 40px 30px',
        background: palette.highlightBg,
        boxSizing: 'border-box',
        borderLeft: `1px solid ${palette.subtleBorder}`

    };

    const sectionStyle = {
        marginBottom: '35px',
        /*  pageBreakInside: 'avoid' */
    };

    const sectionTitleStyle = (isRightColumn = false) => ({
        fontFamily: "'Playfair Display', serif",
        fontSize: '24px',
        color: isRightColumn ? palette.dark : palette.textDark,
        margin: '0 0 20px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: `2px solid ${isRightColumn ? palette.primary : palette.subtleBorder}`,

        paddingBottom: '10px'
    });

    const sectionTitleIconStyle = {
        color: palette.primary,
        width: '22px',
        height: '22px'
    };

    // --- Main Component Render ---
    return (
        <div style={pageStyle} id='resume-preview'>
            <div style={{
                height: '297mm',
                overflow: 'hidden'
            }}>
                {/* Header Section */}
                <header style={headerStyle}>
                    {formData.photo ?
                        <img src={formData.photo} alt="Profile" style={photoStyle} />
                        :
                        <img
                            src={
                                `https://placehold.co/130x130/E2E8F0/4A5568?text=${(formData.name || 'A').charAt(0)}`
                            }
                            alt="Profile"
                            style={photoStyle}
                        />
                    }
                    <div>
                        <h1 style={headerNameStyle}>{formData.name || "Your Majestic Name"}</h1>
                        <h2 style={headerTitleStyle}>{formData.professionalTitle || "Professional Title"}</h2>
                    </div>
                    {/* Decorative element */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-50px',
                        right: '-50px',
                        width: '150px',
                        height: '150px',
                        border: `15px solid ${palette.primary}`,
                        borderRadius: '50%',
                        opacity: '0.1'
                    }}></div>
                </header>

                <div style={{
                    display: 'flex',
                    width: '100%',
                    flexGrow: 1,

                }}>
                    {/* Left (Main) Column */}
                    <main style={leftColumnStyle}>
                        {formData.summary && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle()}>
                                    <UserIcon style={sectionTitleIconStyle} />
                                    Professional Profile
                                </h3>
                                <p style={{ margin: 0, lineHeight: '1.7', fontSize: '15px', color: palette.textLight }}>
                                    {formData.summary}
                                </p>
                            </section>
                        )}

                        {formData.experience && formData.experience.length > 0 && formData.experience.some(e => e.title) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle()}>
                                    <BriefcaseIcon style={sectionTitleIconStyle} />
                                    Work Experience
                                </h3>
                                {formData.experience.map(exp => exp.title && (
                                    <div key={exp.id} style={{ marginBottom: '25px', /* pageBreakInside: 'avoid' */ }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{exp.title}</h4>
                                            <span style={{ fontSize: '13px', color: palette.textLight, fontStyle: 'italic' }}>
                                                {exp.startDate} - {exp.endDate || 'Present'}
                                            </span>
                                        </div>
                                        <p style={{ margin: '4px 0 10px 0', fontSize: '15px', fontWeight: 'bold', color: palette.primary }}>
                                            {exp.company} | {exp.companyCity}
                                        </p>
                                        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: palette.textDark }}>
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </section>
                        )}

                        {formData.projects && formData.projects.length > 0 && formData.projects.some(p => p.title) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle()}>
                                    <SparklesIcon style={sectionTitleIconStyle} />
                                    Projects
                                </h3>
                                {formData.projects.map(proj => proj.title && (
                                    <div key={proj.id} style={{ marginBottom: '20px', /* pageBreakInside: 'avoid' */ }}>
                                        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{proj.title}</h4>
                                        <p style={{ margin: '5px 0 10px 0', fontSize: '14px', lineHeight: '1.6' }}>{proj.description}</p>
                                        {proj.link &&
                                            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
                                                color: palette.primary,
                                                textDecoration: 'none',
                                                fontSize: '13px',
                                                fontWeight: 'bold',
                                                borderBottom: `1px solid ${palette.primary}`,
                                            }}>
                                                View Project
                                            </a>
                                        }
                                    </div>
                                ))}
                            </section>
                        )}
                    </main>

                    {/* Right (Side) Column */}
                    <aside style={rightColumnStyle}>
                        <section style={sectionStyle}>
                            <h3 style={sectionTitleStyle(true)}>Contact</h3>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
                                {formData.email && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}><MailIcon style={{ marginRight: '15px', color: palette.primary, width: 20, flexShrink: 0 }} /> {formData.email}</li>}
                                {formData.phone && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}><PhoneIcon style={{ marginRight: '15px', color: palette.primary, width: 20, flexShrink: 0 }} /> {formData.phone}</li>}
                                {formData.address && [formData.address.city, formData.address.state, formData.address.pincode].filter(Boolean).join(', ') && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}><MapPinIcon style={{ marginRight: '15px', color: palette.primary, width: 20, flexShrink: 0 }} /> {[formData.address.city, formData.address.state, formData.address.pincode].filter(Boolean).join(', ')}</li>}
                                {formData.linkedin && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}><LinkedinIcon style={{ marginRight: '15px', color: palette.primary, width: 20, flexShrink: 0 }} /> <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: palette.textDark, textDecoration: 'none' }}>LinkedIn</a></li>}
                                {formData.github && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}><GithubIcon style={{ marginRight: '15px', color: palette.primary, width: 20, flexShrink: 0 }} /> <a href={formData.github} target="_blank" rel="noopener noreferrer" style={{ color: palette.textDark, textDecoration: 'none' }}>GitHub</a></li>}
                                {formData.website && <li style={{ display: 'flex', alignItems: 'center' }}><GlobeIcon style={{ marginRight: '15px', color: palette.primary, width: 20, flexShrink: 0 }} /> <a href={formData.website} target="_blank" rel="noopener noreferrer" style={{ color: palette.textDark, textDecoration: 'none' }}>Portfolio</a></li>}
                            </ul>
                        </section>

                        {formData.education && formData.education.length > 0 && formData.education.some(e => e.degree) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle(true)}>
                                    <GraduationCapIcon style={sectionTitleIconStyle} />
                                    Education
                                </h3>
                                <div style={{
                                    position: 'relative', paddingLeft: '25px', borderLeft: `1px solid ${palette.subtleBorder}`
                                }}>
                                    {formData.education.map((edu, index) => edu.degree && (
                                        <div key={edu.id} style={{ marginBottom: '20px', position: 'relative' }}>
                                            {/* Timeline Dot */}
                                            <div style={{
                                                position: 'absolute',
                                                left: '-28px',
                                                top: '5px',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: palette.primary,
                                                border: `2px solid ${palette.highlightBg}`

                                            }}></div>
                                            <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>{edu.degree}</p>
                                            <p style={{ margin: '0 0 4px 0', color: palette.textLight, fontSize: '13px' }}>{edu.institution}</p>
                                            <p style={{ margin: 0, color: palette.textLight, fontSize: '13px' }}>{edu.passingYear}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle(true)}>
                                    <CodeIcon style={sectionTitleIconStyle} />
                                    Skills
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {formData.skills.map(skill => (
                                        skill.name &&
                                        <span key={skill.id} style={{
                                            background: '#fff',
                                            padding: '6px 14px',
                                            borderRadius: '6px',
                                            fontSize: '13px',
                                            border: `1px solid ${palette.subtleBorder}`,
                                            fontWeight: '400'
                                        }}>
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default DivineTheme;