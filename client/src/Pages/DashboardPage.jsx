import React, { useState } from 'react';
import { ClassicTemplateImg, Elegant, ModernTemplateImg, ClassicTemplateImg2, Futuristic, CreativeTheme, MinimalistMonochrome, TechFolioTheme, CorporateBlue, TimelineResume, } from '../assets/Imgs/Img';

function DashboardPage({ onNewResume, onEditResume, onPreviewResume, onDeleteResume, resumes }) {

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplatePopup, setShowTemplatePopup] = useState(false);


  const handleTemplateSelect = (templateName) => {
    if (resumes.length === 0) {
      onNewResume(templateName);
    } else {
      setSelectedTemplate(templateName);
      setShowTemplatePopup(true);
    }
  };

  const handlePreviewWithTemplate = (resumeId) => {
    const resumeToPreview = resumes.find(r => r.id === resumeId);
    if (resumeToPreview) {
      const resumeWithTemplate = { ...resumeToPreview, template: selectedTemplate };
      onPreviewResume(resumeWithTemplate);
    }
    setShowTemplatePopup(false);
  };

  const templates = [
    /*  { name: 'Classic', image: ClassicTemplateImg }, */
    /*  {name:"Orbital", image:Elegant}, */
    { name: 'Modern', image: ModernTemplateImg },
    { name: 'Classic2', image: ClassicTemplateImg2 },
    { name: "Elegant", image: Elegant },
    { name: "Futuristic", image: Futuristic },
    { name: "CreativeTheme", image: CreativeTheme },
    { name: 'MinimalistMonochrome', image: MinimalistMonochrome },
    { name: 'TechFolioTheme', image: TechFolioTheme },
    { name: 'CorporateBlue', image: CorporateBlue },
    { name: 'TimelineResume', image: TimelineResume },
  ];

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Welcome back, User!</p>
          <p className="text-[#60758a] text-sm font-normal leading-normal">Your profile snapshot</p>
        </div>
      </div>
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
          <div className="flex gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuq-N45aHV7TOJRNRFqXGiLJ2II8GkfvGzA&s")' }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Sarah Miller</p>
              <p className="text-[#60758a] text-base font-normal leading-normal">Software Engineer</p>
              <p className="text-[#60758a] text-base font-normal leading-normal">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Resume Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {templates.map((template, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleTemplateSelect(template.name)}
          >
            <div className="relative group">
              <img
                src={template.image}
                alt={`${template.name} Template`}
                className="w-full h-[400px] rounded-lg border border-gray-200 shadow-md"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#111418] text-lg font-medium leading-normal">{template.name}</p>
              <button
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTemplateSelect(template.name);
                }}
              >
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Template Selection Popup */}
      {showTemplatePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Select a Resume to Apply {selectedTemplate} Template</h3>
            <div className="max-h-60 overflow-y-auto mb-4">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlePreviewWithTemplate(resume.id)}
                >
                  <p className="font-medium">{resume.name ? `${resume.name}'s Resume` : 'Untitled Resume'}</p>
                  <p className="text-sm text-gray-500">
                    Last edited: {resume.lastEdited ? new Date(resume.lastEdited).toLocaleString() : 'Not saved yet'}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  onNewResume(selectedTemplate);
                  setShowTemplatePopup(false);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Create New Resume
              </button>
              <button
                onClick={() => setShowTemplatePopup(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">My Resumes</h2>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
          <table className="flex-1">
            <thead>
              <tr className="bg-white">
                <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Name</th>
                <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                  Last Edited
                </th>
                <th className="px-4 py-3 text-left w-60 text-[#60758a] text-sm font-medium leading-normal">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {resumes.map((resume) => (
                <tr key={resume.id} className="border-t border-t-[#dbe0e6]">
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                    {resume.name ? `${resume.name}'s Resume` : 'Untitled Resume'}
                  </td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#60758a] text-sm font-normal leading-normal">
                    {/* Display the actual last edited date */}
                    {resume.lastEdited ? new Date(resume.lastEdited).toLocaleString() : 'Not saved yet'}
                  </td>
                  <td className="h-[72px] px-4 py-2 w-60 text-sm font-bold leading-normal tracking-[0.015em]">
                    <button onClick={() => onPreviewResume(resume.id)} className="mr-2 text-blue-600 hover:underline">Preview</button>
                    <button onClick={() => onEditResume(resume.id)} className="mr-2 text-green-600 hover:underline">Edit</button>
                    {/* Wire up the delete button */}
                    <button onClick={() => onDeleteResume(resume.id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex px-4 py-3 justify-end">
        <button
          onClick={onNewResume}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#0c7ff2] text-white text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Create New Resume</span>
        </button>
      </div>

    </div>
  );
}

export default DashboardPage;