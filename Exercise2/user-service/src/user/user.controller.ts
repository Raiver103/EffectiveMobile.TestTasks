import { Controller, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Put('reset-problems')
  async resetProblems() {
    const updatedCount = await this.userService.updateUserProblems();
    return { updatedCount };
  }
}
