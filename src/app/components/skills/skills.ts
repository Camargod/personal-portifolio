import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { SKILL_GROUPS } from '../../data/profile';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly i18n = inject(I18nService);
  protected readonly groups = SKILL_GROUPS;
}
