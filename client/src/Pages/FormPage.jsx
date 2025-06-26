import React, { useState, useEffect } from 'react';

// A generic input field component to reduce repetition
const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => {
    const inputClasses = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal";
    return (
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 w-full">
            <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">{label}</p>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                    className={inputClasses}
                />
            </label>
        </div>
    );
};

// Main Form Page Component
function FormPage({ formData, onInputChange, onAddressChange, onPhotoChange, onItemChange, onAddItem, onRemoveItem, onSave, onSaveAndPreview }) {
    const [step, setStep] = useState(1);
    const totalSteps = 8; 

    const nextStep = () => setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

    const stepTitles = ["", "Personal Info", "Professional Summary", "Skills", "Work Experience", "Education", "Projects", "Certifications", "Languages"];

    useEffect(() => {
        const sections = ['experience', 'education', 'projects', 'certifications', 'languages', 'skills'];
        const sectionSteps = [4, 5, 6, 7, 8, 3];
        
        sectionSteps.forEach((sectionStep, index) => {
            const sectionName = sections[index];
            if (step === sectionStep && (!formData[sectionName] || formData[sectionName].length === 0)) {
                onAddItem(sectionName);
            }
        });
    }, [step, formData, onAddItem]);


    const inputClasses = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal";
    const labelClasses = "text-[#111418] text-base font-medium leading-normal pb-2";
    const sectionWrapperClasses = "border border-gray-200 rounded-lg p-4 mb-4";
    const removeButtonClasses = "mt-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600";
    const addButtonClasses = "mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300";


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
            <InputField label="Full Name" name="name" value={formData.name} onChange={onInputChange} placeholder="Enter your full name" />
            <InputField label="Professional Title" name="professionalTitle" value={formData.professionalTitle} onChange={onInputChange} placeholder="e.g., Senior Software Engineer" />
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className={labelClasses}>Profile Photo</p>
                <input type="file" name="photo" onChange={onPhotoChange} accept="image/*" className="form-input w-full p-2 border rounded-lg bg-[#f0f2f5]"/>
                {formData.photo && <img src={formData.photo} alt="Preview" className="w-24 h-24 mt-2 rounded-full object-cover"/>}
              </label>
            </div>
            <InputField label="Email" name="email" value={formData.email} onChange={onInputChange} placeholder="Enter your email" type="email" />
            <InputField label="Phone" name="phone" value={formData.phone} onChange={onInputChange} placeholder="Enter your phone number" type="tel"/>
            <InputField label="City" name="city" value={formData.address.city} onChange={onAddressChange} placeholder="City" />
            <InputField label="State" name="state" value={formData.address.state} onChange={onAddressChange} placeholder="State" />
            <InputField label="Pincode" name="pincode" value={formData.address.pincode} onChange={onAddressChange} placeholder="Pincode" />
            <InputField label="LinkedIn Profile URL" name="linkedin" value={formData.linkedin} onChange={onInputChange} placeholder="Your LinkedIn URL" />
        </section>
      )}

      {step === 2 && (
        <section>
            <div className="flex flex-col gap-4 p-4">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className={labelClasses}>Professional Summary</p>
                    <textarea name="summary" value={formData.summary} onChange={onInputChange} rows="5"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    placeholder="A concise summary of your professional background and career goals."></textarea>
                </label>
            </div>
        </section>
      )}

      {step === 3 && (
        <section>
            {formData.skills && formData.skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-2 p-4">
                    <input 
                        placeholder="e.g., JavaScript" 
                        value={skill.name} 
                        onChange={(e) => onItemChange('skills', skill.id, 'name', e.target.value)} 
                        className={inputClasses}
                    />
                    {formData.skills.length > 1 && (
                        <button className={removeButtonClasses} onClick={() => onRemoveItem('skills', skill.id)}>Remove</button>
                    )}
                </div>
            ))}
            <div className="px-4">
                <button className={addButtonClasses} onClick={() => onAddItem("skills")}>+ Add More Skill</button>
            </div>
        </section>
      )}

        {step === 4 && (
            <section>
                {formData.experience && formData.experience.map((exp) => (
                    <div key={exp.id} className={sectionWrapperClasses}>
                        <input placeholder="Job Title e.g., Software Engineer" value={exp.title} onChange={(e) => onItemChange('experience', exp.id, 'title', e.target.value)} className={`${inputClasses} mb-4`} />
                        <input placeholder="Company e.g., Google" value={exp.company} onChange={(e) => onItemChange('experience', exp.id, 'company', e.target.value)} className={`${inputClasses} mb-4`} />
                        <input placeholder="Company City e.g., Mountain View" value={exp.companyCity} onChange={(e) => onItemChange('experience', exp.id, 'companyCity', e.target.value)} className={`${inputClasses} mb-4`} />
                        <div className="flex gap-4">
                            <input type="date" placeholder="Start Date" value={exp.startDate} onChange={(e) => onItemChange('experience', exp.id, 'startDate', e.target.value)} className={`${inputClasses} mb-4`} />
                            <input type="date" placeholder="End Date" value={exp.endDate} onChange={(e) => onItemChange('experience', exp.id, 'endDate', e.target.value)} className={`${inputClasses} mb-4`} />
                        </div>
                        <textarea placeholder="Your responsibilities..." value={exp.description} onChange={(e) => onItemChange('experience', exp.id, 'description', e.target.value)} className={`${inputClasses} h-28`} />
                        {formData.experience.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('experience', exp.id)}>Remove This Experience</button>}
                    </div>
                ))}
                 <button className={addButtonClasses} onClick={() => onAddItem("experience")}>+ Add More Experience</button>
            </section>
        )}

        {step === 5 && (
            <section>
                {formData.education && formData.education.map((edu) => (
                    <div key={edu.id} className={sectionWrapperClasses}>
                        <input placeholder="Degree e.g., Bachelor of Science" value={edu.degree} onChange={(e) => onItemChange('education', edu.id, 'degree', e.target.value)} className={`${inputClasses} mb-4`} />
                        <input placeholder="Institution e.g., University of California" value={edu.institution} onChange={(e) => onItemChange('education', edu.id, 'institution', e.target.value)} className={`${inputClasses} mb-4`} />
                        <input placeholder="Passing Year e.g., 2024" value={edu.passingYear} onChange={(e) => onItemChange('education', edu.id, 'passingYear', e.target.value)} className={`${inputClasses} mb-4`} />
                        {formData.education.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('education', edu.id)}>Remove This Education</button>}
                    </div>
                ))}
                 <button className={addButtonClasses} onClick={() => onAddItem("education")}>+ Add More Education</button>
            </section>
        )}
        
        {step === 6 && (
            <section>
                {formData.projects && formData.projects.map((project) => (
                     <div key={project.id} className={sectionWrapperClasses}>
                        <input placeholder="Project Title" value={project.title} onChange={(e) => onItemChange('projects', project.id, 'title', e.target.value)} className={`${inputClasses} mb-4`} />
                        <textarea placeholder="Describe your project" value={project.description} onChange={(e) => onItemChange('projects', project.id, 'description', e.target.value)} className={`${inputClasses} h-28 mb-4`} />
                        <input placeholder="Live Project Link" value={project.link} onChange={(e) => onItemChange('projects', project.id, 'link', e.target.value)} className={`${inputClasses} mb-4`} />
                        {formData.projects.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('projects', project.id)}>Remove This Project</button>}
                    </div>
                ))}
                <button className={addButtonClasses} onClick={() => onAddItem("projects")}>+ Add More Project</button>
            </section>
        )}

        {step === 7 && (
            <section>
                {formData.certifications && formData.certifications.map((cert) => (
                    <div key={cert.id} className={sectionWrapperClasses}>
                        <input placeholder="Certification Name" value={cert.name} onChange={(e) => onItemChange('certifications', cert.id, 'name', e.target.value)} className={`${inputClasses} mb-4`}/>
                        <input placeholder="Issuing Organization" value={cert.issuer} onChange={(e) => onItemChange('certifications', cert.id, 'issuer', e.target.value)} className={`${inputClasses} mb-4`}/>
                        <input type="date" value={cert.date} onChange={(e) => onItemChange('certifications', cert.id, 'date', e.target.value)} className={`${inputClasses} mb-4`} />
                        {formData.certifications.length > 1 && <button className={removeButtonClasses} onClick={() => onRemoveItem('certifications', cert.id)}>Remove</button>}
                    </div>
                ))}
                 <button className={addButtonClasses} onClick={() => onAddItem("certifications")}>+ Add More Certification</button>
            </section>
        )}

         {step === 8 && (
            <section>
                {formData.languages && formData.languages.map((lang) => (
                    <div key={lang.id} className={sectionWrapperClasses}>
                        <input placeholder="Language e.g., English" value={lang.name} onChange={(e) => onItemChange('languages', lang.id, 'name', e.target.value)} className={`${inputClasses} mb-4`} />
                        <select value={lang.proficiency} onChange={(e) => onItemChange('languages', lang.id, 'proficiency', e.target.value)} className={`${inputClasses} mb-4`}>
                            <option>Fluent</option>
                            <option>Native</option>
                            <option>Intermediate</option>
                            <option>Beginner</option>
                        </select>
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
                onClick={onSaveAndPreview}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Save & Preview</span>
              </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormPage;
