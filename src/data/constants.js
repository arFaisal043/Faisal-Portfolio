export const SKILLS = {
  Languages: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "API Integration"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Prisma", "Mongoose"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  "CS & AI": ["DSA", "OOP", "Computer Networks", "Pandas", "NumPy", "Matplotlib"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "n8n"]
};

export const PROJECTS = [
  // Backend
  { category: "backend", title: "FixItNow — Home Service Platform", desc: "Architected a modular backend using Prisma ORM and PostgreSQL, developing 20 secure RESTful APIs for user authentication, bookings, and category management. Integrated Stripe with secure webhook processing.", tags: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Stripe"], github: "#", demo: "#", bg: "#0c2236", icon: "🛠️" },
  { category: "backend", title: "DevPulse — Team Issue Tracker", desc: "Developed a collaborative backend platform for software teams. Secured API access with JWT and RBAC. Optimized PostgreSQL schema and queries for workflows.", tags: ["Node.js", "Express", "PostgreSQL", "TypeScript"], github: "#", demo: "#", bg: "#150f2a", icon: "🐞" },
  { category: "backend", title: "Prisma Press", desc: "A modular blog backend built with Express, TypeScript, Prisma, and PostgreSQL. It provides the API needed for authentication, user profiles, blog posts, comments, and admin reporting.", tags: ["Express", "TypeScript", "Prisma", "PostgreSQL"], github: "https://github.com/arFaisal043/prisma-blog-app", demo: "#", bg: "#101d2a", icon: "📝" },
  { category: "backend", title: "Task Manager API", desc: "A simple task manager backend built with Node.js, Express, and MongoDB. It provides the API needed for authentication, task creation, task assignment, status updates, and deadline tracking.", tags: ["Node.js", "Express", "MongoDB"], github: "https://github.com/arFaisal043/Task-Manager", demo: "#", bg: "#1a1215", icon: "✅" },

  // Data Analytics
  { category: "analytics", title: "Telco Customer Churn Analysis", desc: "Analyzed customer churn data to understand why customers are leaving and what actions can reduce churn for subscription-based businesses.", tags: ["Python", "EDA", "Data Analysis"], github: "https://github.com/arFaisal043/Python_EDA_Project", demo: "#", bg: "#0d2b1d", icon: "📊" },
  { category: "analytics", title: "IPL 2022 Data Analysis", desc: "Analyzed IPL 2022 match-level data to uncover insights into team performances, player contributions, and match dynamics.", tags: ["Python", "Pandas", "Data Analysis"], github: "https://github.com/arFaisal043/Learn-Python/tree/main/Project_1(%20IPL)", demo: "#", bg: "#1c142e", icon: "🏏" },
  { category: "analytics", title: "Retail Sales Dataset Analysis", desc: "Analyzed a retail sales customer dataset focusing on customer acquisition trends, demographics, and geographic distribution.", tags: ["Python", "Data Analysis"], github: "https://github.com/arFaisal043/Learn-Python/tree/main/Project_2(%20Retail%20Sale%20)", demo: "#", bg: "#2b1414", icon: "🛍️" },

  // Database Design
  { category: "database", title: "Online Course Enrollment DB", desc: "EduEnroll DB is a PostgreSQL database project that explores SQL JOIN operations through a course enrollment system. It reveals enrollment patterns and identifies inactive students.", tags: ["SQL", "PostgreSQL", "Database"], github: "https://github.com/arFaisal043/Database-Project/blob/main/Online_Course_Enrollment_DB.sql", demo: "#", bg: "#101820", icon: "🎓" },
  { category: "database", title: "Football Ticket Booking System", desc: "A relational database project built with PostgreSQL for managing users, match fixtures, and ticket bookings with a strong emphasis on complex SQL JOIN operations.", tags: ["SQL", "PostgreSQL", "Database"], github: "https://github.com/arFaisal043/Database-Project/blob/main/Football_Ticket_Booking_System.sql", demo: "#", bg: "#102319", icon: "⚽" },

  // Android
  { category: "android", title: "অর্থখাতা (ArthoKhata)", desc: "বাংলাদেশি ছোট ব্যবসার জন্য Bengali-first Expo React Native হিসাব অ্যাপ। (A Bengali-first accounting app for small businesses in Bangladesh).", tags: ["React Native", "Expo", "Mobile"], github: "https://github.com/ash-rafhamid/ArthoKhata", demo: "#", bg: "#1f1f1f", icon: "📱" },

  // AI/ML
  { category: "ai", title: "Potato Price Prediction", desc: "A machine learning project using Artificial Neural Networks (ANN) to predict potato prices.", tags: ["Python", "ANN", "Machine Learning"], github: "https://github.com/arFaisal043/Learn-Python/tree/main/AI/ANN", demo: "#", bg: "#2b2311", icon: "🥔" },
  { category: "ai", title: "Brain Tumor MRI Classification", desc: "A deep learning project using Convolutional Neural Networks (CNN) and transfer learning to classify brain tumors from MRI scans.", tags: ["Python", "CNN", "Deep Learning"], github: "https://github.com/arFaisal043/Learn-Python/blob/main/AI/CNN/cnn-project-1%20(2).ipynb", demo: "#", bg: "#201217", icon: "🧠" },

  // AI Automation
  { category: "automation", title: "Automated Email Sender", desc: "A fully automated email sending system that leverages AI-powered personalization to send contextual, human-like emails. Built with n8n and Google Gemini AI.", tags: ["n8n", "Gemini AI", "Automation"], github: "https://github.com/arFaisal043/AI-Automation-Projects-by-n8n/tree/main/project_1_Email_sender_Automation", demo: "#", bg: "#0d2b27", icon: "✉️" },
  { category: "automation", title: "Email Auto Labeling System", desc: "An intelligent email classification system that automatically reads incoming emails and applies relevant labels using Google Gemini AI.", tags: ["n8n", "Gemini AI", "Automation"], github: "https://github.com/arFaisal043/AI-Automation-Projects-by-n8n/tree/main/project_2_Email_auto-labeling", demo: "#", bg: "#232b0d", icon: "🏷️" },
  { category: "automation", title: "Weather Alert Telegram Bot", desc: "A fully automated weather bot that sends live weather updates to Telegram every 5 minutes. No manual asking, just automatic alerts.", tags: ["n8n", "Telegram API", "Automation"], github: "https://github.com/arFaisal043/AI-Automation-Projects-by-n8n/tree/main/project_3_Weather_Alert_Bot", demo: "#", bg: "#101f2e", icon: "🌦️" },

  // CLI
  { category: "cli", title: "Employee Payroll System", desc: "An Object-Oriented Programming (OOP) project designed for learning and practicing core OOP concepts in Java through a real-world application.", tags: ["Java", "OOP", "CLI"], github: "https://github.com/arFaisal043/java-employee-payroll-system", demo: "#", bg: "#1e131d", icon: "💼" },
  { category: "cli", title: "Python File Manager CLI", desc: "A lightweight command-line file management system built with Python for efficient file operations.", tags: ["Python", "CLI"], github: "https://github.com/arFaisal043/Python-File-Manager-CLI-Tool", demo: "#", bg: "#131e1c", icon: "📁" },
  { category: "cli", title: "Library Management System", desc: "A C-based console application for managing library resources with role-based access for admins and students, using DSA concepts.", tags: ["C", "DSA", "CLI"], github: "https://github.com/arFaisal043/DSA-with-C-PlusPlus/blob/main/ds-project.c", demo: "#", bg: "#1e1613", icon: "📚" }
];

export const ACHIEVEMENTS = [
  { title: "Backend Development Course Certificate", org: "PW Skills", date: "2024", link: "https://drive.google.com/file/d/1QzxNXId13G9L2jx7ATAgPHpCtLNdfUf-/view?usp=sharing", icon: "🎓", desc: "Completed in September 2024, this certification validates proficiency in backend engineering, covering server-side development, APIs, and database integration through PW Skills' structured program." },
  { title: "Introduction to AI", org: "Google & Coursera", date: "2024", link: "https://www.coursera.org/account/accomplishments/verify/1TE1CSTLRUWR", icon: "🤖", desc: "Provides a foundational understanding of artificial intelligence, covering how AI systems are trained using data to learn patterns and make decisions." },
  { title: "PostgreSQL for Developers", org: "AWS", date: "2026", link: "https://drive.google.com/file/d/1-IvM5EBcNyft3r8XCF5s48FAQZB3rthC/view?usp=sharing", icon: "☁️", desc: "Earned in March 2026, this credential demonstrates expertise in PostgreSQL database development, query optimization, and cloud deployment within the AWS ecosystem." },
  { title: "ICPC Preliminary Contest 2024", org: "Southeast University", date: "2024", link: "https://drive.google.com/file/d/18Y_EQQDKSxts8K5GSlLgvrtHIb86vsfR/view?usp=sharing", icon: "🏆", desc: "Ranked 13th among Southeast University." },
  { title: "Python for Data Science & Machine Learning", org: "Udemy", date: "2025", link: "https://www.udemy.com/certificate/UC-e4d28a4b-3cd4-44b1-8b3c-82df1a7da55b", icon: "🐍", desc: "Verifies successful completion of the course Python for Data Science & Machine Learning: Zero to Hero." },
  { title: "Presentation & Public Speaking", org: "10 Minute School", date: "2025", link: "https://drive.google.com/file/d/1YR8iwcjrqHGvGY0RAB8HedesnB3xA0QE/view?usp=sharing", icon: "🎤", desc: "This certificate confirms Abdur Rahman Faisal's successful completion of a free online course on presentation and public speaking, covering effective communication, audience engagement, and confident delivery techniques." },
  { title: "Node.js – Build Fast and Scalable Backend", org: "Udemy", date: "2026", link: "https://www.udemy.com/certificate/UC-9df6037e-2b79-4623-b0c2-a7dca08b0f82/", icon: "⚙️", desc: "Verifies successful completion of the course Node.js – Build Fast and Scalable Backend Applications as taught by Muhammad Riaz Uddin on Udemy." },
];

export const BLOGS = [];