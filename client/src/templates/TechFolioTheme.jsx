import React from 'react';
import { SiReact, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiDocker, /* SiAmazonaws,gjjjjjjjjgkjfjkfa */ SiJavascript, SiGit, SiTypescript, SiHtml5, SiCss3 } from 'react-icons/si';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const TechFolioTheme = ({ formData }) => {
  // --- Style Objects ---
  const pageStyle = {
    width: '210mm',
    minHeight: '297mm',
    margin: '0 auto',
    backgroundColor: '#0d1117',
    color: '#c9d1d9',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    fontFamily: "'Fira Code', monospace",
    padding: '15mm',
    boxSizing: 'border-box'
  };

  const sectionWrapperStyle = {
    paddingLeft: '20px',
    borderLeft: '1px solid #30363d'
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    color: '#58a6ff',
    marginBottom: '15px'
  };
  
  // --- Helper Functions ---
  const techIconMap = {
      'react': <SiReact color="#61DAFB" />,
      'node.js': <SiNodedotjs color="#339933" />,
      'python': <SiPython color="#3776AB" />,
      'postgresql': <SiPostgresql color="#336791" />,
      'mongodb': <SiMongodb color="#47A248" />,
      'docker': <SiDocker color="#2496ED" />,
     /*  'aws': <SiAmazonaws color="#FF9900" />, */
      'javascript': <SiJavascript color="#F7DF1E" />,
      'git': <SiGit color="#F05032" />,
      'typescript': <SiTypescript color="#3178C6" />,
      'html5': <SiHtml5 color="#E34F26" />,
      'css3': <SiCss3 color="#1572B6" />,
  };
  const getTechIcon = (skillName) => techIconMap[skillName.toLowerCase()] || null;

  // --- Main Component Render ---
  return (
    <div style={pageStyle}  id='resume-preview'>
      <div style={{padding:'30px', height:'100%', width:'100%', backgroundColor: '#0d1117', color: '#c9d1d9',}}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #30363d', paddingBottom: '15px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '28px', margin: 0, color: '#58a6ff' }}>{formData.name || "Your Name"}</h1>
          <p style={{ margin: '5px 0 0 0', color: '#8b949e', fontSize: '16px' }}>// {formData.title || "Professional Title"}</p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '12px' }}>
          {formData.email && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', marginBottom: '5px' }}><FiMail color="#8b949e"/> {formData.email}</div>}
          {formData.phone && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', marginBottom: '5px' }}><FiPhone color="#8b949e"/> {formData.phone}</div>}
          {formData.location && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}><FiMapPin color="#8b949e"/> {formData.location}</div>}
        </div>
      </header>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '15px', paddingBottom: '15px', borderBottom: '1px solid #30363d', flexWrap: 'wrap' }}>
        {formData.github && <a href={formData.github} target="_blank" rel="noopener noreferrer" style={{ color: '#c9d1d9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><FiGithub /> GitHub Profile</a>}
        {formData.linkedin && <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#c9d1d9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}><FiLinkedin /> LinkedIn Profile</a>}
      </div>
      
      <main style={{ marginTop: '25px' }}>
          {formData.summary && (
              <p style={{ lineHeight: '1.7', color: '#8b949e', fontStyle: 'italic', marginBottom: '25px', whiteSpace: 'pre-wrap' }}>
                  {`/**\n * ${formData.summary}\n */`}
              </p>
          )}

          {formData.experience && formData.experience.length > 0 && (
              <section style={{ marginBottom: '25px', /* pageBreakInside: 'avoid' */ }}>
                <h2 style={sectionTitleStyle}><span style={{color: '#f778ba'}}>&lt;</span>experience<span style={{color: '#f778ba'}}>&gt;</span></h2>
                <div style={sectionWrapperStyle}>
                  {formData.experience.map(exp => (
                      <div key={exp.id} style={{ marginBottom: '20px' }}>
                          <h3 style={{ fontSize: '16px', margin: 0, color: '#a5d6ff' }}>{exp.title}</h3>
                          <p style={{ margin: '4px 0', color: '#8b949e' }}>
                              <span style={{color: '#f778ba'}}>const</span> company = <span style={{color: '#79c0ff'}}>'{exp.company}'</span>; // {exp.startDate} - {exp.endDate}
                          </p>
                          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#c9d1d9', whiteSpace: 'pre-wrap' }}>
                              {`// ${exp.description.replace(/\. /g, '.\n// ')}`}
                          </p>
                      </div>
                  ))}
                </div>
              </section>
          )}
          
          {formData.skills && formData.skills.length > 0 && (
              <section style={{ marginBottom: '25px', /* pageBreakInside: 'avoid' */ }}>
                <h2 style={sectionTitleStyle}><span style={{color: '#f778ba'}}>&lt;</span>skills<span style={{color: '#f778ba'}}>&gt;</span></h2>
                <div style={sectionWrapperStyle}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {formData.skills.map((skill) => (
                        <div key={skill} style={{ background: '#161b22', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                            {getTechIcon(skill)}
                            {skill}
                        </div>
                    ))}
                  </div>
                </div>
              </section>
          )}

          {formData.projects && formData.projects.length > 0 && (
              <section style={{ marginBottom: '25px', /* pageBreakInside: 'avoid'  */}}>
                <h2 style={sectionTitleStyle}><span style={{color: '#f778ba'}}>&lt;</span>projects<span style={{color: '#f778ba'}}>&gt;</span></h2>
                <div style={sectionWrapperStyle}>
                  {formData.projects.map(proj => (
                      <div key={proj.id} style={{ marginBottom: '20px' }}>
                           <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>
                              {proj.link ? <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#a5d6ff', textDecoration: 'none' }}>{proj.title}</a> : proj.title}
                           </h3>
                           <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#c9d1d9', margin: 0 }}>
                              {proj.description}
                           </p>
                      </div>
                  ))}
                </div>
              </section>
          )}
      </main>
      </div>
    </div>
  );
};

export default TechFolioTheme;
