export const flags = [
  {
    flag: 'not_found',
    type: [
      {
        variantAttemp: false,
        message: (txt: string) => `episódio não encontrado${txt}`,
      },
      {
        variantAttemp: true,
        message: (txt: string) => `anime finalizado`,
      },
    ],
  },
  {
    flag: 'success',
    type: [
      {
        variantAttemp: false,
        message: (txt: string) => `novo epsodio indexado${txt}`,
      },
      {
        variantAttemp: true,
        message: (txt: string) => `novo epsodio indexado${txt}`,
      },
    ],
  },
  {
    flag: 'fail',
    type: [
      {
        variantAttemp: false,
        message: (txt: string) => `error - ${txt}`,
      },
      {
        variantAttemp: true,
        message: (txt: string) => `error - ${txt}`,
      },
    ],
  },
  {
    flag: 'passthought',
    type: [
      {
        variantAttemp: false,
        message: (txt: string) => `service alterado${txt}`,
      },
      {
        variantAttemp: true,
        message: (txt: string) => `anime finalizado - sem provedor disponivel${txt}`,
      },
    ],
  },
];
