interface ICreateFoxQueueDTO {
  term: string;
  key?: string;
  process: string;
  created_at: Date;
  updated_at: Date;
}

export { ICreateFoxQueueDTO };
