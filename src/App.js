import React, { Component } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    // ── State ──────────────────────────────────────────────────────────────
    this.state = {
      person: {
        fullName:   'Mohamed Amine Harbi',
        bio:        'Developer / Software Engineer 💻\n"A passionate software developer who loves turning complex problems into clean, scalable code. Always exploring new tech and building interactive web experiences."',
        imgSrc:     profileImg,
        profession: 'Software Engineer',
      },
      show:           false,   // toggles the profile card
      secondsSinceMount: 0,    // counts seconds since component mounted
    };

    // Bind handlers
    this.handleToggle   = this.handleToggle.bind(this);
    this.intervalId     = null;
  }

  // ── Lifecycle: componentDidMount ─────────────────────────────────────────
  componentDidMount() {
    // Start a 1-second interval to track time since mount
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);
  }

  // ── Lifecycle: componentWillUnmount ──────────────────────────────────────
  componentWillUnmount() {
    // Clean up the interval to prevent memory leaks
    clearInterval(this.intervalId);
  }

  // ── Toggle handler ───────────────────────────────────────────────────────
  handleToggle() {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  // ── Helper: format seconds → "Xm Ys" ────────────────────────────────────
  formatUptime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    if (m === 0) return `${s}s`;
    return `${m}m ${s}s`;
  }

  // ── Render ───────────────────────────────────────────────────────────────
  render() {
    const { person, show, secondsSinceMount } = this.state;

    return (
      <div className="app">

        {/* ── Page heading ── */}
        <header className="app-header">
          <h1>React Profile Card</h1>
          <p>Class-based component · State · Lifecycle</p>
        </header>

        {/* ── Uptime counter (lifecycle demo) ── */}
        <div className="uptime-chip" aria-live="polite" aria-label="Component uptime">
          <span className="uptime-dot" />
          Component mounted&nbsp;
          <strong>{this.formatUptime(secondsSinceMount)}</strong>
          &nbsp;ago
        </div>

        {/* ── Toggle button ── */}
        <button className="toggle-btn" onClick={this.handleToggle}>
          <span className="icon">{show ? '🙈' : '👤'}</span>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* ── Conditional profile card ── */}
        {show && (
          <div className="profile-card" role="region" aria-label="Profile card">

            {/* Avatar */}
            <div className="profile-avatar-wrap">
              <img
                className="profile-avatar"
                src={person.imgSrc}
                alt={`${person.fullName} avatar`}
              />
            </div>

            {/* Name */}
            <h2 className="profile-name">{person.fullName}</h2>

            {/* Profession */}
            <p className="profile-profession">{'<'} {person.profession} {'/>'}</p>

            <hr className="divider" />

            {/* Bio */}
            <p className="profile-bio">
              {person.bio.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < person.bio.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
