import { css } from "@emotion/css";
import FooterLayout from "../components/footer";
import HeaderLayout from "../components/header";

const MainLayout = ({ children }) => (
  <div
    className={css(`
    padding: 50px;
    padding-top: 20px;
    `)}
  >
    <HeaderLayout />
    {children}
    {/* <FooterLayout /> */}
  </div>
);

export default MainLayout;
