import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import store from "../redux/store";
import MainView from "../containers/mainView";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainView />
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
};

export default React.memo(App);
