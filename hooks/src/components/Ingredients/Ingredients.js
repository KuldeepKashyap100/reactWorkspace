import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from "../../hooks/useHttp";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.ingredientId);
    default:
      throw new Error('Should not get there!');
  }
};


const Ingredients = () => {
  // use useReducer whenener you have state a bit complex
  // and want to have different ways to change the state like delete, add and set
  // and newState also depends on prevState
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const {loading, error, ingredientDetails, sendRequest, requestType, ingredientId} = useHttp();
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(); 

  useEffect(() => {
    if(requestType === "ADD_INGREDIENT") {
      dispatch({type: "ADD", ingredient: ingredientDetails});
    }
    else if(requestType === "DELETE_INGREDIENT") {
      dispatch({type: "DELETE", ingredientId: ingredientId});
    }
  }, [requestType, ingredientDetails, ingredientId]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    // setIsLoading(true);
    sendRequest("http://localhost:8080", "POST", ingredient, "ADD_INGREDIENT");
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(ingredientId => {
    // setIsLoading(true);
    // httpDispatch({type: "SEND"});
    // fetch(
    //   `http://localhost:8080/id=${ingredientId}`,
    //   {
    //     method: 'DELETE'
    //   }
    // )
    //   .then(response => {
    //     // setIsLoading(false);
    //     // setUserIngredients(prevIngredients =>
    //     //   prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    //     // );
    //     dispatch({ type: 'DELETE', id: ingredientId });
    //     httpDispatch({ type: 'RESPONSE'});
    //   })
    //   .catch(error => {
    //     // setError('Something went wrong!');
    //     // setIsLoading(false);
    //     httpDispatch({ type: 'ERROR', errorMessage: error.message})
    //   });
    sendRequest("http://localhost:8080/id="+ingredientId, "DELETE", null, "DELETE_INGREDIENT", ingredientId);
  }, [sendRequest]);

  const clearError = useCallback(() => {
    // setError(null);
    // httpDispatch({type: 'CLEAR'});
  }, []);

  const ingredientList =  useMemo(() => {
    return (<IngredientList
      ingredients={userIngredients}
      onRemoveItem={removeIngredientHandler}
    />);
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={loading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
