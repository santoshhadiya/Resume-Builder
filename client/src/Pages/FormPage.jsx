import React, { useState, useEffect } from 'react';

function FormPage({ formData, onInputChange, onItemChange, onAddItem, onRemoveItem, onSkillsChange, onSave }) {
    const [step, setStep] = useState(1);
    const totalSteps = 8; // Updated total steps

    const nextStep = () => setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

    const stepTitles = ["", "Personal Info", "Professional Summary", "Skills", "Work Experience", "Education", "Projects", "Certifications", "Languages"];

    // This effect ensures that there is always at least one item to fill out when you visit a section
    useEffect(() => {
        if (step === 4 && formData.experience.length === 0) {
            onAddItem('experience');
        }
        if (step === 5 && formData.education.length === 0) {
            onAddItem('education');
        }
        if (step === 6 && formData.projects.length === 0) {
            onAddItem('projects');
        }
        if (step === 7 && formData.certifications.length === 0) {
            onAddItem('certifications');
        }
        if (step === 8 && formData.languages.length === 0) {
            onAddItem('languages');
        }
    }, [step, formData, onAddItem]);


    const inputClasses = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal";
    const labelClasses = "text-[#111418] text-base font-medium leading-normal pb-2";
    const fieldWrapperClasses = "flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3";
    const sectionWrapperClasses = "border border-gray-200 rounded-lg p-4 mb-4";
    const removeButtonClasses = "mt-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm";
    const addButtonClasses = "mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]";


  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between">
          <p className="text-[#111418] text-base font-medium leading-normal">Step {step}/{totalSteps}</p>
        </div>
        <div className="rounded bg-[#dbe0e6]">
          <div className="h-2 rounded bg-[#111418]" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
        </div>
        <p className="text-[#60758a] text-sm font-normal leading-normal">{stepTitles[step]}</p>
      </div>

       {step === 1 && (
        <section>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Full Name</p>
              <input
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Phone</p>
                <input
                  placeholder="Enter your phone number"
                   name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">LinkedIn Profile URL</p>
                <input
                  placeholder="Enter your LinkedIn profile URL"
                   name="linkedin"
                  value={formData.linkedin}
                  onChange={onInputChange}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
        </section>
      )}

      {step === 2 && (
          <section>
                <div className="flex flex-col gap-4 p-4">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111418] text-base font-medium leading-normal pb-2">Professional Summary</p>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={onInputChange}
              rows="5"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
              placeholder="A concise summary of your professional background and career goals."
            ></textarea>
          </label>
        </div>
          </section>
      )}

        {step === 3 && (
            <section>
                <div className="flex flex-col gap-4 p-4">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Skills (Comma-separated)</p>
                <textarea
                name="skills"
                value={formData.skills.join(', ')}
                onChange={onSkillsChange}
                rows="3"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                placeholder="e.g., JavaScript, React, Node.js"
                ></textarea>
            </label>
            </div>
            </section>
        )}

        {step === 4 && (
            <section>
                {formData.experience.map((exp, index) => (
                    <div key={exp.id} className={sectionWrapperClasses}>
                        <div className={fieldWrapperClasses}>
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Job Title</p>
                                <input placeholder="e.g., Software Engineer" name="title" value={exp.title} onChange={(e) => onItemChange('experience', exp.id, 'title', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                        <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Company</p>
                                <input placeholder="e.g., Google" name="company" value={exp.company} onChange={(e) => onItemChange('experience', exp.id, 'company', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                         <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Description</p>
                                <textarea placeholder="Your responsibilities..." name="description" value={exp.description} onChange={(e) => onItemChange('experience', exp.id, 'description', e.target.value)} className={inputClasses} rows={4}/>
                            </label>
                        </div>
                        {formData.experience.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('experience', exp.id)}>Remove</button>}
                    </div>
                ))}
                 <button className={addButtonClasses} onClick={() => onAddItem("experience")}>+ Add More Experience</button>
            </section>
        )}

        {step === 5 && (
            <section>
                {formData.education.map((edu) => (
                    <div key={edu.id} className={sectionWrapperClasses}>
                         <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Degree</p>
                                <input placeholder="e.g., Bachelor of Science" name="degree" value={edu.degree} onChange={(e) => onItemChange('education', edu.id, 'degree', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                         <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Institution</p>
                                <input placeholder="e.g., University of California" name="institution" value={edu.institution} onChange={(e) => onItemChange('education', edu.id, 'institution', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                        {formData.education.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('education', edu.id)}>Remove</button>}
                    </div>
                ))}
                 <button className={addButtonClasses} onClick={() => onAddItem("education")}>+ Add More Education</button>
            </section>
        )}

        {step === 6 && (
            <section>
                {formData.projects.map((project) => (
                     <div key={project.id} className={sectionWrapperClasses}>
                         <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Project Title</p>
                                <input placeholder="e.g., Personal Portfolio" name="title" value={project.title} onChange={(e) => onItemChange('projects', project.id, 'title', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                         <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Project Description</p>
                                <textarea placeholder="Describe your project" name="description" value={project.description} onChange={(e) => onItemChange('projects', project.id, 'description', e.target.value)} className={inputClasses} rows={4}/>
                            </label>
                        </div>
                        {formData.projects.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('projects', project.id)}>Remove</button>}
                    </div>
                ))}
                <button className={addButtonClasses} onClick={() => onAddItem("projects")}>+ Add More Project</button>
            </section>
        )}
        
        {step === 7 && (
            <section>
                 <h3 className="text-xl font-semibold mb-2 px-4">Certifications</h3>
                {formData.certifications.map((cert) => (
                    <div key={cert.id} className={sectionWrapperClasses}>
                         <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Certification Name</p>
                                <input placeholder="e.g., AWS Certified Cloud Practitioner" name="name" value={cert.name} onChange={(e) => onItemChange('certifications', cert.id, 'name', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                        {formData.certifications.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('certifications', cert.id)}>Remove</button>}
                    </div>
                ))}
                 <button className={addButtonClasses} onClick={() => onAddItem("certifications")}>+ Add More Certification</button>
            </section>
        )}

         {step === 8 && (
            <section>
                 <h3 className="text-xl font-semibold mb-2 px-4">Languages</h3>
                {formData.languages.map((lang) => (
                    <div key={lang.id} className={sectionWrapperClasses}>
                         <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Language</p>
                                <input placeholder="e.g., English" name="name" value={lang.name} onChange={(e) => onItemChange('languages', lang.id, 'name', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                        <div className={fieldWrapperClasses}>
                             <label className="flex flex-col min-w-40 flex-1">
                                <p className={labelClasses}>Proficiency</p>
                                <input placeholder="e.g., Native or Fluent" name="proficiency" value={lang.proficiency} onChange={(e) => onItemChange('languages', lang.id, 'proficiency', e.target.value)} className={inputClasses}/>
                            </label>
                        </div>
                        {formData.languages.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('languages', lang.id)}>Remove</button>}
                    </div>
                ))}
                 <button className={addButtonClasses} onClick={() => onAddItem("languages")}>+ Add More Language</button>
            </section>
        )}


      <div className="flex justify-stretch">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
          <button
            onClick={step > 1 ? prevStep : onSave}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">{step > 1 ? 'Back' : 'Save & Exit'}</span>
          </button>
          {step < totalSteps ? (
              <button
                onClick={nextStep}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Next</span>
              </button>
          ): (
               <button
                onClick={onSave}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Save</span>
              </button>
          )}
        </div>
      </div>
    </div>
  );
}


export default FormPage;