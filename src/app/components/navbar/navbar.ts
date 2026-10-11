import { Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PERSON } from '../../data/profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly i18n = inject(I18nService);
  protected readonly person = PERSON;
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);

  protected readonly links = [
    { href: '#about', key: 'nav.about' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#projects', key: 'nav.projects' },
    { href: '#contact', key: 'nav.contact' },
  ];

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected close(): void {
    this.open.set(false);
  }
}
