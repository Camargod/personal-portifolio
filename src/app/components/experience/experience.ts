import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { COMPANIES } from '../../data/profile';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly i18n = inject(I18nService);
  protected readonly companies = COMPANIES;
}
