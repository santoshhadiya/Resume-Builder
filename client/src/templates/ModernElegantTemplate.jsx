import React from 'react';
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaLinkedin, FaGithub, FaGlobe, 
  FaBriefcase, FaGraduationCap, 
  FaCode, FaTools, FaProjectDiagram, FaCertificate
} from 'react-icons/fa';

const ModernElegantTemplate = ({ formData }) => {
  // A4 dimensions in mm (210 × 297)
  const pageStyle = {
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    padding: '15mm',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: "'Roboto', sans-serif",
    color: '#2d3748',
    position: 'relative',
    overflow: 'hidden'
  };

  // Header styles
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '2px solid #e2e8f0'
  };

  const nameStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a365d',
    letterSpacing: '1px'
  };

  const titleStyle = {
    fontSize: '16px',
    color: '#4a5568',
    marginTop: '5px'
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    textAlign: 'right'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: '#4a5568'
  };

  // Main content layout
  const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 70%',
    gap: '25px'
  };

  // Left column styles
  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  // Right column styles
  const rightColumnStyle = {
    borderLeft: '1px solid #e2e8f0',
    paddingLeft: '20px'
  };

  // Section styles
  const sectionStyle = {
    marginBottom: '20px',
    pageBreakInside: 'avoid'
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a365d',
    marginBottom: '12px',
    paddingBottom: '5px',
    borderBottom: '2px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  // Experience/Education item styles
  const itemStyle = {
    marginBottom: '15px'
  };

  const itemHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px'
  };

  const itemTitleStyle = {
    fontWeight: '600',
    fontSize: '14px',
    color: '#2d3748'
  };

  const itemSubtitleStyle = {
    fontSize: '12px',
    color: '#4a5568',
    marginBottom: '5px'
  };

  const itemDateStyle = {
    fontSize: '11px',
    color: '#718096',
    fontStyle: 'italic'
  };

  const itemDescriptionStyle = {
    fontSize: '12px',
    lineHeight: '1.5',
    textAlign: 'justify'
  };

  // Skills styles
  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px'
  };

  const skillItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px'
  };

  // Helper function to handle content overflow
  const truncateContent = (text, maxLength = 120) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div id="resume-preview" style={pageStyle}>
     <div style={{
                padding: '30px',
                minHeight: '297mm',
            }}>
               {/* Header */}
      <div style={headerStyle}>
        <div>
          <h1 style={nameStyle}>{formData.name || "Your Name"}</h1>
          <p style={titleStyle}>{formData.title || "Professional Title"}</p>
        </div>
        
        <div style={contactInfoStyle}>
          {formData.email && (
            <div style={contactItemStyle}>
              <FaEnvelope size={12} />
              <span>{formData.email}</span>
            </div>
          )}
          {formData.phone && (
            <div style={contactItemStyle}>
              <FaPhone size={12} />
              <span>{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div style={contactItemStyle}>
              <FaMapMarkerAlt size={12} />
              <span>{formData.location}</span>
            </div>
          )}
          {formData.linkedin && (
            <div style={contactItemStyle}>
              <FaLinkedin size={12} />
              <a href={formData.linkedin} target="_blank" rel="noopener" style={{ color: '#4a5568', textDecoration: 'none' }}>
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Left Column */}
        <div style={leftColumnStyle}>
          {/* Profile */}
          {formData.summary && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}><FaUser /> PROFILE</h2>
              <p style={itemDescriptionStyle}>
                {truncateContent(formData.summary, 200)}
              </p>
            </div>
          )}

          {/* Skills */}
          {formData.skills && formData.skills.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}><FaTools /> SKILLS</h2>
              <div style={skillsGridStyle}>
                {formData.skills.map((skill, index) => (
                  <div key={index} style={skillItemStyle}>
                    <FaCode size={10} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {formData.education && formData.education.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}><FaGraduationCap /> EDUCATION</h2>
              {formData.education.map(edu => (
                <div key={edu.id} style={itemStyle}>
                  <div style={itemHeaderStyle}>
                    <div style={itemTitleStyle}>{edu.degree}</div>
                    {edu.graduationDate && (
                      <div style={itemDateStyle}>{edu.graduationDate}</div>
                    )}
                  </div>
                  <div style={itemSubtitleStyle}>{edu.institution}</div>
                  {edu.major && (
                    <div style={itemDescriptionStyle}>{edu.major}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {formData.certifications && formData.certifications.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}><FaCertificate /> CERTIFICATIONS</h2>
              {formData.certifications.map(cert => (
                <div key={cert.id} style={itemStyle}>
                  <div style={itemTitleStyle}>{cert.name}</div>
                  <div style={itemSubtitleStyle}>{cert.issuer}</div>
                  {cert.date && <div style={itemDateStyle}>{cert.date}</div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div style={rightColumnStyle}>
         <div style={{paddingRight:'20px'}}>
           {/* Work Experience */}
          {formData.experience && formData.experience.length > 0 && (
            <div style={sectionStyle} >
              <h2 style={sectionTitleStyle}><FaBriefcase /> EXPERIENCE</h2>
              {formData.experience.map(exp => (
                <div key={exp.id} style={itemStyle}>
                  <div style={itemHeaderStyle}>
                    <div style={itemTitleStyle}>{exp.title}</div>
                    {exp.startDate && exp.endDate && (
                      <div style={itemDateStyle}>
                        {exp.startDate} - {exp.endDate}
                      </div>
                    )}
                  </div>
                  <div style={itemSubtitleStyle}>{exp.company}</div>
                  {exp.location && (
                    <div style={itemDateStyle}>{exp.location}</div>
                  )}
                  <p style={itemDescriptionStyle}>
                    {truncateContent(exp.description, 250)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {formData.projects && formData.projects.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}><FaProjectDiagram /> PROJECTS</h2>
              {formData.projects.map(project => (
                <div key={project.id} style={itemStyle}>
                  <div style={itemHeaderStyle}>
                    <div style={itemTitleStyle}>{project.title}</div>
                    {project.date && (
                      <div style={itemDateStyle}>{project.date}</div>
                    )}
                  </div>
                  <p style={itemDescriptionStyle}>
                    {truncateContent(project.description, 200)}
                  </p>
                  {project.link && (
                    <div style={{ fontSize: '11px', marginTop: '5px' }}>
                      <a href={project.link} target="_blank" rel="noopener" style={{ color: '#4299e1' }}>
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {formData.languages && formData.languages.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}><FaGlobe /> LANGUAGES</h2>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {formData.languages.map((lang, index) => (
                  <div key={index} style={{ fontSize: '12px' }}>
                    <span style={{ fontWeight: '500' }}>{lang.name}</span>
                    {lang.proficiency && (
                      <span style={{ color: '#718096' }}> ({lang.proficiency})</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
         </div>
        </div>
      </div>
            </div>
    </div>
  );
};

export default ModernElegantTemplate;