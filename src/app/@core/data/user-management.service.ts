import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "./config";
import {User} from "./models/user";

@Injectable()
export class UserManagementService {

  constructor(private http: HttpClient){

  }

  getUsers(skip: Number, max: Number): Promise<Array<User>> {
    return this.http.get<Array<User>>(`${Config.urlBase}/api/users?limit=${max}&skip=${skip}`).toPromise();
  }

  deleteUser(id: string): Promise<any> {
    return this.http.delete(`${Config.urlBase}/api/users/${id}`).toPromise();
  }

  getUser(id: string): Promise<User> {
    return this.http.get<User>(`${Config.urlBase}/api/users/${id}`).toPromise() as Promise<User>;
  }

  updateUser(id: string, user: User): Promise<any> {
    return this.http.put<User>(`${Config.urlBase}/api/users/${id}`, user).toPromise();
  }

}
