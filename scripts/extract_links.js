const fs = require('fs');
const path = require('path');

// We can read the PDF file and look for occurrences of "github.com" or "http"
// since a PDF contains the raw text streams where URLs are often written in cleartext, or in the /URI dictionary.
const pdfPath = path.join(__dirname, '../resume/Kartik_CV.pdf');
const data = fs.readFileSync(pdfPath);

// Let's find all instances of "/URI" or raw URLs in the PDF binary
const str = data.toString('latin1');
const urls = [];
const regex = /\/URI\s*\(([^)]+)\)/g;
let match;
while ((match = regex.exec(str)) !== null) {
  urls.push(match[1]);
}

// Also look for HTTP URLs in cleartext streams
const httpRegex = /https?:\/\/[^\s()<>]+(?:[^\s()<>{}#.,;:!?`"'])?/g;
while ((match = httpRegex.exec(str)) !== null) {
  urls.push(match[0]);
}

console.log("Extracted URLs from PDF:");
const uniqueUrls = [...new Set(urls)].filter(url => url.includes('github') || url.includes('linkedin') || url.includes('leetcode') || url.includes('vercel') || url.includes('http'));
console.log(JSON.stringify(uniqueUrls, null, 2));
