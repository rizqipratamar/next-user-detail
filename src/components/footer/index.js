import { Footer } from "antd/lib/layout/layout";
import { css } from "@emotion/css";

function FooterLayout() {
  return (
    <Footer
      className={css`
        text-align: center;
      `}
    >
      Ant Design ©2022
    </Footer>
  );
}

export default FooterLayout;
