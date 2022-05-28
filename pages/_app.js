import "../styles/globals.css";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import configureStore from "../utils/configureStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configureStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withRedux(configureStore)(MyApp);
