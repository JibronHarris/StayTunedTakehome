const { PrismaClient } = require('@prisma/client');
const userService = require('./src/api/services/user.services');

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.user.create({
  //   data: {
  //     name: 'Jibron',
  //     email: 'jibby@email.com',
  //   },
  // });

  // const allUsers = await prisma.user.findMany();

  // console.dir(allUsers, { depth: null });

  await prisma.product.create({
    data: {
      name: 'WarioWare Get It Together',
      price: 6000,
      imageUrl: 'https://m.media-amazon.com/images/I/81OtwJfV0uL._SY500_.jpg',
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
