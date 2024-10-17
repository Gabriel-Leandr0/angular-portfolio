import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
      src: '/assets/img/projects/vfull.png',
      alt: 'Projeto VFull',
      title: 'VFull',
      description:
        'Sistema de controle de apontamentos para funcionários internos.',
      width: 100,
      height: 51,
      links: [
        {
          name: 'GitHub',
          href: 'www.github.com',
        },
      ],
    },
  ]);
  
}
