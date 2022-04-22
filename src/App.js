import "./App.css";

import { IntlProvider } from "react-intl";

import Home from "./component/Home";
// import logo from "./logo.svg";

function App() {
  return (
    <IntlProvider locale="zh" defaultLocale="zh">
      {" "}
      <div className="App">
        {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Mio connect! hhh?

      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}

        <Home />
      </div>
    </IntlProvider>
  );
}

export default App;
