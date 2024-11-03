import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shubham Naik",
  initials: "SN",
  url: "https://shubhamnaik.vercel.app/",
  location: "Bengaluru, KA",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Software Engineer. I love building things that create inmpact, I am quite active on LinkedIn so if you wanna chat, drop me a text.",
  summary:
    ` I am  a Software Development Engineer with over 3 years of experience specializing in developing machine learning systems with robust back end and optimized performance with stable 3rd party integrations.
    Skilled in Machine Learning, Generative AI, Python, Flask, REST APIs, and cloud platforms like Azure, with a strong focus on delivering scalable and innovative solutions. 
    Excellent understanding of software development of life cycle phases such as requirement gathering, analysis, designs, development, and unit testing. 
    with Knowledge of the Agile Software Development Cycle.[I have a bachelors degree in computer engineering](/#education). I have Worked on a some pretty interesting stuff both [proessionally](/#work) and [personally](/#projects) go ahead and check it out for yourself.`,
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
      `Project: ATCI Data & AI Studio \n
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
      title: "ResuMagic",
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
    {
      title: "RapidML Toolkit",
      href: "https://naikshubham14.github.io/AMLToolkit-landing/",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        `A suite of tools for rapid prototyping of machine learning applications for every step of development lifecycle.
        EDA tool helps you get the complete sense of your data, Algorithm selector tool helps you decide which algorithm is best suited for your case, 
        Hyperparameter Tuner helps you fix all the hyperparameters of the algorithm of your choice, and the performance calculator lets you assess your model on multiple matrices.`,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Streamlit",
        "Scikit-Learn",
        "XGBoost",
        "MatplotLib",
        "LightGBM"
      ],
      links: [
        {
          type: "Website",
          href: "https://naikshubham14.github.io/AMLToolkit-landing/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naikshubham14/AMLToolkit-landing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/RapidML.mp4",
    },
    {
      title: "AgriSmart",
      href: "https://agrismart.onrender.com/",
      dates: "April 2022 - Present",
      active: true,
      description: `Agrismart is a service developed for Agricultural Department of Maharashtra for a regional precision agriculture initiative. Which will enable farmers to form their farming strategy by taking informed decision by recommending which crop to grow, which fertilizer to use and also estimating the health status of crop by Machine Learning models.
      Developed by using Random Forest Classifier & XGBoost Classifier with OpenWeatherMap API and deployed using Flask. (Note: This is a replica of the actual service of the DoA)`,
      technologies: [
        "Python",
        "SCikit-Learn",
        "XGBoost",
        "SciPy",
        "Pandas",
        "Numpy",
        "Flask",
      ],
      links: [
        {
          type: "Website",
          href: "https://agrismart.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naikshubham14/AgriSmart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/AgriSmart.mp4",
    },
    {
      title: "PlaylistPilot",
      href: "https://playlistpilot.streamlit.app/",
      dates: "April 2023 - Present",
      active: true,
      description: `I have made a Spotify song recommendation engine where you can fine-tune parameters to find songs that suits your mood,
      Danceability, Energy, Tempo you name it and we got the filter for it and you can filter the results for your favorite genre.
      And you don't just get the name of the song, you get to hear a piece from it so you get to decide whether it's your jam`,
      technologies: [
        "Python",
        "SCikit-Learn",
        "KNN",
        "SciPy",
        "Pandas",
        "Numpy",
        "Streamlit",
        "Spotify API",
      ],
      links: [
        {
          type: "Website",
          href: "https://playlistpilot.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/naikshubham14/spotifySongRecommendationV2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/PlaylistPilot.mp4",
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
  ],
} as const;
