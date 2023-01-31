import { ListAnimeController } from '../useCase/listAnime/ListAnimeController';

interface IDataRequest {
  universal_anime_id: string;
}

class AnimeIsValidToProcess {
  async execute(data: IDataRequest): Promise<boolean> {
    const { universal_anime_id } = data;
    const listAnimeController = new ListAnimeController();

    const animeData = await listAnimeController.handle({
      universal_anime_id,
    });

    const attemptsToCancel = animeData.reduce(
      (acc, column) => acc + column.attempts_to_cancel_updates,
      0
    );

    return attemptsToCancel > 0;
  }
}

export { AnimeIsValidToProcess };
