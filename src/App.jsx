import React, { useState } from 'react';
import './App.scss';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Characters } from './components/Characters/Characters';
import { Episodes } from './components/Episodes/Episodes';
import { Locations } from './components/Locations';
import { MyWatchList } from './components/MyWatchList';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Characters" to="/" component={Link} />
          <Tab label="Episodes" to="/episodes" component={Link} />
          <Tab label="Locations" to="/location" component={Link} />
          <Tab label="My watch list" to="/myWatchList" component={Link} />
        </Tabs>
      </AppBar>

      <Switch>
        <Route path="/" exact component={Characters} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/location" component={Locations} />
        <Route path="/myWatchList" component={MyWatchList} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};
