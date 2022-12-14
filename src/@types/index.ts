export interface APIUser {
  login: string;
  name: string;
  fallowers: number;
  fallowing: number;
  public_repos: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
  };
  starsgazers_count: number;
  forks:number;
  html_url:string;
  language?: string;
  description?:string;
}