import React, { createContext, useReducer } from "react";
import { SIDEBAR_OPEN } from "../types";

/**
 * @Note !!! Don't mind the redux terminologies here, we are still using 'React Context + Hooks' only!
 */
const initialState = {
  sidebarOpen: false,
};

const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    sidebarOpen: state.sidebarOpen,
    setSidebarOpen: () => dispatch({ type: SIDEBAR_OPEN }),
  };

  return <Provider value={value}>{children}</Provider>;
};

export { store, StateProvider };
