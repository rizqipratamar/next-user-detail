import { AppWrapper } from "../src/contex";
import "../styles/globals.css";
import "antd/dist/antd.css";
import MainLayout from "../src/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppWrapper>
  );
}

export default MyApp;
