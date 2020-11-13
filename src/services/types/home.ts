import type { AxiosResponse } from 'axios';

export interface FreeCreateList extends AxiosResponse{
  name: string;
  projectList: ProjectList[];
}

export interface ProjectList {
  category: number;
  id: string;
  name: string;
  pyType?: string;
}
