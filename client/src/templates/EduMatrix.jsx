import React from 'react';

// This is a new, single-column, black-and-white resume template.
const EduMatrix  = ({ formData }) => {
  // --- Style Objects for a clean and professional layout ---
  const pageStyle = {
    background: '#ffffff',
    width: '210mm',
    minHeight: '297mm',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
   
    fontFamily: "'Garamond', 'Times New Roman', serif",
    color: '#000000',
    boxSizing: 'border-box',
    lineHeight: '1.5',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    borderBottom: '2px solid #000000',
    paddingBottom: '20px',
    marginBottom: '30px',
  };

  const nameContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const nameStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '0',
    letterSpacing: '2px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'normal',
    margin: '5px 0 0 0',
    color: '#333',
  };

  const photoStyle = {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    // Removed borderRadius to make it square
  };

  const sectionStyle = {
    marginBottom: '30px',
    pageBreakInside: 'avoid',
  };

  const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    borderBottom: '1px solid #000000',
    paddingBottom: '8px',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const contentStyle = {
    fontSize: '16px',
  };

  const experienceItemStyle = {
    marginBottom: '20px',
  };

  const jobTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
  };

  const companyInfoStyle = {
    margin: '4px 0',
    fontStyle: 'italic',
    color: '#444',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  };

  const thStyle = {
    border: '1px solid #000000',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2', // A very light grey for header
    fontWeight: 'bold',
  };

  const tdStyle = {
    border: '1px solid #000000',
    padding: '12px',
    textAlign: 'left',
  };

  // --- Helper to sort education history ---
  // Sorts from lowest to highest year. Handles non-numeric years gracefully.
  const sortedEducation = formData.education
    ? [...formData.education].sort((a, b) => {
        const yearA = parseInt(a.passingYear, 10);
        const yearB = parseInt(b.passingYear, 10);
        if (isNaN(yearA)) return 1; // Put non-years at the end
        if (isNaN(yearB)) return -1;
        return yearA - yearB;
      })
    : [];

  return (
    <div style={pageStyle} id="resume-preview">
      <div style={{
        padding: '30px',
        height:'297mm',
        width:'100%',
      }}>
        {/* --- Header Section --- */}
      <header style={headerStyle}>
        <div style={nameContainerStyle}>
          <h1 style={nameStyle}>{formData.name || 'Your Name'}</h1>
          <h2 style={titleStyle}>
            {formData.professionalTitle || 'Professional Title'}
          </h2>
        </div>
        {formData.photo && (
          <img
            src={formData.photo}
            alt="Profile"
            style={photoStyle}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/120x120/000000/FFFFFF?text=Photo';
            }}
          />
        )}
      </header>

      <main>
        {/* --- Summary Section --- */}
        {formData.summary && (
          <section style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Summary</h3>
            <p style={contentStyle}>{formData.summary}</p>
          </section>
        )}

        {/* --- Work Experience Section --- */}
        {formData.experience && formData.experience.length > 0 && formData.experience.some(e => e.title) && (
          <section style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Work Experience</h3>
            {formData.experience.map(
              (exp) =>
                exp.title && (
                  <div key={exp.id} style={experienceItemStyle}>
                    <h4 style={jobTitleStyle}>{exp.title}</h4>
                    <p style={companyInfoStyle}>
                      {exp.company} | {exp.companyCity} (
                      {new Date(exp.startDate).getFullYear()} -{' '}
                      {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'})
                    </p>
                    <p style={contentStyle}>{exp.description}</p>
                  </div>
                )
            )}
          </section>
        )}

        {/* --- Education Section --- */}
        {sortedEducation.length > 0 && sortedEducation.some(e => e.degree) && (
          <section style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Education</h3>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Degree</th>
                  <th style={thStyle}>Institution</th>
                  <th style={thStyle}>Passing Year</th>
                </tr>
              </thead>
              <tbody>
                {sortedEducation.map(
                  (edu) =>
                    edu.degree && (
                      <tr key={edu.id}>
                        <td style={tdStyle}>{edu.degree}</td>
                        <td style={tdStyle}>{edu.institution}</td>
                        <td style={tdStyle}>{edu.passingYear}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </section>
        )}

        {/* --- Skills Section --- */}
        {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) &&(
            <section style={sectionStyle}>
                <h3 style={sectionTitleStyle}>Skills</h3>
                <div style={{...contentStyle, display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                    {formData.skills.map(skill => skill.name && (
                        <span key={skill.id} style={{border: '1px solid #ccc', padding: '5px 10px', borderRadius: '5px'}}>{skill.name}</span>
                    ))}
                </div>
            </section>
        )}
      </main>
      </div>
    </div>
  );
};

export default EduMatrix ;