import React, { useContext, useEffect } from 'react';

import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const fetchMeals = async (url) => {
  try {
    const { data } = await axios(url);

    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

const AppProvider = ({ children }) => {
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ name: 'John', role: 'student' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
