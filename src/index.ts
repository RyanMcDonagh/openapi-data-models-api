import { fastify } from 'fastify';
import { User } from 'ryan-mcdonagh-data-models-v2-user';
import { Users, UserData } from './data/users';

const server = fastify({ logger: true });

// Declare a route
server.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

server.get('/users', (req, res) => {
  res.send({ users: mapUsers(Users) });
})

// Run the server!
server.listen(3000, (err, address) => {
  if (err) {
    process.exit(1);
  }
  server.log.info(`server listening on ${address}`);
});

const mapUsers = (users: UserData[]): User[] => {
  const result = Users.map(u => mapUser(u);

  return result;
};

const mapUser = (u: UserData): User => ({
  id: u.id,
  email: u.email,
  firstName: u.firstName,
  lastName: u.lastName,
  phone: u.phone,
  userStatus: u.userStatus,
  username: u.username,
  requiresModeration: u.requiresModeration,
});
