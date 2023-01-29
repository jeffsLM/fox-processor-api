import { container } from 'tsyringe';

import { FoxAnimeRepository } from '../../modules/anime/implementations/FoxAnime';
import { IFoxAnimeRepository } from '../../modules/anime/repositories/IFoxAnimeRepository';

container.registerSingleton<IFoxAnimeRepository>('FoxAnimeRepository', FoxAnimeRepository);
