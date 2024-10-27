export interface IProjects {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
  links: Array<{
    name: string;
    href: string;
  }>;
}
