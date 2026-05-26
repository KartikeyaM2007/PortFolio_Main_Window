# RAG Based SHL Assessment Recommendation Engine

### **Tech Stack**
`FastAPI Async` • `Gemini Embeddings` • `TF-IDF` • `NumPy Vectors` • `RAG` • `Python`

---

### **Key Features & Achievements**
*   **Hybrid Retrieval Pipeline**: Crafted an asynchronous high-performance RAG pipeline in Python combining semantic search (via Gemini vector embeddings and NumPy cosine similarity) with exact-match keyword indexing (via TF-IDF vocabulary metrics).
*   **Intelligent Reranking**: Boosted query relevance via contextual metadata weight boosts and dynamic LLM-driven second-pass reranking.
*   **Significant Metrics Lift**: Improved retrieval **Recall@10 from 0.373 to over 0.65+** through query expansion and semantic mapping.
*   **Lightweight Deployment**: Packaged optimized vector databases and embeddings indexes to run efficiently with under **~2MB** memory footprint.
*   **Production Robustness**: Integrated secure API key rotation mechanisms to seamlessly balance rate limits and continuous engine operation.
