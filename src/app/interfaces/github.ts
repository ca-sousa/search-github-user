export interface GithubUser {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface UserRepositories {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string; 
}

