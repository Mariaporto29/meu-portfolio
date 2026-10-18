import React, { useEffect, useRef, useState, Suspense } from "react";
import "./App.css";

const skills = [
  { label: "SQL", icon: "🗄️" },
  { label: "MySQL", icon: "💾" },
  { label: "Python", icon: "🐍" },
  { label: "Pandas", icon: "pd" },
  { label: "Power BI", icon: "📊" },
  { label: "ETL", icon: "🔁" },
  { label: "Automação de processos", icon: "⚙" },
];

const projects = [
  {
    num: "CASE 01",
    title: "Análise de Acidentes",
    desc: "Estudo de dados de acidentes com foco em organizar os registros e investigar padrões que ajudem a compreender as ocorrências.",
    stack: "MySQL · SQL · Power BI · Tratamento de dados",
    status: "Em desenvolvimento",
    objective: "Investigar padrões nos registros de acidentes.",
    steps: ["Tratamento e padronização dos dados", "Consultas e análise em MySQL", "Visualização dos resultados no Power BI"],
    statusNote: "A fonte dos dados, as métricas e as conclusões ainda não estão disponíveis nesta apresentação.",
  },
  {
    num: "CASE 02",
    title: "Jogo de desviar de obstáculos",
    desc: "Projeto complementar de front-end: controle o personagem e desvie dos obstáculos pelo maior tempo possível.",
    stack: "HTML · CSS · JavaScript",
    link: "https://github.com/Mariaporto29/jogo_basico",
  },
];
const globalAnimations = `
@keyframes pixelBurst {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.4) rotate(0deg);
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(var(--move-x), var(--move-y)) scale(1.15) rotate(140deg);
  }
}

@keyframes codeFloat {
  0% { transform: translateY(100%); opacity: 0 }
  8% { opacity: 1 }
  60% { opacity: 0.08 }
  100% { transform: translateY(-140%); opacity: 0 }
}
`;

const MiniGame = React.lazy(() => import("./components/MiniGame"));
const CodeBackground = React.lazy(() => import("./components/CodeBackground"));

