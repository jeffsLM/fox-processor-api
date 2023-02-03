import { aPlus } from '../../../../service/aPlus';

interface IPlusObjectKeys {
  integration_id: string;
  title: string;
  image?: string;
}

interface IProviderPlusAnimeInfo {
  id: string;
  category_name: string;
  category_image: string;
}

export const GetValidPlusAnimes = async (term: string) => {
  var newAnimeData: IPlusObjectKeys[] = [];
  await aPlus
    .get('play-api.php?search=' + term.replace(/[0-9]/g, ''))
    .then((e) => {
      e.data.map((item: IProviderPlusAnimeInfo) =>
        newAnimeData.push({
          integration_id: item.id,
          title: item.category_name,
          image: item.category_image,
        })
      );

      return newAnimeData;
    })
    .catch(() => {
      console.log('ERRO', term);
    });

  return newAnimeData;
};
