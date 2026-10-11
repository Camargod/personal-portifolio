import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly highlights = ['about.h1', 'about.h2', 'about.h3', 'about.h4'];
}
