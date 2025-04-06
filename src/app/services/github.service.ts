import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GithubUser, UserRepositories } from '../interfaces/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getGithubUser(username: string): Observable<GithubUser> {
    try {
      return this.http.get<GithubUser>(environment.paths.getUser.replace('USERNAME', username), {
        headers: {
          "Accept": "application/vnd.github+json",
          "Authorization": "Bearer " + environment.gitHubToken,
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });
    } catch (error) {
      console.log('Error fetching GitHub user:', error);
      throw error;
    }
  }

  getUserRepositories(username: string): Observable<UserRepositories[]> {
    try {
      return this.http.get<UserRepositories[]>(environment.paths.getUserRepos.replace('USERNAME', username), {
        headers: {
          "Accept": "application/vnd.github+json",
          "Authorization": "Bearer " + environment.gitHubToken,
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });
    } catch (error) {
      console.log('Error fetching GitHub user:', error);
      throw error;
    }
  }
}
