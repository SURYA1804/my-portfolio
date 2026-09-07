import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  year?: string;
  category?: string;
  technologies?: string[];
  features?: string[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Bus Ticket Booking System',
      description: 'A comprehensive bus ticket booking system that lets users view available seats, make reservations, and get instant confirmations. It efficiently manages bus schedules and seat bookings, providing a user-friendly interface for easy navigation. The system ensures accurate reservation handling and real-time updates, enhancing the overall booking experience.',
      image: 'assets/BusTicketProject.jpg',
      link: 'https://github.com/SURYA1804/Bus_Full_Project',
      github: 'https://github.com/SURYA1804/Bus_Full_Project',
      year: '2024',
      category: 'Full-Stack Development',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Bootstrap'],
      features: [
        'Real-time seat availability tracking',
        'Instant booking confirmation',
        'Dynamic bus schedule management',
        'User-friendly reservation interface',
        'Secure payment integration'
      ]
    },
    {
      title: 'Finance System with AI Chatbot',
      description: 'Developed a complete finance management system featuring a smart chatbot that helps users handle daily banking tasks seamlessly. The system also assists staff in managing routine work and provides managers with clear insights to monitor team and customer activities through simple, natural conversations. Additionally, it includes a customer support ticket module, where I leveraged LLMs to automate ticket prioritization and built a multi-role chatbot using LangChain to enhance support efficiency and responsiveness.',
      image: 'assets/FinanceSystem.png',
      link: 'https://financesystem-ktqj.onrender.com',
      github: 'https://github.com/SURYA1804/BankingSystem',
      year: '2025',
      category: 'AI-Powered Application',
      technologies: ['.NET Core', 'FastAPI', 'Angular', 'LangChain', 'PostgreSQL', 'LLM'],
      features: [
        'AI-powered conversational chatbot',
        'Multi-role access management',
        'Automated ticket prioritization',
        'Natural language query processing',
        'Real-time financial insights',
        'LangChain integration for context-aware responses'
      ]
    },
    {
  title: 'Smart Website Comparison Assistant',
  description: 'Built an AI-powered website comparison tool using LangChain and Streamlit. Users can upload a list of websites via Excel, which are then scraped in parallel with Playwright and embedded into ChromaDB vector stores. A two-stage Retrieval-Augmented Generation (RAG) pipeline powered by Groq Llama 3.3 delivers context-aware, hallucination-free comparisons in structured markdown tables. The system enables instant semantic analysis of multiple sites, helping users identify the best fit for their requirements with speed and clarity.',
  image: 'assets/smartwebsitecomparisonassistant.png',
  link: 'https://smartwebsitecomparisonassistant.streamlit.app/',
  github: 'https://github.com/SURYA1804/Smart_Website_Comparison_Assistant',
  year: '2026',
  category: 'AI-Powered Application',
  technologies: ['Python', 'Streamlit', 'LangChain', 'Playwright', 'ChromaDB', 'Groq Llama 3.3', 'BeautifulSoup'],
  features: [
    'Parallel website scraping with Playwright + asyncio',
    'Vector store creation using ChromaDB',
    'Two-stage RAG pipeline for accurate answers',
    'Strict context enforcement (zero hallucinations)',
    'Real-time scraping progress tracking',
    'Markdown-formatted comparison tables and recommendations'
  ]
},
{
  title: 'SmartDoc Bot - RAG-Powered Document Q&A System',
  description: 'An intelligent document chatbot powered by Retrieval-Augmented Generation (RAG), LangGraph, and Groq LLM. Upload PDFs and DOCX files, ask natural language questions, and get precise answers with source citations. SmartDoc Bot acts like a research assistant — helping students, researchers, and professionals quickly extract insights without scrolling through endless pages.',
  image: 'assets/smartdocbot.png',
  link: 'https://smartdocbot.streamlit.app',
  github: 'https://github.com/SURYA1804/RAG-Chatbot-with-LangGraph',
  year: '2026',
  category: 'AI-Powered Application',
  technologies: [
    'Python',
    'Streamlit',
    'LangChain',
    'LangGraph',
    'ChromaDB',
    'Groq LLM'
  ],
  features: [
    'Multi-format support: PDF and DOCX document processing',
    'Intelligent table extraction for structured data',
    'Conversational context with memory for follow-up questions',
    'Intent classification and query reformulation',
    'Hybrid retrieval with relevance scoring',
    'Source citations for trustworthy answers'
    ]
},

