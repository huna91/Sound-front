// import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { useSelector } from "react-redux";
import Landing from ".";

// components
import { Layout, Loading } from "@/components";

export default function App({ Component, pageProps }) {
  // const isfirst = true;
  // const _landingAct = useSelector((state) => state.landingInfo);
  // console.log(_landingAct);
  console.log("APP");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {Component == Landing ? (
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
