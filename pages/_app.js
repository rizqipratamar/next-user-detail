import { ContexWrapper } from "../src/contex";
import "../styles/globals.css";
import "antd/dist/antd.css";
import MainLayout from "../src/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ContexWrapper>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ContexWrapper>
  );
}

export default MyApp;
