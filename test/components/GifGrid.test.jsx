import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('pruebas en <GifGrid />', () =>{
    const category = 'One punch';
    test('debe de mostrar el loading inicialmente ', () =>{
        render(<GifGrid/>);
    });
});