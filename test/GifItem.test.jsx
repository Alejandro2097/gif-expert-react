import { render } from "@testing-library/react";

import { GifItem } from "../src/components";

describe('Pruebas en <GifItem/>',  () => {
    const url = 'https://media3.giphy.com/media/ITol7gnfFqLEHGpG0t/giphy-downsized-medium.gif?cid';
    const title = 'Resident evil'
    test('debe verificar las propTypes', () => {
        const { container } = render(<GifItem url={url} title={title}/>)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen y la URL y ALT indicada', () => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').src).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url)
        expect(src).toBe(alt)
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GetItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
});