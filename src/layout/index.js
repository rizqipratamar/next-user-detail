import FooterLayout from "../components/footer";
import HeaderLayout from "../components/header";

const MainLayout = ({ children }) => (
  <>
    <HeaderLayout />
    {children}
    {/* <FooterLayout /> */}
  </>
);

export default MainLayout;
