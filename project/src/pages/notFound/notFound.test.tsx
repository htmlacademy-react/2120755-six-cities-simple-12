/**
 * @jest-environment jsdom
 */
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './index';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const headerElement = screen.getByText('404 Not Found');
    const linkElement = screen.getByText(' Please procced to Main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
