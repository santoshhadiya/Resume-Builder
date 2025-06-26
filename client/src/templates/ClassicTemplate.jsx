import React from 'react';

function ClassicTemplate({ formData }) {
    const sectionTitleClasses = "text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-1 mb-4";
    const itemTitleClasses = "text-lg font-semibold text-gray-800";
    const subTextClasses = "text-md text-gray-600";
    const descriptionClasses = "text-sm text-gray-700 leading-relaxed mt-2";

    return (
        <div id="resume-preview" className="bg-white p-8 rounded-lg shadow-lg font-inter text-gray-900 w-[210mm] min-h-[297mm] mx-auto">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    {formData.name || "Your Name Here"}
                </h1>
                <p className="text-md text-gray-600 mt-2 flex justify-center items-center flex-wrap gap-x-4">
                    {formData.email && <span>{formData.email}</span>}
                    {formData.phone && <span>&bull; {formData.phone}</span>}
                    {formData.linkedin && (
                        <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            &bull; LinkedIn
                        </a>
                    )}
                </p>
            </header>

            {/* Summary */}
            <section className="mb-6">
                <h2 className={sectionTitleClasses}>Summary</h2>
                <p className={descriptionClasses}>{formData.summary}</p>
            </section>

            {/* Skills */}
            {formData.skills && formData.skills.length > 0 && formData.skills.some(s => s.name) && (
                <section className="mb-6">
                    <h2 className={sectionTitleClasses}>Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {formData.skills.map(skill => skill.name && (
                            <span key={skill.id} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </section>
            )}


            {/* Experience */}
            <section className="mb-6">
                <h2 className={sectionTitleClasses}>Work Experience</h2>
                {formData.experience.map(exp => (
                    <div key={exp.id} className="mb-4">
                        <h3 className={itemTitleClasses}>{exp.title}</h3>
                        <p className={subTextClasses}>{exp.company}</p>
                        <p className={descriptionClasses}>{exp.description}</p>
                    </div>
                ))}
            </section>

            {/* Education */}
            <section className="mb-6">
                <h2 className={sectionTitleClasses}>Education</h2>
                {formData.education.map(edu => (
                    <div key={edu.id} className="mb-4">
                        <h3 className={itemTitleClasses}>{edu.degree}</h3>
                        <p className={subTextClasses}>{edu.institution}</p>
                    </div>
                ))}
            </section>

            {/* Projects */}
            {formData.projects && formData.projects.length > 0 && (
                <section className="mb-6">
                    <h2 className={sectionTitleClasses}>Projects</h2>
                    {formData.projects.map(project => (
                        <div key={project.id} className="mb-4">
                            <h3 className={itemTitleClasses}>{project.title}</h3>
                            <p className={descriptionClasses}>{project.description}</p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}

export default ClassicTemplate;