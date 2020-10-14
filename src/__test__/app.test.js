import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App.js';
import Results from "../components/Results";
import History from "../components/History";

test('check render App ', () => {
    render(<App />); // I will have a screen -> get me an element
    const header = screen.getByTestId('header');
    const body = screen.getByTestId('main');
    const footer = screen.getByTestId('footer');
    expect(header).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();
});


test('check render results', () => {
  const json = { headers: "header", body: "header" }
  render (<Results json={json} />);
  const results = screen.getByTestId('results');
  expect(results).toBeTruthy();
})

test('check render history', () => {
  const items = [{ method: "get", url: "https://adnan" }];
  const selectItem = function (i){};
  render (<History selectItem={selectItem} items={items} />);
  const history = screen.getByTestId('history');
  expect(history).toBeTruthy();
})
