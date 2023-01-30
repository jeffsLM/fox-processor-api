interface ICreateFoxEpisodeDTO {
  universal_anime_id: string;
  integration_service: string;
  integration_episode_id: string;
  episode: number;
  title: string;
  alternative_name: string;
  sub: string;
  resume: string;
  image?: string;
  rateing?: number;
  last_version: string;
  resolution: string;
  max_duration: string;
  created_at?: Date;
  updated_at: Date;
}

export { ICreateFoxEpisodeDTO };
