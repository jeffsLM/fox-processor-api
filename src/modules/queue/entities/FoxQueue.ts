import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('fox_queue')
class FoxQueue {
  @Column()
  term: string;
  @PrimaryColumn()
  key: string;
  @Column()
  process: string;
  @CreateDateColumn()
  created_at: number;
  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.key) {
      this.key = uuidV4();
    }
  }
}

export { FoxQueue };
