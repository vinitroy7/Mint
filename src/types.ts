export type PageId = 
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'industries'
  | 'approach'
  | 'projects'
  | 'insights'
  | 'contact';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  fullOverview: string;
  iconName: string;
  capabilities: string[];
  howWeWork: {
    step: string;
    title: string;
    description: string;
  }[];
  keyBenefits: {
    title: string;
    description: string;
  }[];
  industriesServed: string[];
  deliverables: string[];
  statsHighlight?: {
    value: string;
    label: string;
  };
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  keyChallenges: string[];
  ourSolutions: string[];
  typicalProjects: string[];
  keyMetrics: string;
}

export interface ApproachStep {
  number: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  detailedProcess: string[];
  keyDeliverables: string[];
  toolsAndStandards: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  industry: string;
  location: string;
  clientType: string;
  scopeOfWork: string;
  servicesProvided: string[];
  projectStatus: 'Completed' | 'Ongoing' | 'Pre-Construction';
  scale: string;
  featuredImage: string;
  year: string;
  highlights: string[];
  technicalDetails: {
    builtUpArea?: string;
    projectDuration?: string;
    structuralType?: string;
    sustainabilityStandard?: string;
  };
}

export interface InsightArticle {
  id: string;
  slug: string;
  category: 'Engineering' | 'Project Management' | 'Construction' | 'Infrastructure' | 'Industry Insights' | 'Sustainability';
  title: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  shortDescription: string;
  featuredImage: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface CoreValue {
  name: string;
  description: string;
  iconName: string;
  principle: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { x: number; y: number }; // percentage on map
}
