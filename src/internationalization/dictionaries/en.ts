export const en = {
  s: {
    PERSONAL_DATA: {
      languages: {
        en: "English",
        id: "Indonesian",
        ru: "Russian",
        ja: "Japanese",
      },

      fullName: "Ryan Pratama",
      summary:
        "Experienced Software Engineer specializing in front-end development. Skilled in crafting high-quality solutions tailored to client requirements, with a commitment to staying updated on industry trends and emerging technologies.",
      softwareEngineer: "Software Engineer",
      about:
        "In my third semester at university, I joined a free programming course taught by my Indonesian friend in his apartment in Kazan, Russia. Along with other students, we learned the basics of JavaScript and eventually formed a software house startup called faoTech in 2022. As I developed my skills, I discovered a passion for front-end development and decided to specialize in this field.",
    },

    COUNTER: {
      age: "yo",
      yearsExperience: "YoE",
    },

    MENUS: {
      about: "About",
      featuredProjects: "Featured Projects",
      contacts: "Contacts",
      experience: "Experience",

      message: "Let's Connect!",
      additionalInformation: "Additional Information",

      TECH_STACKS: {
        programmingLanguages: "Programming Languages",
        librariesFrameworks: "Libraries & Frameworks",
        db: "Databases",
        learning: "I'm learning...",
      },

      OTHER: {
        education: "Education",
        languages: "Languages",
      },
    },

    SECTIONS: {
      notFound: "This page couldn't be found",
      backToHomepage: "Back to Homepage",
      present: "Present",
      resume: "Résumé",
      visitProject: "Visit Project",
    },

    LOCATIONS: {
      jakarta: "Jakarta",
      remote: "Remote",
      tokyo: "Tokyo",
      kazan: "Kazan",
      bali: "Bali",
      singapore: "Singapore",
      onsite: "On-site",
    },

    MESSAGE: {
      sent: "Message sent successfully",
      thankYou:
        "Thank you for contacting me regarding the project. I appreciate your message and will get back to you as soon as possible to discuss further details.",
      send: "Send",
      name: {
        placeholder: "Name",
        error: "Enter your name",
      },
      email: {
        placeholder: "Email",
        error: "Provide a valid email",
      },
      message: {
        placeholder: "Message",
        error: "Provide a more detailed message",
      },
    },

    CONSTANTS: {
      HISTORY: {
        kfu: {
          label: "Kazan Federal University",
          desc: "Bachelor's degree, Management",
          duty: null,
        },
        nutech: {
          label: "Nutech Integrasi",
          desc: "Front-end Engineer",
          about:
            "Part of TelkomGroup, committed to making Indonesia the leading digital innovation hub in Southeast Asia, while efficiently delivering the highest quality based on customer experience.",
          duty: [
            "Developed CEISA 4.0, a web app for the Indonesian Directorate General of Customs and Excise, impacting 5000+ users.",
            "Created 25+ document formats and implemented PDF/XLSX rendering using React-pdf, jsPDF and ExcelJS.",
            "Ensured app quality with comprehensive testing: unit, integration, and end-to-end.",
            "Implemented seamless integration of APIs using Axios.",

            "Built fully responsive user interfaces primarily with Ant Design.",
            "Collaborated with UI/UX designers to implement visually compelling and intuitive interfaces.",

            "Worked with cross-functional teams, including back-end and QA engineers.",
            "Maintained regular and effective communication with system analysts.",
            "Utilized Git and Jira for prioritizing enhancements and bug fixes.",
            "Created documentation, aiding stakeholder understanding and future maintenance.",
          ],
        },

        rave: {
          label: "Rave Tech",
          desc: "Front-end Engineer",
          duty: ["TBA"],
          about: "",
        },
        faotech: {
          label: "faoTech",
          desc: "Full-stack Engineer",
          about:
            "Indonesian-based software house company. Our unique combination of Indonesian and Russian educational backgrounds allows us to serve clients from diverse industries and locations.",
          duty: [
            "Managed a front-end team of 2 to 3 engineers across 3 projects.",
            "Built responsive web apps compatible across devices, integrating loading animations.",
            "Implemented essential authorization features like login, registration, and account recovery.",
            "Collaborated with UI/UX designers to create visually compelling user interfaces.",
            "Integrated internationalization support with i18next framework.",

            "Spearheaded back-end development, including API development, server-side logic, and database management.",
            "Proficient in CRUD operations and optimized API endpoints.",

            "Maintained comprehensive documentation to facilitate understanding with stakeholders.",
            "Provided ongoing maintenance and support for applications.",
          ],
        },
      },

      PROJECTS: {
        hebronstar:
          "A Korean consulting firm that provides global services and industries, featuring a career microsite, admin dashboard, and landing pages for advertising job openings and managing candidate applications.",
        turuntangan:
          "Indonesia's largest non-profit youth volunteer network with 100+ chapters, including an admin dashboard to manage volunteers, view and manage site content, and automate their volunteer network and operations.",
        belinsky:
          "A production house and creative studio specializing in professional photography and filmmaking, showcasing their services, creative works, and client projects to attract new clients.",
        mandiri:
          "A trading company specializing in general and chemicals trading, providing company and product information to customers in the fertilizer and chemical industries.",
        kima: "A digital platform that helps universities assess the relevance of their programs in specific fields and their alignment with the competency requirements of the job market.",
      },
    },
  },

  d: {
    updatedOn: (date: string) => `Updated on ${date}`,
  },
};