{
  title: 'ExcelLens - Excel Intelligence Platform',
  description: 'An AI-powered Excel analytics platform that transforms raw spreadsheets into a conversational data warehouse. Upload multiple .xlsx files, auto-detect shared columns, build multi-level joins, and ask plain-English questions — including natural follow-ups like "What is his department?" or "Show their mobile numbers." A 6-node LangGraph agent resolves pronouns using conversation history, filters by primary keys, executes SQL via pandas, and returns live interactive tables — handling any dataset size without context overflow. Built for analysts, researchers, and business users who want instant insights without writing a single line of SQL.',
  image: 'assets/ExcelLens.jpeg',
  link: 'https://excellens1804.streamlit.app',
  github: 'https://github.com/SURYA1804/Excel_Stats_Analyzer.git',
  year: '2026',
  category: 'AI-Powered Application',
  technologies: [
    'Python',
    'Streamlit',
    'LangGraph',
    'LangChain',
    'Groq LLM',
    'SQLite',
    'Pandas',
    'OpenPyXL'
  ],
  features: [
    'Conversational memory — resolves pronouns and back-references across turns using primary key tracking',
    'Multi-file Excel upload with auto schema detection',
    'Multi-level join builder: L2 pre-joins for indirectly connected datasets',
    'Scale-safe pipeline — pandas executes SQL, LLM never sees raw rows',
    'Structured 6-node LangGraph agent with typed state and conditional routing',
    'Dynamic result tables with real column names from SQL output',
    'LLM-generated follow-up questions per answer for guided exploration',
    'One-click Excel export with styled Results and Info sheets'
  ]
},
{
  title: 'PRflow.AI Agent - Autonomous Changelog & PR Automation for GitHub',
  description: 'A centralized GitHub App that turns every push into documentation, automatically. PRflow.AI listens for push and pull_request_review events, uses an LLM to generate a changelog entry for each commit, and maintains a single long-lived pull request per repository — reusing it across pushes, re-running with reviewer feedback when changes are requested, and opening a fresh PR on the same branch once the previous one merges. Built as a production-grade, plug-and-play DevOps utility with zero developer intervention required.',
  image: 'assets/prflow_ai.png',
  link: 'https://github.com/apps/prflow-ai-agent',
  github: 'https://github.com/SURYA1804/PR_FLOW.AI',
  year: '2026',
  category: 'AI-Powered Application',
  technologies: [
    'Python',
    'FastAPI',
    'LangGraph',
    'Groq LLM',
    'GitHub Apps API'
  ],
  features: [
    'Webhook-driven backend listening for push and pull_request_review events',
    'One persistent branch and one long-lived PR reused across pushes per repo',
    'Per-commit changelog files with automatic diff summarization via LLM',
    'Human-in-the-loop feedback: reviewer "Request changes" re-runs the agent and updates the same PR',
    'Automatic PR recycling — reopens a fresh PR on the same branch once merged',
    'Bot-loop protection via branch-name and diff-content filtering',
    'Decoupled email microservice for milestone notifications to committers',
    'Dual-provider LLM support (Groq / NVIDIA) via a single config toggle'
  ]
},
  ];

  // Calculate total unique technologies
  getTotalTechnologies(): number {
    const allTech = this.projects
      .flatMap(p => p.technologies || [])
      .filter((tech, index, self) => self.indexOf(tech) === index);
    return allTech.length;
  }

  // Open project details (can be expanded to show modal)
  openProjectDetails(project: Project): void {
    console.log('Opening details for:', project.title);
    // Implement modal or navigation logic here
  }
}
