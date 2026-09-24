import { useEffect, useState } from "react";
import { portfolio } from "./content/portfolio.js";

const Arrow = () => <span aria-hidden="true">↗</span>;
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ページ上部へ"><strong>{portfolio.owner}</strong><span>{portfolio.role}</span></a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button>
      <nav id="site-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="メインナビゲーション">
        {portfolio.navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
    </header>
  );
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-title"><h1>{portfolio.hero.title}</h1><p className="role-line">{portfolio.role}</p></div>
    <div className="hero-context"><p>{portfolio.hero.introduction}</p><ol className="process" aria-label="仕事のプロセス">{portfolio.hero.process.map((item) => <li key={item}>{item}</li>)}</ol></div>
  </section>;
}

function WorkCase({ work }) {
  return <article className="work-case" id={work.id}>
    <div className="case-copy"><div className="section-index"><b>{work.number}</b><span>{work.category}</span></div><div className="case-body">
      <h2>{work.title}</h2><p className="case-subtitle">{work.subtitle}</p><p className="case-statement">{work.statement}</p><p className="case-description">{work.description}</p>
      <ul className="responsibilities" aria-label="担当領域">{work.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
      <a className="text-link" href={work.href} target="_blank" rel="noreferrer">{work.linkLabel} <Arrow /></a>
    </div></div>
    <a className="case-visual" href={work.href} target="_blank" rel="noreferrer" aria-label={`${work.title}の制作サイトを見る`}><img src={assetUrl(work.image)} alt={work.imageAlt} /><span className="view-label">View Project <Arrow /></span></a>
  </article>;
}

function WorkCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const activeProject = projects[activeIndex];
  const showPrevious = () => setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  const showNext = () => setActiveIndex((activeIndex + 1) % projects.length);

  useEffect(() => {
    if (!expanded) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setExpanded(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expanded, activeIndex, projects.length]);

  return <div className="solemo-carousel">
    <div className="solemo-slide">
      <p className="solemo-slide-title">{activeProject.title}</p>
      <button className="solemo-image-button" type="button" onClick={() => setExpanded(true)} aria-label={`${activeProject.title}の画像を拡大表示`}>
        <img src={assetUrl(activeProject.src)} alt={activeProject.alt} />
      </button>
      {activeProject.description && <p className="solemo-slide-description">{activeProject.description}</p>}
    </div>
    <div className="solemo-controls">
      <button type="button" onClick={showPrevious} aria-label="前の実績を見る">←</button>
      <span aria-live="polite">{activeIndex + 1} / {projects.length}</span>
      <button type="button" onClick={showNext} aria-label="次の実績を見る">→</button>
    </div>
    {expanded && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${activeProject.title}の拡大画像`} onClick={() => setExpanded(false)}>
      <button className="lightbox-close" type="button" onClick={() => setExpanded(false)} aria-label="拡大画像を閉じる">×</button>
      <img src={assetUrl(activeProject.src)} alt={activeProject.alt} onClick={(event) => event.stopPropagation()} />
    </div>}
  </div>;
}

function ProfessionalArchive() {
  const archive = portfolio.professionalArchive;
  return <section className="archive" id="professional">
    <div className="archive-heading section-index"><b>{archive.number}</b><div><h2>{archive.title}</h2><p>{archive.lead}</p></div></div>
    <div className="archive-groups">{archive.groups.map((group, groupIndex) => <article className={`archive-group archive-group-${groupIndex + 1}`} key={group.id}>
      {group.projects ? <WorkCarousel projects={group.projects} /> : <div className="archive-images">{group.images.map((image, index) => <figure key={image.src} className={`archive-image archive-image-${index + 1}`}><img src={assetUrl(image.src)} alt={image.alt} loading="lazy" /></figure>)}</div>}
      <div className="archive-copy"><p className="archive-label">{group.label}</p><h3>{group.title}</h3><p>{group.description}</p>{group.highlight && <aside><b>{group.highlight.title}</b><p>{group.highlight.text}</p></aside>}{group.note && <small>{group.note}</small>}</div>
    </article>)}</div>
  </section>;
}

function About() {
  return <section className="about split-section" id="about"><div className="section-label"><p>About</p></div><h2>{portfolio.about.title}</h2><div className="body-copy">{portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>;
}

function Expertise() {
  return <section className="expertise" id="expertise"><div className="section-label"><p>Expertise</p></div><div className="expertise-list">{portfolio.expertise.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>;
}

function Experience() {
  return <section className="experience" id="experience"><div className="section-label"><p>Professional Experience</p></div><div className="experience-list">{portfolio.experience.map((item) => <article key={item.name}><h3>{item.name}</h3><p className="experience-area">{item.area}</p><p>{item.description}</p></article>)}</div></section>;
}

function Contact() {
  return <section className="contact" id="contact"><div className="section-label"><p>Contact</p></div><h2>{portfolio.contact.title}</h2><div><p>{portfolio.contact.text}</p><a className="contact-email" href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a></div></section>;
}

export function App() {
  return <><Header /><main><Hero /><div id="works" aria-label="Selected Works"><ProfessionalArchive />{portfolio.works.map((work) => <WorkCase work={work} key={work.id} />)}</div><About /><Expertise /><Experience /><Contact /></main><footer><a href="#top">{portfolio.owner}</a><span>© 2026</span></footer></>;
}
