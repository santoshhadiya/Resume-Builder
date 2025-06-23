import React from 'react';
import {
  FiUser, FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiGlobe,
  FiBriefcase, FiAward, FiCode,
  FiTool, FiZap, FiBookOpen
} from 'react-icons/fi';

const FuturisticTemplate = ({ formData }) => {
  // A4 dimensions (210mm × 297mm) with safe margins
  const pageStyle = {
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    padding: '12mm',
    backgroundColor: '#ffffff',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    fontFamily: "'Poppins', sans-serif",
    color: '#2d3748',
    position: 'relative',
    overflow: 'hidden'
  };

  // Vibrant accent color
  const accentColor = '#4f46e5';

  // Header with diagonal accent
  const headerStyle = {
    paddingBottom: '20px',
    marginBottom: '25px',
    position: 'relative',
    overflow: 'hidden'
  };

  const nameStyle = {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1e1b4b',
    marginBottom: '5px',
    position: 'relative',
    zIndex: '2'
  };

  const titleStyle = {
    fontSize: '16px',
    color: accentColor,
    fontWeight: '500',
    position: 'relative',
    zIndex: '2'
  };

  const accentBlockStyle = {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '200px',
    height: '200px',
    backgroundColor: accentColor,
    transform: 'rotate(45deg)',
    opacity: '0.1',
    zIndex: '1'
  };

  // Main grid layout
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    gap: '25px'
  };

  // Left column - profile and skills
  const leftColumnStyle = {
    borderRight: `2px solid ${accentColor}`,
    paddingRight: '20px'
  };

  // Right column - experience and education
  const rightColumnStyle = {
    paddingLeft: '20px'
  };

  // Section styles
  const sectionStyle = {
    marginBottom: '25px',
    pageBreakInside: 'avoid'
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: accentColor,
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    position: 'relative'
  };

  const sectionTitleLineStyle = {
    content: '""',
    flex: '1',
    height: '2px',
    backgroundColor: '#e2e8f0',
    marginLeft: '10px'
  };

  // Contact item styles
  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
    fontSize: '13px',
    color: '#4a5568'
  };

  // Experience/education item styles
  const itemStyle = {
    marginBottom: '20px',
    position: 'relative',
    paddingLeft: '20px'
  };

  const itemTimelineStyle = {
    position: 'absolute',
    left: '0',
    top: '5px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: accentColor,
    border: `2px solid white`,
    boxShadow: `0 0 0 2px ${accentColor}`
  };

  const itemTimelineLineStyle = {
    position: 'absolute',
    left: '5px',
    top: '17px',
    bottom: '-25px',
    width: '2px',
    backgroundColor: accentColor
  };

  const itemHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px'
  };

  const itemTitleStyle = {
    fontWeight: '600',
    fontSize: '15px',
    color: '#1e1b4b'
  };

  const itemSubtitleStyle = {
    fontSize: '13px',
    color: '#4a5568',
    marginBottom: '5px'
  };

  const itemDateStyle = {
    fontSize: '12px',
    color: '#718096',
    backgroundColor: '#f8fafc',
    padding: '2px 8px',
    borderRadius: '10px'
  };

  const itemDescriptionStyle = {
    fontSize: '13px',
    lineHeight: '1.6',
    color: '#4a5568'
  };

  // Skills grid
  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px'
  };

  const skillItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px'
  };

  // Helper function to handle content overflow
  const smartTruncate = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    
    // Try to truncate at the last space before maxLength
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    
    return lastSpace > 0 
      ? truncated.substring(0, lastSpace) + '...' 
      : truncated + '...';
  };

  return (
    <div id="resume-preview" style={pageStyle}>
      {/* Header with accent */}
      <div style={headerStyle}>
        <div style={accentBlockStyle}></div>
        <h1 style={nameStyle}>{formData.name || "Your Name"}</h1>
        <p style={titleStyle}>{formData.title || "Professional Title"}</p>
      </div>

      {/* Main Content Grid */}
      <div style={gridStyle}>
        {/* Left Column */}
        <div style={leftColumnStyle}>
          {/* Contact */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>
              <FiUser size={18} />
              <span>CONTACT</span>
              <div style={sectionTitleLineStyle}></div>
            </h2>
            {formData.email && (
              <div style={contactItemStyle}>
                <FiMail size={16} color={accentColor} />
                <span>{formData.email}</span>
              </div>
            )}
            {formData.phone && (
              <div style={contactItemStyle}>
                <FiPhone size={16} color={accentColor} />
                <span>{formData.phone}</span>
              </div>
            )}
            {formData.location && (
              <div style={contactItemStyle}>
                <FiMapPin size={16} color={accentColor} />
                <span>{formData.location}</span>
              </div>
            )}
            {formData.linkedin && (
              <div style={contactItemStyle}>
                <FiLinkedin size={16} color={accentColor} />
                <a href={formData.linkedin} target="_blank" rel="noopener" style={{ color: '#4a5568' }}>
                  LinkedIn Profile
                </a>
              </div>
            )}
          </div>

          {/* Profile Summary */}
          {formData.summary && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>
                <FiUser size={18} />
                <span>PROFILE</span>
                <div style={sectionTitleLineStyle}></div>
              </h2>
              <p style={itemDescriptionStyle}>
                {smartTruncate(formData.summary, 200)}
              </p>
            </div>
          )}

          {/* Skills */}
          {formData.skills && formData.skills.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>
                <FiZap size={18} />
                <span>SKILLS</span>
                <div style={sectionTitleLineStyle}></div>
              </h2>
              <div style={skillsGridStyle}>
                {formData.skills.map((skill, index) => (
                  <div key={index} style={skillItemStyle}>
                    <FiCode size={14} color={accentColor} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div style={rightColumnStyle}>
          {/* Work Experience */}
          {formData.experience && formData.experience.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>
                <FiBriefcase size={18} />
                <span>EXPERIENCE</span>
                <div style={sectionTitleLineStyle}></div>
              </h2>
              {formData.experience.map((exp, index) => (
                <div key={exp.id} style={itemStyle}>
                  <div style={itemTimelineStyle}></div>
                  {index < formData.experience.length - 1 && (
                    <div style={itemTimelineLineStyle}></div>
                  )}
                  <div style={itemHeaderStyle}>
                    <div style={itemTitleStyle}>{exp.title}</div>
                    {exp.startDate && exp.endDate && (
                      <div style={itemDateStyle}>
                        {exp.startDate} — {exp.endDate}
                      </div>
                    )}
                  </div>
                  <div style={itemSubtitleStyle}>{exp.company}</div>
                  <p style={itemDescriptionStyle}>
                    {smartTruncate(exp.description, 250)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {formData.education && formData.education.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>
                <FiBookOpen size={18} />
                <span>EDUCATION</span>
                <div style={sectionTitleLineStyle}></div>
              </h2>
              {formData.education.map((edu, index) => (
                <div key={edu.id} style={itemStyle}>
                  <div style={itemTimelineStyle}></div>
                  {index < formData.education.length - 1 && (
                    <div style={itemTimelineLineStyle}></div>
                  )}
                  <div style={itemHeaderStyle}>
                    <div style={itemTitleStyle}>{edu.degree}</div>
                    {edu.graduationDate && (
                      <div style={itemDateStyle}>{edu.graduationDate}</div>
                    )}
                  </div>
                  <div style={itemSubtitleStyle}>{edu.institution}</div>
                  {edu.major && (
                    <p style={itemDescriptionStyle}>{edu.major}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {formData.projects && formData.projects.length > 0 && (
            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>
                <FiTool size={18} />
                <span>PROJECTS</span>
                <div style={sectionTitleLineStyle}></div>
              </h2>
              {formData.projects.map((project) => (
                <div key={project.id} style={{ marginBottom: '15px' }}>
                  <div style={itemHeaderStyle}>
                    <div style={itemTitleStyle}>{project.title}</div>
                    {project.date && (
                      <div style={itemDateStyle}>{project.date}</div>
                    )}
                  </div>
                  <p style={itemDescriptionStyle}>
                    {smartTruncate(project.description, 200)}
                  </p>
                  {project.link && (
                    <div style={{ marginTop: '5px' }}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener"
                        style={{
                          fontSize: '12px',
                          color: accentColor,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <FiGlobe size={12} />
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuturisticTemplate;