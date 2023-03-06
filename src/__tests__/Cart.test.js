import React from 'react';
import { createRoot } from 'react-dom/client';
import Cart from '../components/Cart';

describe('CartCount', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      createRoot(div).render(<Cart cartCount={0} localStorageCount={0} />);
    });
  });