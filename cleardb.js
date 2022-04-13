const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const allProperties = Reflect.ownKeys(Object.getPrototypeOf(prisma));
const modelNames = allProperties.filter(
  (x) =>
    x != 'constructor' &&
    x != 'on' &&
    x != 'connect' &&
    x != 'runDisconnect' &&
    x != 'disconnect'
);

for (modelName of modelNames) {
  // handle async stuff
  prisma[modelName].deleteMany();
}
