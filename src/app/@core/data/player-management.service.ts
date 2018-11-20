import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "./config";

export interface Player {
  email: String,
  name: String,
  admin: boolean,
  token: number,
  gold: number,
  password: String,
  banned: boolean
}

@Injectable()
export class PlayerManagementService {
  constructor(private http: HttpClient){

  }

  getOnlinePlayers(): Promise<Array<Player>> {
    return this.http.get<Array<Player>>(`${Config.urlBase}/api/client/`).toPromise();
  }

  kickPlayer(email: string): Promise<any> {
    return this.http.post<{email}>(`${Config.urlBase}/api/client/kick`, {email}).toPromise();
  }

  pardonPlayer(email: string): Promise<any> {
    return this.http.post<{email}>(`${Config.urlBase}/api/client/pardon`, {email}).toPromise();
  }

  isPlayerLogged(email: string): Promise<any> {
    return this.http.get(`${Config.urlBase}/api/client/logged/${email}`).toPromise();
  }

  banPlayer(email: string): Promise<any> {
    return this.http.post<{email}>(`${Config.urlBase}/api/client/ban`, {email}).toPromise();
  }

  authorizePlayer(email: string): Promise<any> {
    return this.http.post<{email}>(`${Config.urlBase}/api/client/authorize`, {email}).toPromise();
  }



}
