import genericStore from "./genericStore";

const productStore = genericStore("products", []);

productStore.addProducts = (productsToAdd) => {
    productStore.setState((state) => ({
      products: productsToAdd,
    }));
  };

export default productStore;