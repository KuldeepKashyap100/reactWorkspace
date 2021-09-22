import { useReducer, useCallback } from "react";

const httpReducer = (currentState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { ...currentState, loading: false, data: action.data, requestType: action.requestType, ingredientId: action.ingredientId };
    case "ERROR":
      return { ...currentState, error: "Something went wrong!" };
    case "CLEAR":
      return { ...currentState, error: null };
    default:
      throw new Error("Should not get there!");
  }
};

const useHttp = () => {
  const [httpState, httpDispatch] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const sendRequest = useCallback((url, method, body, requestType, ingredientId) => {
    httpDispatch({
      type: "SEND",
    });
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseData) => {
        httpDispatch({
          type: "RESPONSE",
          data: responseData,
          requestType: requestType,
          ingredientId: ingredientId
        });
      })
      .catch((err) => httpDispatch({ type: "ERROR" }));
  }, []);

  return {
    loading: httpState.loading,
    error: httpState.error,
    ingredientDetails: httpState.data,
    sendRequest: sendRequest,
    requestType: httpState.requestType,
    ingredientId: httpState.ingredientId
  };
};

export default useHttp;
