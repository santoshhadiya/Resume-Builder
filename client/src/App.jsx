// App.jsx
import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { FiLogOut } from 'react-icons/fi';

const BACKEND_URI='https://resume-builder-backend-yp61.onrender.com';
/*  const BACKEND_URI ='http://localhost:5000' */

// Import Pages
import DashboardPage from "./Pages/DashboardPage";
import FormPage from "./Pages/FormPage";
import PreviewPage from "./Pages/PreviewPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import PricingPage from "./Pages/PricingPage"; // Import the new PricingPage


// --- Axios global setup ---
const setupAxios = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};


function App() {
    const [currentPage, setCurrentPage] = useState('login'); // Default to login
    const [resumes, setResumes] = useState([]);
    const [currentResumeId, setCurrentResumeId] = useState(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [user, setUser] = useState(null); // To store user info

    // --- Initial FormData Structure ---
    const initialFormData = {
        id: null, name: "", professionalTitle: "", photo: "", email: "", phone: "",
        address: { city: "", state: "", pincode: "" }, linkedin: "", portfolio: "",
        summary: "", template: 'Classic', lastEdited: null,
        skills: [{ id: Date.now(), name: "" }],
        experience: [{ id: Date.now(), title: "", company: "", companyCity: "", startDate: "", endDate: "", description: "" }],
        education: [{ id: Date.now() + 1, degree: "", institution: "", passingYear: "" }],
        projects: [{ id: Date.now() + 2, title: "", description: "", link: "" }],
        certifications: [],
        languages: [{ id: Date.now() + 3, name: "", proficiency: "Fluent" }],
    };

 const [formData, setFormData] = useState(initialFormData);

    // --- Authentication Effect ---
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setToken(storedToken);
            setupAxios(storedToken);
            setCurrentPage('dashboard');
        } else {
            setCurrentPage('login');
        }
    }, []);

    // --- Auth Handlers ---
    const handleLogin = (newToken) => {
        localStorage.setItem('authToken', newToken);
        setToken(newToken);
        setupAxios(newToken);
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setToken(null);
        setResumes([]);
        setCurrentPage('login');
        setupAxios(null); // Clear auth header
    };

    // --- Resume Handlers ---
    const fetchResumes = useCallback(async () => {
        if (!token) return;
        try {
            const res = await axios.get(`${BACKEND_URI}/api/resumes`);
            const fetchedResumes = res.data.data.map(r => ({...r, id: r._id }));
            setResumes(fetchedResumes);
        } catch (error) {
            console.error("Failed to fetch resumes", error);
            if (error.response?.status === 401) {
                handleLogout();
            }
        }
    }, [token]);

    useEffect(() => {
        if (currentPage === 'dashboard') {
            fetchResumes();
        }
    }, [currentPage, fetchResumes]);

    const handleNewResume = (templateName = 'Classic') => {
        const newResumeData = { ...initialFormData, id: null, _id: undefined, template: templateName };
        setFormData(newResumeData);
        setCurrentResumeId(null);
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
    
    const handleSaveAndToDashboard = async () => {
        try {
            let res;
            const { id, _id, ...saveData } = formData;
    
            if (currentResumeId) {
                res = await axios.put(`${BACKEND_URI}/api/resumes/${currentResumeId}`, saveData);
            } else {
                res = await axios.post(`${BACKEND_URI}/api/resumes`, saveData);
            }
    
            if (res.data.success) {
                fetchResumes();
                setCurrentPage("dashboard");
            }
        } catch (error) {
            console.error("Failed to save resume", error);
            alert("Could not save resume. Please try again.");
        }
    };
    
    const handleSaveAndPreview = async () => {
        try {
            let res;
            const { id, _id, ...saveData } = formData;
    
            if (currentResumeId) {
                res = await axios.put(`${BACKEND_URI}/api/resumes/${currentResumeId}`, saveData);
            } else {
                res = await axios.post(`${BACKEND_URI}/api/resumes`, saveData);
            }
    
            if (res.data.success) {
                const savedResume = { ...res.data.data, id: res.data.data._id };
                setFormData(savedResume);
                setCurrentResumeId(savedResume.id);
                fetchResumes();
                setCurrentPage("preview");
            }
        } catch (error) {
            console.error("Failed to save resume", error);
            alert("Could not save resume. Please try again.");
        }
    };
    
    const handleDeleteResume = async (id) => {
        if (window.confirm('Are you sure you want to delete this resume?')) {
            try {
                await axios.delete(`${BACKEND_URI}/api/resumes/${id}`);
                setResumes(resumes.filter(r => r.id !== id));
            } catch (error) {
                console.error("Failed to delete resume", error);
                alert("Could not delete resume.");
            }
        }
    };

    const handlePreviewResume = (resumeDataOrId) => {
        let resumeData = typeof resumeDataOrId === 'object' ? resumeDataOrId : resumes.find(r => r.id === resumeDataOrId);
        if (resumeData) {
            setFormData(resumeData);
            setCurrentPage("preview");
        }
    };

    const gotoHome = () => {
      if (token) setCurrentPage("dashboard");
      else setCurrentPage("login");
    }

    // --- Input and Form change handlers (No changes needed) ---
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);
    const handleAddressChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({...prevData, address: { ...prevData.address, [name]: value } }));
    }, []);
    const handlePhotoChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => { setFormData(prevData => ({ ...prevData, photo: reader.result })); };
            reader.readAsDataURL(file);
        }
    }, []);
    const handleAddItem = useCallback((section) => {
        setFormData((prevData) => {
          const newId = Date.now();
          let newItem;
          if (section === "experience") newItem = { id: newId, title: "", company: "", companyCity: "", startDate: "", endDate: "", description: "" };
          else if (section === "education") newItem = { id: newId, degree: "", institution: "", passingYear: "" };
          else if (section === "projects") newItem = { id: newId, title: "", description: "", link: "" };
          else if (section === "certifications") newItem = { id: newId, name: "", issuer: "", date: "" };
          else if (section === "languages") newItem = { id: newId, name: "", proficiency: "Fluent" };
          else if (section === "skills") newItem = { id: newId, name: "" };
          return { ...prevData, [section]: [...(prevData[section] || []), newItem] };
        });
    }, []);
    const handleItemChange = useCallback((section, id, field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [section]: prevData[section].map((item) => item.id === id ? { ...item, [field]: value } : item),
        }));
    }, []);
    const handleRemoveItem = useCallback((section, id) => {
        setFormData((prevData) => ({
          ...prevData,
          [section]: prevData[section].filter((item) => item.id !== id),
        }));
    }, []);


    // --- PDF Download Handler (FIXED) ---
    const handleDownloadPDF = async () => {
        const resumePreviewElement = document.getElementById("resume-preview");
    
        if (!resumePreviewElement) {
            console.error("Resume preview element not found for PDF generation.");
            alert("An error occurred while generating the PDF. The preview element is missing.");
            return;
        }
        setIsDownloading(true);
    
        const getallCssText = async () => {
            let css = [];
            for (const sheet of document.styleSheets) {
                try {
                    if (sheet.cssRules) {
                        for (const rule of sheet.cssRules) {
                            css.push(rule.cssText);
                        }
                    }
                } catch (e) {
                    console.warn("Could not read CSS rules from stylesheet (CORS issue):", sheet.href);
                    if (sheet.href) {
                        try {
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
    
        const fullHTML = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <title>Resume</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Cormorant+Garamond:wght@600;700&family=Inter&display=swap');
                @page {
                  size: A4;
                  margin: 0;
                }
                body {
                  margin: 0px;
                  padding: 0;
                  -webkit-print-color-adjust: exact;
                  print-color-adjust: exact;
                }
                #resume-preview {
                  width: 210mm !important;
                  min-height: 297mm !important;
                  box-sizing: border-box !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  overflow: hidden !important;
                }
                ${allCss}
              </style>
            </head>
            <body>
              <div id="resume-preview">
                ${htmlContent}
              </div>
            </body>
          </html>
        `;
    
        try {
            const response = await fetch(`${BACKEND_URI}/generate-pdf`, {
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
    

    // --- Render Logic ---
    const renderPage = () => {
        switch (currentPage) {
            case 'login':
                return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setCurrentPage('signup')} />;
            case 'signup':
                return <SignupPage onLogin={handleLogin} onSwitchToLogin={() => setCurrentPage('login')} />;
            case 'dashboard':
                return <DashboardPage
                    onNewResume={handleNewResume}
                    onEditResume={handleEditResume}
                    onPreviewResume={handlePreviewResume}
                    onDeleteResume={handleDeleteResume}
                    resumes={resumes} />;
            case 'form':
                return <FormPage
                    formData={formData}
                    onInputChange={handleInputChange} onAddressChange={handleAddressChange} onPhotoChange={handlePhotoChange}
                    onItemChange={handleItemChange} onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}
                    onSave={handleSaveAndToDashboard} onSaveAndPreview={handleSaveAndPreview} />;
            case 'preview':
                return (
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div id="resume-preview">
                          <PreviewPage formData={formData} />
                        </div>
                        <div className="flex px-4 py-3 justify-start gap-4">
                            <button onClick={() => setCurrentPage('form')} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">Edit Again</button>
                            <button onClick={handleDownloadPDF} disabled={isDownloading} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] disabled:bg-gray-400">{isDownloading ? 'Downloading...' : 'Download PDF'}</button>
                        </div>
                    </div>
                );
            case 'pricing':
                return <PricingPage />;
            default:
                return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setCurrentPage('signup')} />;
        }
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
                    <div className="flex items-center w-f gap-4 text-[#111418]">
                        <div className="size-4  w-[40px] h-[40px]">
                         {/* <img src='https://cdn-icons-png.freepik.com/256/9746/9746312.png?semt=ais_hybrid'></img> */}
                        </div>
                        <h2 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em] cursor-pointer" onClick={gotoHome}>MyResumeLab</h2>
                    </div>
                    {token && (
                         <div className="flex items-center gap-8">
                             <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
                                <button onClick={() => setCurrentPage('dashboard')} className="hover:text-blue-600">My Resumes</button>
                                 <button onClick={() => setCurrentPage('pricing')} className="hover:text-blue-600">Pricing</button>
                                <button onClick={() => handleNewResume()} className="bg-gray-300 p-2 cursor-pointer px-5  rounded-lg  cursor text-black font-bold">New Resume</button>
                                
                               
                            </nav>
                            <button onClick={handleLogout} className="text-gray-500 hover:text-black cursor-pointer">
                                <FiLogOut size={20} />
                            </button>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://via.placeholder.com/40")' }}></div>
                        </div>
                    )}
                </header>
                <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}

export default App;