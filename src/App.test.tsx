import { render } from '@testing-library/react';
import App from './App'

describe('App', () => {

    test('App component should render', () => {
        render(<App />);
    })
});