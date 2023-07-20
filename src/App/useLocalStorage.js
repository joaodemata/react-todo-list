import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { sincronizedItem, error, loading, item } = state;


  // ACTION CREATORS

  const onError = (error) => {
    dispatch({ type: actionTypes.ERROR, payload: error });
  };

  const onSuccess = (item) => {
    dispatch({ type: actionTypes.SUCCESS, payload: item });
  };

  const onSave = (item) => {
    dispatch({ type: actionTypes.SAVE, payload: item });
  };

  const onSincronize = () => {
    dispatch({ type: actionTypes.SINCRONIZE });
  };

  // const [sincronizedItem, setSincronizedItem] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch(error) {
        onError(error);
        // setError(error);
      }
    }, 3000);
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch(error) {
      onError(error);
      // setError(error);
    }
  };


  const sincronizeItem = () => {
    onSincronize();
  };
  

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

const initialState = ({ initialValue }) => ( {
  sincronizeItem: true,
  error: false,
  loading: true, 
  item: initialValue
});

const actionTypes = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCSESS',
  SAVE: 'SAVE',
  SINCRONIZE: 'SINCRONIZE'
};

const reducerObject = (state, payload) => (
  {
    [actionTypes.ERROR]: {
      ...state, 
      error: true
    },
    [actionTypes.SUCCESS]: {
      ...state,
      error: false,
      item: payload,
      loading: false,
      sincronizedItem: true,
    },
    [actionTypes.SAVE]: {
      ...state,
      item: payload
    },
    [actionTypes.SINCRONIZE]: {
      ...state,
      sincronizedItem: false,
      loading: true
    }
  }
);

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};


export { useLocalStorage };
