import { useState } from "react";
import "./App.css";

const skills = [
  { icon: "⌘", name: "SQL", type: "Consulta" },
  { icon: "▤", name: "MySQL", type: "Banco de dados" },
  { icon: "🐍", name: "Python", type: "Linguagem" },
  { icon: "pd", name: "Pandas", type: "Análise" },
  { icon: "▥", name: "Power BI", type: "Visualização" },
  { icon: "⇢", name: "ETL", type: "Processos" },
  { icon: "⚙", name: "Automação", type: "Processos" },
];

const projects = [
  {
    id: "acidentes",
    number: "01",
    type: "Dados",
    label: "MISSÃO PRINCIPAL",
    title: "Análise de acidentes",
    description:
      "Investigar os registros, encontrar padrões e transformar uma base de acidentes em informação mais clara.",
    tools: ["MySQL", "SQL", "Power BI"],
    briefing: {
      challenge: "Investigar padrões nos registros de acidentes.",
      route: [
        "Tratar e padronizar os dados",
        "Explorar os registros com consultas MySQL",
        "Comunicar a análise por meio de visualização no Power BI",
      ],
      note: "A fonte dos dados, as métricas e as conclusões ainda não estão publicadas.",
    },
  },
  {
    id: "jogo",
    number: "02",
    type: "Desenvolvimento",
    label: "MISSÃO EXTRA",
    title: "Desvie dos obstáculos",
    description:
      "Um jogo de navegador em que reflexo e atenção ajudam a sobreviver por mais tempo.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Mariaporto29/jogo_basico",
  },
];

const filters = ["Tudo", "Dados", "Desenvolvimento"];

function IconArrow() {
  return <span aria-hidden="true">↗</span>;
}

function DataArtwork() {
  return (
    <div className="artwork artwork-data" aria-hidden="true">
      <div className="artwork-topline">
        <span>PAINEL DE ANÁLISE</span>
        <span className="artwork-live"><i /> SISTEMA ATIVO</span>
      </div>
      <div className="data-art-content">
        <div className="data-art-chart">
          <div className="chart-axis"><i /><i /><i /><i /></div>
          <div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div>
          <svg viewBox="0 0 280 100" preserveAspectRatio="none">
            <path d="M0 78 C32 68 42 76 72 52 S120 62 145 38 S190 52 218 25 S250 32 280 8" />
          </svg>
        </div>
        <div className="data-art-side"><i /><i /><i /></div>
      </div>
      <div className="artwork-caption"><span>REGISTROS</span><b>PADRONIZAÇÃO</b><span>INSIGHTS</span></div>
    </div>
  );
}

function GameArtwork() {
  return (
    <div className="artwork artwork-game" aria-hidden="true">
      <div className="game-scanline" />
      <div className="game-stars"><i /><i /><i /><i /><i /><i /></div>
      <span className="game-score">RUN // 001</span>
      <div className="game-platform" />
      <div className="game-player"><i /></div>
      <div className="game-obstacle obstacle-one" />
      <div className="game-obstacle obstacle-two" />
      <div className="game-hint">PRESS START <span>▶</span></div>
    </div>
  );
}

function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <article className={`quest-card quest-${project.id}`}>
      <div className="quest-card-head">
        <span className="quest-number">QUEST {project.number}</span>
        <span className="quest-type">{project.label}</span>
      </div>
      {project.id === "acidentes" ? <DataArtwork /> : <GameArtwork />}
      <div className="quest-card-body">
        <div className="quest-title-row">
          <h3>{project.title}</h3>
          {project.briefing && <span className="quest-pulse" title="Em desenvolvimento" />}
        </div>
        <p className="quest-description">{project.description}</p>
        <div className="quest-tools" aria-label="Tecnologias">
          {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        {project.briefing ? (
          <>
            <button
              className="quest-action quest-action-secondary"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`briefing-${project.id}`}
              onClick={onToggle}
            >
              {isOpen ? "Fechar briefing" : "Abrir briefing"}
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="quest-briefing" id={`briefing-${project.id}`}>
                <div>
                  <span className="briefing-label">OBJETIVO</span>
                  <p>{project.briefing.challenge}</p>
                </div>
                <div>
                  <span className="briefing-label">ROTA DE ANÁLISE</span>
                  <ol>
                    {project.briefing.route.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </div>
                <p className="briefing-note"><span>STATUS DA MISSÃO</span>{project.briefing.note}</p>
              </div>
            )}
          </>
        ) : (
          <a className="quest-action" href={project.link} target="_blank" rel="noreferrer">
            Acessar projeto <IconArrow />
          </a>
        )}
      </div>
    </article>
  );
}

