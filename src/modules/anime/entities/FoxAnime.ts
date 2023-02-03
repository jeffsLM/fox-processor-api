import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('fox_anime')
class FoxAnime {
  @PrimaryColumn()
  universal_anime_id: string;
  @Column()
  integration_service: string;
  @Column()
  integration_id: string;
  @Column()
  title: string;
  @Column()
  alternative_name: string;
  @Column()
  sub: string;
  @Column()
  resume: string;
  @Column()
  rateing?: number;
  @Column()
  image: string;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
  @Column()
  status: string;
  @Column()
  status_describe: string;
  @Column()
  attempts_to_cancel_updates: number;

  //   constructor() {
  //     if (!this.universal_anime_id) {
  //       this.universal_anime_id = uuidV4();
  //     }
  //   }
}

export { FoxAnime };
