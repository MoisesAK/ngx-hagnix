export enum Roles {
  BAN_PLAYER = 'BAN_PLAYER',
  KICK_PLAYER = 'KICK_PLAYER',
  PARDON_PLAYER = 'PARDON_PLAYER',
  GET_PLAYERS = 'GET_PLAYERS',
  LOGGED_PLAYER = 'LOGGED_PLAYER',
  AUTHORIZE_PLAYER = 'AUTHORIZE_PLAYER'
}

export interface User {
  email: String,
  identifier: String,
  refreshToken: boolean
  admin: boolean,
  name: String,
  roles: Array<Roles>
}
