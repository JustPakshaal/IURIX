
import { useState } from 'react'
import './index.css'

function App() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)

  function handleSearch(e) {
    e.preventDefault()

    if (!query.trim()) return

    setSearched(true)
  }

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          IURIX<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <button className="login-btn">Get Started</button>
      </nav>

      {/* Hero Section */}
      <main className="hero" id="home">
        <div className="hero-content">

          <span className="tag">
            INDIAN LEGAL RESEARCH PLATFORM
          </span>

          <h1>
            Understand the Law.
            <br />
            <span>Discover Your Rights.</span>
          </h1>

          <p>
            Explore Indian laws, discover important judgments,
            and understand legal information through one unified platform.
          </p>

          {/* Search Form */}
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setSearched(false)
              }}
              placeholder="Search laws, acts, sections or judgments..."
            />

            <button type="submit">Search</button>
          </form>

          {/* Search Response */}
          {searched && (
            <div className="search-message">
              <strong>Search received!</strong>
              <p>Your query: "{query}"</p>
              <p>
                Legal database integration is coming in the next development phase.
              </p>
            </div>
          )}

          <div className="hero-note">
            Reliable sources. Simplified legal information.
          </div>

        </div>
      </main>

      {/* Features Section */}
      <section className="features" id="features">

        <div className="section-heading">
          <span>EXPLORE IURIX</span>
          <h2>Legal knowledge, made accessible.</h2>
        </div>

        <div className="feature-grid">

          <article className="feature-card">
            <div className="feature-icon">01</div>
            <h3>Legal Research</h3>
            <p>
              Explore Indian laws, acts and legal sections in one place.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">02</div>
            <h3>Legal Explainer</h3>
            <p>
              Understand complex legal provisions through simple explanations.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">03</div>
            <h3>Judgment Explorer</h3>
            <p>
              Discover relevant court judgments and their key details.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">04</div>
            <h3>Procedure Navigator</h3>
            <p>
              Explore general legal procedures with structured guidance.
            </p>
          </article>

        </div>
      </section>

      {/* Footer */}
      <footer id="about">
        <div className="logo">
          IURIX<span>.</span>
        </div>

        <p>
          Making Indian legal information accessible to everyone.
        </p>

        <small>© 2026 IURIX. All rights reserved.</small>

        <small>
          IURIX provides general legal information, not personalised legal advice.
        </small>
      </footer>

    </div>
  )
}

export default App
