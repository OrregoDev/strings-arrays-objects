// Inventory management system

let products = [];

function creatProduct() {
  const name = prompt('Enter the name of the product:');
  const price = parseFloat(prompt('Enter the price of the product:'));
  const quantity = parseInt(prompt('Enter the quantity of the product:'));
  const description = prompt('Enter the description of the product:');

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
    quantity: quantity,
    description: description,
  };

  products.push(newProduct);
}

function duplicateProduct() {
  const id = parseInt(prompt('Enter the ID of the product to duplicate:'));
  const originalProduct = products.find((product) => product.id === id);

  if (originalProduct) {
    const existingCopies = products.filter((product) =>
      product.name.includes('Copy')
    );
    const suffix =
      existingCopies.length > 0
        ? ` Copy ${existingCopies.length + 1}`
        : ' Copy';
    const newProduct = Object.assign({}, originalProduct, {
      id: products.length + 1,
      name: originalProduct.name + suffix,
    });

    products.push(newProduct);
    console.log('Product duplicated successfully.');
  } else {
    console.log('Product not found.');
  }
}

function listProducts() {
  products.forEach((product) => {
    console.log(
      `ID: ${product.id}, name: ${product.name}, price: ${product.price}, quantity: ${product.quantity}, Description: ${product.description}`
    );
  });
}

function searchProduct() {
  const option = prompt('Search by name (1) or price (2)?');
  if (option === '1') {
    const nameToSearch = prompt('Enter the name of the product to search:');
    const foundProducts = products.filter((product) =>
      product.name.includes(nameToSearch)
    );
    foundProducts.forEach((product) => {
      console.log(
        `ID: ${product.id}, name: ${product.name}, price: ${product.price}, quantity: ${product.quantity}, description: ${product.description}`
      );
    });
  } else if (option === '2') {
    const minPrice = parseFloat(prompt('Enter the minimum price:'));
    const maxPrice = parseFloat(prompt('Enter the maximum price:'));
    const foundProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    foundProducts.forEach((product) => {
      console.log(
        `ID: ${product.id}, name: ${product.name}, price: ${product.price}, quantity: ${product.quantity}, description: ${product.description}`
      );
    });
  } else {
    console.log('Invalid option. Please try again.');
  }
}

function updateProduct() {
  const id = parseInt(prompt('Enter the ID of the product to update:'));
  const product = products.find((product) => product.id === id);

  if (product) {
    const name = prompt('Enter the new name of the product:');
    const price = parseFloat(prompt('Enter the new price of the product:'));
    const quantity = parseInt(prompt('Enter the new quantity of the product:'));
    const description = prompt('Enter the new description of the product:');

    Object.assign(product, {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    });
    console.log('Product updated successfully.');
  } else {
    console.log('Product not found.');
  }
}

function removeProduct() {
  const id = parseInt(prompt('Enter the ID of the product to remove:'));
  products = products.filter((product) => product.id !== id);
  console.log('Product removed successfully.');
}
