import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');
describe('pruebas en <GifGrid />', () =>{
    const category = 'One punch';
    test('debe de mostrar el loading inicialmente ', () =>{
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        //screen.debug();
    });
    test('debe mostar items cuando se cargan las imagenes useFetchGifs', () => {
        render(<GifGrid category={category}/>);
    });
});