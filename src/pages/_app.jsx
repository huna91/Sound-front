// import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/lib/integration/react";

// components
import { Layout, Loading } from "@/components";

export default function App({ Component, pageProps }) {
  console.log("APP");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={Loading}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </PersistGate>
    </Provider>
  );
}
