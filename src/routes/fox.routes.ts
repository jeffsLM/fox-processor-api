import { Router } from 'express';

import { HttpsSeachAnimeController } from '../modules/anime/useCase/httpsSeachAnime/httpsSeachAnimeController';
import { HttpsListLastAnimeController } from '../modules/anime/useCase/httpsListLastAnime/httpsListLastAnimeController';
import { HttpsListAllEpisodeController } from '../modules/episode/useCase/httpsListAllEpisode/HttpsListAllEpisodeController';
import { HttpsListAnimeController } from '../modules/anime/useCase/httpsListAnime/httpsListAnimeController';

const foxRoutes = Router();

const httpsSeachAnimeController = new HttpsSeachAnimeController();
const httpsListLastAnimeController = new HttpsListLastAnimeController();
const httpsListAllEpisodeController = new HttpsListAllEpisodeController();
const httpsListAnimeController = new HttpsListAnimeController();

foxRoutes.post('/search', httpsSeachAnimeController.handle);
foxRoutes.post('/last', httpsListLastAnimeController.handle);
foxRoutes.post('/animes', httpsListAnimeController.handle);
foxRoutes.post('/episodes', httpsListAllEpisodeController.handle);

export { foxRoutes };
