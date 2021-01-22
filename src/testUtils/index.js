import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import { middlewares } from "../redux/store/store";
import rootReducer from "../redux/reducers/rootReducer";

export const findByTestAttribute = (component, attribute) => {
  const data = component.find(`[data-test='${attribute}']`);
  return data;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propsError;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
