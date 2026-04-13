
import { useEffect, useRef } from "react";

const skills = [
  "SQL", "MySQL", "Power BI", "Python", "Excel",
  "Análise de Dados", "Tratamento de Dados", "Postman",
  "GitHub", "SQL Queries", "Testes e Validação", "Dashboard",
];
const destaqueSkills = ["SQL", "Power BI", "Python", "Análise de Dados"];

const projects = [
  {
    num: "CASE 01",
    title: "Análise de Acidentes",
    desc: "Tratamento e análise de dados, organização de informações, construção de consultas SQL e geração de insights para identificação de padrões.",
    stack: "SQL · MySQL · Power BI · Tratamento de Dados",
  },
  {
    num: "CASE 02",
    title: "Indicadores de Empresas",
    desc: "Análise sobre abertura e fechamento de empresas, com organização das informações e análises para geração de insights sobre atividade econômica.",
    stack: "SQL · Power BI · Excel · Análise de Dados",
  },
  {
    num: "CASE 03",
    title: "Validação de Sistemas e APIs",
    desc: "Suporte de desenvolvimento com foco em análise de erros, validação de fluxos e testes de APIs com Postman, contribuindo para melhoria contínua dos sistemas.",
    stack: "Postman · APIs · Testes · Suporte Técnico",
  },
];

