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
  
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent , {
      data,
      panelClass: EDialogPainelClass.PROJECTS,
    });
  }
}
