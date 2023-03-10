import { Injectable } from '@nestjs/common';
import { DataSource, EntityTarget } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private dataSource: DataSource) {}

  getOneByField<T>(
    entity: EntityTarget<T>,
    field: keyof T,
    value: string,
  ): Promise<T> {
    return this.dataSource
      .getRepository(entity)
      .createQueryBuilder()
      .where(`"${field.toString()}" = :value`, { value })
      .getOne();
  }

  createOne<T>(entity: EntityTarget<T>, data: T): Promise<T> {
    return this.dataSource.getRepository(entity).save(data);
  }
}
