import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PERSON } from '../../data/profile';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly person = PERSON;
}