export default function App() {
  const [filter, setFilter] = useState("Tudo");
  const [openBriefing, setOpenBriefing] = useState(null);
  const visibleProjects = projects.filter((project) => filter === "Tudo" || project.type === filter);

  return (
    <div className="game-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="starfield" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Maria Porto, início">
          <span className="brand-mark">✳</span>
          <span className="brand-name">MARIA<span>PORTO</span></span>
          <span className="brand-divider" />
          <span className="brand-caption">DATA QUEST // 01</span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#perfil">Perfil</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#missoes">Missões</a>
          <a className="nav-contact" href="#contato">Contato <IconArrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" /> PORTFÓLIO INTERATIVO <span className="eyebrow-line" /></p>
            <h1>Dados em jogo.<br /><span>Decisões em foco.</span></h1>
            <p className="hero-intro">
              Sou Maria Porto, estudante de ADS e Assistente de PCP/TI. Exploro dados,
              automatizo processos e crio rotinas ETL para transformar informação em ação.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#missoes">Iniciar jornada <span>↓</span></a>
              <a className="button-ghost" href="#perfil">Conhecer a player</a>
            </div>
            <div className="hero-footnote"><span className="footnote-icon">✧</span> ROLE: DATA EXPLORER <span className="footnote-separator">/</span> STATUS: EM EVOLUÇÃO</div>
          </div>

          <div className="player-panel">
            <div className="panel-topline"><span>PLAYER PROFILE</span><span>NO. 001</span></div>
            <div className="player-portrait-wrap">
              <div className="portrait-orbit orbit-one" />
              <div className="portrait-orbit orbit-two" />
              <div className="portrait-frame">
                <picture>
                  <source srcSet="/foto.avif" type="image/avif" />
                  <source srcSet="/foto.webp" type="image/webp" />
                  <img src="/foto.jpg" alt="Maria Porto" width="250" height="250" fetchPriority="high" />
                </picture>
                <span className="portrait-corner portrait-corner-a" />
                <span className="portrait-corner portrait-corner-b" />
              </div>
              <span className="orbit-glyph glyph-a">✦</span>
              <span className="orbit-glyph glyph-b">⌘</span>
              <span className="orbit-glyph glyph-c">✧</span>
            </div>
            <div className="player-name-row"><div><span className="micro-label">PLAYER</span><h2>Maria Porto</h2></div><span className="player-level">LVL <b>01</b></span></div>
            <div className="player-role"><span>CLASSE</span><b>Data Explorer</b><span className="role-rune">◈</span></div>
            <div className="active-quest">
              <div className="active-quest-icon">✦</div>
              <div><span>MISSÃO ATIVA</span><b>Análise de acidentes</b></div>
              <span className="quest-status">EM PROGRESSO</span>
            </div>
            <div className="panel-footer"><span>ADS STUDENT</span><i /><span>PCP / TECH</span><i /><span>DATA & ETL</span></div>
          </div>
          <a className="scroll-cue" href="#perfil"><span className="scroll-cue-line" /> DESÇA PARA EXPLORAR</a>
        </section>

        <section className="profile-section section-wrap" id="perfil">
          <div className="section-heading">
            <p className="eyebrow">01 <span className="eyebrow-line" /> SOBRE A PLAYER</p>
            <h2>Minha jornada<br /><span>até aqui.</span></h2>
          </div>
          <div className="profile-content">
            <div className="profile-story">
              <span className="story-mark">“</span>
              <p>Meu trabalho cruza PCP e TI: organizo informações, automatizo etapas e processo arquivos com Python e Pandas. Estudo SQL e Power BI para ampliar minhas análises e comunicar resultados. Quero crescer na área de dados, unindo programação e visão de negócio.</p>
              <div className="story-signature"><span /> MISSÃO: APRENDER, CONSTRUIR, EVOLUIR</div>
            </div>
            <div className="journey-map">
              <div className="journey-line" />
              <article className="journey-step">
                <span className="journey-node">01</span>
                <div><span className="micro-label">AGORA</span><h3>PCP + Tecnologia</h3><p>Análise de informações e automação de processos no dia a dia.</p></div>
              </article>
              <article className="journey-step">
                <span className="journey-node">02</span>
                <div><span className="micro-label">FORMAÇÃO</span><h3>Análise e Desenvolvimento de Sistemas</h3><p>Estudos em programação, lógica e construção de soluções.</p></div>
              </article>
              <article className="journey-step">
                <span className="journey-node">03</span>
                <div><span className="micro-label">PRÓXIMA FASE</span><h3>Mais projetos com dados</h3><p>Conectar ETL, SQL e visualização a problemas reais.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="habilidades">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">02 <span className="eyebrow-line" /> INVENTÁRIO</p>
            <h2>Habilidades <span>desbloqueadas.</span></h2>
            <p className="section-lede">Ferramentas e métodos que fazem parte da minha jornada em dados.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.name} style={{ "--card-index": index }}>
                <span className="skill-card-index">0{index + 1}</span>
                <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <span className="skill-type">{skill.type}</span>
                <span className="skill-card-glow" />
              </article>
            ))}
          </div>
        </section>

        <section className="missions-section section-wrap" id="missoes">
          <div className="missions-heading">
            <div className="section-heading">
              <p className="eyebrow">03 <span className="eyebrow-line" /> MAPA DE MISSÕES</p>
              <h2>Escolha sua <span>quest.</span></h2>
            </div>
            <div className="mission-filter" role="group" aria-label="Filtrar projetos">
              {filters.map((option) => (
                <button
                  className={filter === option ? "filter-button is-active" : "filter-button"}
                  key={option}
                  type="button"
                  aria-pressed={filter === option}
                  onClick={() => setFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="quest-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isOpen={openBriefing === project.id}
                onToggle={() => setOpenBriefing(openBriefing === project.id ? null : project.id)}
              />
            ))}
          </div>
          <div className="map-end"><span /> FIM DA ÁREA EXPLORADA <span /></div>
        </section>

        <section className="contact-section section-wrap" id="contato">
          <div className="contact-console">
            <div className="console-orbit" aria-hidden="true"><span>✳</span></div>
            <div className="contact-copy">
              <p className="eyebrow">PRÓXIMA MISSÃO</p>
              <h2>Vamos construir<br /><span>algo que importa?</span></h2>
              <p>Estou aberta a conversar sobre oportunidades em dados, automação e tecnologia.</p>
              <a className="button-primary" href="https://github.com/Mariaporto29" target="_blank" rel="noreferrer">Conectar no GitHub <IconArrow /></a>
            </div>
            <div className="console-code" aria-hidden="true"><span>01</span> SELECT <b>IDEIAS</b><br /><span>02</span> FROM <b>DESAFIOS</b><br /><span>03</span> WHERE <b>IMPACTO = TRUE</b><i>▌</i></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">✳</span><span className="brand-name">MARIA<span>PORTO</span></span></a>
        <span>FEITO COM CURIOSIDADE <b>✦</b> 2026</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </footer>
    </div>
  );
}
