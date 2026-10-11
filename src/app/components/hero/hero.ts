import { Component, OnDestroy, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { HERO_STATS, PERSON } from '../../data/profile';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero implements OnDestroy {
  protected readonly i18n = inject(I18nService);
  protected readonly person = PERSON;
  protected readonly stats = HERO_STATS;

  protected readonly specialties = [
    'Cloud Architecture',
    'Microservices',
    'DevOps',
    'Java & Go',
    'Angular',
    'Google Cloud',
  ];
  protected readonly specialtyIndex = signal(0);

  private readonly timer = setInterval(() => {
    this.specialtyIndex.update((i) => (i + 1) % this.specialties.length);
  }, 2200);

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
