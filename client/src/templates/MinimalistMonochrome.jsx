import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const MinimalistMonochrome = ({ formData }) => {
  // --- Style Objects ---
  const pageStyle = {
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    padding: '20mm',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    color: '#333',
    boxSizing: 'border-box'
  };

  const sectionTitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderBottom: '1px solid #ddd',
    paddingBottom: '8px',
    marginBottom: '15px'
  };

  // --- Main Component Render ---
  return (
    <div style={pageStyle}  id='resume-preview'>
      <div style={{padding:'20px'}}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 5px 0', letterSpacing: '2px', fontWeight: '300' }}>{formData.name || "Your Name"}</h1>
        <p style={{ fontSize: '18px', margin: 0, color: '#555' }}>{formData.title || "Professional Title"}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px', fontSize: '12px', color: '#777', flexWrap: 'wrap' }}>
          {formData.email && <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaEnvelope /> {formData.email}</span>}
          {formData.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaPhone /> {formData.phone}</span>}
          {formData.location && <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaMapMarkerAlt /> {formData.location}</span>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', fontSize: '12px', flexWrap: 'wrap' }}>
          {formData.linkedin && <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><FaLinkedin /> LinkedIn</a>}
          {formData.github && <a href={formData.github} target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><FaGithub /> GitHub</a>}
          {formData.website && <a href={formData.website} target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><FaGlobe /> Portfolio</a>}
        </div>
      </header>
      
      {formData.summary && (
        <section style={{ marginBottom: '30px', /* pageBreakInside: 'avoid' */ }}>
          <h2 style={sectionTitleStyle}>Profile</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
            {formData.summary}
          </p>
        </section>
      )}

      {formData.experience && formData.experience.length > 0 && (
        <section style={{ marginBottom: '30px',/*  pageBreakInside: 'avoid'  */}}>
          <h2 style={sectionTitleStyle}>Experience</h2>
          {formData.experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '16px', margin: 0, fontWeight: '500' }}>{exp.title}</h3>
                <span style={{ fontSize: '12px', color: '#777', flexShrink: 0, marginLeft: '10px' }}>{exp.startDate} - {exp.endDate}</span>
              </div>
              <h4 style={{ fontSize: '14px', margin: '4px 0', fontWeight: '400', color: '#555' }}>{exp.company} | {exp.location}</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {formData.projects && formData.projects.length > 0 && (
         <section style={{ marginBottom: '30px',/*  pageBreakInside: 'avoid' */ }}>
          <h2 style={sectionTitleStyle}>Projects</h2>
          {formData.projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{ fontSize: '16px', margin: 0, fontWeight: '500' }}>{proj.title}</h3>
                <span style={{ fontSize: '12px', color: '#777' }}>{proj.date}</span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>{proj.description} {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>View Project</a>}</p>
            </div>
          ))}
        </section>
      )}
      
      {formData.education && formData.education.length > 0 && (
          <section style={{ marginBottom: '30px', /* pageBreakInside: 'avoid' */ }}>
            <h2 style={sectionTitleStyle}>Education</h2>
            {formData.education.map(edu => (
              <div key={edu.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ fontSize: '16px', margin: 0, fontWeight: '500' }}>{edu.institution}</h3>
                  <span style={{ fontSize: '12px', color: '#777' }}>{edu.graduationDate}</span>
                </div>
                <h4 style={{ fontSize: '14px', margin: '4px 0', fontWeight: '400', color: '#555' }}>{edu.degree}</h4>
                {edu.major && <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>{edu.major}</p>}
              </div>
            ))}
        </section>
      )}
      
     {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) && (
    <section style={{ marginBottom: '30px', /* pageBreakInside: 'avoid' */ }}>
        <h2 style={sectionTitleStyle}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {formData.skills.map(skill => skill.name && (
                <span key={skill.id} style={{
                    backgroundColor: '#f0f0f0',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: 500
                }}>
                    {skill.name}
                </span>
            ))}
        </div>
    </section>
)}

      </div>
    </div>
  );
};

export default MinimalistMonochrome;
