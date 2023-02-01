interface ICreateFoxProcessorDTO {
  universal_anime_id: string;
  integration_service: string;
  key?: string;
  last_version: string;
  episode: number;
  attempt: number;
  status: string;
  description: string;
  resolution: string;
  created_at: Date;
}

export { ICreateFoxProcessorDTO };
