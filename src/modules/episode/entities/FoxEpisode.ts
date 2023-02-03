import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('fox_episode')
class FoxEpisode {
  @Column()
  universal_anime_id: string;
  @Column()
  integration_service: string;
  @PrimaryColumn()
  integration_episode_id: string;
  @Column()
  episode: number;
  @Column()
  title: string;
  @Column()
  alternative_name: string;
  @Column()
  sub: string;
  @Column()
  resume: string;
  @Column()
  url: string;
  @Column()
  image: string;
  @Column()
  rateing?: number;
  @Column()
  last_version: string;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
  @Column()
  resolution: string;
  @Column()
  max_duration: string;

  constructor() {
    if (!this.integration_episode_id) {
      this.integration_episode_id = uuidV4();
    }
  }
}

export { FoxEpisode };
