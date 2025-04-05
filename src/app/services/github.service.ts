import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GithubUser } from '../interfaces/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private getUserPath = 'https://api.github.com/users/USERNAME';
  private getUserRepoPath = ' https://api.github.com/users/USERNAME/repos';

  constructor(private http: HttpClient) { }

  getGithubUser(username: string): Observable<GithubUser[] | undefined> {
    try {
      return this.http.get<undefined>(this.getUserPath.replace('USERNAME', username), {
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
