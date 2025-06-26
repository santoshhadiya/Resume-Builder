// models/Resume.js
const mongoose = require('mongoose');

// This schema is based on your `initialFormData` from App.jsx
const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: String,
  professionalTitle: String,
  photo: String, // Base64 string
  email: String,
  phone: String,
  address: {
    city: String,
    state: String,
    pincode: String,
  },
  linkedin: String,
  portfolio: String,
  summary: String,
  template: {
    type: String,
    default: 'Classic',
  },
  skills: [{
    id: String, // Retaining ID for frontend keying, though not needed for DB
    name: String
  }],
  experience: [{
    id: String,
    title: String,
    company: String,
    companyCity: String,
    startDate: String,
    endDate: String,
    description: String,
  }],
  education: [{
    id: String,
    degree: String,
    institution: String,
    passingYear: String,
  }],
  projects: [{
    id: String,
    title: String,
    description: String,
    link: String,
  }],
  certifications: [{
    id: String,
    name: String,
    issuer: String,
    date: String
  }],
  languages: [{
    id: String,
    name: String,
    proficiency: String,
  }],
  lastEdited: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const Resume = mongoose.model('Resume', ResumeSchema);
module.exports = Resume;
