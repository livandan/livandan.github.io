const languageButton = document.querySelector('#language-toggle');
const translations = document.querySelectorAll('[data-en][data-zh]');

function setLanguage(language) {
  const chinese = language === 'zh';
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  translations.forEach(element => { element.textContent = element.dataset[language]; });
  languageButton.textContent = chinese ? 'English' : '中文';
  languageButton.setAttribute('aria-label', chinese ? 'Switch to English' : '切换至中文');
  document.title = chinese ? '李文桢 | 上海交通大学' : 'Wenzhen Li | Shanghai Jiao Tong University';
  try { localStorage.setItem('wenzhen-language', language); } catch { /* Storage is optional. */ }
}

let preferredLanguage = 'en';
try { preferredLanguage = localStorage.getItem('wenzhen-language') || 'en'; } catch { /* Default to English. */ }
setLanguage(preferredLanguage === 'zh' ? 'zh' : 'en');
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-10% 0px -60% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
