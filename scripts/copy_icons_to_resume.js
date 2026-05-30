const fs = require('fs');
const path = require('path');

const cacheDir = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\650e5ab3-5abb-4b8a-bb16-13e45ab335bf";
const resumeDir = "e:\\PROJECTS\\Desk_port\\resume";

const iconFiles = {
  "fin_mon": "fin_mon.png",
  "forge_rag_ai": "forge_rag_ai.png",
  "adversarial_attacks": "adversarial_attacks.png",
  "task_manager_api": "task_manager_api.png",
  "flask_crud_api": "flask_crud_api.png",
  "multi_agent_career_rag": "multi_agent_career_rag.png",
  "ops_pilot_ai": "ops_pilot_ai.png"
};

const files = fs.readdirSync(cacheDir);

for (const [key, targetName] of Object.entries(iconFiles)) {
  const matched = files.filter(f => f.startsWith(key) && f.endsWith('.png'));
  if (matched.length > 0) {
    // Sort by name descending to get the newest one if multiple exist
    matched.sort().reverse();
    const newestFile = matched[0];
    const srcPath = path.join(cacheDir, newestFile);
    const destPath = path.join(resumeDir, targetName);
    
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${newestFile} -> ${targetName}`);
  } else {
    console.error(`Could not find cached file starting with ${key}`);
  }
}
