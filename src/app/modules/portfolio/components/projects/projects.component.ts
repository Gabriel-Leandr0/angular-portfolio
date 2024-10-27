import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: '/assets/img/projects/mind.svg',
      alt: 'Projeto Mind',
      title: 'Mind - Em desenvolvimento',
      description:
        'Plataforma para criação de portfolio.',
      width: 250,
      height: 100,
      links: [
        {
          name: 'Frontend',
          href: 'https://github.com/Gabriel-Leandr0/mind-front',
        },
        {
          name: 'Backend',
          href: 'https://github.com/Gabriel-Leandr0/mind-back',
        },
        {
          name: 'Figma',
          href: 'https://www.figma.com/design/oXUClzK5ohF8KWgqlJOqiQ/Mind?node-id=0-1&node-type=canvas&t=YpEMIlTu2V1N963D-0'
        }
      ],
    }
  ]);
  
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent , {
      data,
      panelClass: EDialogPainelClass.PROJECTS,
    });
  }
}
