export interface TechnicalSpecs {
  stack: string;
  responsiveness: string;
  performance: string;
}

export interface ProjectVariation {
  id: string;
  title: string;
  category: string;
  tag: string;
  cvrTag: string;
  image: string;
  description: string;
  specs?: TechnicalSpecs;
  link?: string;
}

export interface FeaturedLaunchProject {
  id: string;
  name: string;
  client: string;
  category: string;
  badge: string;
  infoText: string;
  highlightMetric: string;
  variations: [ProjectVariation, ProjectVariation, ProjectVariation];
  link?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  collectionDate?: string;
  priceTag: string;
  image: string;
  description: string;
  specs?: TechnicalSpecs;
  link?: string;
}

export interface WorkStep {
  number: string;
  title: string;
  subtitle: string;
  overview: string;
  deliverables: string[];
  duration: string;
  methodology: string;
}

export interface CertificateItem {
  id: string;
  number: string;
  title: string;
  authority: string;
  category: string;
  credentialId: string;
  issueDate: string;
  scoreOrLevel: string;
  image: string;
  description: string;
  skills: string[];
  pillarTag: string;
}


