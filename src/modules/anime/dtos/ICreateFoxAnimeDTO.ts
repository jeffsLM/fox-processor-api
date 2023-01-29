interface ICreateFoxAnimeDTO {
  universal_anime_id: string;
  integration_service: string;
  integration_id: string;
  title: string;
  alternative_name: string;
  sub: string;
  resume: string;
  rateing?: number;
  image?: string;
  created_at?: Date;
  updated_at: Date;
  status: string;
  status_describe: string;
  attempts_to_cancel_updates?: number;
}

export { ICreateFoxAnimeDTO };
