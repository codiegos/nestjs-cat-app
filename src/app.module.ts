import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost' || process.env.DB_HOST,
      port: 3307 || parseInt(process.env.DB_PORT),
      username: 'user_crud' || process.env.DB_USER,
      password: 'root' || process.env.DB_PASSWORD,
      database: 'db_crud' || process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    BreedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
