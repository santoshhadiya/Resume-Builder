import React from 'react';
import {
    FaUser, FaBriefcase, FaGraduationCap, FaCogs, FaProjectDiagram,
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub,
    FaCertificate, FaGlobe
} from 'react-icons/fa';

const CorporateBlue = ({ formData }) => {
    const pageStyle = {
        width: '210mm',
        height: '297mm',
        margin: '0 auto',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        fontFamily: "'Lato', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      
        boxSizing: 'border-box'
    };

    const sectionTitleStyle = {
        fontSize: '20px',
        fontWeight: '700',
        color: '#0d47a1',
        borderBottom: '2px solid #e0e0e0',
        paddingBottom: '8px',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    };

    const contentText = {
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#343a40',
        margin: 0,
        overflowWrap: 'break-word'
    };

    const sectionStyle = {
        marginBottom: '25px',
        pageBreakInside: 'avoid',
        pageBreakAfter: 'auto',
        pageBreakBefore: 'auto'
    };

    return (
        <>
            {/* Print-specific style */}
            <style>{`
        @media print {
          body {
            margin: 0;
          }
          #resume-preview {
            width: 210mm;
            height: 297mm;
            margin: 0 auto;
            page-break-after: always;
          }
        }
      `}</style>

            <div style={pageStyle} id="resume-preview">
                <header style={{
                    background: '#0d47a1', color: 'white', padding: '25px 30px',
                    pageBreakInside: 'avoid'
                }}>
                    <h1 style={{ fontSize: '32px', margin: 0, fontWeight: '700' }}>
                        {formData.name || "Your Name"}
                    </h1>
                    <p style={{ fontSize: '18px', margin: '5px 0 0', fontWeight: '300', opacity: 0.9 }}>
                        {formData.professionalTitle || "Professional Title"}
                    </p>
                </header>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    padding: '10px 30px',
                    background: '#1565c0',
                    color: 'white',
                    fontSize: '12px',
                    flexWrap: 'wrap',
                    gap: '10px 20px',
                    pageBreakInside: 'avoid'
                }}>
                    {formData.email && <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaEnvelope /> {formData.email}</span>}
                    {formData.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaPhone /> {formData.phone}</span>}
                    {formData.location && <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaMapMarkerAlt /> {formData.location}</span>}
                    {formData.linkedin && <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><FaLinkedin /> LinkedIn</a>}
                    {formData.github && <a href={formData.github} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}><FaGithub /> GitHub</a>}
                </div>

                <main style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: '20px',
                    flex: 1,
                    marginTop: '20px'
                }}>
                    {/* LEFT COLUMN */}
                    <div style={{
                        padding: '20px'
                    }}>
                        {formData.summary && (
                            <section style={sectionStyle}>
                                <h2 style={sectionTitleStyle}><FaUser size={18} /> Professional Summary</h2>
                                <p style={contentText}>{formData.summary}</p>
                            </section>
                        )}

                        {formData.experience?.length > 0 && (
                            <section style={sectionStyle}>
                                <h2 style={sectionTitleStyle}><FaBriefcase size={18} /> Work Experience</h2>
                                {formData.experience.map(exp => (
                                    <div key={exp.id} style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>{exp.title}</h3>
                                            <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#6c757d' }}>{exp.startDate} - {exp.endDate}</span>
                                        </div>
                                        <h4 style={{ fontSize: '14px', margin: '4px 0' }}>{exp.company} | {exp.location}</h4>
                                        <p style={contentText}>{exp.description}</p>
                                    </div>
                                ))}
                            </section>
                        )}

                        {formData.projects?.length > 0 && (
                            <section style={sectionStyle}>
                                <h2 style={sectionTitleStyle}><FaProjectDiagram size={18} /> Key Projects</h2>
                                {formData.projects.map(proj => (
                                    <div key={proj.id} style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>{proj.title}</h3>
                                            <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#6c757d' }}>{proj.date}</span>
                                        </div>
                                        <p style={contentText}>
                                            {proj.description} {proj.link && (
                                                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1565c0' }}>
                                                    View Project
                                                </a>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </section>
                        )}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div>
                        {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) && (
                            <section style={sectionStyle}>
                                <h3 style={sectionTitleStyle}>Core Skills</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {formData.skills.map(skill => skill.name && (
                                        <span key={skill.id}>{skill.name}</span>
                                    ))}
                                </div>
                            </section>
                        )}



                        {formData.education?.length > 0 && (
                            <section style={sectionStyle}>
                                <h2 style={sectionTitleStyle}><FaGraduationCap size={18} /> Education</h2>
                                {formData.education.map(edu => (
                                    <div key={edu.id} style={{ marginBottom: '20px' }}>
                                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>{edu.degree}</h3>
                                        <h4 style={{ fontSize: '14px', margin: '4px 0' }}>{edu.institution} - <span style={{ fontStyle: 'italic' }}>{edu.graduationDate}</span></h4>
                                        <p style={contentText}>{edu.major}</p>
                                    </div>
                                ))}
                            </section>
                        )}

                        {formData.certifications?.length > 0 && (
                            <section style={sectionStyle}>
                                <h2 style={sectionTitleStyle}><FaCertificate size={18} /> Certifications</h2>
                                {formData.certifications.map(cert => (
                                    <div key={cert.id} style={{ marginBottom: '15px' }}>
                                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>{cert.name}</h3>
                                        <h4 style={{ fontSize: '14px', margin: '4px 0' }}>{cert.issuer} - <span style={{ fontStyle: 'italic' }}>{cert.date}</span></h4>
                                    </div>
                                ))}
                            </section>
                        )}

                        {formData.languages?.length > 0 && (
                            <section style={sectionStyle}>
                                <h2 style={sectionTitleStyle}><FaGlobe size={18} /> Languages</h2>
                                {formData.languages.map((lang, index) => (
                                    <p key={index} style={contentText}>
                                        {lang.name} <span style={{ color: '#6c757d' }}>({lang.proficiency})</span>
                                    </p>
                                ))}
                            </section>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default CorporateBlue;
