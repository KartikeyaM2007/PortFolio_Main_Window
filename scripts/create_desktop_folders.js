const fs = require('fs');
const path = require('path');

const desktopPath = path.join(__dirname, '../public/Users/Public/Desktop');

const projects = [
  {
    folderName: "Fin-Mon",
    icon: "/System/Icons/fin_mon.webp",
    githubUrl: "https://github.com/KartikeyaM2007/Fin-Mon",
    readme: `# Fin-Mon — Expense Tracker

MERN-based expense tracker with secure JWT authentication, reusable UI components, validated backend workflows, and structured error handling.

## Project Highlights
* Built a responsive MERN-based expense tracker with JWT authentication, reusable UI components, validated backend workflows, and structured error handling.
* Integrated and tested 10+ REST APIs; designed analytics dashboards using Recharts, reducing load time by 30% across 5+ expense categories.

## Technical Stack
* Frontend: React, Recharts, Styled Components
* Backend: Node.js, Express, REST APIs
* Database: MongoDB, Mongoose
* Security: JWT Authentication`
  },
  {
    folderName: "ForgeRagAI",
    icon: "/System/Icons/forge_rag_ai.webp",
    githubUrl: "https://github.com/KartikeyaM2007/ForgeRagAI",
    readme: `# ForgeRagAI — Custom RAG Pipeline

A domain-adaptable Retrieval-Augmented Generation system for intelligent document search, Q&A, and retrieval-based generation workflows.

## Project Highlights
* Developed a domain-adaptable Retrieval-Augmented Generation (RAG) system for intelligent document search, Q&A, and retrieval-based generation workflows.
* Built modular retrieval logic for custom document querying, context selection, and response generation across domain-specific data.

## Technical Stack
* Language: Python
* Core Concept: Retrieval-Augmented Generation (RAG), Hybrid Retrieval`
  },
  {
    folderName: "Adversarial Attacks",
    icon: "/System/Icons/adversarial_attacks.webp",
    githubUrl: "https://github.com/KartikeyaM2007/Adversarial_attacks",
    readme: `# Adversarial Attacks — ML Robustness Research

Adversarial attack experiments targeting machine learning models, analyzing model robustness against crafted perturbations.

## Project Highlights
* Implemented adversarial attack experiments targeting machine learning models and analyzed model robustness against crafted perturbations.
* Evaluated model behavior under adversarial inputs using Python-based experimentation, visualization, and notebook-driven analysis.

## Technical Stack
* Language: Python, Jupyter Notebook
* Core Concepts: Adversarial ML, Robustness Testing, Security Auditing`
  },
  {
    folderName: "Task Manager API",
    icon: "/System/Icons/task_manager_api.webp",
    githubUrl: "https://github.com/KartikeyaM2007/Task_manager_api",
    readme: `# Task Manager API

A robust backend REST API for task management with CRUD operations, secure user authentication, and structured API workflows.

## Project Highlights
* Created a backend REST API for task management with CRUD operations, user authentication, and structured API workflows.
* Designed reusable routes and backend logic for task creation, update, deletion, and user-specific task handling.

## Technical Stack
* Core: Node.js, JavaScript
* Architecture: REST APIs, CRUD Workflows`
  },
  {
    folderName: "Flask CRUD API Backend",
    icon: "/System/Icons/flask_crud_api.webp",
    githubUrl: "https://github.com/KartikeyaM2007/flask-crud-api",
    readme: `# Flask CRUD API Backend

A lightweight, efficient Flask REST API with endpoints for create, read, update, and delete (CRUD) operations.

## Project Highlights
* Built a Python Flask REST API with endpoints for create, read, update, and delete operations.
* Implemented backend request handling, response formatting, and API structure for lightweight CRUD-based services.

## Technical Stack
* Language: Python
* Framework: Flask
* Architecture: REST APIs, CRUD`
  },
  {
    folderName: "Multi-Agent Career RAG Platform",
    icon: "/System/Icons/multi_agent_career_rag.webp",
    githubUrl: "https://github.com/KartikeyaM2007/multi-agent-career-rag",
    readme: `# Multi-Agent Career + Codebase RAG Platform

A local-first agentic RAG system built with FastAPI and LangGraph to analyze resume PDFs, GitHub repos, README files, source code, configs, and docs.

## Project Highlights
* Engineered a local-first agentic RAG system using FastAPI, LangGraph-style orchestration, Next.js, WebSockets, and hybrid retrieval to analyze resume PDFs, GitHub repos, README files, source code, configs, and docs.
* Added multi-provider LLM routing across Ollama/Llama 3, OpenAI, and Gemini, with Builder, Critic, and Judge agents performing resume bullet generation, hallucination audits, and ATS/clarity/impact scoring.

## Technical Stack
* Backend: FastAPI, LangGraph, WebSockets
* LLMs: Ollama (Llama 3), OpenAI, Gemini
* Frontend: Next.js`
  },
  {
    folderName: "OpsPilot-AI",
    icon: "/System/Icons/ops_pilot_ai.webp",
    githubUrl: "https://github.com/KartikeyaM2007/OpsPilot-AI",
    readme: `# OpsPilot-AI — Self-Diagnosing Multimodal RAG

A self-diagnosing multimodal RAG platform that detects retrieval failures, classifies failure types, and escalates across text, tables, figures, equations, knowledge graphs, and web search.

## Project Highlights
* Building a self-diagnosing multimodal RAG platform that detects retrieval failures, classifies failure types, and escalates across text, tables, figures, equations, knowledge graph retrieval, and web search instead of blindly retrying the same RAG path.
* Designed a CrossModal Ledger and Cursor-style Debug Terminal to surface document contradictions, live pipeline logs, evidence traces, confidence signals, and agent-healing steps for auditable document reasoning.

## Technical Stack
* Orchestration: LangGraph, RAG-Anything, LightRAG, WebSockets
* Capabilities: Multimodal RAG, Self-Diagnosis, Error Escalation`
  }
];

console.log("Creating new Desktop folders and shortcut files...");

for (const proj of projects) {
  const projPath = path.join(desktopPath, proj.folderName);
  if (!fs.existsSync(projPath)) {
    fs.mkdirSync(projPath, { recursive: true });
    console.log(`Created folder: ${proj.folderName}`);
  }
  
  // Write README.md
  fs.writeFileSync(path.join(projPath, 'README.md'), proj.readme);
  
  // Write desktop.ini
  const iniContent = `[ShellClassInfo]\r\nIconFile=${proj.icon}\r\n`;
  fs.writeFileSync(path.join(projPath, 'desktop.ini'), iniContent);
  
  // Write GitHub Repository.url
  const gitUrlContent = `[InternetShortcut]\r\nBaseURL=ExternalURL\r\nComment=GitHub Repository\r\nURL=${proj.githubUrl}\r\nIconFile=/System/Icons/github.webp\r\n`;
  fs.writeFileSync(path.join(projPath, 'GitHub Repository.url'), gitUrlContent);
  
  console.log(`  Initialized ${proj.folderName} with README.md, desktop.ini, and GitHub Repository.url`);
}

console.log("Desktop folders successfully generated!");
