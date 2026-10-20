// Task: https://trello.com/c/FJS0bI5h

export type TLocale = 'ru' | 'en';
export type TFramework = 'react' | 'vue';
export type TTopicStatus = 'not done' | 'done';
export type TPublicationStatus = 'draft' | 'published';

interface IBaseInfo {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

interface IGraphInfo {
  placements: IGraphPlacement[];
  connections: IGraphConnection[];
}

export interface IRoadmap extends IBaseInfo, IGraphInfo {
  framework: TFramework;
  sectionIds: string[];
}

export interface ISection extends IBaseInfo, IGraphInfo {
  topicIds: string[];
}

export interface ITopic extends IBaseInfo {
  // User progress; consumers must scope topic instances to the user session.
  status: TTopicStatus;
  publicationStatus: TPublicationStatus;
  // Drafts may have no material key; published translations must be validated before use.
  materialKey?: string;
  resources: IResource[];
}

export interface IResource {
  titleKey: string;
  icon?: string;
  url: string;
}

export interface IGraphPlacement {
  entityId: string;
  x: number;
  y: number;
}

export interface IGraphConnection {
  sourceId: string;
  targetId: string;
}
