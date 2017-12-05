import { AppComponent } from './app.component';
import { OfflineCartService } from './offline-cart.service';

describe('AppComponent', () => {
  let component : AppComponent;
  let product = function() { return {'product': {id: 2, price: 2}, 'size': 'GG', 'quantity': 2} }

  beforeEach(() => {
    component = new AppComponent(new OfflineCartService);

  });

  it('Should add product to cart', () => {
    component.addProductToCart(product())

    expect( component.productsInCart[0].product ).toBeTruthy();
    expect( component.productsInCart[0].size ).toBe('GG');
    expect( component.productsInCart[0].quantity ).toBe(2);
  })

  it('Should increment existing products in cart', () => {
    component.addProductToCart(product())
    component.addProductToCart(product())

    expect( component.productsInCart[0].quantity ).toBe(4);
  })

  it('Should delete a product from cart', () => {
    component.addProductToCart(product())
    component.deleteProduct({id: 2, 'size': 'GG', 'quantity': 2})

    expect( component.productsInCart.length ).toBe(0);
  })

  it('Should calculate the total amount of the cart', () => {
    component.addProductToCart(product())
    component.addProductToCart(product())

    component.calcTotalPrice()

    expect( component.totalPrice ).toBe(8);
  })
});
