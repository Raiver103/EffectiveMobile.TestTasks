import { Module } from '@nestjs/common';
import { UserActivityService } from './user-activity.service';
import { UserActivityController } from './user-activity.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserActivity } from './user-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserActivity])],
  providers: [UserActivityService],
  controllers: [UserActivityController]
})
export class HistoryModule {}
