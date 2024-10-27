import { Component, inject, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  // #tooltip = inject(MatTooltipModule);

  //Com singal (ele fica observando os dados em tempo real)
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone do .NET',
      title: '.NET',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: 'Ícone do SQL',
      title: 'SQL',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Ícone do Docker',
      title: 'Docker',
    },
    {
      src: 'assets/icons/knowledge/kubernetes.svg',
      alt: 'Ícone do Kubernetes',
      title: 'Kubernetes',
    }
  ]);
}
