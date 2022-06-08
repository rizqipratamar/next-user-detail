import { Avatar, Card } from "antd";
import moment from "moment";
import { useAppContext } from "../../contex";

const CardDetailUser = () => {
  const { selectedUser, theme } = useAppContext();
  return (
    <Card style={{ textAlign: "center" }} bordered={false}>
      <Avatar size={"large"} src={selectedUser.picture.large} />
      <p style={{ padding: 0, margin: 0 }}>
        {selectedUser.name.first} {selectedUser.name.last}
      </p>
      <p style={{ padding: 0, margin: 0 }}>{selectedUser.email}</p>
      <p style={{ padding: 0, margin: 0 }}>
        {selectedUser.gender},{" "}
        {moment(selectedUser.dob.date).format("DD-MM-YYYY")}
      </p>
      <p style={{ padding: 0, margin: 0 }}>{selectedUser.description}</p>
    </Card>
  );
};

export default CardDetailUser;
