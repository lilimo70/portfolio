export const portfolio = {
  owner: "NAO FUCHIWAKI",
  role: "EC / Web / Graphic / Promotion / Direction",
  hero: {
    title: "情報を整理し、\n伝わる構成を考え、\nWebとして形にする。",
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
      id: "kiriha", number: "01", category: "Personal Project / Landing Page", title: "KIRIHA",
      subtitle: "ホームフレグランスブランド LP", statement: "抽象的なコンセプトを、情報・言葉・ビジュアル・Webへ翻訳する。",
      description: "ホームフレグランスブランドを想定した自主制作です。ブランド・商品設定、ターゲット、コンセプトから、情報設計、コピー、ビジュアル、Figma、HTML/CSS/JavaScript、レスポンシブ対応まで一貫して制作しました。",
      responsibilities: ["Personal Project", "Concept", "Information Design", "Copy", "Figma", "HTML / CSS / JavaScript"],
      image: "/assets/kiriha/hero-main.jpg", imageAlt: "KIRIHA ホームフレグランスのメインビジュアル",
      href: "https://lilimo70.github.io/kiriha_lp/", linkLabel: "制作サイトを見る",
    },
    {
      id: "hidamari", number: "02", category: "Personal Project / Website", title: "陽だまりの森保育園",
      subtitle: "保育園 採用サイト", statement: "ユーザーの目的や心理を整理し、必要な情報と行動導線へ落とし込む。",
      description: "保育園を想定した自主制作です。ユーザーの目的や心理を起点に、課題、ターゲット、情報の優先順位、ページ構成、導線、CTAを整理。安心感を伝えるビジュアルを設計し、FigmaからWeb実装まで制作しました。",
      responsibilities: ["Personal Project", "User Needs", "Information Priority", "User Flow", "Figma", "Web Implementation"],
      image: "/assets/hidamari/hero-main.png", imageAlt: "陽だまりの森保育園サイトのメインビジュアル",
      href: "https://lilimo70.github.io/hidamari-nursery-lp/", linkLabel: "制作サイトを見る",
    },
  ],
  professionalArchive: {
    number: "03", title: "Professional Works", lead: "Webに限らず、多様な媒体で目的や要望を整理し、企画から制作、公開・印刷、運用まで関わってきた実務の一部です。",
    groups: [
      {
        id: "solemo", title: "SOLEMO", label: "EC Planning / Operation / Web Production",
        description: "自社ECサイトの立ち上げ・運営に携わり、市場・競合、販売データ・需要を踏まえた企画から、商品選定、仕入れ・在庫調整、ページ構成、コピー、バナー、HTML/CSS、公開、効果測定・改善まで横断して担当。事業・ユーザー・制作・運用をつなぐ実務を経験しました。約3,000SKU規模まで成長したサイトを運営しました。",
        note: "数値は現在再検証中です。",
        images: [
          { src: "/assets/professional/solemo/gift.jpg", alt: "SOLEMO ギフト包装サービスページ" },
          { src: "/assets/professional/solemo/banner-1.jpg", alt: "SOLEMO キャンペーンバナー" },
          { src: "/assets/professional/solemo/catalog-1.jpg", alt: "SOLEMO 販促チラシ" },
        ],
        highlight: { title: "ギフト包装サービス", text: "競合調査からサービス企画、包装仕様、価格体系、ユーザー導線、ワイヤーフレーム、撮影、ページデザイン、HTML/CSS、CMS、社内外調整まで担当。サービスと購入体験を一続きで設計・制作しました。" },
      },
      {
        id: "tvk", title: "tvk", label: "Broadcast / Event Creative",
        description: "テレビ局への出向時に、チラシ、ポスター、番組バナー、Webグラフィック、背景パネル、イベント制作物、団扇、クリアファイル、クオカード、Tシャツ、番宣関連制作物を担当。Webに限定せず、目的と媒体に応じた多様なクリエイティブ制作を経験しました。",
        images: [
          { src: "/assets/professional/tvk/panel.jpg", alt: "tvk 番組・イベント制作物" },
          { src: "/assets/professional/tvk/fan.jpg", alt: "tvk イベント団扇" },
          { src: "/assets/professional/tvk/clear-file.jpg", alt: "tvk クリアファイル" },
        ],
      },
      {
        id: "printing", title: "印刷事業", label: "Design / Proposal / DTP / Print Production",
        description: "企業向けパンフレット・販促物では、営業担当からクライアントの要望を把握し、目的と掲載情報を整理。デザイン案を2〜3案制作・提案し、フィードバックを反映したブラッシュアップ、最終データ作成、入稿、印刷まで一貫して担当しました。",
        images: [
          { src: "/assets/professional/printing/custom-book-1.jpg", alt: "カスタマイズ絵本 企画資料" },
          { src: "/assets/professional/printing/custom-book-2.jpg", alt: "カスタマイズ絵本 提案資料" },
        ],
        highlight: { title: "新規事業｜カスタマイズ絵本", text: "企画・提案資料、Webサイト企画、制作ディレクション補助、外部作家との調整、印刷会社との進行・品質確認に携わりました。印刷物のデザイン実務とは分け、新規事業におけるWeb・制作支援として経験しています。" },
      },
    ],
  },
  about: {
    title: "実務の延長線上で、\nWebを設計し、形にする。",
    paragraphs: [
      "EC・Web・販促・グラフィック・印刷など複数の領域で、目的や要望の整理から、企画、構成、デザイン、制作、関係者との調整、公開・印刷、運用・改善まで幅広く経験してきました。",
      "現在はその実務を土台に、Figma、HTML/CSS/JavaScript、生成AIを活用し、情報設計、Web/UIデザイン、実装まで自分で形にする領域へ広げています。媒体が変わっても、何をどう伝えるかを考え、成果物として完成させる姿勢は一貫しています。",
    ],
  },
  expertise: [
    { title: "Information Design / Structure", detail: "実務経験を基盤に、現在広げている情報整理・優先順位・構成・導線設計" },
    { title: "Web / UI Design", detail: "実務経験をWebへ統合する、Figmaを用いた設計・デザイン" },
    { title: "Content Planning", detail: "目的・要望の整理、企画、コピー、コンテンツ構成" },
    { title: "HTML / CSS", detail: "HTML/CSSを中心としたレスポンシブなWeb制作・更新" },
    { title: "Graphic Design", detail: "紙・販促物・Webグラフィックのデザイン実務" },
    { title: "EC / Web Operation", detail: "EC企画、商品・在庫調整、公開、効果測定・改善" },
    { title: "Creative Direction / Production", detail: "提案、制作進行、社内外調整、入稿・印刷までの実務" },
    { title: "AI-assisted Workflow", detail: "生成AIを活用した情報整理・制作支援" },
  ],
  experience: [
    { name: "SOLEMO", area: "EC Planning / Production / Operation", description: "ECサイトの立ち上げ・運営、キャンペーンと商品・在庫の調整、ページ制作、ギフト包装サービスの企画から運用・改善。" },
    { name: "tvk", area: "Graphic / Broadcast / Event Creative", description: "放送・イベントに関わる紙媒体、Webグラフィック、番宣・イベント制作物など、媒体横断のクリエイティブ制作。" },
    { name: "印刷事業", area: "Design / DTP / Print / New Business", description: "企業向けパンフレット・販促物の提案、デザイン、入稿・印刷。カスタマイズ絵本の企画資料、Web企画、制作進行支援。" },
  ],
  contact: {
    title: "一緒に、\n伝わるWebをつくる。", text: "Webサイト制作、情報設計、運用・改善に関するご相談など。連絡先は現在更新準備中です。",
  },
};
