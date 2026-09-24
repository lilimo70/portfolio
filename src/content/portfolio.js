export const portfolio = {
  owner: "Naoko Fuchiwaki",
  role: "EC / Web / Graphic / Promotion / Direction",
  hero: {
    title: "伝えたいことを、わかりやすく。\n考えるところから、Webで形にするところまで。",
    introduction: "EC・Web・グラフィック・販促・印刷の実務で、企画から制作、調整、運用までを経験。現在はその延長線上で、情報設計、Web/UIデザイン、実装へ領域を広げています。",
    process: ["企画", "情報整理", "構成・デザイン", "制作・調整", "公開・改善"],
  },
  navigation: [
    { label: "Works", href: "#works" }, { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" }, { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  works: [
    {
      id: "kiriha", number: "02", category: "Personal Project / Landing Page", title: "KIRIHA",
      subtitle: "ホームフレグランスブランド LP", statement: "抽象的なコンセプトを、情報・言葉・ビジュアル・Webへ翻訳する。",
      description: "ホームフレグランスブランドを想定した自主制作です。ブランド・商品設定、ターゲット、コンセプトから、情報設計、コピー、ビジュアル、Figma、HTML/CSS/JavaScript、レスポンシブ対応まで一貫して制作しました。",
      responsibilities: ["Personal Project", "Concept", "Information Design", "Copy", "Figma", "HTML / CSS / JavaScript"],
      image: "/assets/kiriha/case-preview.png", imageAlt: "KIRIHA LPのヘッダー、メインビジュアル、ブランドストーリー冒頭",
      href: "https://lilimo70.github.io/kiriha_lp/", linkLabel: "制作サイトを見る",
    },
    {
      id: "hidamari", number: "03", category: "Personal Project / Landing Page", title: "陽だまりの森保育園",
      subtitle: "保育園 採用サイト", statement: "ユーザーの目的や心理を整理し、必要な情報と行動導線へ落とし込む。",
      description: "保育園を想定した自主制作です。ユーザーの目的や心理を起点に、課題、ターゲット、情報の優先順位、ページ構成、導線、CTAを整理。安心感を伝えるビジュアルを設計し、FigmaからWeb実装まで制作しました。",
      responsibilities: ["Personal Project", "User Needs", "Information Priority", "User Flow", "Figma", "Web Implementation"],
      image: "/assets/hidamari/case-preview.png", imageAlt: "陽だまりの森保育園サイトのヘッダーとメインビジュアル",
      href: "https://lilimo70.github.io/hidamari-nursery-lp/", linkLabel: "制作サイトを見る",
    },
  ],
  professionalArchive: {
    number: "01", title: "Professional Works", lead: "ECサイトの立ち上げ・運営、Webコンテンツ制作、印刷物の制作など、これまで実務で担当した仕事をご紹介します。",
    groups: [
      {
        id: "solemo", title: "SOLEMO", label: "EC Planning / Operation / Web Production",
        description: "自社ECサイトの立ち上げ・運営に携わり、市場・競合、販売データ・需要を踏まえた企画から、商品選定、仕入れ・在庫調整、ページ構成、コピー、バナー、HTML/CSS、公開、効果測定・改善まで横断して担当。事業・ユーザー・制作・運用をつなぐ実務を経験しました。約3,000SKU規模まで成長したサイトを運営しました。",
        projects: [
          {
            title: "ギフト包装サービス",
            src: "/assets/professional/solemo/gift.jpg",
            alt: "SOLEMO ギフト包装サービスページ",
            description: "競合調査からサービス企画、包装仕様、価格体系、ユーザー導線、ワイヤーフレーム、撮影、ページデザイン、HTML/CSS、CMS、社内外調整まで担当。サービスと購入体験を一続きで設計・制作しました。",
          },
          {
            title: "バナー制作",
            src: "/assets/professional/solemo/banner-composite.jpg",
            alt: "SOLEMO 季節の販促キャンペーンバナー3点",
            description: "季節の販促キャンペーンを企画し、掲載商品の選定からバナー制作、公開・運用まで担当しました。企画の目的や訴求内容に合わせて、各キャンペーンのビジュアルを制作しています。",
          },
          {
            title: "チラシ制作",
            src: "/assets/professional/solemo/catalog-composite.jpg",
            alt: "SOLEMO 販促チラシの表面と裏面",
            description: "人気商品と会員向けサービスを紹介する販促チラシです。商品画像、説明、価格、問い合わせ先、会員特典を一枚に整理しています。",
          },
        ],
      },
      {
        id: "tvk", title: "tvk", label: "Broadcast / Event Creative",
        description: "テレビ局への出向時に、チラシ、ポスター、番組バナー、Webグラフィック、背景パネル、イベント制作物、団扇、クリアファイル、クオカード、Tシャツ、番宣関連制作物を担当。Webに限定せず、目的と媒体に応じた多様なクリエイティブ制作を経験しました。",
        projects: [
          {
            title: "番組関連制作物 1",
            src: "/assets/professional/tvk/panel.jpg",
            alt: "tvk 番組関連制作物 1",
            description: "番組の宣伝に使用するビジュアルについて、出演者の写真をレタッチし、写真と文字のレイアウトを調整しました。",
          },
          {
            title: "イベント団扇",
            src: "/assets/professional/tvk/fan.jpg",
            alt: "tvk イベント団扇",
            description: "イベント用の団扇として制作したビジュアルです。",
          },
          {
            title: "クリアファイル",
            src: "/assets/professional/tvk/clear-file.jpg",
            alt: "tvk クリアファイル",
            description: "クリアファイル用に制作したビジュアルです。",
          },
        ],
      },
      {
        id: "printing", title: "印刷事業", label: "Design / Proposal / DTP / Print Production",
        description: "企業向けパンフレット・販促物では、営業担当からクライアントの要望を把握し、目的と掲載情報を整理。デザイン案を2〜3案制作・提案し、フィードバックを反映したブラッシュアップ、最終データ作成、入稿、印刷まで一貫して担当しました。",
        projects: [
          {
            title: "表紙・裏表紙",
            src: "/assets/professional/printing/brochure-cover-spread.jpg",
            alt: "企業案内パンフレットの裏表紙と表紙",
          },
          {
            title: "中面（見開き）",
            src: "/assets/professional/printing/brochure-inside-spread.jpg",
            alt: "企業案内パンフレットの中面見開き",
          },
        ],
        highlight: { title: "新規事業｜カスタマイズ絵本", text: "企画・提案資料、Webサイト企画、制作ディレクション補助、外部作家との調整、印刷会社との進行・品質確認に携わりました。印刷物のデザイン実務とは分け、新規事業におけるWeb・制作支援として経験しています。" },
      },
    ],
  },
  about: {
    name: "Naoko Fuchiwaki",
    role: "EC運営・Web制作・販促企画",
    overview: [
      { label: "経験", text: "ECサイトの立ち上げ・運営／販促企画／Webコンテンツ制作／グラフィック・印刷物制作" },
      { label: "制作", text: "情報整理／構成／コピー／デザイン／関係者との調整／公開・運用" },
      { label: "ツール・技術", text: "Figma／HTML／CSS／JavaScript／生成AI" },
    ],
    paragraphs: [
      "ECサイトの立ち上げから運営まで、商品をどう見せ、どう届けるかを考えながら、ページやバナー、販促物をつくってきました。テレビ局や印刷事業でも、媒体や目的に合わせた制作に携わっています。",
      "仕事で大切にしているのは、まず「誰に、何を伝えたいのか」をつかむこと。情報が多いときほど、一つずつ整理して、見る人が迷わず受け取れる形を考えます。企画だけ、制作だけで終わらず、公開後の運用まで目を向けてきました。",
      "現在は、これまでの実務経験を土台に、FigmaやHTML/CSS、JavaScriptを学びながら、自分でWebサイトを設計・制作する力を広げています。考えることと手を動かすことの両方を続けていきたいです。",
    ],
  },
  expertise: [
    { title: "Information Design / Structure", detail: "EC運営や制作の実務で、目的と読み手に合わせて情報を整理してきました。伝える内容に優先順位を付け、ページ構成や導線を考え、必要な情報に迷わずたどり着ける形を目指しています。" },
    { title: "Web / UI Design", detail: "実務で培った情報整理や制作経験を土台に、Figmaを使ってWebの画面を設計しています。見た目だけでなく、読む順番や操作の分かりやすさを考えながら、デザインを形にしています。" },
    { title: "Content Planning", detail: "商品やサービスの特徴、届けたい相手、販促の目的を踏まえて、掲載内容や見せ方を企画してきました。コピー作成からページ内の情報構成まで、伝えたいことが届く流れを考えます。" },
    { title: "HTML / CSS", detail: "HTML/CSSを使い、レスポンシブ対応を含むWebページの制作・更新に取り組んでいます。デザインを画面上で再現するだけでなく、表示幅による見え方や読みやすさも確認しながら調整します。" },
    { title: "Graphic Design", detail: "チラシやパンフレットなどの印刷物から、バナーやWeb用の画像まで制作してきました。媒体ごとの用途や掲載情報を整理し、写真・文字・レイアウトを調整して伝わる形にまとめます。" },
    { title: "EC / Web Operation", detail: "ECサイトの立ち上げから商品選定、仕入れ・在庫調整、ページ制作、公開後の運用まで幅広く担当しました。売上やユーザーの反応を見ながら、企画と制作の両面から改善を重ねてきました。" },
    { title: "Creative Direction / Production", detail: "依頼内容や目的を整理し、制作案の提案から関係者との調整、完成まで進めてきました。印刷物ではデザイン制作に加え、入稿や印刷会社とのやり取りまで担当した経験があります。" },
    { title: "AI-assisted Workflow", detail: "生成AIを、情報の整理、文章や構成の検討、制作時の確認に活用しています。出力をそのまま採用するのではなく、目的や事実に照らして見直し、自分で判断しながら制作を進めています。" },
  ],
  experience: [
    { name: "SOLEMO", area: "EC Planning / Production / Operation", description: "ECサイトの立ち上げ・運営、キャンペーンと商品・在庫の調整、ページ制作、ギフト包装サービスの企画から運用・改善。" },
    { name: "tvk", area: "Graphic / Broadcast / Event Creative", description: "放送・イベントに関わる紙媒体、Webグラフィック、番宣・イベント制作物など、媒体横断のクリエイティブ制作。" },
    { name: "印刷事業", area: "Design / DTP / Print / New Business", description: "企業向けパンフレット・販促物の提案、デザイン、入稿・印刷。カスタマイズ絵本の企画資料、Web企画、制作進行支援。" },
  ],
  contact: {
    title: "お仕事のご相談、お待ちしています。",
    text: "Web制作や情報設計、EC・販促に関するお仕事など、お気軽にご連絡ください。",
    email: "lilimo70@gmail.com",
  },
};
