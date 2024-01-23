import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => {
  test('should cambioar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={()=>{}}/>);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: 'Naruto'}});
    expect(input.value).toBe('Naruto');
    // screen.debug();
  });
  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Naruto';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory}/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should no debe llamar el onNewCategory si el input este vacio', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory}/>);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});