import React, { useState, useCallback } from "react";
import DashboardPage from "./Pages/DashboardPage";
import FormPage from "./Pages/FormPage";
import PreviewPage from "./Pages/PreviewPage";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [resumes, setResumes] = useState([]);
  const [currentResumeId, setCurrentResumeId] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const initialFormDataORG = {
    id: null,
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    summary: "",
    template: 'Classic',
    lastEdited: null,
    skills: [],
    experience: [{ id: Date.now(), title: "", company: "", location: "", startDate: "", endDate: "", description: "" }],
    education: [{ id: Date.now() + 1, degree: "", major: "", institution: "", location: "", graduationDate: "" }],
    projects: [],
    certifications: [],
    languages: [],
  };

 const initialFormData = {
  id: 1,
  name: "John Deo",
  email: "john.deo@example.com",
  phone: "+1 123-456-7890",
  linkedin: "https://linkedin.com/in/johndeo",
  portfolio: "https://johndeo.dev",
  summary: "Motivated full-stack web developer with a passion for creating efficient, scalable, and user-friendly web applications. Experienced in JavaScript, React, and Node.js with a solid understanding of software engineering principles.",
  template: 'Classic',
  lastEdited: new Date().toISOString(),
  skills: [
    "JavaScript", "React", "Node.js", "MongoDB", "HTML", "CSS",
    "Git", "REST APIs", "Express.js", "Redux", "TypeScript",
    "Bootstrap", "Tailwind CSS", "GraphQL", "Jest", "Firebase"
  ],
  experience: [
    {
      id: Date.now(),
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      startDate: "2022-06",
      endDate: "2024-05",
      description: "Developed and maintained full-stack web applications using React and Node.js. Improved API response time by 30% and implemented modern UI designs using Tailwind CSS."
    },
    {
      id: Date.now() + 1,
      title: "Frontend Developer Intern",
      company: "Creative Minds Studio",
      location: "Remote",
      startDate: "2021-01",
      endDate: "2021-06",
      description: "Built reusable UI components using React and integrated with REST APIs. Improved the mobile responsiveness of the site by 40%."
    }
  ],
  education: [
    {
      id: Date.now() + 2,
      degree: "Bachelor of Science",
      major: "Computer Science",
      institution: "University of California",
      location: "Los Angeles, CA",
      graduationDate: "2022-05"
    },
    {
      id: Date.now() + 3,
      degree: "High School Diploma",
      major: "Science Stream",
      institution: "St. Xavier's High School",
      location: "San Diego, CA",
      graduationDate: "2018-06"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Designed and developed a responsive personal portfolio using React, showcasing projects, blogs, and contact form integration.",
      link: "https://johndeo.dev"
    },
    {
      id: 2,
      title: "Task Manager App",
      description: "Built a full-stack task manager using MERN stack with user authentication and task tracking features.",
      link: "https://github.com/johndeo/task-manager"
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description: "Created a complete e-commerce website with cart, payment gateway, and admin dashboard using React, Redux, and Firebase.",
      link: "https://github.com/johndeo/e-commerce"
    },
    {
      id: 4,
      title: "Chat Application",
      description: "Developed a real-time chat app with Socket.IO, including private messaging, typing indicators, and multi-room support.",
      link: "https://github.com/johndeo/chat-app"
    }
  ],
  certifications: [
    {
      id: 1,
      name: "Full-Stack Web Development",
      issuer: "Coursera",
      date: "2023-04"
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022-10"
    }
  ],
  languages: [
    {
      name: "English",
      proficiency: "Native"
    },
    {
      name: "Hindi",
      proficiency: "Fluent"
    },
    {
      name: "Spanish",
      proficiency: "Intermediate"
    }
  ]
};


  const [formData, setFormData] = useState(initialFormData);


  const handleNewResume = (templateName = 'Classic') => {
    const newResume = { ...initialFormData, id: Date.now(), template: templateName };
    setResumes([...resumes, newResume]);
    setCurrentResumeId(newResume.id);
    setFormData(newResume);
    setCurrentPage("form");
  };

  const handleEditResume = (id) => {
    const resumeToEdit = resumes.find(r => r.id === id);
    if (resumeToEdit) {
      setCurrentResumeId(id);
      setFormData(resumeToEdit);
      setCurrentPage("form");
    }
  };

  const handlePreviewResume = (resumeData) => {
    setFormData(resumeData);
    setCurrentPage("preview");
  };


  const handleSaveAndToDashboard = () => {
    const updatedResumes = resumes.map(r =>
      r.id === currentResumeId ? { ...formData, lastEdited: new Date() } : r
    );
    setResumes(updatedResumes);
    setCurrentPage("dashboard");
  }
  const handleDeleteResume = (id) => {
    setResumes(resumes.filter(r => r.id !== id));
  };

  const gotoHome = () => {
    setCurrentPage("dashboard");
  }

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleAddItem = useCallback((section) => {
    setFormData((prevData) => {
      const newId = Date.now();
      let newItem;
      if (section === "experience") {
        newItem = { id: newId, title: "", company: "", location: "", startDate: "", endDate: "", description: "" };
      } else if (section === "education") {
        newItem = { id: newId, degree: "", major: "", institution: "", location: "", graduationDate: "" };
      } else if (section === "projects") {
        newItem = { id: newId, title: "", description: "", technologies: "", link: "" };
      } else if (section === "certifications") {
        newItem = { id: newId, name: "", issuer: "", date: "" };
      } else if (section === "languages") {
        newItem = { id: newId, name: "", proficiency: "" };
      }
      return {
        ...prevData,
        [section]: [...prevData[section], newItem],
      };
    });
  }, []);

  const handleItemChange = useCallback((section, id, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  }, []);

  const handleRemoveItem = useCallback((section, id) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((item) => item.id !== id),
    }));
  }, []);

  const handleSkillsChange = useCallback((e) => {
    const value = e.target.value;
    const skillArray = value.split(",").map((skill) => skill.trim()).filter(Boolean);
    setFormData((prevData) => ({
      ...prevData,
      skills: skillArray,
    }));
  }, []);




