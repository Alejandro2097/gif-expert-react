import { render } from "@testing-library/react";

import { GifItem } from "../src/components";

describe('Pruebas en <GifItem/>',  () => {
    const url = 'https://media3.giphy.com/media/ITol7gnfFqLEHGpG0t/giphy-downsized-medium.gif?cid';
    const title = 'Resident evil'
    test('debe verificar las propTypes', () => {
        const { container } = render(<GifItem url={url} title={title}/>)
        expect(container).toMatchSnapshot();
    });
});