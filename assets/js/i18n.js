/**
 * i18n - Internationalization System
 * Manages language detection, switching and translation
 */

class LanguageManager {
  constructor() {
    this.currentLang = null;
    this.defaultLang = 'en';
    this.supportedLangs = ['en', 'fr'];
    this.init();
  }

  /**
   * Initialize language system
   */
  init() {
    // Try to get saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');

    if (savedLang && this.supportedLangs.includes(savedLang)) {
      this.currentLang = savedLang;
    } else {
      // Detect browser language
      this.currentLang = this.detectLanguage();
    }

    // Apply language
    this.setLanguage(this.currentLang);

    // Setup language switcher listeners
    this.setupListeners();
  }

  /**
   * Detect user's preferred language from browser
   */
  detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;

    // Check if browser language starts with 'fr' (fr, fr-FR, fr-CA, etc.)
    if (browserLang.toLowerCase().startsWith('fr')) {
      return 'fr';
    }

    return this.defaultLang;
  }

  /**
   * Set active language
   */
  setLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) {
      console.warn(`Language ${lang} not supported. Falling back to ${this.defaultLang}`);
      lang = this.defaultLang;
    }

    this.currentLang = lang;

    // Save to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate page
    this.translatePage();

    // Update active state in language switcher
    this.updateLanguageSwitcher();

    // Update typed.js if it exists
    this.updateTypedContent();
  }

  /**
   * Translate all elements with data-i18n attribute
   */
  translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);

      if (translation) {
        // Check if element is an input/textarea (update placeholder)
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
  }

  /**
   * Get translation for a key
   */
  getTranslation(key) {
    if (typeof translations === 'undefined') {
      console.error('Translations object not found. Make sure translations.js is loaded.');
      return key;
    }

    const translation = translations[this.currentLang]?.[key];

    if (!translation) {
      console.warn(`Translation not found for key: ${key} in language: ${this.currentLang}`);
      return key;
    }

    return translation;
  }

  /**
   * Update language switcher active state
   */
  updateLanguageSwitcher() {
    const switchers = document.querySelectorAll('.lang-switcher');

    switchers.forEach(switcher => {
      const lang = switcher.getAttribute('data-lang');

      if (lang === this.currentLang) {
        switcher.classList.add('active');
      } else {
        switcher.classList.remove('active');
      }
    });
  }

  /**
   * Update Typed.js content based on language
   */
  updateTypedContent() {
    const typedElement = document.querySelector('.typed');

    if (typedElement && typeof Typed !== 'undefined') {
      // Get translation for hero_typed
      const typedText = this.getTranslation('hero_typed');

      // Update data-typed-items attribute
      typedElement.setAttribute('data-typed-items', typedText);

      // Reinitialize Typed.js if it was already initialized
      // This will be handled by main.js
      if (window.typedInstance) {
        window.typedInstance.destroy();
        window.initTyped();
      }
    }
  }

  /**
   * Setup click listeners for language switchers
   */
  setupListeners() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-switcher') ||
          e.target.closest('.lang-switcher')) {

        const switcher = e.target.classList.contains('lang-switcher')
          ? e.target
          : e.target.closest('.lang-switcher');

        const lang = switcher.getAttribute('data-lang');

        if (lang && lang !== this.currentLang) {
          this.setLanguage(lang);
        }
      }
    });
  }

  /**
   * Get current language
   */
  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Initialize language manager when DOM is ready
let languageManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    languageManager = new LanguageManager();
  });
} else {
  languageManager = new LanguageManager();
}
