import axios from "axios";

const productStore = {
  namespaced: true,
  state: () => ({
    products: [],
    product: null,
    selectedProducts: [],
    itemsPerPage: 5,
    currentPage: 1,
    isListView: true,
    isLoading: false,
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    },
    toggleView(state, view) {
      state.isListView = view === "list";
    },
    addToCart(state, product) {
      const existingProduct = state.selectedProducts.find(p => p.product.id === product.id);
      if (existingProduct) {
        state.selectedProducts = state.selectedProducts.filter(
          (p) => p !== product
        );
      } else {
        state.selectedProducts.push({
          product,
          quantity: 1,
        });
      }
    },
    updateQuantity(state, { productId, quantity }) {
      if (quantity <= 0) {
        state.selectedProducts = state.selectedProducts.filter(
          item => item.product.id !== productId
        );
      }else {
        const productInCart = state.selectedProducts.find(
          item => item.product.id === productId
        );
        if (productInCart) {
          productInCart.quantity = quantity; 
        }
      }
    },

    // removeFromCart(state, productId) {
    //   state.selectedProducts = state.selectedProducts.filter(
    //     item => item.product.id !== productId
    //   );
    // },

    // clearCart(state) {
    //   state.selectedProducts = [];
    // },

    setItemsPerPage(state, value) {
      state.itemsPerPage = Number(value);

      state.currentPage = 1;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    nextPage(state) {
      state.currentPage++;
    },
    previousPage(state) {
      state.currentPage--;
    },
    
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const products = res.data.map((product) => ({
          id: product.id,
          imageSrc: product.image,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          link: "product/" + product.id,
        }));
        commit("setProducts", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async fetchProduct({ commit }, productId) {
      commit("setLoading", true);
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        commit("setProduct", res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        commit("setLoading", false);
      }
    },
    goToNextPage({ commit, state, getters }) {
      if (state.currentPage < getters.totalPages) {++
        commit("nextPage", state.currentPage + 1);
      }
    },
    goToPreviousPage({ commit, state }) {
      if (state.currentPage > 1) {
        commit("previousPage", state.currentPage - 1);
      }
    },
  },
  getters: {
    totalPages(state) {
      return Math.ceil(state.products.length / state.itemsPerPage);
    },
    displayedProducts(state) {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.products.slice(start, end);
    },

    getProduct: (state) => state.product,
    isLoading: (state) => state.isLoading,

    cartItems: (state) => state.selectedProducts,
    
    cartTotal: (state) => {
      return state.selectedProducts.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
    },

    cartItemCount: (state) => {
      return state.selectedProducts.reduce((total, item) => total + item.quantity, 0);
    },

    isInCart: (state) => (productId) => {
      return state.selectedProducts.some(item => item.product.id === productId);
    },

    getCartItem: (state) => (productId) => {
      return state.selectedProducts.find(item => item.product.id === productId);
    },

    getItemQuantity: (state) => (productId) => {
      const item = state.selectedProducts.find(item => item.product.id === productId);
      return item ? item.quantity : 0;
    }
  },
};

export default productStore;
