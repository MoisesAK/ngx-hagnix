import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  constructor(){

  }

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  }];

  async getData(): Promise<any> {
    return;
  }
}
