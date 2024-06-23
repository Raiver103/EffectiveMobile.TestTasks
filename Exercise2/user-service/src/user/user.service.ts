import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async updateUserProblems() {
    const usersWithProblems = await this.userRepository.count({
      where: { hasProblems: true },
    });

    await this.userRepository.update({ hasProblems: true }, { hasProblems: false });

    return usersWithProblems;
  }
}
