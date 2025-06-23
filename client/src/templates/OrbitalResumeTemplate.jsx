import React from 'react';
import {
  FiCircle,
  FiHexagon,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGitBranch,
  FiAward,
  FiBriefcase,
  FiBook,
  FiCode,
  FiCpu,
  FiLayers
} from 'react-icons/fi';

const OrbitalResumeTemplate = ({ formData }) => {
  // A4 dimensions with circular design constraints
  const pageStyle = {
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    padding: '15mm',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', sans-serif",
    color: '#0f172a',
    position: 'relative',
    overflow: 'hidden'
  };

  // Color palette
  const colors = {
    primary: '#7c3aed',
    secondary: '#10b981',
    accent: '#f59e0b',
    dark: '#0f172a',
    light: '#64748b'
  };

  // Central orbital header
  const orbitalHeaderStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    position: 'relative'
  };

  const orbitalCircleStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '15px',
    boxShadow: `0 10px 15px -3px rgba(124, 58, 237, 0.3)`
  };

  const nameStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: colors.dark,
    marginBottom: '5px'
  };

  const titleStyle = {
    fontSize: '16px',
    color: colors.primary,
    fontWeight: '500'
  };

  // Radial contact orbit
  const contactOrbitStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    margin: '30px 0',
    position: 'relative'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 15px',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
    fontSize: '13px',
    color: colors.dark
  };

  // Main content with radial timeline
  const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1px 1fr',
    gap: '30px',
    position: 'relative'
  };

  const timelineLineStyle = {
    position: 'absolute',
    left: '50%',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: colors.primary,
    opacity: '0.2',
    transform: 'translateX(-50%)'
  };

  const timelineItemStyle = {
    position: 'relative',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    marginBottom: '25px',
    pageBreakInside: 'avoid'
  };

  const timelineIconStyle = {
    position: 'absolute',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: colors.primary,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 4px 6px -1px rgba(124, 58, 237, 0.3)`
  };

  const leftTimelineIconStyle = {
    ...timelineIconStyle,
    right: '-48px'
  };

  const rightTimelineIconStyle = {
    ...timelineIconStyle,
    left: '-48px'
  };

  const itemHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  };

  const itemTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: colors.dark
  };

  const itemSubtitleStyle = {
    fontSize: '14px',
    color: colors.primary,
    marginBottom: '5px'
  };

  const itemDateStyle = {
    fontSize: '12px',
    color: colors.light,
    backgroundColor: '#f1f5f9',
    padding: '3px 8px',
    borderRadius: '10px'
  };

  const itemDescriptionStyle = {
    fontSize: '13px',
    lineHeight: '1.6',
    color: colors.light
  };

  // Skills hexagon grid
  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '15px',
    marginTop: '15px'
  };

  const skillItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px'
  };

  const hexagonIconStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: colors.primary,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  };

  // Helper to get initials for orbital circle
  const getInitials = (name) => {
    if (!name) return 'YH';
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div id="resume-preview" style={pageStyle}>
      {/* Orbital Header */}
      <div style={orbitalHeaderStyle}>
        <div style={orbitalCircleStyle}>
          {getInitials(formData.name)}
        </div>
        <h1 style={nameStyle}>{formData.name || "Your Name"}</h1>
        <p style={titleStyle}>{formData.title || "Professional Title"}</p>
      </div>

      {/* Contact Orbit */}
      <div style={contactOrbitStyle}>
        {formData.email && (
          <div style={contactItemStyle}>
            <FiMail color={colors.primary} />
            <span>{formData.email}</span>
          </div>
        )}
        {formData.phone && (
          <div style={contactItemStyle}>
            <FiPhone color={colors.primary} />
            <span>{formData.phone}</span>
          </div>
        )}
        {formData.location && (
          <div style={contactItemStyle}>
            <FiMapPin color={colors.primary} />
            <span>{formData.location}</span>
          </div>
        )}
        {formData.linkedin && (
          <div style={contactItemStyle}>
            <FiLinkedin color={colors.primary} />
            <a href={formData.linkedin} target="_blank" rel="noopener" style={{ color: colors.dark }}>
              LinkedIn
            </a>
          </div>
        )}
      </div>

      {/* Radial Timeline Content */}
      <div style={mainContentStyle}>
        <div style={timelineLineStyle}></div>

        {/* Left Column */}
        <div>
          {/* Profile */}
          {formData.summary && (
            <div style={timelineItemStyle}>
              <div style={{ ...leftTimelineIconStyle, backgroundColor: colors.secondary }}>
                <FiUser size={16} />
              </div>
              <h3 style={itemTitleStyle}>Profile</h3>
              <p style={itemDescriptionStyle}>{formData.summary}</p>
            </div>
          )}

          {/* Experience */}
          {formData.experience && formData.experience.slice(0, Math.ceil(formData.experience.length / 2)).map(exp => (
            <div key={exp.id} style={timelineItemStyle}>
              <div style={leftTimelineIconStyle}>
                <FiBriefcase size={16} />
              </div>
              <div style={itemHeaderStyle}>
                <div style={itemTitleStyle}>{exp.title}</div>
                {exp.startDate && exp.endDate && (
                  <div style={itemDateStyle}>{exp.startDate} - {exp.endDate}</div>
                )}
              </div>
              <div style={itemSubtitleStyle}>{exp.company}</div>
              <p style={itemDescriptionStyle}>{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {/* Education */}
          {formData.education && formData.education.map(edu => (
            <div key={edu.id} style={timelineItemStyle}>
              <div style={rightTimelineIconStyle}>
                <FiBook size={16} />
              </div>
              <div style={itemHeaderStyle}>
                <div style={itemTitleStyle}>{edu.degree}</div>
                {edu.graduationDate && (
                  <div style={itemDateStyle}>{edu.graduationDate}</div>
                )}
              </div>
              <div style={itemSubtitleStyle}>{edu.institution}</div>
              {edu.major && <p style={itemDescriptionStyle}>{edu.major}</p>}
            </div>
          ))}

          {/* Skills */}
          {formData.skills && formData.skills.length > 0 && (
            <div style={timelineItemStyle}>
              <div style={{ ...rightTimelineIconStyle, backgroundColor: colors.accent }}>
                <FiCpu size={16} />
              </div>
              <h3 style={itemTitleStyle}>Skills</h3>
              <div style={skillsGridStyle}>
                {formData.skills.map((skill, index) => (
                  <div key={index} style={skillItemStyle}>
                    <div style={hexagonIconStyle}>
                      <FiHexagon size={20} />
                    </div>
                    <span style={{ fontSize: '12px', textAlign: 'center' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrbitalResumeTemplate;