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
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone do CSS3',
      title: 'CSS3',
    },
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone do .NET',
      title: '.NET',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone do HTML5',
      title: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone do JavaScript',
      title: 'JavaScript',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone do Node.js',
      title: 'Node.js',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone do Sass',
      title: 'Sass',
    }
  ])
}
