// Task: https://trello.com/c/FJS0bI5h

export type TLocale = 'ru' | 'en';
export type TFramework = 'react' | 'vue';
export type TTopicStatus = 'not done' | 'done';
export type TPublicationStatus = 'draft' | 'published';

export type TLocalizedText = Record<TLocale, string>;

interface IBaseInfo {
  id: string;
  title: TLocalizedText;
  description: TLocalizedText;
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
  // Drafts may have no material; published content must be validated before use.
  material?: TLocalizedText;
  resources: IResource[];
}

export interface IResource {
  title: TLocalizedText;
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
