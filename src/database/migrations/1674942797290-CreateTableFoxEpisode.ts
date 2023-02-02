import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableFoxEpisode1674942797290 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fox_episode',
        columns: [
          { name: 'universal_anime_id', type: 'uuid' },
          { name: 'integration_service', type: 'varchar' },
          { name: 'integration_id', type: 'varchar', isPrimary: true },
          { name: 'episode', type: 'int' },
          { name: 'title', type: 'varchar' },
          { name: 'alternative_name', type: 'varchar' },
          { name: 'sub', type: 'varchar' },
          { name: 'resume', type: 'varchar' },
          { name: 'url', type: 'varchar' },
          { name: 'image', type: 'varchar', isNullable: true },
          { name: 'rateing', type: 'numeric', isNullable: true },
          { name: 'last_version', type: 'varchar' },
          { name: 'resolution', type: 'varchar', isNullable: true },
          { name: 'max_duration', type: 'varchar', isNullable: true },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fox_episode');
  }
}
