import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <span className="wave-logo">〰</span>
            Naveena R K
          </a>

          <nav className="nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main id="home" className="hero">

        {/* Swimming pool effects */}
        <div className="water-effect water-one"></div>
        <div className="water-effect water-two"></div>
        <div className="bubble bubble-one"></div>
        <div className="bubble bubble-two"></div>
        <div className="bubble bubble-three"></div>
        <div className="bubble bubble-four"></div>

        <div className="hero-container">

          <div className="hero-content">

            <p className="hello-text">Hello, I'm</p>

            <h1>
              Naveena
              <span>R K</span>
            </h1>

            <h2>
              Artificial Intelligence & Machine Learning Student
            </h2>

            <p className="hero-description">
              Passionate about Artificial Intelligence, Machine Learning,
              and data-driven problem solving. I enjoy building practical
              solutions for real-world challenges.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn primary-btn">
                <span>🚀</span>
                View My Projects
                <span>→</span>
              </a>

              <a href="#contact" className="btn glass-btn">
                <span>✉</span>
                Contact Me
              </a>

            </div>

          </div>


          {/* Glass Profile Card */}
          <div className="hero-card">

            <div className="profile-ring">
              <div className="profile-inner">
                NRK
              </div>
            </div>

            <div className="card-wave">〰</div>

            <h3>AI&nbsp; • &nbsp;ML&nbsp; • &nbsp;DEVELOPMENT</h3>

            <div className="card-line"></div>

            <p>Learning. Building. Innovating.</p>

          </div>

        </div>

        {/* Wave divider */}
        <div className="wave-divider">
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C240,30 420,150 700,90 C980,30 1150,40 1440,100 L1440,180 L0,180 Z"
            />
          </svg>
        </div>

      </main>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">

        <div className="section-container">

          <div className="about-text">

            <div className="section-label">
              GET TO KNOW ME
              <span></span>
            </div>

            <h2>About Me</h2>

            <p>
              I am passionate about Artificial Intelligence, Machine
              Learning, and data-driven problem solving, with a strong
              interest in building practical solutions for real-world
              challenges.
            </p>

            <p>
              I am eager to apply analytical thinking and technical
              knowledge to solve real-world problems while continuously
              building expertise in emerging AI/ML technologies.
            </p>

            <p>
              I am a collaborative and attentive team player committed
              to learning, adapting, and contributing effectively in
              dynamic environments.
            </p>

          </div>


          <div className="info-cards">

            <div className="glass-info-card">

              <div className="info-icon">🎓</div>

              <div>
                <span>Education</span>

                <h3>
                  M.Sc. Artificial Intelligence and
                  Machine Learning
                </h3>

                <p>
                  Coimbatore Institute of Technology
                </p>
              </div>

            </div>


            <div className="glass-info-card">

              <div className="info-icon">📍</div>

              <div>
                <span>Location</span>

                <h3>Tamil Nadu, India</h3>
              </div>

            </div>


            <div className="glass-info-card">

              <div className="info-icon">🎯</div>

              <div>
                <span>Focus</span>

                <h3>
                  AI&nbsp; • &nbsp;ML&nbsp; • &nbsp;Data&nbsp; • &nbsp;Software Development
                </h3>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">

        <div className="section-container">

          <div className="section-heading">
            <div className="section-label center-label">
              WHAT I WORK WITH
            </div>

            <h2>Technical Skills</h2>

            <p>
              Technologies and tools I use to build, analyze and
              experiment with ideas.
            </p>
          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-number">01</div>
              <h3>Programming</h3>

              <div className="tags">
                <span>Python</span>
                <span>Java</span>
                <span>JavaScript</span>
                <span>SQL</span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-number">02</div>
              <h3>Web Development</h3>

              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Flask</span>
                <span>REST APIs</span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-number">03</div>
              <h3>AI & Data</h3>

              <div className="tags">
                <span>Machine Learning</span>
                <span>Data Analysis</span>
                <span>XGBoost</span>
                <span>Deep Learning</span>
                <span>Computer Vision</span>
              </div>
            </div>


            <div className="skill-card">
              <div className="skill-number">04</div>
              <h3>Databases & Tools</h3>

              <div className="tags">
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Figma</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">

        <div className="section-container">

          <div className="section-heading">
            <div className="section-label center-label">
              THINGS I'VE BUILT & RESEARCHED
            </div>

            <h2>Featured Projects</h2>

            <p>
              A selection of projects and research exploring AI,
              machine learning and software development.
            </p>
          </div>


          <div className="projects-grid">

            <div className="project-card">

              <span className="project-number">01</span>

              <h3>Water Pump Failure Prediction System</h3>

              <p>
                Built a machine learning system for predicting water
                pump failures using Python and XGBoost.
              </p>

              <p>
                Applied data preprocessing and SMOTE-based class
                balancing to improve prediction performance on
                imbalanced data.
              </p>

              <div className="tags">
                <span>Python</span>
                <span>XGBoost</span>
                <span>Machine Learning</span>
                <span>SMOTE</span>
              </div>

            </div>


            <div className="project-card">

              <span className="project-number">02</span>

              <h3>MarabuKan</h3>

              <p>
                Researching and prototyping a multi-task deep learning
                system for classifying Indian art styles, architecture,
                and historical periods from images.
              </p>

              <p>
                Conducted a literature review of 20+ papers to identify
                gaps in current CNN-based approaches.
              </p>

              <div className="tags">
                <span>Deep Learning</span>
                <span>Computer Vision</span>
                <span>CNN</span>
                <span>Research</span>
              </div>

            </div>


            <div className="project-card">

              <span className="project-number">03</span>

              <h3>ClassBench</h3>

              <p>
                A full-stack web application for classroom resource
                management, role-based access, file handling and
                search functionality.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

            </div>


            <div className="project-card">

              <span className="project-number">04</span>

              <h3>AQUORA</h3>

              <p>
                An AI-based smart automation system focused on
                water distribution management, developed as part
                of hackathon innovation activities.
              </p>

              <div className="tags">
                <span>AI</span>
                <span>Automation</span>
                <span>Innovation</span>
              </div>

            </div>


            <div className="project-card">

              <span className="project-number">05</span>

              <h3>Brain-Computer Interface</h3>

              <p>
                Developed a brain-vision alignment approach using
                EEG-based neural signals, EEGNet, a visual encoder,
                and contrastive learning.
              </p>

              <div className="tags">
                <span>BCI</span>
                <span>EEG</span>
                <span>EEGNet</span>
                <span>Deep Learning</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="section achievements-section">

        <div className="section-container">

          <div className="section-heading">
            <div className="section-label center-label">
              MILESTONES
            </div>

            <h2>Achievements</h2>
          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-date">
                MAR 14–15, 2026
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>
                  24-Hour Hackathon – DATATHON
                </h3>

                <p>Participant</p>

                <span>
                  Coimbatore Institute of Technology
                </span>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-date">
                FEB 26, 2026
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>
                  National Science Day – Poster Presentation
                </h3>

                <p>
                  Winner – "Role of AI in Vision Science"
                </p>

                <span>
                  Department of Computing, CIT
                </span>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-date">
                NOV 7, 2024
              </div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>
                  IDEATHON – SMART IDEATHON
                </h3>

                <p>2nd Runner-Up</p>

                <span>
                  Department of Computing, CIT
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section id="education" className="section education-section">

        <div className="section-container">

          <div className="section-heading">
            <div className="section-label center-label">
              ACADEMIC BACKGROUND
            </div>

            <h2>Education</h2>
          </div>


          <div className="education-card">

            <div className="education-year">
              2024 — 2029
            </div>

            <div>

              <h3>
                Coimbatore Institute of Technology
              </h3>

              <h4>
                M.Sc. Artificial Intelligence and Machine Learning
              </h4>

              <p>
                Coimbatore, Tamil Nadu
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">

        <div className="contact-container">

          <div className="section-label center-label">
            LET'S CONNECT
          </div>

          <h2>Let's Build Something<br />Meaningful.</h2>

          <p>
            Interested in AI, Machine Learning, research and
            building meaningful technology? Let's connect.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:your-email@example.com"
              className="contact-btn"
            >
              ✉ &nbsp; Email Me
            </a>

            <a
              href="https://github.com/cryst-al-techy"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-wave">
          〰〰〰
        </div>

        <p>
          © 2026 Naveena R K
        </p>

        <span>
          Built with React • Powered by curiosity
        </span>

      </footer>

    </div>
  );
}

export default App;