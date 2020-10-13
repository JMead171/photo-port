import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);


describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm
          />);
    });
    // Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('h1 and button are visible', () => {
    it('inserts text into the elements', () => {
      const { getByTestId } = render(
      <ContactForm
      />);
      expect(getByTestId('contactMe')).toHaveTextContent('Contact me');
      expect(getByTestId('button')).toHaveTextContent('Submit');
    });
})