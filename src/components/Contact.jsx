import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-info">
          <a href="mailto:marcosalvarez624@protonmail.com" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <span className="contact-value">marcosalvarez624@protonmail.com</span>
            </div>
          </a>

          <a href="tel:+573145277817" className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12 1.05.36 2.07.72 3.03a2 2 0 0 1-.45 2.11L8.91 10.09a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.96.36 1.98.6 3.03.72A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+57 314 527 7817</span>
            </div>
          </a>

          <a
            href="https://wa.me/573145277817"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.06.652 3.976 1.758 5.59L0 24l6.59-1.758A11.97 11.97 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.562-.4-5.123-1.104l-.367-.189-3.811 1.01.967-3.63-.189-.38C1.567 15.7 1 14.003 1 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.16-14.82c-.276-.088-.872-.276-1.46-.276-.593 0-1.457.093-2.225.93-.486.533-1.837 1.794-1.837 4.368 0 2.574 1.88 5.062 2.142 5.41.262.349 3.708 5.775 9.054 7.93 4.467 1.75 5.375 1.401 6.347 1.313.97-.088 3.139-1.272 3.577-2.505.44-1.233.44-2.287.309-2.505-.131-.219-.439-.349-.915-.577-.475-.228-2.814-1.387-3.251-1.544-.438-.157-.754-.23-1.073.23-.318.458-1.232 1.544-1.512 1.86-.28.317-.561.365-.914.107-.352-.258-1.486-.548-2.828-1.745-1.047-.93-1.754-2.078-1.96-2.533-.205-.456-.022-.7.154-.925.158-.184.351-.459.528-.689.176-.23.235-.39.352-.65.117-.26.059-.487-.029-.684-.088-.196-.793-1.912-1.087-2.616z"/>
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">+57 314 527 7817</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/marcos-alvarez624"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/marcos-alvarez624</span>
            </div>
          </a>

          <a
            href="https://techhub.social/@happysemicolon"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M23.268 5.313c.35-2.269-2.862-4.922-5.746-4.922-3.798 0-7.868 4.888-7.868 4.888-.56.649-.935 1.35-.935 2.226 0 2.324 1.61 2.55 3.15 2.763 1.338.228 2.574.528 2.574 1.335 0 .537-.516.976-1.67 1.043-.577.038-1.11.146-1.11.146-.424 0-.788-.255-.788-.89v-5.906c0-.275.106-.551.318-.688.496-.339 1.84-.684 4.15-.684 2.01 0 2.408.635 2.408 1.935v1.991c0 .449-.487.599-.487 1.291 0 .802.531 1.596 1.656 1.596.749 0 1.556-.404 1.556-1.372v-1.992c0-1.504.105-3.122 3.042-3.122.947 0 1.733.486 1.733 1.526v2.957c0 .839-.053 2.417-2.582 2.417-1.031 0-1.707-.705-1.707-1.669 0-.595.346-1.255.346-1.255-.537 1.074.057 2.235.463 2.901.206.328.485.668.985.668 1.237 0 2.065-1.26 2.065-2.473 0-2.157-.866-3.4-3.468-3.4zm-11.06 4.693c-.946 0-1.781-.805-1.781-1.802s.835-1.802 1.781-1.802c.946 0 1.781.805 1.781 1.802s-.835 1.802-1.781 1.802z"/>
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Mastodon</span>
              <span className="contact-value">techhub.social/@happysemicolon</span>
            </div>
          </a>

          <a
            href="https://github.com/happysemicolon"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/happysemicolon</span>
            </div>
          </a>

          <a
            href="https://discord.com/users/happysemicolon"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.399-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .076-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .076.01c.12.099.246.197.372.291a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.359.698.77 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.718-.838-8.812-3.63-12.62a.061.061 0 0 0-.032-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.96-2.157 2.157-2.157 1.203 0 2.178.964 2.157 2.157 0 1.19-.955 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.96-2.157 2.157-2.157 1.203 0 2.178.964 2.157 2.157 0 1.19-.955 2.157-2.157 2.157z"/>
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Discord</span>
              <span className="contact-value">happysemicolon</span>
            </div>
          </a>

          <a
            href="https://t.me/happysemicolon"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.161.16-.295.295-.605.295-.042 0-.085-.004-.128-.015l.213-3.053 5.56-5.023c.242-.213-.054-.33-.375-.117l-6.869 4.326-2.96-.924c-.644-.203-.658-.644.136-.954l11.566-4.458c.542-.203 1.01.122.84 1.152z"/>
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Telegram</span>
              <span className="contact-value">@happysemicolon</span>
            </div>
          </a>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Location</span>
              <span className="contact-value">Corregimiento Altavista, Vía El Jardín, Medellín, 050026, Colombia</span>
            </div>
          </div>
        </div>

        {/* Mini Google Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=Corregimiento%20Altavista,%20V%C3%ADa%20El%20Jard%C3%ADn,%20Medell%C3%ADn,%20050026,%20Colombia&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
