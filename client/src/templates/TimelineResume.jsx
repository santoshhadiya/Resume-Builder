import React from 'react';
import { FaBriefcase, FaGraduationCap, FaLightbulb, FaTools, FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const TimelineResume = ({ formData }) => {
  // --- Style Objects ---
  const pageStyle = {
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: "'Nunito Sans', sans-serif",
    color: '#333',
    padding: '18mm',
    boxSizing: 'border-box'
  };

  const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: '800',
    color: '#2d3748',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };
  
  // --- Main Component Render ---
  return (
    <div style={pageStyle}  id='resume-preview'>
     <div style={{padding:'30px', width: '100%',
    minHeight: '100%', color: '#333',}}> <header style={{ textAlign: 'center', marginBottom: '30px' }}>
         
          <h1 style={{ fontSize: '34px', margin: 0, color: '#2d3748', fontWeight: 800 }}>{formData.name || "Your Name"}</h1>
          <p style={{ fontSize: '18px', margin: '5px 0 15px 0', color: '#718096' }}>{formData.title || "Professional Title"}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '12px', flexWrap: 'wrap' }}>
              {formData.email && <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaEnvelope /> {formData.email}</span>}
              {formData.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaPhone /> {formData.phone}</span>}
              {formData.location && <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaMapMarkerAlt /> {formData.location}</span>}
              {formData.linkedin && <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><FaLinkedin /> LinkedIn</a>}
              {formData.github && <a href={formData.github} target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><FaGithub /> GitHub</a>}
          </div>
      </header>
      
      {formData.summary && <p style={{ textAlign: 'center', maxWidth: '80%', margin: '0 auto 30px auto', lineHeight: '1.6' }}>{formData.summary}</p>}

      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '40px' }}>
              <div>
                  <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#2d3748', marginBottom: '15px' }}>Career Path</h2>
                  <div style={{ position: 'relative', marginTop: '20px' }}>
                      <div style={{
                          position: 'absolute',
                          left: '20px',
                          top: '10px',
                          bottom: '10px',
                          width: '4px',
                          backgroundColor: '#cbd5e0',
                          borderRadius: '2px'
                      }}></div>
                      
                      {/* Timeline Items */}
                      {formData.experience && formData.experience.map(exp => (
                          <div key={exp.id} style={{ display: 'flex', marginBottom: '25px', /* pageBreakInside: 'avoid' */ }}>
                              <div style={{ flexShrink: 0, marginRight: '20px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#4a5568', color: 'white', display: 'grid', placeItems: 'center' }}><FaBriefcase /></div>
                                  <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', margin: '10px 0 0 0', fontSize: '11px', color: '#718096', letterSpacing: '1px' }}>{exp.startDate} - {exp.endDate}</p>
                              </div>
                              <div style={{ flexGrow: 1, paddingTop: '10px' }}>
                                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '700' }}>{exp.title}</h3>
                                  <p style={{ margin: '4px 0 8px 0', color: '#718096', fontStyle: 'italic' }}>{exp.company} | {exp.location}</p>
                                  <div style={{ fontSize: '14px', lineHeight: '1.6' }}><p>{exp.description}</p></div>
                              </div>
                          </div>
                      ))}
                      {formData.education && formData.education.map(edu => (
                          <div key={edu.id} style={{ display: 'flex', marginBottom: '25px', /* pageBreakInside: 'avoid' */ }}>
                              <div style={{ flexShrink: 0, marginRight: '20px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#4a5568', color: 'white', display: 'grid', placeItems: 'center' }}><FaGraduationCap /></div>
                                <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', margin: '10px 0 0 0', fontSize: '11px', color: '#718096', letterSpacing: '1px' }}>{edu.graduationDate}</p>
                              </div>
                              <div style={{ flexGrow: 1, paddingTop: '10px' }}>
                                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '700' }}>{edu.degree}</h3>
                                  <p style={{ margin: '4px 0 8px 0', color: '#718096', fontStyle: 'italic' }}>{edu.institution}</p>
                                  <div style={{ fontSize: '14px', lineHeight: '1.6' }}><p>{edu.major}</p></div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
              <div>
                   {formData.skills && formData.skills.length > 0 && <section style={{ /* pageBreakInside: 'avoid', */ marginBottom: '30px' }}>
                      <h2 style={sectionTitleStyle}><FaTools /> Skills</h2>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                          {formData.skills.map(skill => (
                              <span key={skill} style={{ backgroundColor: '#EDF2F7', color: '#4A5568', fontWeight: 600, padding: '5px 12px', borderRadius: '6px' }}>
                                  {skill}
                              </span>
                          ))}
                      </div>
                  </section>}
                  {formData.projects && formData.projects.length > 0 && <section style={{ /* pageBreakInside: 'avoid', */ marginBottom: '30px' }}>
                      <h2 style={sectionTitleStyle}><FaLightbulb /> Projects</h2>
                      {formData.projects.map(proj => (
                          <div key={proj.id} style={{marginBottom: '15px'}}>
                             <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: 'bold' }}>
                                 {proj.link ? <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{color: '#2d3748', textDecoration: 'none'}}>{proj.title}</a> : proj.title}
                             </h4>
                             <p style={{ margin: 0, fontSize: '14px', color: '#495057' }}>{proj.description}</p>
                          </div>
                      ))}
                  </section>}
              </div>
          </div>
      </div></div>
    </div>
  );
};

export default TimelineResume;
