import { render } from "@testing-library/react";

import { GifItem } from "../src/components";

describe('Pruebas en <GifItem/>',  () => {
    test('debe verificar las propTypes', () => {
        const tilte = 67;
        const url = 12;
        const { container } = render(<GifItem key={1}/>)
        expect(container).toMatchSnapshot();
    });
});