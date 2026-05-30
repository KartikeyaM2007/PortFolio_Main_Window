const fs = require('fs');
const path = require('path');

async function extractLinks() {
  // Use dynamic import to load ESM pdf.mjs
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  
  const pdfPath = path.join(__dirname, '../resume/Kartik_CV.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;
  
  console.log(`Successfully loaded PDF with ${pdf.numPages} pages.`);
  const allUrls = [];
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    
    // Extract annotations (which contain links)
    const annotations = await page.getAnnotations();
    for (const annot of annotations) {
      if (annot.subtype === 'Link' && annot.url) {
        allUrls.push({
          page: i,
          url: annot.url
        });
      }
    }
  }
  
  console.log("Extracted URLs:");
  console.log(JSON.stringify(allUrls, null, 2));
}

extractLinks().catch(err => {
  console.error("Error extracting links:", err);
});
