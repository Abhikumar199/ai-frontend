export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Neuromorphix</h2>
      <div style={styles.menu}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <h1 style={styles.heroTitle}>Neuromorphix</h1>
      <p style={styles.heroText}>
        Neuromorphic Computing · AI Research · Brain-Inspired Systems
      </p>
      <button style={styles.button}>Explore Research</button>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About</h2>
      <p>
        Neuromorphix is a research-driven initiative focused on
        neuromorphic architectures, computational neuroscience,
        and next-generation AI systems.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © 2025 Neuromorphix · Built with React
    </footer>
  );
}

const styles = {
  nav: {
    width: "100%",
    height: "70px",
    backgroundColor: "#020617",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "30px",
  },
  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "16px",
  },
  hero: {
    height: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "80px",
    paddingTop: "70px", // offset for navbar
  },
  heroTitle: {
    fontSize: "56px",
    marginBottom: "20px",
  },
  heroText: {
    fontSize: "20px",
    maxWidth: "600px",
    marginBottom: "30px",
    color: "#cbd5f5",
  },
  button: {
    width: "200px",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#38bdf8",
    cursor: "pointer",
  },
  section: {
    padding: "120px 80px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontSize: "18px",
  },
  footer: {
    backgroundColor: "#020617",
    color: "#94a3b8",
    textAlign: "center",
    padding: "20px",
  },
};
