  const initialFormData = {
  id: 1,
  name: "John Doe",
  professionalTitle: "Full Stack Developer",
  photo: "", // You can later convert a base64 image and place here
  email: "john.doe@example.com",
  phone: "+1 123-456-7890",
  address: {
    city: "San Francisco",
    state: "California",
    pincode: "94105"
  },
  linkedin: "https://linkedin.com/in/johndoe",
  portfolio: "https://johndoe.dev",
  summary: "Passionate full stack developer with 5+ years of experience building scalable web applications using modern technologies like React, Node.js, and MongoDB.",
  template: "Classic",
  lastEdited: new Date().toISOString(),

  skills: [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "Node.js" },
    { id: 4, name: "Express.js" },
    { id: 5, name: "MongoDB" },
    { id: 6, name: "Git" },
  ],

  experience: [
    {
      id: 1,
      title: "Senior Developer",
      company: "Tech Solutions Inc.",
      companyCity: "San Francisco",
      startDate: "Jan 2021",
      endDate: "Present",
      description: "Lead full-stack developer working on SaaS solutions. Improved performance by 40% and mentored junior developers."
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Webify Inc.",
      companyCity: "Los Angeles",
      startDate: "Jun 2018",
      endDate: "Dec 2020",
      description: "Built and maintained responsive web applications using React and Redux. Collaborated with designers and backend teams."
    }
  ],

  education: [
    {
      id: 3,
      degree: "B.Sc. in Computer Science",
      institution: "University of California",
      passingYear: "2018"
    }
  ],

  projects: [
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my resume, skills, and past projects. Built using React and Tailwind CSS.",
      link: "https://johndoe.dev"
    },
    {
      id: 5,
      title: "Task Manager App",
      description: "A full-stack app to manage daily tasks with authentication, real-time updates, and analytics.",
      link: "https://github.com/johndoe/task-manager"
    }
  ],

  certifications: [
    {
      id: 6,
      title: "AWS Certified Developer",
      issuedBy: "Amazon Web Services",
      year: "2022"
    },
    {
      id: 7,
      title: "Full Stack Web Development",
      issuedBy: "freeCodeCamp",
      year: "2021"
    }
  ],

  languages: [
    { id: 8, name: "English", proficiency: "Fluent" },
    { id: 9, name: "Spanish", proficiency: "Intermediate" }
  ]
};