export const portfolio = {
  owner: "PORTFOLIO",
  role: "Web Design / Information Design / Direction",
  hero: {
    eyebrow: "FROM INFORMATION TO EXPERIENCE",
    title: "情報を整理し、\n伝わる構成を考え、\nWebとして形にする。",
    introduction: "EC・Web・販促領域で培った企画、情報整理、構成・導線、制作、運用・改善の経験を、現在はWebデザイン・UI設計・フロントエンド制作へ発展させています。",
    process: ["企画", "情報整理", "構成・導線", "制作", "運用・改善"],
  },
  navigation: [
    { label: "Works", href: "#works" }, { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" }, { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  works: [
    {
      id: "kiriha", number: "01", category: "Independent Project / Landing Page", title: "KIRIHA",
      subtitle: "ホームフレグランスブランド LP", statement: "抽象的なコンセプトを、情報・言葉・ビジュアル・Webへ翻訳する。",
      description: "ホームフレグランスブランドを想定し、ブランド・商品設定、ターゲット、コンセプトの整理から、情報設計、コピー、ビジュアル設計、Figma、実装、レスポンシブ対応、公開まで一貫して制作しました。",
      responsibilities: ["Concept", "Information Architecture", "Copy", "Figma", "HTML / CSS / JavaScript"],
      image: "/assets/kiriha/hero-main.jpg", imageAlt: "KIRIHA ホームフレグランスのメインビジュアル",
      href: "https://lilimo70.github.io/kiriha_lp/", linkLabel: "制作サイトを見る",
    },
    {
      id: "hidamari", number: "02", category: "Independent Project / Website", title: "陽だまりの森保育園",
      subtitle: "保育園 採用サイト", statement: "ユーザーの目的や心理を整理し、必要な情報と行動導線へ落とし込む。",
      description: "想定クライアントの課題、目的、ターゲットを整理し、情報の優先順位、ページ構成、導線、CTA、安心感を伝えるビジュアルを設計。FigmaからWeb実装まで一貫して制作しました。",
      responsibilities: ["Planning", "User Flow", "Information Architecture", "Figma", "Web Implementation"],
      image: "/assets/hidamari/hero-main.png", imageAlt: "陽だまりの森保育園サイトのメインビジュアル",
      href: "https://lilimo70.github.io/hidamari-nursery-lp/", linkLabel: "制作サイトを見る",
    },
  ],
  professionalArchive: {
    number: "03", title: "Professional Works", lead: "企画から制作、運用・改善まで。実務で横断してきた仕事の一部です。",
    groups: [
      {
        id: "solemo", title: "SOLEMO", label: "EC Planning / Operation / Web Production",
        description: "自社ECサイトの立ち上げ・運営に携わり、市場・競合調査、サイト構成、キャンペーン企画、商品・在庫調整、特集ページ、バナー、コピー、HTML/CSS、撮影、効果測定・改善まで経験。約3,000SKU規模まで成長したサイトを運営しました。",
        note: "数値は現在再検証中です。",
        images: [
          { src: "/assets/professional/solemo/gift.jpg", alt: "SOLEMO ギフト包装サービスページ" },
          { src: "/assets/professional/solemo/banner-1.jpg", alt: "SOLEMO キャンペーンバナー" },
          { src: "/assets/professional/solemo/catalog-1.jpg", alt: "SOLEMO 販促チラシ" },
        ],
        highlight: { title: "ギフト包装サービス", text: "競合調査、サービス内容、包装仕様、価格体系、ユーザー導線、ワイヤーフレーム、撮影、ページデザイン、HTML/CSS、CMS、購入導線、関係者調整まで横断して担当しました。" },
      },
      {
        id: "tvk", title: "tvk", label: "Broadcast / Event Creative",
        description: "テレビ局への出向時に、チラシ、ポスター、番組バナー、Web関連グラフィック、イベント制作物、背景パネル、団扇、クリアファイル、クオカード、Tシャツなど、多様な媒体と目的に応じた制作を経験しました。",
        images: [
          { src: "/assets/professional/tvk/panel.jpg", alt: "tvk 番組・イベント制作物" },
          { src: "/assets/professional/tvk/fan.jpg", alt: "tvk イベント団扇" },
          { src: "/assets/professional/tvk/clear-file.jpg", alt: "tvk クリアファイル" },
        ],
      },
      {
        id: "printing", title: "印刷事業", label: "New Business / Print Direction",
        description: "新規事業『カスタマイズ絵本』の立ち上げに携わり、企画・提案資料、Webサイト企画、制作ディレクション補助、外部作家・印刷会社との調整、品質確認、入稿データ調整、パンフレット・販促物制作を経験しました。",
        images: [
          { src: "/assets/professional/printing/custom-book-1.jpg", alt: "カスタマイズ絵本 企画資料" },
          { src: "/assets/professional/printing/custom-book-2.jpg", alt: "カスタマイズ絵本 提案資料" },
        ],
      },
    ],
  },
  about: {
    title: "実務の延長線上で、\nWebを設計し、形にする。",
    paragraphs: [
      "EC・Web・販促領域で、企画、情報整理、構成・導線、制作、運用・改善を横断して経験してきました。",
      "現在はその経験をベースに、Figma、HTML/CSS/JavaScript、生成AIを活用しながら、Webデザイン・UI設計・実装まで一貫して取り組んでいます。過去の実務と現在のWeb制作を分けず、目的に必要な情報を整理し、伝わる体験へ落とし込むことを大切にしています。",
    ],
  },
  expertise: [
    { title: "Information Architecture", detail: "情報の整理、優先順位、構成・導線設計" },
    { title: "Web / UI Design", detail: "Figmaを用いたWeb・UI設計" },
    { title: "Content Planning", detail: "企画、コピー、コンテンツ構成" },
    { title: "HTML / CSS", detail: "レスポンシブなWeb制作・更新" },
    { title: "Creative Direction", detail: "制作進行、社内外関係者との調整" },
    { title: "EC / Web Operation", detail: "運用、効果測定、継続的な改善" },
    { title: "AI-assisted Workflow", detail: "生成AIを活用した整理・制作支援" },
  ],
  experience: [
    { name: "SOLEMO", area: "EC Site Planning / Operation", description: "ECサイトの立ち上げ・運営、キャンペーン、コンテンツ制作、ギフト包装サービスの企画・制作・運用。" },
    { name: "tvk", area: "Broadcast / Event Creative", description: "放送・イベントに関わる紙媒体、Webグラフィック、番宣・イベント制作物。" },
    { name: "印刷事業", area: "New Business / Print Direction", description: "カスタマイズ絵本の企画資料、Web企画、制作進行、印刷・販促物制作。" },
  ],
  contact: {
    title: "一緒に、\n伝わるWebをつくる。", text: "Webサイト制作、情報設計、運用・改善に関するご相談など。連絡先は現在更新準備中です。",
    status: "Contact information is being updated.",
  },
};
