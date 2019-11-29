import React from 'react';
import List from '../List/List'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const savedProperties = useSelector(state => state.home.savedProperties);
  const allProperties = useSelector(state => state.home.allProperties);
  
  return (
    <div>
      <List> all properties</List>
      {savedProperties.map(x => console.log(x))};
      <List> saved properties </List>
    </div>
  );
};

export default App;
