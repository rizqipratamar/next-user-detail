import { ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar, Button, PageHeader, Row, Tooltip } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../../contex";

const HeaderLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { selectedUser, theme } = useAppContext();
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
                      style={{ marginRight: "10px" }}
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
      </Row>
    </>
  );
};

export default HeaderLayout;
