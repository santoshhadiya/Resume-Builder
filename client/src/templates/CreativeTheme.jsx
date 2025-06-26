import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineCode, HiOutlineSparkles, HiOutlineDocumentText } from 'react-icons/hi';

const CreativeTheme = ({ formData }) => {
  // --- Style Objects ---
  const pageStyle = {
    background: '#fff',
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    display: 'flex',
    fontFamily: "'Inter', sans-serif",
  };

  const leftColumnStyle = {
    background: '#1a202c',
    color: '#fff',
    width: '70mm',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  
  };

  const rightColumnStyle = {
    width: '140mm',
    padding: '30px',
    color: '#2D3748',
    boxSizing: 'border-box',
  };

  const sectionStyle = {
    marginBottom: '30px',
    pageBreakInside: 'avoid'
  };

  const sectionTitleStyle = {
    fontSize: '20px',
    color: '#2D3748',
    margin: '0 0 15px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  // --- Main Component Render ---
  return (
    <div style={pageStyle} id='resume-preview'>
     <div style={{display:'flex', width:'100%',height:'100%'}}>
       {/* Left Column */}
      <aside style={leftColumnStyle}>
        <div style={{ height:'99vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
           {formData.photo ? 
            <img src={formData.photo} alt="Profile" style={{ borderRadius: '50%', width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #4FD1C5' }} />
            :
            <img 
              src={`https://placehold.co/120x120/E2E8F0/4A5568?text=${(formData.name || 'A').charAt(0)}`} 
              alt="Profile" 
              style={{ borderRadius: '50%', width: '120px', height: '120px', border: '4px solid #4FD1C5' }} 
            />
           }
          <h1 style={{ fontSize: '24px', margin: '15px 0 5px 0', color: '#fff' }}>{formData.name || "Your Name"}</h1>
          <h2 style={{ fontSize: '16px', fontWeight: '400', color: '#A0AEC0' }}>{formData.professionalTitle || "Professional Title"}</h2>
        </div>

        <div style={{ flexGrow: 1 }}>
          <h3 style={{ fontSize: '18px', borderBottom: '2px solid #4FD1C5', paddingBottom: '5px', marginBottom: '15px' }}>Contact</h3>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            {formData.email && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><FiMail style={{ marginRight: '10px' }}/> {formData.email}</li>}
            {formData.phone && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><FiPhone style={{ marginRight: '10px' }}/> {formData.phone}</li>}
            {formData.address && [formData.address.city, formData.address.state, formData.address.pincode].filter(Boolean).join(', ') && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><FiMapPin style={{ marginRight: '10px' }}/> {[formData.address.city, formData.address.state, formData.address.pincode].filter(Boolean).join(', ')}</li>}
            {formData.linkedin && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><FiLinkedin style={{ marginRight: '10px' }}/> <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a></li>}
            {formData.github && <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}><FiGithub style={{ marginRight: '10px' }}/> <a href={formData.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>GitHub</a></li>}
            {formData.website && <li style={{ display: 'flex', alignItems: 'center' }}><FiGlobe style={{ marginRight: '10px' }}/> <a href={formData.website} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Website</a></li>}
          </ul>

          {formData.education && formData.education.length > 0 && formData.education.some(e => e.degree) && (
              <div style={{pageBreakInside: 'avoid'}}>
                <h3 style={{ fontSize: '18px', borderBottom: '2px solid #4FD1C5', paddingBottom: '5px', margin: '30px 0 15px 0' }}>Education</h3>
                {formData.education.map(edu => edu.degree && (
                  <div key={edu.id} style={{ marginBottom: '15px' }}>
                    <p style={{ margin: '0 0 5px 0', fontWeight: '600' }}>{edu.degree}</p>
                    <p style={{ margin: 0, color: '#A0AEC0' }}>{edu.institution}</p>
                    <p style={{ margin: 0, color: '#A0AEC0', fontSize: '12px' }}>{edu.passingYear}</p>
                  </div>
                ))}
              </div>
          )}
        </div>
        <div style={{ fontSize: '10px', textAlign: 'center', color: '#718096'}}>Creative Theme</div>
        </div>
      </aside>

      {/* Right Column */}
      <main style={rightColumnStyle}>
        {formData.summary && (
          <section style={sectionStyle}>
            <h3 style={sectionTitleStyle}><HiOutlineDocumentText /> Profile</h3>
            <p style={{ margin: 0, lineHeight: '1.6', color: '#4A5568' }}>{formData.summary}</p>
          </section>
        )}

        {formData.experience && formData.experience.length > 0 && formData.experience.some(e => e.title) &&(
          <section style={sectionStyle}>
            <h3 style={sectionTitleStyle}><HiOutlineBriefcase /> Experience</h3>
            {formData.experience.map(exp => exp.title && (
              <div key={exp.id} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4 style={{ margin: 0, fontSize: '16px' }}>{exp.title}</h4>
                  <span style={{ fontSize: '12px', color: '#718096' }}>{exp.startDate} - {exp.endDate || 'Present'}</span>
                </div>
                <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#4A5568' }}>{exp.company} | {exp.companyCity}</p>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#4A5568' }}>{exp.description}</p>
              </div>
            ))}
          </section>
        )}
        
        {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) && (
            <section style={sectionStyle}>
                <h3 style={sectionTitleStyle}><HiOutlineCode /> Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {formData.skills.map(skill => (
                        skill.name && <span key={skill.id} style={{ background: '#EDF2F7', padding: '5px 12px', borderRadius: '15px', fontSize: '13px' }}>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </section>
        )}

        {formData.projects && formData.projects.length > 0 && formData.projects.some(p => p.title) && (
          <section style={sectionStyle}>
            <h3 style={sectionTitleStyle}><HiOutlineSparkles /> Projects</h3>
            {formData.projects.map(proj => proj.title && (
              <div key={proj.id} style={{ marginBottom: '15px' }}>
                <h4 style={{ margin: 0, fontSize: '16px' }}>{proj.title}</h4>
                <p style={{ margin: '5px 0', fontSize: '14px', lineHeight: '1.6', color: '#4A5568' }}>{proj.description}</p>
                {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#3182CE', textDecoration: 'none', fontSize: '12px' }}>View Project</a>}
              </div>
            ))}
          </section>
        )}
      </main>
     </div>
    </div>
  );
};

export default CreativeTheme;