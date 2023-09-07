import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

const baseUrl = import.meta.env.VITE_BASE_FIREBASE;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.items.length <= 0) {
      return;
    }

    fetch(`${baseUrl}/cart.json`, {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
