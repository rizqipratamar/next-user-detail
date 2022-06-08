import { Avatar, Card } from "antd";
import moment from "moment";
import { useAppContext } from "../../contex";
import { css } from "@emotion/css";
const CardDetailUser = () => {
  const { selectedUser } = useAppContext();
  const noPaddingMargin = css`
    padding: 0;
    margin: 0;
  `;
  return (
    <Card
      className={css`
        text-align: center;
      `}
      bordered={false}
    >
      <Avatar size={"large"} src={selectedUser.picture.large} />
      <p className={noPaddingMargin}>
        {selectedUser.name.first} {selectedUser.name.last}
      </p>
      <p className={noPaddingMargin}>{selectedUser.email}</p>
      <p className={noPaddingMargin}>
        {selectedUser.gender},{" "}
        {moment(selectedUser.dob.date).format("DD-MM-YYYY")}
      </p>
      <p className={noPaddingMargin}>{selectedUser.description}</p>
    </Card>
  );
};

export default CardDetailUser;
