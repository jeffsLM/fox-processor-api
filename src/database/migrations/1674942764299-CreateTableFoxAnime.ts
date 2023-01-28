import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableFoxAnime1674942764299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fox_anime',
        columns: [
          { name: 'universal_anime_id', type: 'uuid', isUnique: true },
          { name: 'integration_service', type: 'varchar' },
          { name: 'integration_id', type: 'varchar' },
          { name: 'title', type: 'varchar' },
          { name: 'alternative_name', type: 'varchar' },
          { name: 'sub', type: 'varchar' },
          { name: 'resume', type: 'varchar' },
          { name: 'rateing', type: 'numeric', isNullable: true },
          { name: 'image', type: 'varchar', isNullable: true },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp' },
          { name: 'status', type: 'varchar', isNullable: true },
          { name: 'status_describe', type: 'varchar', isNullable: true },
          {
            name: 'attempts_to_cancel_updates',
            type: 'int',
            isNullable: true,
            default: '3',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fox_anime');
  }
}
