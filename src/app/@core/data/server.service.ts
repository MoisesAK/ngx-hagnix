import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "./config";

export interface Server {
  name: String,
  players: number,
  capacity: number
}

@Injectable()
export class ServerService {
  constructor(private http: HttpClient){

  }

  getStatus(): Promise<Array<Server>> {
    return this.http.get<Array<Server>>(`${Config.urlBase}/api/server/status`).toPromise();
  }

}