const handleDownloadPDF = async () => {
    const resumePreviewElement = document.getElementById("resume-preview");

    if (!resumePreviewElement) {
        console.error("Resume preview element not found for PDF generation.");
        alert("An error occurred while generating the PDF. The preview element is missing.");
        return;
    }
    setIsDownloading(true);

    // --- NEW: Robustly gather all CSS ---
    const getallCssText = async () => {
        let css = [];
        // 1. Iterate over all stylesheets in the document
        for (const sheet of document.styleSheets) {
            try {
                // 2. For each sheet, iterate over its rules and add to the array
                if (sheet.cssRules) {
                    for (const rule of sheet.cssRules) {
                        css.push(rule.cssText);
                    }
                }
            } catch (e) {
                // 3. Handle CORS errors for external stylesheets
                console.warn("Could not read CSS rules from stylesheet (CORS issue):", sheet.href);
                if (sheet.href) {
                    try {
                        // 4. Fetch the stylesheet content manually
                        const response = await fetch(sheet.href);
                        if (response.ok) {
                            const text = await response.text();
                            css.push(text);
                        }
                    } catch (fetchError) {
                        console.error("Failed to fetch stylesheet:", sheet.href, fetchError);
                    }
                }
            }
        }
        return css.join('\n');
    };

    const allCss = await getallCssText();
    const htmlContent = resumePreviewElement.innerHTML;

    // --- Create a self-contained HTML payload ---
    const fullHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Resume</title>
          <style>
            /* Critical CSS for page layout and to prevent overflow */
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              -webkit-print-color-adjust: exact; /* Ensures background colors print */
              print-color-adjust: exact;
            }
            /* Ensure the root preview element adheres to the A4 box model */
            #resume-preview {
              width: 210mm !important;
              min-height: 297mm !important;
              box-sizing: border-box !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: hidden !important; /* Prevents content from spilling */
            }

            /* --- Inlined all page CSS, including Tailwind --- */
            ${allCss}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;
    
    console.log("--- HTML PAYLOAD BEING SENT TO SERVER ---");
console.log(fullHTML);

    try {
        const response = await fetch("http://localhost:5000/generate-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ html: fullHTML })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${formData.name || 'resume'}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Failed to generate PDF. Please ensure the backend server is running and check the console for errors.");
    } finally {
        setIsDownloading(false);
    }
};


  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] cursor-pointer" onClick={gotoHome}>ResumeCraft</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://via.placeholder.com/40")' }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">


          {currentPage === 'dashboard' && (
            <DashboardPage
              onNewResume={handleNewResume}
              onEditResume={handleEditResume}
              onPreviewResume={handlePreviewResume}
              onDeleteResume={handleDeleteResume}
              resumes={resumes}
            />
          )}

          {currentPage === 'form' && (
            <FormPage
              formData={formData}

              onInputChange={handleInputChange}
              onItemChange={handleItemChange}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              onSkillsChange={handleSkillsChange}
              onSave={handleSaveAndToDashboard}
            />
          )}

          {currentPage === 'preview' && (
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <PreviewPage formData={formData} />
              <div className="flex px-4 py-3 justify-start">
                <button
                  onClick={() => setCurrentPage('form')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Edit Again</span>
                </button>
              </div>
              <div className="flex px-4 py-3 justify-start">
                <button
                  onClick={handleDownloadPDF}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Download PDF</span>
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;