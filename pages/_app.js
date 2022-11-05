import "../styles/globals.css";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import configureStore from "../utils/configureStore";
import Opening from "components/HomePage/Opening";
import { useState } from "react";

const store = configureStore();

function MyApp({ Component, pageProps }) {
  const [isShowOpening, setShowOpening] = useState(true);
  setTimeout(() => {
    setShowOpening(false);
  }, 4000);
  return (
    <Provider store={store}>
      {isShowOpening ? <Opening /> : null}
      <Component {...pageProps} isShowOpening={isShowOpening} />
    </Provider>
  );
}

export default withRedux(configureStore)(MyApp);
