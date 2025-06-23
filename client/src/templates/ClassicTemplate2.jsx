import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGraduationCap, FaBriefcase, FaCode, FaTools, FaProjectDiagram, FaUserTie } from 'react-icons/fa';

function ClassicTemplate2({ formData }) {
    // A4 dimensions: 210mm × 297mm (8.27 × 11.69 inches)
    const pageStyle = {
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        padding: '15mm',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: '12px',
        lineHeight: '1.5',
        color: '#333',
        position: 'relative',
        overflow: 'hidden'
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottom: '2px solid #2c3e50',
        paddingBottom: '15px',
        marginBottom: '20px'
    };

    const nameStyle = {
        fontSize: '24px',
        fontWeight: '700',
        color: '#2c3e50',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    const titleStyle = {
        fontSize: '16px',
        color: '#7f8c8d',
        fontWeight: '400',
        marginTop: '5px'
    };

    const sectionTitleStyle = {
        fontSize: '16px',
        fontWeight: '600',
        color: '#2c3e50',
        textTransform: 'uppercase',
        margin: '15px 0 10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    };

    const contactItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '8px',
        fontSize: '12px'
    };

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: '30% 70%',
        gap: '20px'
    };

    const leftColumnStyle = {
        paddingRight: '15px'
    };

    const rightColumnStyle = {
        borderLeft: '1px solid #ecf0f1',
        paddingLeft: '15px'
    };

    const experienceItemStyle = {
        marginBottom: '15px',
        pageBreakInside: 'avoid'
    };

    const jobHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px'
    };

    const companyStyle = {
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: '5px'
    };

    const dateStyle = {
        color: '#7f8c8d',
        fontSize: '11px'
    };

    const descriptionStyle = {
        fontSize: '11px',
        textAlign: 'justify'
    };

    const skillsContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
    };

    const skillPillStyle = {
        backgroundColor: '#ecf0f1',
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '11px',
        display: 'inline-block'
    };

    const iconStyle = {
        color: '#3498db',
        fontSize: '14px'
    };

    // Function to handle content overflow
    const renderContent = (content, limit = 200) => {
        if (!content) return null;
        if (content.length > limit) {
            return content.substring(0, limit) + '...';
        }
        return content;
    };

    return (
        <div id="resume-preview" style={pageStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div>
                    <h1 style={nameStyle}>{formData.name || "Your Name"}</h1>
                    {formData.title && <p style={titleStyle}>{formData.title}</p>}
                </div>
                {formData.email && (
                    <div style={contactItemStyle}>
                        <FaEnvelope style={iconStyle} />
                        <span>{formData.email}</span>
                    </div>
                )}
            </div>

            <div style={gridContainer}>
                {/* Left Column */}
                <div style={leftColumnStyle}>
                    {/* Contact */}
                    <div>
                        <h2 style={sectionTitleStyle}><FaUserTie /> CONTACT</h2>
                        {formData.phone && (
                            <div style={contactItemStyle}>
                                <FaPhone style={iconStyle} />
                                <span>{formData.phone}</span>
                            </div>
                        )}
                        {formData.linkedin && (
                            <div style={contactItemStyle}>
                                <FaLinkedin style={iconStyle} />
                                <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#3498db', textDecoration: 'none' }}>
                                    LinkedIn
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Skills */}
                    {formData.skills && formData.skills.length > 0 && (
                        <div>
                            <h2 style={sectionTitleStyle}><FaTools /> SKILLS</h2>
                            <div style={skillsContainerStyle}>
                                {formData.skills.map((skill, index) => (
                                    <span key={index} style={skillPillStyle}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {formData.education && formData.education.length > 0 && (
                        <div>
                            <h2 style={sectionTitleStyle}><FaGraduationCap /> EDUCATION</h2>
                            {formData.education.map(edu => (
                                <div key={edu.id} style={experienceItemStyle}>
                                    <div style={companyStyle}>{edu.institution}</div>
                                    <div style={{ fontWeight: '500', fontSize: '11px' }}>{edu.degree}</div>
                                    {edu.graduationDate && <div style={dateStyle}>{edu.graduationDate}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div style={rightColumnStyle}>
                    {/* Summary */}
                    {formData.summary && (
                        <div>
                            <h2 style={sectionTitleStyle}><FaUserTie /> PROFILE</h2>
                            <p style={descriptionStyle}>{renderContent(formData.summary, 300)}</p>
                        </div>
                    )}

                    {/* Experience */}
                    {formData.experience && formData.experience.length > 0 && (
                        <div>
                            <h2 style={sectionTitleStyle}><FaBriefcase /> EXPERIENCE</h2>
                            {formData.experience.map(exp => (
                                <div key={exp.id} style={experienceItemStyle}>
                                    <div style={jobHeaderStyle}>
                                        <div style={{ fontWeight: '600' }}>{exp.title}</div>
                                        {exp.startDate && exp.endDate && (
                                            <div style={dateStyle}>{exp.startDate} - {exp.endDate}</div>
                                        )}
                                    </div>
                                    <div style={companyStyle}>{exp.company}</div>
                                    <p style={descriptionStyle}>{renderContent(exp.description)}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Projects */}
                    {formData.projects && formData.projects.length > 0 && (
                        <div>
                            <h2 style={sectionTitleStyle}><FaProjectDiagram /> PROJECTS</h2>
                            {formData.projects.map(project => (
                                <div key={project.id} style={experienceItemStyle}>
                                    <div style={{ fontWeight: '600', marginBottom: '5px' }}>{project.title}</div>
                                    <p style={descriptionStyle}>{renderContent(project.description)}</p>
                                    {project.link && (
                                        <div style={{ fontSize: '11px', marginTop: '5px' }}>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#3498db' }}>
                                                View Project
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Certifications */}
                    {formData.certifications && formData.certifications.length > 0 && (
                        <div>
                            <h2 style={sectionTitleStyle}><FaCode /> CERTIFICATIONS</h2>
                            {formData.certifications.map(cert => (
                                <div key={cert.id} style={experienceItemStyle}>
                                    <div style={{ fontWeight: '600' }}>{cert.name}</div>
                                    <div style={{ fontSize: '11px' }}>{cert.issuer}</div>
                                    {cert.date && <div style={dateStyle}>{cert.date}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ClassicTemplate2;