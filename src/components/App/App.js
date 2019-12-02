import React from 'react';
import SavedList from '../SavedList/SavedList'
import ResultList from '../ResultList/ResultList'
import { BodyWrapper, ListWrapper, Intro} from './App_styles'

const App = () => {
  return (
    <BodyWrapper>
      <Intro>
        <h1>Listing properties</h1>
        <span> Dec 2019 | Made by Yiqi</span>
      </Intro>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <h4>Results</h4>
            <ListWrapper>
              <ResultList/>
            </ListWrapper>
          </div>
          <div className="col-lg-6 col-sm-12">
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
