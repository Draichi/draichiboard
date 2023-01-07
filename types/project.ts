export interface ProjectInterface {
  entity: {
    name: string;
    description: string;
    liveLink?: string;
    technologies: string[];
    cover: string;
    screenshots: string[];
  };
  company: {
    name: string;
    logo: string;
    site: string;
  };
}
