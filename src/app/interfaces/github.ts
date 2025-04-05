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
