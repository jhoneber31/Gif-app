import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'Naruto';
  test('debe mostrar el loading incialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });
    render(<GifGrid category={category}/>);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id:'abc',
        title: 'Naruto',
        url: 'https://localhots/naruto.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });
    render(<GifGrid category={category}/>);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(1);
  });
});