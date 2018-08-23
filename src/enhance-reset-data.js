// in a new EnhancedWidgetsReducer.js
switch (action.type) {
  DATA_LOADED:
    return inputReducer(clearWidgets(newState), action);
  default:
    return inputReducer(state, action);
}
