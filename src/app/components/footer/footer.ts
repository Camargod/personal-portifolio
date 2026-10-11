import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PERSON } from '../../data/profile';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly person = PERSON;
  protected readonly year = new Date().getFullYear();
}