export default function App() {
  const dotRef = useRef(null);
  const [nameHovered, setNameHovered] = useState(false);
  const [activeButton, setActiveButton] = useState("projetos");

const NameParticles = React.lazy(() => import("./components/NameParticles"));

  useEffect(() => {
    const interval = setInterval(() => {
      if (dotRef.current) {
        dotRef.current.style.opacity =
          dotRef.current.style.opacity === "0.25" ? "1" : "0.25";
        dotRef.current.style.transform =
          dotRef.current.style.transform === "scale(0.9)"
            ? "scale(1.15)"
            : "scale(0.9)";
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="portfolio-page" style={styles.page}>
    <style>{globalAnimations}</style>
    <div style={styles.bgGrid} />
    <div style={styles.bgGlowOne} />
    <div style={styles.bgGlowTwo} />
    <div style={styles.halftoneTop} />
    <div className="decoration-vertical-right" aria-hidden="true" style={styles.verticalTextRight}>データ</div>
    <div className="decoration-vertical-left" aria-hidden="true" style={styles.verticalTextLeft}>分析</div>

    <main className="portfolio-main" style={styles.container}>
      <section className="portfolio-hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badgeRow}>
            <span style={styles.badgeLine} />
            <span style={styles.badge}>PORTFÓLIO PROFISSIONAL</span>
          </div>

          <p style={styles.mangaMini}>
            ANÁLISE DE DADOS / AUTOMAÇÃO / ETL
          </p>

          <div
  style={styles.titleWrap}
  onMouseEnter={() => setNameHovered(true)}
  onMouseLeave={() => setNameHovered(false)}
>
    <h1 style={styles.title}>
    Maria
    <span style={styles.titleAccent}> Paula</span>
  </h1>

  {nameHovered && (
    <Suspense fallback={null}>
      <NameParticles />
    </Suspense>
  )}
</div>

          <p style={styles.role}>Análise de dados · SQL · Power BI · Python</p>

          <p style={styles.description}>
            Sou estudante de ADS e Assistente de PCP/TI. Atuo com automação e
            análise de dados, criando rotinas ETL para transformar arquivos em
            informações úteis à tomada de decisão.
          </p>

          <div style={styles.buttonGroup}>
            <a
  href="#projetos"
  style={
    activeButton === "projetos"
      ? styles.primaryButton
      : styles.secondaryButton
  }
  onClick={() => setActiveButton("projetos")}
>
  Ver projetos
</a>

            <a
  href="#contato"
  style={
    activeButton === "contato"
      ? styles.primaryButton
      : styles.secondaryButton
  }
  onClick={() => setActiveButton("contato")}
>
  Contato
</a>
          </div>

          <div style={styles.heroInfoGrid}>
            <InfoBox label="FOCO" value="Análise + automação" />
            <InfoBox label="FORMAÇÃO" value="Estudante de ADS" />
            <InfoBox label="ATUAÇÃO" value="Assistente de PCP/TI" />
          </div>
        </div>

        <aside style={styles.statusCard}>
          <div style={styles.statusTopBar} />

          <div style={styles.avatarBox}>
            <div
              style={styles.avatarCircleOuter}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(58,123,213,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(58,123,213,0.28)";
              }}
            >
              <picture>
                <source srcSet="/foto.avif" type="image/avif" />
                <source srcSet="/foto.webp" type="image/webp" />
                <img
                  src="/foto.jpg"
                  alt="Maria Porto"
                  width="80"
                  height="80"
                  loading="eager"
                  fetchPriority="high"
                  style={styles.profileImg}
                />
              </picture>
            </div>

            <div style={styles.avatarTag}>PERFIL PROFISSIONAL</div>
          </div>

          <div style={styles.statusList}>
            <StatusRow label="Nome" value="Maria Porto" />
            <StatusRow label="Atuação" value="PCP e Tecnologia da Informação" />
            <StatusRow label="Ferramentas" value="SQL · Python · Pandas · Power BI" />
            <StatusRow label="Interesse" value="Automação e análise de dados" />

            <div style={styles.statusRow}>
              <span style={styles.statusLabel}>Modo</span>
              <div style={styles.statusValueInline}>
                <span ref={dotRef} style={styles.statusDot} />
                Aprendizado contínuo
              </div>
            </div>
          </div>

          <div style={styles.quoteBox}>
            <span style={styles.quoteLabel}>MEU FOCO</span>
            <p style={styles.quoteText}>
              “Organizar dados é o primeiro passo para usá-los melhor.”
            </p>
          </div>
        </aside>
      </section>

      <Divider />

      <section id="sobre">
        <SectionHeader tag="Perfil" title="Sobre mim" />
        <div style={styles.aboutCard}>
          <div style={styles.aboutStripe} />
          <p style={styles.aboutText}>
            Meu trabalho cruza PCP e TI: organizo informações, automatizo etapas e processo arquivos com Python e Pandas. Tenho estudado SQL e Power BI para ampliar minhas análises e comunicar resultados. Quero crescer na área de dados, unindo programação e visão de negócio.
          </p>
        </div>
      </section>

      <Divider />

      <section>
  <SectionHeader tag="Ferramentas" title="Competências" />
  <div style={styles.skillsIconsWrap}>
    {skills.map((skill) => (
      <div
        key={skill}
        style={styles.skillIconCard}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
          e.currentTarget.style.border = "1px solid rgba(78, 168, 255, 0.55)";
          e.currentTarget.style.boxShadow = "0 12px 28px rgba(78, 168, 255, 0.22)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.border = "1px solid rgba(78, 168, 255, 0.22)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
        }}
      >
        <div style={styles.skillEmoji} aria-hidden="true">{skill.icon}</div>
        <span style={styles.skillIconText}>{skill.label}</span>
      </div>
    ))}
  </div>
</section>

      <Divider />

      <section id="projetos">
        <SectionHeader tag="Em destaque" title="Projetos" />
        <div className="portfolio-projects" style={styles.projectsGrid}>
          {projects.map((project) => (
            <article
  key={project.num}
  style={styles.projectCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 20px 40px rgba(62,140,222,0.22)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
              <div style={styles.projectGlow} />
              {project.num === "CASE 01" && (
                <Suspense fallback={null}>
                  <CodeBackground />
                </Suspense>
              )}
              {project.num === "CASE 02" && (
                <Suspense fallback={null}>
                  <MiniGame />
                </Suspense>
              )}
              <div style={styles.projectBar} />
              <span style={styles.projectNum}>{project.num}</span>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.desc}</p>

              {project.objective && (
                <div style={styles.caseStudy}>
                  <div>
                    <span style={styles.projectMetaLabel}>OBJETIVO</span>
                    <p style={styles.projectStack}>{project.objective}</p>
                  </div>
                  <div>
                    <span style={styles.projectMetaLabel}>ETAPAS</span>
                    <ul style={styles.projectSteps}>
                      {project.steps.map((step) => <li key={step}>{step}</li>)}
                    </ul>
                  </div>
                  <p style={styles.projectSubtext}>{project.statusNote}</p>
                </div>
              )}

              <div style={styles.projectMeta}>
                <span style={styles.projectMetaLabel}>STACK</span>
                <p style={styles.projectStack}>{project.stack}</p>
              </div>

              {project.link ? (
  <a
  href={project.link}
  target="_blank"
  rel="noreferrer"
  style={styles.projectButton}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow =
      "0 12px 30px rgba(62,140,222,0.28)";
    e.currentTarget.style.background =
      "linear-gradient(90deg, #4ea8ff, #7de0ff)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow =
      "0 8px 25px rgba(62,140,222,0.22)";
    e.currentTarget.style.background =
      "linear-gradient(90deg, #2f8fff, #5ec8ff)";
  }}
>
  Ver código no GitHub
</a>
) : (
  <p style={styles.projectStatus}>{project.status}</p>
)}
            </article>
          ))}
        </div>
      </section>

      <Divider />

      <section id="contato" style={{ paddingBottom: "90px" }}>
        <SectionHeader tag="Vamos conversar" title="Contato" />
        <p style={styles.contactIntro}>Estou aberta a conversar sobre oportunidades em dados, automação e tecnologia.</p>
        <div className="portfolio-contact" style={styles.contactBox}>
          <a
  href="https://github.com/Mariaporto29"
  target="_blank"
  rel="noreferrer"
  style={styles.contactButton}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.background = "rgba(78,168,255,0.16)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.background = "rgba(78,168,255,0.08)";
  }}
