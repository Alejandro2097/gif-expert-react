import { renderHook } from "@testing-library/react";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon ball'));
        const  {images , isLoading } = result.current;

        expect(images.length ).toBe(0);
        expect(isLoading).toBeTruthy();
    });
});