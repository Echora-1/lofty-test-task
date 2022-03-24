const getJson = (url) => fetch(url).then((res) => res.json());

async function asyncAwait() {
  try {
    const json1 = await getJson('/i/1.json');
    if (json1.key) {
      const json2 = await getJson('/i/2.json');
      return json2.key2;
    }
    throw new Error('No key');
  } catch (error) {
    console.log(error);
  }
}