export default function App() {
  const dotRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dotRef.current) {
        dotRef.current.style.opacity =
          dotRef.current.style.opacity === "0.2" ? "1" : "0.2";
      }
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.portfolio}>
      {/* Background layers */}
      <div style={styles.mangaLines} />
      <div style={styles.speedLines} />
      <div style={styles.kanjiBg}>データ</div>
      <div style={styles.kanjiBg2}>分析</div>

      <div style={styles.content}>

        {/* ── HERO ── */}
        <section style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.heroTag}>
              <span style={styles.heroTagLine} />
              Portfolio · Data · Tech · Mode: On
            </div>

            <h1 style={styles.heroName}>
              <span style={styles.heroNameAccent}> Maria Paula</span>
            </h1>

            <p style={styles.heroRole}>Data Analytics · SQL · Power BI · Python</p>

            <p style={styles.heroDesc}>
              Atuo com análise de dados e tenho experiência anterior em suporte
              de desenvolvimento, o que fortaleceu minha base técnica. Meu foco
              está em transformar dados em insights claros, estratégicos e
              aplicáveis a problemas reais.
            </p>

            <div style={styles.heroBtns}>
              <a href="#projetos" style={styles.btnMain}>Ver projetos</a>
              <a href="#contato" style={styles.btnSec}>Entrar em contato</a>
            </div>
          </div>

          {/* Status Panel */}
          <div style={styles.statusPanel}>
            <div style={styles.statusTopBar} />
           <img src="/foto.jpg" alt="Maria Paula" style={{ width: "120px", height: "120px", objectFit: "cover", objectPosition: "top", borderRadius: "4px", marginBottom: "16px", border: "1px solid rgba(155,89,255,0.3)", display: "block", margin: "0 auto 16px" }} />
            <p style={styles.statusLabel}>STATUS_PANEL</p>
            {[
              ["Nome", "Maria Paula"],
              ["Foco", "Data Analytics"],
              ["Modo", null],
              ["Base técnica", "Dados + Dev"],
              ["Missão", "Transformar dados em decisões"],
            ].map(([key, val]) => (
              <div key={key} style={styles.statusRow}>
                <strong style={styles.statusKey}>{key}</strong>
                {key === "Modo" ? (
                  <span>
                    <span ref={dotRef} style={styles.statusDot} />
                    Learning + Building
                  </span>
                ) : (
                  <span>{val}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── SOBRE ── */}
        <section>
          <SectionHeader tag="Background" title="Sobre mim" />
          <div style={styles.sobreBox}>
            <p style={styles.sobreText}>
              Tenho interesse em tecnologia com foco em análise de dados,
              organização de informações e resolução de problemas. Gosto de
              entender o que está por trás dos dados e transformar isso em algo
              útil, claro e estratégico.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── SKILLS ── */}
        <section>
          <SectionHeader tag="Arsenal" title="Skills" />
          <div style={styles.skillsGrid}>
            {skills.map((skill) => {
              const isDestaque = destaqueSkills.includes(skill);
              return (
                <span
                  key={skill}
                  style={{
                    ...styles.skillTag,
                    ...(isDestaque ? styles.skillTagDestaque : {}),
                  }}
                >
                  {isDestaque && <span style={{ fontSize: "10px" }}>★ </span>}
                  {skill}
                </span>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* ── PROJETOS ── */}
        <section id="projetos">
          <SectionHeader tag="Mission Log" title="Projetos" />
          <div style={styles.projectsGrid}>
            {projects.map((p) => (
              <div key={p.num} style={styles.projectCard}>
                <div style={styles.projectTopBar} />
                <p style={styles.projectNum}>{p.num}</p>
                <h3 style={styles.projectTitle}>{p.title}</h3>
                <p style={styles.projectDesc}>{p.desc}</p>
                <p style={styles.projectStack}>{p.stack}</p>
                <a href="#" style={styles.projectBtn}>Em breve</a>
                <p style={styles.projectSub}>Publicação em breve no GitHub</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── CONTATO ── */}
        <section id="contato" style={{ paddingBottom: "80px" }}>
          <SectionHeader tag="Contact" title="Contato" />
          <div style={styles.contactLinks}>
            {[
              ["GitHub", "https://github.com/"],
              ["LinkedIn", "https://linkedin.com/"],
              ["Email", "mailto:mariapaulasantos839@gmail.com"],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={styles.contactLink}>
                {label}
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

/* ── Sub-components ── */

function SectionHeader({ tag, title }) {
  return (
    <div style={styles.secHeader}>
      <p style={styles.secTag}>{tag}</p>
      <h2 style={styles.secTitle}>{title}</h2>
      <div style={styles.secLine} />
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

/* ── Styles ── */

const styles = {
  portfolio: {
    background: "#06060a",
    color: "#e8e0f0",
    fontFamily: "'Rajdhani', 'Noto Sans JP', Arial, sans-serif",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
  },
  mangaLines: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    backgroundImage: `
      repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 60px),
      repeating-linear-gradient(180deg, rgba(255,255,255,0.008) 0px, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 60px)
    `,
    pointerEvents: "none", zIndex: 0,
  },
  speedLines: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    background: "radial-gradient(ellipse at 50% 20%, transparent 30%, rgba(0,0,0,0.5) 100%)",
    pointerEvents: "none", zIndex: 0,
  },
  kanjiBg: {
    position: "fixed", right: "-10px", top: "50%", transform: "translateY(-50%)",
    fontSize: "200px", color: "rgba(155,89,255,0.025)",
    writingMode: "vertical-rl", pointerEvents: "none", zIndex: 0,
    fontWeight: 700, lineHeight: 1, userSelect: "none",
  },
  kanjiBg2: {
    position: "fixed", left: "-20px", bottom: "10%",
    fontSize: "150px", color: "rgba(255,107,223,0.02)",
    writingMode: "vertical-rl", pointerEvents: "none", zIndex: 0,
    fontWeight: 700, userSelect: "none",
  },
  content: {
    position: "relative", zIndex: 1,
    maxWidth: "1100px", margin: "0 auto", padding: "0 20px",
  },

  /* HERO */
  hero: {
    padding: "60px 0 40px",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "40px",
    alignItems: "start",
    borderBottom: "1px solid rgba(180,120,255,0.15)",
    position: "relative",
  },
  heroLeft: { position: "relative" },
  heroTag: {
    fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
    color: "#9b59ff", fontWeight: 700, marginBottom: "20px",
    display: "flex", alignItems: "center", gap: "8px",
  },
  heroTagLine: {
    display: "inline-block", width: "20px", height: "2px", background: "#9b59ff",
  },
  heroName: {
    fontSize: "72px", fontWeight: 700, lineHeight: 0.9,
    color: "#fff",
    textShadow: "0 0 60px rgba(155,89,255,0.3)",
    letterSpacing: "-2px", margin: 0,
  },
  heroNameAccent: {
    display: "block", fontSize: "80px", color: "#b57bff", fontStyle: "italic",
  },
  heroRole: {
    fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase",
    color: "#ff6bdf", margin: "18px 0",
  },
  heroDesc: {
    fontSize: "17px", lineHeight: "1.8", color: "#c0b8d0",
    maxWidth: "580px", fontFamily: "sans-serif", margin: 0,
  },
  heroBtns: { display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" },
  btnMain: {
    padding: "13px 26px", fontSize: "14px", fontWeight: 700,
    letterSpacing: "2px", textTransform: "uppercase",
    background: "#9b59ff", color: "#fff", border: "none",
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
    cursor: "pointer", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif",
    display: "inline-block",
  },
  btnSec: {
    padding: "13px 26px", fontSize: "14px", fontWeight: 700,
    letterSpacing: "2px", textTransform: "uppercase",
    background: "transparent", color: "#9b59ff",
    border: "1px solid #9b59ff",
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
    cursor: "pointer", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif",
    display: "inline-block",
  },

  /* STATUS PANEL */
  statusPanel: {
    minWidth: "220px",
    border: "1px solid rgba(155,89,255,0.25)",
    padding: "20px",
    background: "rgba(155,89,255,0.04)",
    position: "relative",
  },
  statusTopBar: {
    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
    background: "linear-gradient(90deg, #9b59ff, #ff6bdf)",
  },
  statusLabel: {
    fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
    color: "#9b59ff", fontWeight: 700, marginBottom: "16px", marginTop: 0,
  },
  statusRow: { margin: "10px 0", fontSize: "14px", color: "#c0b8d0", fontFamily: "sans-serif" },
  statusKey: {
    color: "#ff6bdf", fontSize: "11px", letterSpacing: "1px",
    textTransform: "uppercase", display: "block", fontWeight: 700,
  },
  statusDot: {
    display: "inline-block", width: "6px", height: "6px",
    background: "#4fff90", borderRadius: "50%", marginRight: "6px",
    opacity: 1, transition: "opacity 0.3s",
  },

  /* SECTION HEADER */
  secHeader: { textAlign: "center", margin: "60px 0 32px" },
  secTag: {
    fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
    color: "#9b59ff", fontWeight: 700, marginBottom: "8px", margin: 0,
  },
  secTitle: { fontSize: "42px", fontWeight: 700, color: "#fff", letterSpacing: "-1px", margin: "8px 0 0" },
  secLine: { width: "60px", height: "2px", background: "linear-gradient(90deg,#9b59ff,#ff6bdf)", margin: "12px auto 0" },

  /* SOBRE */
  sobreBox: {
    borderLeft: "3px solid #9b59ff",
    padding: "24px 28px",
    background: "rgba(155,89,255,0.04)",
    margin: "0 auto", maxWidth: "820px",
  },
  sobreText: { fontSize: "18px", lineHeight: "1.9", color: "#c0b8d0", fontFamily: "sans-serif", margin: 0 },

  /* SKILLS */
  skillsGrid: { display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" },
  skillTag: {
    padding: "8px 18px", fontSize: "13px", fontWeight: 700,
    letterSpacing: "2px", textTransform: "uppercase",
    border: "1px solid rgba(155,89,255,0.3)",
    color: "#c0b8d0", background: "rgba(155,89,255,0.05)",
    clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
    display: "inline-block",
  },
  skillTagDestaque: {
    background: "rgba(155,89,255,0.15)",
    borderColor: "#9b59ff",
    color: "#d4aaff",
  },

  /* PROJETOS */
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  projectCard: {
    border: "1px solid rgba(155,89,255,0.2)",
    padding: "28px",
    background: "rgba(10,6,20,0.8)",
    position: "relative",
    overflow: "hidden",
  },
  projectTopBar: {
    position: "absolute", top: 0, left: 0, width: "100%", height: "2px",
    background: "linear-gradient(90deg, #9b59ff, transparent)",
  },
  projectNum: {
    fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
    color: "#9b59ff", fontWeight: 700, marginBottom: "10px", marginTop: 0,
  },
  projectTitle: { fontSize: "26px", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.1, marginTop: 0 },
  projectDesc: { fontSize: "15px", lineHeight: "1.8", color: "#a89ec0", fontFamily: "sans-serif", marginBottom: "14px", marginTop: 0 },
  projectStack: { fontSize: "12px", letterSpacing: "1px", color: "#9b59ff", marginBottom: "18px", marginTop: 0 },
  projectBtn: {
    display: "inline-block", padding: "8px 18px",
    fontSize: "12px", fontWeight: 700, letterSpacing: "2px",
    textTransform: "uppercase", textDecoration: "none",
    background: "rgba(155,89,255,0.15)", color: "#b57bff",
    border: "1px solid rgba(155,89,255,0.3)",
    clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
    fontFamily: "'Rajdhani', sans-serif",
  },
  projectSub: { fontSize: "11px", color: "#504860", marginTop: "8px", marginBottom: 0 },

  /* DIVIDER */
  divider: { display: "flex", alignItems: "center", gap: "16px", margin: "50px 0 0", opacity: 0.3 },
  dividerLine: { flex: 1, height: "1px", background: "#9b59ff" },
  dividerText: { fontSize: "10px", letterSpacing: "4px", color: "#9b59ff" },

  /* CONTATO */
  contactLinks: { display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" },
  contactLink: {
    padding: "14px 28px", fontSize: "13px", fontWeight: 700,
    letterSpacing: "3px", textTransform: "uppercase",
    textDecoration: "none", color: "#c0b8d0",
    border: "1px solid rgba(155,89,255,0.25)",
    background: "rgba(155,89,255,0.04)",
    clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
    fontFamily: "'Rajdhani', sans-serif",
  },
};
