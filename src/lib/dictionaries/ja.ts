import type { Dictionary } from "@/types";

export const ja: Dictionary = {
  static: {
    PERSONAL_DATA: {
      fullName: "Ryan Pratama",
      summary:
        "フロントエンド開発を専門とする経験豊富なソフトウェア エンジニア。業界のトレンドや最新テクノロジーを常に最新の状態に保ち、クライアントの要件に合わせた高品質のソリューションを作成することに熟練しています。",
      softwareEngineer: "ソフトウェア エンジニア",
      contactMe: "Contact Me",
      learnMore: "Learn More",
      age: "歳",
      about:
        "大学の3学期目に、ロシアのカザンにあるインドネシア人の友人のアパートで行われた無料のプログラミングコースに参加しました。他の学生たちと一緒にJavaScriptの基本を学び、最終的に2022年にfaoTechというソフトウェアハウスのスタートアップを設立しました。スキルを磨くうちに、フロントエンド開発に情熱を感じ、この分野に特化することを決めました。",
    },

    NAVBAR_DATA: {
      about: "About",
      projects: "Projects",
      contacts: "Contacts",
    },

    SECTIONS: {
      backToHomepage: "ホームページに戻る",
      present: "現在",
      resume: "職務経歴書",
      aboutMe: "About Me",
      featuredProjects: "Featured Projects",
      moreContacts: "More Contacts",
      moreContactsDescription:
        "現在、新しい機会を積極的に探しており、利用可能な可能性のある潜在的な機会については喜んで聞きたいと思っています。 見込み客がいる場合、またはコラボレーションの可能性について話し合いたい場合は、お気軽にご連絡ください。",
      dicussYourProject: "Discuss Your Project",
      professionalExperience: "職歴",
      visitProject: "プロジェクト訪問",
    },

    LOCATIONS: {
      jakarta: "ジャカルタ、インドネシア",
      remote: "リモート",
      tokyo: "東京、日本",
    },

    DISCUSS_YOUR_PROJECT: {
      formSent: "帳票が正常に送信されました",
      thankYou:
        "プロジェクトに関するお問い合わせありがとうございます。メッセージをありがとうございます。できるだけ早く詳細をお話しするためにお返事いたします。",
      gotIt: "了解しました、ありがとうございます！",

      submit: "提出する",
      name: {
        error: "名前を入力してください",
        label: "名前",
        placeholder: "佐藤",
      },
      email: {
        error: "有効なメールアドレスを入力してください",
        label: "Eメール",
        placeholder: "satou@gmail.com",
      },
      projectDescription: {
        error: "プロジェクトの詳細な説明を入力してください",
        label: "プロジェクトの説明",
        placeholder: "こんにちは、プロジェクトの内容は...",
      },
    },
  },

  dynamic: {
    hello: (name: string) => `こんにちは、${name}さん`,
  },
};
