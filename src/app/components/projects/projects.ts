import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROJECTS } from '../../data/profile';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  protected readonly projects = PROJECTS;
}
