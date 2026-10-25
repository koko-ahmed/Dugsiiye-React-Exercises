import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (name === "" || price === "") {
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  };

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add to Cart</button>

      <hr />

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>Price: ${product.price}</p>

          <p>Quantity: {product.quantity}</p>

          <button onClick={() => decreaseQuantity(product.id)}>
            -
          </button>

          <button onClick={() => increaseQuantity(product.id)}>
            +
          </button>

          <button onClick={() => removeProduct(product.id)}>
            Remove
          </button>

          <p>
            Product Total: ${product.price * product.quantity}
          </p>

          <hr />
        </div>
      ))}

      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
};

export default ShoppingCart;