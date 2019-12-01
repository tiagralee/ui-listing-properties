import React from 'react';
import SavedList from '../SavedList/SavedList'
import ResultList from '../ResultList/ResultList'
import { BodyWrapper, ListWrapper } from './App_styles'

const App = () => {
  return (
    <BodyWrapper>
      <div className="info">
        <h1>Listing properties</h1>
        <span> Nov 2019 | Made by Yiqi</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Results</h4>
            <ListWrapper>
              <ResultList/>
            </ListWrapper>
          </div>
          <div className="col">
            <h4>Saved Properties</h4>
            <ListWrapper>
              <SavedList />
            </ListWrapper>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default App;
