import React from 'react';

function ModernTemplate({ formData }) {
    const leftColClasses = "w-1/3 bg-gray-800 text-white p-6";
    const rightColClasses = "w-2/3 p-6";
    const sectionTitleClasses = "text-xl font-bold uppercase tracking-wider mb-4";
    const itemTitleClasses = "text-lg font-semibold";
    const subTextClasses = "text-md";

    return (
        <div id="resume-preview" className="flex font-sans w-[210mm] min-h-[297mm] mx-auto shadow-lg">
           <div style={{display:'flex', minHeight:'287mm'}}>
             {/* Left Column */}
            <div className={leftColClasses} style={{height:'297mm'}} >
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-white">{formData.name || "Your Name"}</h1>
                </header>
                <div className="space-y-6">
                    <section>
                        <h2 className="text-gray-300 text-lg font-semibold uppercase tracking-wider">Contact</h2>
                        <div className="border-t-2 border-gray-500 my-2"></div>
                        <p className="text-sm">{formData.email}</p>
                        <p className="text-sm">{formData.phone}</p>
                        <a href={formData.linkedin} className="text-sm text-blue-300 hover:underline">LinkedIn Profile</a>
                    </section>

                    {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) && (
    <section>
        <h2 className="text-gray-300 text-lg font-semibold uppercase tracking-wider">Skills</h2>
        <div className="border-t-2 border-gray-500 my-2"></div>
        <ul className="list-disc list-inside text-sm">
            {formData.skills.map(skill => skill.name && (
                <li key={skill.id}>{skill.name}</li>
            ))}
        </ul>
    </section>
)}


                    {formData.education && formData.education.length > 0 && (
                        <section>
                           <h2 className="text-gray-300 text-lg font-semibold uppercase tracking-wider">Education</h2>
                             <div className="border-t-2 border-gray-500 my-2"></div>
                            {formData.education.map(edu => (
                                <div key={edu.id} className="mb-3">
                                    <h3 className="font-bold text-md">{edu.degree}</h3>
                                    <p className="text-sm">{edu.institution}</p>
                                </div>
                            ))}
                        </section>
                    )}
                </div>
            </div>

            {/* Right Column */}
            <div className={rightColClasses}>
                <section className="mb-8">
                    <h2 className={sectionTitleClasses}>Summary</h2>
                    <p className="text-gray-700 leading-relaxed">{formData.summary}</p>
                </section>

                <section className="mb-8">
                    <h2 className={sectionTitleClasses}>Experience</h2>
                    {formData.experience.map(exp => (
                        <div key={exp.id} className="mb-4">
                            <h3 className={itemTitleClasses}>{exp.title}</h3>
                            <p className={`${subTextClasses} text-gray-600`}>{exp.company}</p>
                            <p className="text-gray-700 mt-1">{exp.description}</p>
                        </div>
                    ))}
                </section>

                {formData.projects && formData.projects.length > 0 && (
                     <section className="mb-8">
                        <h2 className={sectionTitleClasses}>Projects</h2>
                        {formData.projects.map(project => (
                             <div key={project.id} className="mb-4">
                                <h3 className={itemTitleClasses}>{project.title}</h3>
                                <p className="text-gray-700 mt-1">{project.description}</p>
                            </div>
                        ))}
                    </section>
                )}
            </div>
           </div>
        </div>
    );
}

export default ModernTemplate;