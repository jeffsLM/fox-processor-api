import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('fox_user_history')
class FoxUserHistory {
  @Column()
  universal_anime_id: string;
  @PrimaryColumn()
  key: string;
  @Column()
  user: string;
  @Column()
  episode: number;
  @CreateDateColumn()
  watched_at: Date;
  @CreateDateColumn()
  last_viewed_at: Date;
  @Column()
  max_duration: number;
  @Column()
  progress: number;

  constructor() {
    if (!this.key) {
      this.key = uuidV4();
    }
  }
}

export { FoxUserHistory };
