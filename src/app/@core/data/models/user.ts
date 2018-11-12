export enum Roles {
  BAN_PLAYER = 'BAN_PLAYER',
  KICK_PLAYER = 'KICK_PLAYER',
  PARDON_PLAYER = 'PARDON_PLAYER',
  GET_PLAYERS = 'GET_PLAYERS',
  LOGGED_PLAYER = 'LOGGED_PLAYER',
  AUTHORIZE_PLAYER = 'AUTHORIZE_PLAYER'
}

export interface User {
  id?: string
  name: string,
  CPF: string,
  CEP: string,
  bairro: string,
  street: string,
  password: string,
  house: string,
  complement: string,
  admin: boolean,
  roles:Array<Roles>,
  email: string
}
