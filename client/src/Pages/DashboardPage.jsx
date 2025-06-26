import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { ClassicTemplateImg, Elegant, ModernTemplateImg, ClassicTemplateImg2, Futuristic, CreativeTheme, MinimalistMonochrome, TechFolioTheme, CorporateBlue, TimelineResume, ProfessionalTheme, EduMatrix, CelestialResumeTheme, DivineTheme } from '../assets/Imgs/Img';



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
      const resumeWithNewTemplate = { ...resumeToPreview, template: selectedTemplate };
      onPreviewResume(resumeWithNewTemplate);
    }
    setShowTemplatePopup(false);
  };


 const templates = [
    { name: 'Classic', image: ClassicTemplateImg },
    /* { name: "Orbital", image: Elegant }, */
    { name: 'CorporateBlue', image: CorporateBlue },
    { name: 'ProfessionalTheme', image: ProfessionalTheme },
    { name: 'EduMatrix', image: EduMatrix },
    { name: 'DivineTheme', image: DivineTheme },
    { name: 'CelestialResumeTheme', image: CelestialResumeTheme },
    { name: 'Modern', image: ModernTemplateImg },
    { name: 'Classic2', image: ClassicTemplateImg2 },
    { name: "Elegant", image: Elegant },
    { name: "Futuristic", image: Futuristic },
    { name: 'TimelineResume', image: TimelineResume },
    { name: "CreativeTheme", image: CreativeTheme },
    { name: 'MinimalistMonochrome', image: MinimalistMonochrome },
    { name: 'TechFolioTheme', image: TechFolioTheme },

  ];


  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      {/* Welcome Message and User Profile sections remain the same */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Welcome back!</p>
      </div>

      {/* Templates Section remains the same */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Resume Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {templates.map((template) => (
          <div
            key={template.name}
            className="flex flex-col gap-3 cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleTemplateSelect(template.name)}
          >
            <div className="relative group">
              <img src={template.image} alt={`${template.name} Template`} className="w-full h-[400px] rounded-lg border border-gray-200 shadow-md" />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
            </div>
            <p className="text-[#111418] text-sm text-center font-medium leading-normal">{template.name}</p>
          </div>
        ))}
      </div>

      {/* Template Selection Popup */}
      {showTemplatePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Choose an option for the '{selectedTemplate}' template</h3>
            <p className="text-gray-600 mb-6">You can apply this template to an existing resume for a preview, or start fresh.</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => {
                  onNewResume(selectedTemplate);
                  setShowTemplatePopup(false);
                }}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Create New Resume
              </button>
              <button
                onClick={() => setShowTemplatePopup(false)}
                className="flex-1 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
            {resumes.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-center mb-2">Or apply to an existing resume:</h4>
                <div className="max-h-40 overflow-y-auto border rounded-lg">
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
              </div>
            )}
          </div>
        </div>
      )}

      {/* My Resumes Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">My Resumes</h2>
      {resumes.length > 0 ? (
        <div className="px-4 py-3">
          <div className="overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resumes.map((resume) => (
                  <tr key={resume.id}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {resume.name || 'Untitled Resume'}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(resume.updatedAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium items-center flex flex-row">
                      <button onClick={() => onPreviewResume(resume.id)} className="text-gray-600 hover:text-indigo-900 mr-4"><AiOutlineEye size={22} /></button>
                      <button onClick={() => onEditResume(resume.id)} className="text-gray-600 hover:text-black mr-4"> <FaEdit size={18} /></button>
                      <button onClick={() => onDeleteResume(resume.id)} className="text-gray-600 hover:text-red-900"> <FaTrash size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 px-4">
          <p className="text-gray-500">You haven't created any resumes yet.</p>
          <p className="text-gray-500 mt-2">Select a template above or click the button below to start.</p>
        </div>
      )}

      <div className="flex px-4 py-3 justify-end">
        <button
          onClick={() => onNewResume()}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#0c7ff2] text-white text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Create New Resume</span>
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;