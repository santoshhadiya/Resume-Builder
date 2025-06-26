import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiLink } from 'react-icons/fi';

const ProfessionalTheme = ({ formData }) => {
    // --- Style Objects for a clean, professional look ---
    const pageStyle = {
        background: '#fff',
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: '#333',
        boxSizing: 'border-box',
    };

    const headerStyle = {
        background: '#f8f9fa',
        padding: '30px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '4px solid #0d6efd',
    };

    const photoStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '30px',
        border: '3px solid #dee2e6'
    };

    const nameHeaderStyle = {
        margin: 0,
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#212529',
    };

    const titleHeaderStyle = {
        margin: '5px 0 0 0',
        fontSize: '18px',
        fontWeight: 'normal',
        color: '#6c757d',
    };



    const leftColumnStyle = {
        width: '75mm',
        padding: '20px',
        background: '#f8f9fa',
        boxSizing: 'border-box',
        borderRight: '1px solid #dee2e6',
    };

    const rightColumnStyle = {
        width: '135mm',
        padding: '20px',
        boxSizing: 'border-box',
    };

    const sectionStyle = {
        marginBottom: '25px',
        pageBreakInside: 'avoid'
    };

    const sectionTitleStyle = (color = '#0d6efd') => ({
        fontSize: '18px',
        color: color,
        borderBottom: `2px solid ${color}`,
        paddingBottom: '5px',
        marginBottom: '15px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    });

    const contactItemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        fontSize: '14px',
        color: '#495057'
    };

    const skillItemStyle = {
        background: '#e9ecef',
        color: '#212529',
        padding: '6px 12px',
        borderRadius: '5px',
        fontSize: '13px',
        fontWeight: '500'
    };

    const jobTitleStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: 0
    };
    const companyInfoStyle = {
        margin: '4px 0',
        fontStyle: 'italic',
        color: '#495057'
    };
    const dateStyle = {
        fontSize: '12px',
        color: '#6c757d',
        fontStyle: 'italic'
    }
    const descriptionStyle = {
        margin: '8px 0 0 0',
        fontSize: '14px',
        lineHeight: '1.6'
    };

    // --- Helper Functions to format data ---
    const formatAddress = (addr) => {
        if (!addr) return null;
        return [addr.city, addr.state, addr.pincode].filter(Boolean).join(', ');
    }

    const formatDate = (dateString) => {
        if (!dateString) return 'Present';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    }

    return (
        <div style={pageStyle} id="resume-preview">
            <div style={{
                height: '297mm',
                overflow:'hidden',
            }}>
                <header style={headerStyle}>
                    {formData.photo && <img src={formData.photo} alt="Profile" style={photoStyle} />}
                    <div>
                        <h1 style={nameHeaderStyle}>{formData.name || "Your Name"}</h1>
                        <h2 style={titleHeaderStyle}>{formData.professionalTitle || "Your Professional Title"}</h2>
                    </div>
                </header>

                <div style={{
                    display: 'flex',
                    flex: 1,
                    height:'100%',
                    overflow:'hidden',
                  
                }}>
                    <aside style={leftColumnStyle}>
                        <section style={sectionStyle}>
                            <h3 style={sectionTitleStyle()}>Contact</h3>
                            {formData.email && <div style={contactItemStyle}><FiMail style={{ marginRight: '10px' }} /> {formData.email}</div>}
                            {formData.phone && <div style={contactItemStyle}><FiPhone style={{ marginRight: '10px' }} /> {formData.phone}</div>}
                            {formatAddress(formData.address) && <div style={contactItemStyle}><FiMapPin style={{ marginRight: '10px' }} /> {formatAddress(formData.address)}</div>}
                            {formData.linkedin && <div style={contactItemStyle}><FiLinkedin style={{ marginRight: '10px' }} /> <a href={formData.linkedin} style={{ color: '#495057' }}>LinkedIn</a></div>}
                        </section>

                        {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle()}>Skills</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {formData.skills.map(skill => skill.name && (
                                        <span key={skill.id} style={skillItemStyle}>{skill.name}</span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {formData.education && formData.education.length > 0 && formData.education.some(e => e.degree) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle()}>Education</h3>
                                {formData.education.map(edu => edu.degree && (
                                    <div key={edu.id} style={{ marginBottom: '15px' }}>
                                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>{edu.degree}</p>
                                        <p style={{ margin: 0, color: '#495057' }}>{edu.institution}</p>
                                        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#6c757d' }}>{edu.passingYear}</p>
                                    </div>
                                ))}
                            </section>
                        )}

                        {formData.languages && formData.languages.length > 0 && formData.languages.some(l => l.name) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle()}>Languages</h3>
                                {formData.languages.map(lang => lang.name && (
                                    <div key={lang.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '5px' }}>
                                        <span>{lang.name}</span>
                                        <span style={{ color: '#495057' }}>{lang.proficiency}</span>
                                    </div>
                                ))}
                            </section>
                        )}
                    </aside>

                    <main style={rightColumnStyle}>
                        {formData.summary && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle('#212529')}>Professional Summary</h3>
                                <p style={descriptionStyle}>{formData.summary}</p>
                            </section>
                        )}

                        {formData.experience && formData.experience.length > 0 && formData.experience.some(e => e.title) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle('#212529')}>Work Experience</h3>
                                {formData.experience.map(exp => exp.title && (
                                    <div key={exp.id} style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                            <h4 style={jobTitleStyle}>{exp.title}</h4>
                                            <p style={dateStyle}>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</p>
                                        </div>
                                        <p style={companyInfoStyle}>{exp.company} | {exp.companyCity}</p>
                                        <p style={descriptionStyle}>{exp.description}</p>
                                    </div>
                                ))}
                            </section>
                        )}

                        {formData.projects && formData.projects.length > 0 && formData.projects.some(p => p.title) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle('#212529')}>Projects</h3>
                                {formData.projects.map(proj => proj.title && (
                                    <div key={proj.id} style={{ marginBottom: '15px' }}>
                                        <h4 style={jobTitleStyle}>{proj.title}</h4>
                                        <p style={descriptionStyle}>{proj.description}</p>
                                        {proj.link && (
                                            <div style={{ ...contactItemStyle, marginTop: '8px' }}>
                                                <FiLink style={{ marginRight: '10px' }} />
                                                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0d6efd', textDecoration: 'none' }}>View Project</a>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </section>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalTheme;
