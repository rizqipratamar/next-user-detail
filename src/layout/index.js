import FooterLayout from "../components/footer";
import HeaderLayout from "../components/header";

const MainLayout = ({ children }) => (
  <div style={{ padding: 50, paddingTop: 20 }}>
    <HeaderLayout />
    {children}
    {/* <FooterLayout /> */}
  </div>
);

export default MainLayout;
