export interface GlobalState {
  theme: THEME_TYPES;
  freeCreateList: FreeCreateList[];
}

export enum THEME_TYPES {
  Yellow,
  Blue,
  Green,
}

export interface FreeCreateList {
  name: string;
  projectList: ProjectList[];
}

export interface ProjectList {
  category: number;
  id: string;
  name: string;
  pyType?: string;
}
