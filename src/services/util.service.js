import React from 'react';

function useLocalStorage(_itemName, _initialValue) {
  const [item, setItem] = React.useState(_initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(_itemName);

        if (localStorageItem) {
          setItem(JSON.parse(localStorageItem));
        } else {
          localStorage.setItem(_itemName, JSON.stringify(item));
        }

        setLoading(false);
      } catch (_error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItems) => {
    localStorage.setItem(_itemName, JSON.stringify(newItems));

    setItem(newItems);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
