import { Module } from '@nestjs/common'; 
import { HistoryModule } from './user-activity/user-activity.module';
import { UserActivity } from './user-activity/user-activity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [UserActivity],
      synchronize: true,
    }), 
    HistoryModule,
  ],
})
export class AppModule {}
