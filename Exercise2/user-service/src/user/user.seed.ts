import { User } from './user.entity';
import { createConnection } from 'typeorm';
import { config } from 'dotenv';

config(); 
async function seed() {
  const connection = await createConnection();

  const userRepository = connection.getRepository(User);

  for (let i = 0; i < 1_000_000; i++) {
    const user = new User();
    user.firstName = `FirstName${i}`;
    user.lastName = `LastName${i}`;
    user.age = Math.floor(Math.random() * 100);
    user.gender = ['male', 'female'][Math.floor(Math.random() * 2)];
    user.hasProblems = Math.random() < 0.5;

    await userRepository.save(user);
  }

  await connection.close();
}
seed().then(() => {
  console.log('Seeding complete!');
  process.exit();
}).catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1);
});