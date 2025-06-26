// routes/resumes.js
const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const { protect } = require('../middleware/auth');

// All these routes are protected
router.use(protect);

// @route   GET /api/resumes
// @desc    Get all resumes for the logged-in user
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id }).sort({ updatedAt: -1 });
    res.json({ success: true, data: resumes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// @route   POST /api/resumes
// @desc    Create a new resume
router.post('/', async (req, res) => {
  try {
    const resumeData = { ...req.body, user: req.user.id };
    const newResume = await Resume.create(resumeData);
    res.status(201).json({ success: true, data: newResume });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});

// @route   PUT /api/resumes/:id
// @desc    Update a resume
router.put('/:id', async (req, res) => {
    try {
        let resume = await Resume.findById(req.params.id);

        if (!resume) {
            return res.status(404).json({ success: false, message: 'Resume not found' });
        }

        // Make sure user owns the resume
        if (resume.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'Not authorized' });
        }

        const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.json({ success: true, data: updatedResume });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
});


// @route   DELETE /api/resumes/:id
// @desc    Delete a resume
router.delete('/:id', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            return res.status(404).json({ success: false, message: 'Resume not found' });
        }

        if (resume.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'Not authorized' });
        }

        await resume.deleteOne(); // Using deleteOne instead of remove

        res.json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
