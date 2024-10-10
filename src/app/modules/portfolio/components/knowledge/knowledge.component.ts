import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone do Angular',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone do CSS3',
    },
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone do HTML5',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone do HTML5',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone do JavaScript',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone do Node.js',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone do Sass',
    }
  ])

}
