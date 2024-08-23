import { getRussianYearCounter } from "@/internationalization/helpers";
import { PERSONALS } from "@/lib/constants";
import type { Dictionary } from "@/types";

export const ru: Dictionary = {
  s: {
    PERSONAL_DATA: {
      history: {
        kfu: {
          label: "Казанский федеральный университет",
          desc: "Бакалавр, менеджмент",
        },
        nutech: {
          label: "PT Nutech Integrasi",
          desc: "Фронтенд-разработчик",
        },
        faotech: {
          label: "faoTech",
          desc: "Фулстек-разработчик",
        },
      },

      languages: {
        en: "Английский",
        id: "Индонезийский",
        ru: "Русский",
        ja: "Японский",
      },

      fullName: "Риан Пратама",
      summary:
        "Инженер-программист, специализирующийся на фронтенд-разработке. Обладаю навыками разработки высококачественных решений, адаптированных к требованиям клиентов, и стремится быть в курсе тенденций отрасли и новейших технологий.",
      softwareEngineer: "Инженер-программист",

      about:
        "На третьем курсе университета я присоединился к бесплатному курсу программирования, который вел мой индонезийский друг в своей квартире в Казани, Россия. Вместе с другими студентами я изучил основы JavaScript, и мы в конечном итоге основали стартап-разработчика программного обеспечения под названием faoTech в 2022 году. Развивая свои навыки, я обнаружил в себе страсть к фронтенд-разработке и решил специализироваться в этой области.",
    },
    MENUS: {
      additionalInformation: "Дополнительная информация",
      about: "Обо мне",
      featuredProjects: "Выделенные проекты",
      contacts: "Контакты",
      experience: "Опыт работы",
      updatedOn: "Обновлено",
      message: "Давайте свяжемся!",

      TECH_STACKS: {
        learning: "Изучаю...",
        programmingLanguages: "Языки программирования",
        librariesFrameworks: "Библиотеки и фреймворки",
        db: "Базы данных",
      },
      OTHER: {
        education: "Education",
        languages: "Языки",
      },
    },

    COUNTER: {
      age: getRussianYearCounter(PERSONALS.age),
      yearsExperience: "года опыта",
    },

    SECTIONS: {
      notFound: "Страница не найдена",

      backToHomepage: "На главную страницу",
      present: "настоящее время",
      resume: "Резюме",

      visitProject: "Посетить проект",
    },

    LOCATIONS: {
      jakarta: "Джакарта",
      remote: "Удалённо",
      tokyo: "Токио",
    },

    MESSAGE: {
      sent: "Сообщение отправлено",
      thankYou: "Спасибо за обращение по проекту. Я благодарю вас за сообщение и свяжусь с вами как можно скорее, чтобы обсудить дальнейшие детали.",
      send: "Отправить",
      name: {
        error: "Введите Ваше имя",
        placeholder: "Имя",
      },
      email: {
        error: "Предоставьте действительный адрес электронной почты",
        placeholder: "Электронная почта",
      },
      message: {
        error: "Предоставьте более подробное сообщение",
        placeholder: "Сообщение",
      },
    },
  },

  d: {
    hello: (name: string) => `Privet ${name}`,
  },
};
