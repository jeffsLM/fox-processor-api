import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableFoxProcessor1674942843576 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fox_processor',
        columns: [
          { name: 'universal_anime_id', type: 'uuid' },
          { name: 'integration_service', type: 'varchar' },
          { name: 'key', type: 'uuid' },
          { name: 'last_version', type: 'varchar' },
          { name: 'episode', type: 'int' },
          { name: 'attempt', type: 'int' },
          { name: 'status', type: 'varchar' },
          { name: 'description', type: 'varchar' },
          { name: 'resolution', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fox_processor');
  }
}
