// In PreviewPage.jsx
import React from 'react';
import ClassicTemplate from '../templates/ClassicTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import ClassicTemplate2 from '../templates/ClassicTemplate2';
import ModernElegantTemplate from '../templates/ModernElegantTemplate';
import FuturisticTemplate from '../templates/FuturisticTemplate';
import OrbitalResumeTemplate from '../templates/OrbitalResumeTemplate';
import CreativeTheme from '../templates/CreativeTheme';
import MinimalistMonochrome from '../templates/MinimalistMonochrome';
import TechFolioTheme from '../templates/TechFolioTheme';
import CorporateBlue from '../templates/CorporateBlue';
import TimelineResume from '../templates/TimelineResume';
import ProfessionalTheme from '../templates/ProfessionalTheme';
import EduMatrix from '../templates/EduMatrix'; 
import DivineTheme from '../templates/DivineTheme'; 
import CelestialResumeTheme from '../templates/CelestialResumeTheme'; // Assuming you have this template


const templates = {
  'Classic': ClassicTemplate,
  'Classic2': ClassicTemplate2,
  'Modern': ModernTemplate,
  'Elegant': ModernElegantTemplate,
  'Futuristic': FuturisticTemplate,
   'Orbital': OrbitalResumeTemplate,
   'CreativeTheme':CreativeTheme,
   'MinimalistMonochrome':MinimalistMonochrome,
   'TechFolioTheme':TechFolioTheme,
   'CorporateBlue':CorporateBlue,
   'TimelineResume':TimelineResume,
   'ProfessionalTheme':ProfessionalTheme,
   'EduMatrix':EduMatrix,
   'DivineTheme': DivineTheme,
   'CelestialResumeTheme': CelestialResumeTheme, // Add your new template here
};

function PreviewPage({ formData }) {
  const TemplateComponent = templates[formData.template] || ClassicTemplate; // Fallback to Classic

  return <TemplateComponent formData={formData} />;
}

export default PreviewPage;