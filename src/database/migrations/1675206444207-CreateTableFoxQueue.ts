import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableFoxQueue1675206444207 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fox_queue',
        columns: [
          { name: 'term', type: 'varchar' },
          { name: 'key', type: 'uuid', isPrimary: true },
          { name: 'process', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fox_queue');
  }
}
