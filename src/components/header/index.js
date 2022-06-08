import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, PageHeader, Row, Tooltip } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import dynamic from "next/dynamic";
const ThemeSelector = dynamic(() => import("../themeselector"));

const HeaderLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Row>
        <PageHeader
          className="site-page-header"
          title={
            id ? (
              <>
                <Tooltip title="back">
                  <Link href={"/"}>
                    <Button
                      shape="circle"
                      icon={<ArrowLeftOutlined />}
                      size="small"
                      className={css(`
                        margin-right: 10px;
                      `)}
                    />
                  </Link>
                </Tooltip>
                Detail User
              </>
            ) : (
              "List Users"
            )
          }
          subTitle={`${id ? "Detail user" : "List random"} from randomuser.me`}
        />
        {!id && (
          <div className={css(`margin-top: 20px`)}>
            <span className={css(`margin-right: 20px`)}>Change Theme</span>
            <ThemeSelector />
          </div>
        )}
      </Row>
    </>
  );
};

export default HeaderLayout;
