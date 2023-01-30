import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('fox_processor')
class FoxProcessor {
  @Column()
  universal_anime_id: string;
  @Column()
  integration_service: string;
  @PrimaryColumn()
  key: string;
  @Column()
  last_version: string;
  @Column()
  episode: number;
  @Column()
  attempt: number;
  @Column()
  status: string;
  @Column()
  description: string;
  @Column()
  resolution: string;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.key) {
      this.key = uuidV4();
    }
  }
}

export { FoxProcessor };
