interface IObjectKeys {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
}

export const DefineFireObjectKeys = (data: IObjectKeys[]): any => {
  let keys = ['title', 'image', 'rateing', 'sub', 'alternative_name', 'integration_id', 'date'];

  const dataObject = data.map((item) => {
    for (const [key] of Object.entries(item)) {
      renameKey(item, key, keys[key]);
    }
    return item;
  });

  return dataObject;
};

function renameKey(obj: IObjectKeys, old_key: string, new_key: string) {
  // check if old key = new key
  if (old_key !== new_key) {
    Object.defineProperty(
      obj,
      new_key, // modify old key
      // fetch description from object
      Object.getOwnPropertyDescriptor(obj, old_key)
    );
    delete obj[old_key]; // delete old key
  }
}
