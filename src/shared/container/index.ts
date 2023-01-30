import { container } from 'tsyringe';

import { FoxAnimeRepository } from '../../modules/anime/implementations/FoxAnimeRepository';
import { IFoxAnimeRepository } from '../../modules/anime/repositories/IFoxAnimeRepository';

import { FoxEpisodeRepository } from '../../modules/episode/implementations/FoxEpisodeRepository';
import { IFoxEpisodeRepository } from '../../modules/episode/repositories/IFoxEpisodeRepository';

import { FoxUserHistoryRepository } from '../../modules/user_history/implementations/FoxUserHistoryRepository';
import { IFoxUserHistoryRepository } from '../../modules/user_history/repositories/IFoxUserHistoryRepository';

import { FoxProcessorRepository } from '../../modules/processor/implementations/FoxProcessorRepository';
import { IFoxProcessorRepository } from '../../modules/processor/repositories/IFoxProcessorRepository';

container.registerSingleton<IFoxAnimeRepository>('FoxAnimeRepository', FoxAnimeRepository);

container.registerSingleton<IFoxEpisodeRepository>('FoxEpisodeRepository', FoxEpisodeRepository);

container.registerSingleton<IFoxUserHistoryRepository>(
  'FoxUserHistoryRepository',
  FoxUserHistoryRepository
);

container.registerSingleton<IFoxProcessorRepository>(
  'FoxProcessorRepository',
  FoxProcessorRepository
);