>
  GitHub
</a>

        </div>
      </section>
    </main>
  </div>
);
}

function SectionHeader({ tag, title }) {
  return (
    <div style={styles.sectionHeader}>
      <p style={styles.sectionTag}>{tag}</p>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionLine} />
    </div>
  );
}

function Divider() {
  return (
    <div style={styles.divider}>
      <div style={styles.dividerLine} />
      <span style={styles.dividerText}>◆ ◆ ◆</span>
      <div style={styles.dividerLine} />
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div style={styles.infoBox}>
      <span style={styles.infoLabel}>{label}</span>
      <p style={styles.infoValue}>{value}</p>
    </div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div style={styles.statusRow}>
      <span style={styles.statusLabel}>{label}</span>
      <div style={styles.statusValueInline}>{value}</div>
    </div>
  );
}

  
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #001226 0%, #04213a 35%, #031526 100%)",
    color: "#eaf6ff",
    fontFamily: "'Rajdhani', 'Noto Sans JP', Arial, sans-serif",
    position: "relative",
    overflowX: "hidden",
    
  },

particlesLayer: {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  overflow: "visible",
},

nameParticle: {
  position: "absolute",
  display: "block",
  background: "linear-gradient(135deg, #60a5ff, #7ce0ff)",
  boxShadow: "0 0 12px rgba(96,165,255,0.45)",
  opacity: 0,
  animationName: "pixelBurst",
  animationTimingFunction: "ease-out",
  animationFillMode: "forwards",
},

  titleWrap: {  
    position: "relative",
    display: "inline-block",
    cursor: "default",
  },

  titleWrap: {
  position: "relative",
  display: "inline-block",
  cursor: "default",
},

particlesLayer: {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  overflow: "visible",
},

nameParticle: {
  position: "absolute",
  display: "block",
  background: "linear-gradient(135deg, #60a5ff, #7ce0ff)",
  boxShadow: "0 0 12px rgba(96,165,255,0.45)",
  opacity: 0,
  animationName: "pixelBurst",
  animationTimingFunction: "ease-out",
  animationFillMode: "forwards",
},

