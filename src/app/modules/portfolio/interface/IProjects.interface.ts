export interface IProjects {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
  links: [
    {
      name: string;
      href: string;
    }
  ];
}
