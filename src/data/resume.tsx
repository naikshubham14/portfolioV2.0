import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubham Naik",
  initials: "SN",
  url: "https://shubhamnaik.vercel.app/",
  location: "Bengaluru, KA",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Software Engineer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "I am a Software Engineer with Primary expertise in building scalable machine learning systems Also, experienced with building full stack generative AI-based applications.[I have a bachelors degree in computer engineering](/#education) and [Worked in few of the world's largest MNCs](/#work).",
  avatarUrl: "/me.PNG",
  skills: [
    "Python",
    "Java",
    "Machine Learning",
    "Generative AI",
    "MLOps",
    "NLP",
    "SQL",
    "Flask",
    "REST",
    "Scikit-Learn",
    "Pandas",
    "Numpy",
    "LangChain",
    "Streamlit",
    "MLFlow",
    "Azure",
    "Vector DB",
    "NLTK",
    "AEM",
    "OSGi",
    "Apache Sling",
    "Junit",
    "Groovy",
    "Sighyly",
    "Git",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shubhamnaik321@gmail.com",
    tel: "+919404348469",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/naikshubham14/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubham-rajan-naik/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shubhamnaik321@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Accenture",
      href: "https://www.accenture.com/",
      badges: [],
      location: "Banglore",
      title: "Software Development Engineer",
      gpa:"",
      logoUrl: "/accenture.png",
      start: "June 2021",
      end: "Present",
      description: 
      `Project: ATCI Data & AI Studio\n
      ● Developed a procedure to transform the existing content of an enterprise-level website into an indexed
      vector database, creating a knowledge base for a RAG-enabled chatbot which served as a quick search tool
      and cut down search time for users by 15%, significantly boosting user retention.\n
      ● Designed and implemented a content approval system for a pharmaceutical client, enabling regulatory and
      legal approvers to evaluate and approve campaign content being published on the website. Reducing
      approval time per page from 4 hours to 2.5 hours which was directly responsible for the decrease in go-live
      time and marketing campaigns.\n
      ● Collaborated with over 12 projects to create standardized runbooks for the induction of generative AI tools,
      significantly enhancing work efficiency while ensuring data integrity and compliance.\n
      ● Deployed generative AI POCs in working with large language models such as Llama-2/3, Mistral and
      GPT-3.5/4 augmenting with Vector Database with frameworks like LangChain and StreamLit\n\n

      Project: Roche Diagnostics\n
      ● Developed content management system with multilingual support for drag-and-drop page authoring,
      targeting campaigns, and executing workflows with custom components for Diagnostics company.\n
      ● Analyzed and revamped the existing application to identify system bottlenecks to identify changes that
      would yield maximum improvement. This led to increased page performance and quality score
      (Lighthouse) by 135% and 30% tech debt reduction.\n
      ● Migrated rich media hosting from Dynamic Media Classic to Scene7 to enhance media processing
      capabilities, accelerated image loading, and minimized dependency on device-specific image renditions,
      resulting in a 50% drop in the size of media-heavy pages.\n
      ● Created server cleanup utility responsible for clearing servers for long dormant pages and media to save
      space and keep servers lightweight, leading to a 15% server bloat reduction.\n
      ● Created an ITSM management framework, revamping ITSM handling procedures across the project,
      resulting in a 60% drop in incident/service request response time and over 90% drop in active
      incidents/tickets.`,
    },
    {
      company: "Edurific",
      badges: [],
      href: "https://www.linkedin.com/company/edurific/",
      location: "Remote",
      title: "Machine Learning Instructor",
      gpa:"",
      logoUrl: "/edurific.png",
      start: "July 2020",
      end: "January 2021",
      description:
       `● Worked as an AI/ML Instructor and implemented end-to-end Machine Learning projects for integrating into courses.\n
        ● Libraries worked with: Scikit Learn, TensorFlow, NumPy & Pandas, Keras, Flask, Streamlit.\n
        ● Project Worked on: Time series analysis of Airways miles. Face mask detection module.\n
        ● Delivered sessions on concepts in ML application development along with programming requisites.\n
        ● Built Dialogflow Chatbot for streamlining content delivery.\n
        ● The projects created impacted over 700 students.`,
    },
  ],
  education: [
    {
      school: "K.J. Somaiya Institute of Technology",
      href: "https://kjsit.somaiya.edu.in/",
      degree: "Bachelor's Degree of Computer Engineering (BE)",
      GPA:"7.49",
      logoUrl: "/kjsit.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Rapid Data Profiler Tool",
      href: "https://dataprofilerservice.streamlit.app/",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "Understanding your data before working with it is important. This lets you do just that. Generate comprehensive report to get insights in your data without spending a ton of time writing co",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Streamlit",
        "Scikit-Learn",
      ],
      links: [
        {
          type: "Website",
          href: "https://dataprofilerservice.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naikshubham14/EDAapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/DataProfilerService.mp4",
    },
    {
      title: "Hyperparamter Tuner Tool",
      href: "https://hyperparametertuner.streamlit.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Created a tool for tunning hyper paramters of a machine learning model for rapid prototyping of classification tasks",
      technologies: [
        "Pythnon",
        "Scikit-Learn",
        "XGBoost",
        "Pandas",
        "Matplotlib",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://hyperparametertuner.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naikshubham14/HyperParameterTuner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/HyperParameterTuner.mp4",
    },
    {
      title: "Document Bot",
      href: "https://document-rag-bot.streamlit.app/",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Developed a RAG based application that lets you chat and question answer your documents.",
      technologies: [
        "OpenAI",
        "LangChain",
        "Vector DB",
        "Streamlit",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://document-rag-bot.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naikshubham14/RAG_BOT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/RAG_Bot.mp4",
    },
    {
      title: "Resumagic",
      href: "https://resumagic-bot.streamlit.app/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Developed a resume reivew service which works as a one stop shop for all thing when applying to a job including Job Fit analysis, Resume Review, Keyword analysis and Custom Cover Letter Generation",
      technologies: [
        "HuggingFace",
        "Llama",
        "Streamlit",
        "Python",
        "LangChain",
        "NLP",
      ],
      links: [
        {
          type: "Website",
          href: "https://resumagic-bot.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naikshubham14/resume_bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/resumemagic.mp4",
    },
  ],
} as const;
