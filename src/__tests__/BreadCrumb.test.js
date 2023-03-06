import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import BreadCrumb from '../components/BreadCrumb.jsx';

describe('BreadCrumb component', () => {
  it('should render the correct breadcrumbs for the product page', () => {
    const product = {
      id: 123,
      brand: 'Example Brand',
      model: 'Example Model'
    };
    const { getByText } = render(
      <Router>
        <BreadCrumb product={product} />
      </Router>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Example Brand - Example Model')).toBeInTheDocument();
  });
});
