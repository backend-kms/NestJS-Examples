import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1215',
  database: 'nestjs-2025-study',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
