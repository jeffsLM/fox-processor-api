import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableFoxUserHistory1674942825999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fox_user_history',
        columns: [
          { name: 'universal_anime_id', type: 'uuid' },
          { name: 'key', type: 'uuid', isPrimary: true },
          { name: 'user', type: 'varchar' },
          { name: 'episode', type: 'int' },
          { name: 'watched_at', type: 'timestamp', isNullable: true },
          { name: 'last_viewed_at', type: 'timestamp', isNullable: true },
          { name: 'max_duration', type: 'numeric' },
          { name: 'progress', type: 'numeric' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fox_user_history');
  }
}
