interface ICreateFoxUserHistoryDTO {
  universal_anime_id: string;
  key: string;
  user: string;
  episode: number;
  watched_at: Date;
  last_viewed_at: Date;
  max_duration: number;
  progress: number;
}

export { ICreateFoxUserHistoryDTO };
