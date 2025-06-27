const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();




const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resumes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error :', err));

app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);


app.post('/generate-pdf', async (req, res) => {
  try {
    const { html } = req.body;

   const browser = await puppeteer.launch({
  headless: 'new',
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage', 
    '--no-first-run',
    '--no-zygote',
    '--single-process', //  reduce memory usage 
    '--disable-gpu' 
  ]
});
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1080, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      width: '210mm',
      height: '297mm',
      printBackground: true,
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
    });

    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=resume.pdf'
    });
    res.send(pdfBuffer);
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).send('Something went wrong. Check server logs for details.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
