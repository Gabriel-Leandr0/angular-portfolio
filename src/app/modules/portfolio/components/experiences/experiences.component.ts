import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  //Sem signal (não observa os dados em tempo real)
  public arrayExperiences: IExperiences[] = [
    {
      summary: {
        strong: 'Desenvolvedor Fullstack',
        p: 'ModalGR | 2023 - Atualmente',
      },
      text: 'Como Desenvolvedor FullStack, tive a oportunidade de consolidar minhas habilidades na construção de aplicações web. Participei de projetos de grande impacto, como o desenvolvimento de um sistema de controle de apontamentos para funcionários internos e a criação de um sistema de gestão portuária para operações da Petrobras. Essas experiências aprimoraram meu conhecimento em tecnologias de Front-End e Back-End, além de permitir o trabalho com soluções voltadas para otimização de processos e gerenciamento eficiente.',
    },
    {
      summary: {
        strong: 'Desenvolvedor Back-End',
        p: 'Tecnorav | 2022 - 2023',
      },
      text: 'Minha experiência como Desenvolvedor Back-End envolveu customizações profundas no sistema TOTVS Protheus, moldando-o de acordo com as necessidades de cada cliente. Foi nessa posição que tive meu primeiro contato prático com programação, desenvolvendo funcionalidades sob medida para atender regras de negócio específicas. Essa experiência me deu uma visão clara das particularidades de cada operação, além de reforçar minhas habilidades em adaptar soluções para otimizar processos e fluxos de trabalho personalizados.',
    },
    {
      summary: {
        strong: 'Supervisor de TI',
        p: 'CAMPS | 2016 - 2022',
      },
      text: 'Iniciei minha trajetória na empresa como Jovem Aprendiz, onde tive meu primeiro contato com o mercado de TI. Durante essa fase, adquiri experiência em manutenção de hardware, tanto de computadores quanto de servidores. Com o tempo e a evolução do meu conhecimento, assumi a posição de Supervisor de TI, sendo responsável pela infraestrutura tecnológica da empresa. Nessa função, também tive a oportunidade de auxiliar na tomada de decisões estratégicas na área de tecnologia e liderar uma equipe, compartilhando com eles todo o conhecimento e experiência adquiridos ao longo do tempo.',
    },
  ];
}
