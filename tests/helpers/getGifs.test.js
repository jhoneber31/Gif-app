import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', () => {
  test('should pruebas en getGifs', async() => {
    const gifs = await getGifs('Naruto');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id:expect.any(String),
      title:expect.any(String),
      url:expect.any(String),
    });
  });
});