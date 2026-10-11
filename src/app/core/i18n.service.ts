import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from './translations';

export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'gc-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _lang = signal<Lang>(this.initial());
  readonly lang = this._lang.asReadonly();

  constructor() {
    this.apply(this._lang());
  }

  set(lang: Lang): void {
    this._lang.set(lang);
    this.apply(lang);
  }

  toggle(): void {
    this.set(this._lang() === 'pt' ? 'en' : 'pt');
  }

  t(key: string): string {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this._lang()];
  }

  private apply(lang: Lang): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }
  }

  private initial(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') return stored;
      const nav = typeof navigator !== 'undefined' ? navigator.language : 'pt';
      return nav.toLowerCase().startsWith('en') ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  }
}
