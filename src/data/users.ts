export interface UserData {
  id: number;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  userStatus: number;
  username: string;
  requiresModeration: boolean;
}

export const Users: UserData[] = [{
  id: 1,
  name: 'Adam Apple',
  email: 'a.apple@gmail.com',
  firstName: 'Adam',
  lastName: 'Apple',
  phone: '01234567890',
  userStatus: 1,
  username: 'a.apple',
  requiresModeration: false,
},
{
  id: 2,
  name: 'Ben Banana',
  email: 'b.banana@gmail.com',
  firstName: 'Ben',
  lastName: 'Banana',
  phone: '01234567891',
  userStatus: 1,
  username: 'b.banana',
  requiresModeration: true,
},
{
  id: 3,
  name: 'Colin Clementine',
  email: 'c.clementine@gmail.com',
  firstName: 'Colin',
  lastName: 'Clementine',
  phone: '01234567892',
  userStatus: 0,
  username: 'c.clementine',
  requiresModeration: false,
}];
