// import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/lib/integration/react";

// components
import { Layout, Loading } from "@/components";

export default function App({ Component, pageProps }) {
  const isfirst = true;
  console.log("APP");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {isfirst ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        )}
      </PersistGate>
    </Provider>
  );
}
