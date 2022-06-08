import { css } from "@emotion/css";
import dynamic from "next/dynamic";
import FooterLayout from "../components/footer";
const HeaderLayout = dynamic(() => import("../components/header"));

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
