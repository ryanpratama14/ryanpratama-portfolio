import type { Dictionary } from "@/types";

export const ru: Dictionary = {
  s: {
    PERSONAL_DATA: {
      position: {
        softwareEngineerFullstack: "Software Engineer, Fullstack",
        softwareEngineerFrontend: "Software Engineer, Frontend",
      },
      fullName: "Риан Пратама",
      summary:
        "Software Engineer, специализирующийся на фронтенд-разработке. Обладаю навыками разработки высококачественных решений, адаптированных к требованиям клиентов, и стремится быть в курсе тенденций отрасли и новейших технологий.",
      softwareEngineer: "Software Engineer",
      age: "yo",
      aboutQuestion: "How did I come to software engineering?",
      about:
        "На третьем курсе университета я присоединился к бесплатному курсу программирования, который вел мой индонезийский друг в своей квартире в Казани, Россия. Вместе с другими студентами я изучил основы JavaScript, и мы в конечном итоге основали стартап-разработчика программного обеспечения под названием faoTech в 2022 году. Развивая свои навыки, я обнаружил в себе страсть к frontend-разработке и решил специализироваться в этой области.",
    },
    MENUS: {
      about: "Обо мне",
      featuredProjects: "Выделенные проекты",
      contacts: "Контакты",
      experience: "Опыт работы",
      techstacks: "Технологические стеки",
      updatedAt: "Обновлено",
      discussProject: "Обсудим ваш проект?",

      TECH_STACKS: {
        programmingLanguages: "Языки программирования",
        librariesFrameworks: "Библиотеки и фреймворки",
        db: "Базы данных",
      },
    },

    SECTIONS: {
      yearsExperience: "года опыта",
      backToHomepage: "На главную страницу",
      present: "настоящее время",
      resume: "Резюме",

      visitProject: "Посетить проект",
    },

    LOCATIONS: {
      jakarta: "Джакарта, Индонезия",
      remote: "Удалённо",
      tokyo: "Токио, Япония",
    },

    DISCUSS_YOUR_PROJECT: {
      formSent: "Заявка успешно отправлена",
      thankYou: "Спасибо за обращение по проекту. Я благодарю вас за сообщение и свяжусь с вами как можно скорее, чтобы обсудить дальнейшие детали.",
      gotIt: "Понял, спасибо!",

      submit: "Отправить",
      name: {
        error: "Введите Ваше имя",
        placeholder: "Имя",
      },
      email: {
        error: "Предоставьте действительный адрес электронной почты",
        placeholder: "Электронная почта",
      },
      projectDescription: {
        error: "Предоставьте более подробное описание проекта",
        placeholder: "О проекте",
      },
    },
  },
  d: {
    hello: (name: string) => `Hello ${name}`,
  },
};
