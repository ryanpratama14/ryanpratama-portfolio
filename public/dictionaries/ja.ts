import type { Dictionary } from "@/types";

export const ja: Dictionary = {
  s: {
    PERSONAL_DATA: {
      fullName: "ライアン・プラタマ",
      summary:
        "フロントエンド開発を専門とする経験豊富なソフトウェアエンジニア。業界のトレンドや最新テクノロジーを常に最新の状態に保ち、クライアントの要件に合わせた高品質のソリューションを作成することに熟練しています。",
      softwareEngineer: "ソフトウェアエンジニア",
      position: {
        softwareEngineerFullstack: "ソフトウェアエンジニア、フルスタック",
        softwareEngineerFrontend: "ソフトウェアエンジニア、フロントエンド",
      },
      age: "歳",
      aboutQuestion: "How did I come to software engineering?",
      about:
        "大学の3学期目に、ロシアのカザンにあるインドネシア人の友人のアパートで行われた無料のプログラミングコースに参加しました。他の学生たちと一緒にJavaScriptの基本を学び、最終的に2022年にfaoTechというソフトウェアハウスのスタートアップを設立しました。スキルを磨くうちに、フロントエンド開発に情熱を感じ、この分野に特化することを決めました。",
    },

    MENUS: {
      experience: "職歴",
      about: "私について",
      featuredProjects: "注目のプロジェクト",
      contacts: "連絡先",
      techstacks: "技術スタック",
      updatedOn: "に更新",
      message: "メッセージを送信する",

      TECH_STACKS: {
        programmingLanguages: "開発言語",
        librariesFrameworks: "フレームワーク",
        db: "データベース",
        learning: "自己学習",
      },
    },

    SECTIONS: {
      yearsExperience: "年の経験",
      backToHomepage: "ホームページに戻る",
      present: "現在",
      resume: "職務経歴書",
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
        placeholder: "名前",
      },
      email: {
        error: "有効なメールアドレスを入力してください",
        placeholder: "メール",
      },
      message: {
        error: "より詳細なメッセージを提供してください",
        placeholder: "メッセージ",
      },
    },
  },

  d: {
    hello: (name: string) => `こんにちは、${name}さん`,
  },
};
