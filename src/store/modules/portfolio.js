const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCKS(state, { id, quantity, stockPrice }) {
    const record = state.stocks.find(e => e.id === id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: id,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCKS(state, { id, quantity, stockPrice }) {
    const record = state.stocks.find(e => e.id === id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCKS", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(e => e.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
