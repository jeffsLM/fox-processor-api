import { ICreateFoxAnimeDTO } from '../../../anime/dtos/ICreateFoxAnimeDTO';
import { ICreateFoxEpisodeDTO } from '../../../episode/dtos/ICreateFoxEpisodeDTO';
import { GetValidPlusAnimes } from '../PlusProvider/GetValidPlusAnimes';
class ProviderPlusAnimeInfo {
  async execute(data: ICreateFoxEpisodeDTO[]): Promise<ICreateFoxAnimeDTO[]> {
    let animeValidData: ICreateFoxAnimeDTO[] = [];
    await Promise.all(
      data.map(async (anime) => {
        const animeData: any = await GetValidPlusAnimes(anime.title);
        if (animeData && animeData.length > 0) {
          animeData.map((ani: ICreateFoxAnimeDTO) =>
            animeValidData.push({
              alternative_name: anime.alternative_name,
              integration_id: ani.integration_id,
              title: ani.title,
              image: ani.image,
              integration_service: 'PLUS_' + anime.universal_anime_id,
              resume: anime.resume,
              status: '',
              status_describe: '',
              sub: anime.sub,
              universal_anime_id: anime.universal_anime_id,
              updated_at: new Date(),
              attempts_to_cancel_updates: 3,
              created_at: anime.created_at,
              rateing: -1,
            })
          );
        }
      })
    );
    return animeValidData;
  }
}

export { ProviderPlusAnimeInfo };