title: {
  fontSize: "clamp(52px, 9vw, 92px)",
  lineHeight: 0.95,
  margin: 0,
  color: "#ffffff",
  textShadow: "0 0 30px rgba(58,123,213,0.22)",
  fontWeight: 700,
  transition: "0.25s ease",
},

  container: {
    maxWidth: "1150px",
    margin: "0 auto",
    padding: "0 22px",
    position: "relative",
    zIndex: 2,
  },

  bgGrid: {
    position: "fixed",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "42px 42px",
    opacity: 0.18,
    pointerEvents: "none",
    zIndex: 0,
  },

  bgGlowOne: {
    position: "fixed",
    top: "-140px",
    left: "-120px",
    width: "420px",
    height: "420px",
    background:
      "radial-gradient(circle, rgba(45,140,255,0.26), transparent 70%)",
    filter: "blur(20px)",
    pointerEvents: "none",
    zIndex: 0,
  },

  bgGlowTwo: {
    position: "fixed",
    bottom: "-140px",
    right: "-90px",
    width: "420px",
    height: "420px",
    background:
      "radial-gradient(circle, rgba(74,200,255,0.18), transparent 70%)",
    filter: "blur(20px)",
    pointerEvents: "none",
    zIndex: 0,
  },

  halftoneTop: {
    position: "fixed",
    top: "0",
    right: "0",
    width: "340px",
    height: "240px",
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
    backgroundSize: "10px 10px",
    opacity: 0.15,
    transform: "skewX(-18deg)",
    pointerEvents: "none",
    zIndex: 0,
  },

  verticalTextRight: {
    position: "fixed",
    right: "-8px",
    top: "20%",
    writingMode: "vertical-rl",
    fontSize: "140px",
    fontWeight: 700,
    color: "rgba(80,160,255,0.045)",
    userSelect: "none",
    pointerEvents: "none",
    zIndex: 0,
    letterSpacing: "4px",
  },

  verticalTextLeft: {
    position: "fixed",
    left: "-14px",
    bottom: "10%",
    writingMode: "vertical-rl",
    fontSize: "110px",
    fontWeight: 700,
    color: "rgba(100,190,240,0.04)",
    userSelect: "none",
    pointerEvents: "none",
    zIndex: 0,
    letterSpacing: "4px",
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "30px",
    padding: "72px 0 40px",
    alignItems: "start",
  },

  heroContent: {
    position: "relative",
  },

  badgeRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "18px",
  },

  badgeLine: {
    width: "26px",
    height: "2px",
    background: "linear-gradient(90deg, #4ea8ff, #5de0ff)",
  },

  badge: {
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#8fd8ff",
    fontWeight: 700,
  },

  mangaMini: {
    margin: "0 0 14px",
    fontSize: "12px",
    letterSpacing: "3px",
    color: "#7ed8ff",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "clamp(52px, 9vw, 92px)",
    lineHeight: 0.95,
    margin: 0,
    color: "#ffffff",
    textShadow: "0 0 30px rgba(58,123,213,0.22)",
    fontWeight: 700,
    transition: "0.25s ease",

  },

  titleAccent: {
    color: "#7ecbff",
    fontStyle: "italic",
  },

  role: {
    margin: "18px 0 14px",
    fontSize: "15px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#7dd3ff",
  },

  description: {
    margin: 0,
    maxWidth: "640px",
    fontSize: "17px",
    lineHeight: 1.85,
    color: "#cfeefc",
    fontFamily: "Arial, sans-serif",
  },

  buttonGroup: {
    display: "flex",
    gap: "14px",
    marginTop: "28px",
    flexWrap: "wrap",
  },

  primaryButton: {
    textDecoration: "none",
    color: "#fff",
    padding: "14px 24px",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    background: "linear-gradient(90deg, #2f8fff, #5ec8ff)",
    border: "1px solid rgba(234,246,255,0.06)",
    clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
    boxShadow: "0 8px 30px rgba(62,140,222,0.22)",
    transition: "0.3s ease",
    transform: "scale(1.03)",
  },

  secondaryButton: {
  textDecoration: "none",
  color: "#bfe9ff",
  padding: "14px 24px",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  background: "rgba(70,140,255,0.06)",
  border: "1px solid rgba(78,168,255,0.18)",
  clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
  backdropFilter: "blur(6px)",
  transition: "0.3s ease",
},

  heroInfoGrid: {
    marginTop: "34px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "14px",
    maxWidth: "720px",
  },

  infoBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(78,168,255,0.12)",
    padding: "16px",
    position: "relative",
    overflow: "hidden",
  },

  infoLabel: {
    display: "block",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#7ed8ff",
    fontWeight: 700,
    marginBottom: "8px",
  },

  infoValue: {
    margin: 0,
    fontSize: "16px",
    color: "#f3eeff",
  },

  statusCard: {
    position: "relative",
    border: "1px solid rgba(78,168,255,0.12)",
    background:
      "linear-gradient(180deg, rgba(21,12,33,0.9), rgba(10,8,18,0.95))",
    padding: "22px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.28)",
    overflow: "hidden",
  },

  statusTopBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #4ea8ff, #5de0ff)",
  },

  avatarBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "18px",
  },

  avatarCircleOuter: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    padding: "3px",
    background: "linear-gradient(135deg, #3aa0ff, #7de0ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 30px rgba(58,123,213,0.22)",
    overflow: "hidden",
  },

  profileImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
  },

  avatarTag: {
    marginTop: "12px",
    fontSize: "10px",
    color: "#8fd8ff",
    letterSpacing: "3px",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  statusList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  statusRow: {
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    paddingBottom: "10px",
  },

  statusLabel: {
    display: "block",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#7ed8ff",
    fontWeight: 700,
    marginBottom: "5px",
  },

  statusValueInline: {
    color: "#ddd3ee",
    fontSize: "14px",
    lineHeight: 1.5,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "Arial, sans-serif",
  },

  statusDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#51ff93",
    opacity: 1,
    transform: "scale(1)",
    transition: "all 0.3s ease",
    boxShadow: "0 0 12px rgba(81,255,147,0.6)",
  },

  quoteBox: {
    marginTop: "18px",
    padding: "16px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  quoteLabel: {
    display: "block",
    marginBottom: "8px",
    fontSize: "10px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#8fd8ff",
    fontWeight: 700,
  },

  quoteText: {
    margin: 0,
    color: "#f1eaff",
    fontSize: "15px",
    lineHeight: 1.7,
    fontStyle: "italic",
  },

  sectionHeader: {
    textAlign: "center",
    margin: "62px 0 28px",
  },

  sectionTag: {
    margin: 0,
    fontSize: "11px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#8fd8ff",
    fontWeight: 700,
  },

  sectionTitle: {
    margin: "10px 0 0",
    fontSize: "clamp(34px, 5vw, 46px)",
    color: "#fff",
    fontWeight: 700,
    letterSpacing: "-1px",
  },

  sectionLine: {
    width: "72px",
    height: "2px",
    margin: "14px auto 0",
    background: "linear-gradient(90deg, #4ea8ff, #7de0ff)",
  },

  aboutCard: {
    maxWidth: "860px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(78,168,255,0.12)",
    padding: "26px 28px",
    position: "relative",
    overflow: "hidden",
  },

  aboutStripe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "6px",
    height: "100%",
    background: "linear-gradient(180deg, #4ea8ff, #7de0ff)",
  },

  aboutText: {
    margin: 0,
    fontSize: "18px",
    lineHeight: 1.9,
    color: "#d4cae7",
    fontFamily: "Arial, sans-serif",
  },

  skillsWrap: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  skillTag: {
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#d0c4e7",
    border: "1px solid rgba(78,168,255,0.18)",
    background: "rgba(70,140,255,0.04)",
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
  },

  skillHighlight: {
    color: "#f0dbff",
    background:
      "linear-gradient(90deg, rgba(78,168,255,0.22), rgba(125,210,255,0.14))",
    border: "1px solid rgba(120,190,255,0.45)",
    boxShadow: "0 8px 24px rgba(78,168,255,0.16)",
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "22px",
  },

  projectCard: {
    position: "relative",
    zIndex: 1,
    background:
      "linear-gradient(180deg, rgba(15,10,24,0.95), rgba(8,7,14,0.98))",
    border: "1px solid rgba(78,168,255,0.12)",
    padding: "26px",
    overflow: "hidden",
    minHeight: "320px",
    transition: "0.3s ease",

  },

  projectButton: {
  display: "inline-block",
  marginTop: "14px",
  padding: "10px 18px",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "2px",
  textDecoration: "none",
  textTransform: "uppercase",
  color: "#fff",
  background: "linear-gradient(90deg, #2f8fff, #5ec8ff)",
  border: "1px solid rgba(255,255,255,0.12)",
  clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
  boxShadow: "0 8px 25px rgba(62,140,222,0.25)",
  transition: "0.3s ease",
},

  projectGlow: {
    position: "absolute",
    top: "-60px",
    right: "-60px",
    width: "150px",
    height: "150px",
    background:
      "radial-gradient(circle, rgba(45,110,200,0.14), transparent 70%)",
    pointerEvents: "none",
  },

  projectBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "3px",
    background: "linear-gradient(90deg, #4ea8ff, #7de0ff, transparent)",
  },

  projectNum: {
    display: "inline-block",
    marginBottom: "12px",
    fontSize: "10px",
    letterSpacing: "3px",
    color: "#8fd8ff",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  projectTitle: {
    margin: "0 0 12px",
    fontSize: "28px",
    lineHeight: 1.1,
    color: "#fff",
  },

  projectDesc: {
    margin: "0 0 16px",
    fontSize: "15px",
    lineHeight: 1.8,
    color: "#bfb3d8",
    fontFamily: "Arial, sans-serif",
  },

  projectMeta: {
    marginBottom: "18px",
  },

  caseStudy: {
    display: "grid",
    gap: "16px",
    margin: "18px 0",
    padding: "16px",
    background: "rgba(78,168,255,0.05)",
    border: "1px solid rgba(78,168,255,0.14)",
  },

  projectSteps: {
    margin: 0,
    paddingLeft: "18px",
    color: "#cfeeff",
    fontSize: "13px",
    lineHeight: 1.7,
    fontFamily: "Arial, sans-serif",
  },

  projectMetaLabel: {
    display: "block",
    fontSize: "10px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#7ed8ff",
    fontWeight: 700,
    marginBottom: "8px",
  },

  projectStack: {
    margin: 0,
    color: "#cfeeff",
    fontSize: "13px",
    lineHeight: 1.6,
  },

  projectFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  },

  projectStatus: {
    padding: "8px 12px",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#f3eaff",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  projectButton: {
    textDecoration: "none",
    padding: "10px 16px",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#dcb6ff",
    background: "rgba(78,168,255,0.12)",
    border: "1px solid rgba(120,190,255,0.35)",
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
  },

  projectSubtext: {
    marginTop: "12px",
    marginBottom: 0,
    fontSize: "12px",
    lineHeight: 1.6,
    color: "#b9c8d8",
    fontFamily: "Arial, sans-serif",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    margin: "52px 0 0",
    opacity: 0.36,
  },

  dividerLine: {
    flex: 1,
    height: "1px",
    background: "linear-gradient(90deg, transparent, #4ea8ff, transparent)",
  },

  dividerText: {
    fontSize: "10px",
    color: "#8fd8ff",
    letterSpacing: "4px",
  },

  contactBox: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "16px",
  marginTop: "10px",
},

  contactIntro: {
    maxWidth: "620px",
    margin: "-10px auto 22px",
    textAlign: "center",
    color: "#cfeefc",
    fontSize: "16px",
    lineHeight: 1.7,
    fontFamily: "Arial, sans-serif",
  },

  contactButton: {
  display: "inline-block",
  minWidth: "170px",
  textAlign: "center",
  textDecoration: "none",
  color: "#f3eaff",
  padding: "14px 22px",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  background: "rgba(78,168,255,0.08)",
  border: "1px solid rgba(140,190,255,0.18)",
  clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
  transition: "0.3s ease",
},

skillsIconsWrap: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "18px",
  marginTop: "24px",
},

skillIconCard: {
  background: "linear-gradient(180deg, rgba(24, 12, 45, 0.95), rgba(12, 8, 24, 0.98))",
  border: "1px solid rgba(78, 168, 255, 0.22)",
  borderRadius: "18px",
  padding: "22px 16px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  minHeight: "120px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
},

skillEmoji: {
  fontSize: "34px",
  filter: "drop-shadow(0 0 10px rgba(178, 102, 255, 0.35))",
},

skillIconText: {
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "1.2px",
  textAlign: "center",
  color: "#f3eefe",
  textTransform: "uppercase",
},

};
