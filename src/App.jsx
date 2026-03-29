import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">{i18n.language === 'zh' ? '智能体科技' : 'AI Agent Tech'}</div>
          <ul className="nav-links">
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#business">{t('nav.business')}</a></li>
            <li><a href="#org">{t('nav.org')}</a></li>
            <li><a href="#team">{t('nav.team')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
          <button className="lang-switch" onClick={toggleLanguage}>
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p className="tagline">{t('hero.tagline')}</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">{t('hero.cta1')}</a>
            <a href="#business" className="btn btn-secondary">{t('hero.cta2')}</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>{t('about.title')}</h2>
            <p>{t('about.subtitle')}</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>{t('about.companyTitle')}</h3>
              <p>{t('about.companyText1')}</p>
              <p>{t('about.companyText2')}</p>
            </div>
            <div className="vision-mission">
              <div className="vision">
                <h3>🎯 {t('about.vision')}</h3>
                <p>{t('about.visionText')}</p>
              </div>
              <div className="mission">
                <h3>🚀 {t('about.mission')}</h3>
                <p>{t('about.missionText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="business" id="business">
        <div className="container">
          <div className="section-title">
            <h2>{t('business.title')}</h2>
            <p>{t('business.subtitle')}</p>
          </div>
          <div className="business-grid">
            <div className="business-card">
              <div className="business-icon">🤖</div>
              <h3>{t('business.product.title')}</h3>
              <p>{t('business.product.desc')}</p>
            </div>
            <div className="business-card">
              <div className="business-icon">📚</div>
              <h3>{t('business.content.title')}</h3>
              <p>{t('business.content.desc')}</p>
            </div>
            <div className="business-card">
              <div className="business-icon">💡</div>
              <h3>{t('business.service.title')}</h3>
              <p>{t('business.service.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="org" id="org">
        <div className="container">
          <div className="section-title">
            <h2>{t('org.title')}</h2>
            <p>{t('org.subtitle')}</p>
          </div>
          <div className="org-chart">
            <div className="org-level">
              <div className="org-card">
                <h3>宇宙大帝</h3>
                <p>{t('org.chairman')}</p>
              </div>
            </div>
            
            <div className="org-connector"></div>
            
            <div className="org-level">
              <div className="org-card">
                <h3>奥特曼</h3>
                <p>{t('org.ceo')}</p>
              </div>
            </div>
            
            <div className="org-connector"></div>
            
            <div className="org-level">
              <div className="org-card">
                <h3>托尼（钢铁侠）</h3>
                <p>{t('org.cto')}</p>
              </div>
              <div className="org-card">
                <h3>丹佛斯（惊奇队长）</h3>
                <p>{t('org.coo')}</p>
              </div>
              <div className="org-card">
                <h3>Aver</h3>
                <p>{t('org.cfo')}</p>
              </div>
            </div>
          </div>

          <div className="departments">
            <div className="dept-card">
              <h4>{t('org.dept1')}</h4>
              <p>{t('org.dept1Desc')}</p>
            </div>
            <div className="dept-card">
              <h4>{t('org.dept2')}</h4>
              <p>{t('org.dept2Desc')}</p>
            </div>
            <div className="dept-card">
              <h4>{t('org.dept3')}</h4>
              <p>{t('org.dept3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-title">
            <h2>{t('team.title')}</h2>
            <p>{t('team.subtitle')}</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👑</div>
              <h3>宇宙大帝</h3>
              <p className="role">{t('team.chairman')}</p>
              <p className="bio">{t('team.chairmanBio')}</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🦸</div>
              <h3>奥特曼</h3>
              <p className="role">{t('team.ceo')}</p>
              <p className="bio">{t('team.ceoBio')}</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🦸‍♀️</div>
              <h3>丹佛斯</h3>
              <p className="role">{t('team.coo')}</p>
              <p className="bio">{t('team.cooBio')}</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🧑‍💻</div>
              <h3>托尼（钢铁侠）</h3>
              <p className="role">{t('team.cto')}</p>
              <p className="bio">{t('team.ctoBio')}</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">💰</div>
              <h3>Aver</h3>
              <p className="role">{t('team.cfo')}</p>
              <p className="bio">{t('team.cfoBio')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>{t('contact.email')}</h3>
              <div className="contact-item">
                <span>📧</span>
                <span>contact@company.com</span>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>{t('contact.addressText')}</span>
              </div>
              <div className="contact-item">
                <span>💬</span>
                <span>{t('contact.message')}</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder={t('contact.name')} />
              <input type="email" placeholder={t('contact.emailPlaceholder')} />
              <textarea placeholder={t('contact.messagePlaceholder')}></textarea>
              <button type="submit" className="btn btn-primary">{t('contact.submit')}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;