# Multi-Agent Career + Codebase RAG Platform

A local-first agentic RAG system built with FastAPI and LangGraph to analyze resume PDFs, GitHub repos, README files, source code, configs, and docs.

## Project Highlights
* Engineered a local-first agentic RAG system using FastAPI, LangGraph-style orchestration, Next.js, WebSockets, and hybrid retrieval to analyze resume PDFs, GitHub repos, README files, source code, configs, and docs.
* Added multi-provider LLM routing across Ollama/Llama 3, OpenAI, and Gemini, with Builder, Critic, and Judge agents performing resume bullet generation, hallucination audits, and ATS/clarity/impact scoring.

## Technical Stack
* Backend: FastAPI, LangGraph, WebSockets
* LLMs: Ollama (Llama 3), OpenAI, Gemini
* Frontend: Next.js