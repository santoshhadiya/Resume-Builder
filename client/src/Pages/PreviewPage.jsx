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
  // Add other templates here as you create them
};

function PreviewPage({ formData }) {
  const TemplateComponent = templates[formData.template] || ClassicTemplate; // Fallback to Classic

  return <TemplateComponent formData={formData} />;
}

export default PreviewPage;