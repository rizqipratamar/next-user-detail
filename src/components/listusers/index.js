import React, { useEffect, useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Avatar, Button, List, message, Tooltip } from "antd";
import Link from "next/link";
import VirtualList from "rc-virtual-list";
import { useAppContext } from "../../contex";
import { css } from "@emotion/css";
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=id,name,gender,dob,location,email,nat,picture&noinfo";
const ContainerHeight = 500;

const ListUsersComponent = () => {
  const [lisUsers, setListUsers] = useState([]);
  const { setSelectedUser, theme } = useAppContext();

  const appendMoreUsers = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setListUsers(lisUsers.concat(body.results));
        message.success(`${body.results.length} more users loaded!`);
      })
      .catch((err) => {
        message.error(`${err.message}!`);
      });
  };

  useEffect(() => {
    appendMoreUsers();
  }, []);

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendMoreUsers();
    }
  };

  return (
    <div data-testid="list-users">
      <List>
        <VirtualList
          data={lisUsers}
          height={ContainerHeight}
          itemHeight={45}
          itemKey="email"
          onScroll={onScroll}
        >
          {(user) => (
            <List.Item
              key={user.email}
              className={css`
                padding: 5px;
                background-color: ${theme.selected};
                border-radius: 5px;
                &:hover {
                  background-color: white;
                }
              `}
            >
              <List.Item.Meta
                avatar={<Avatar src={user.picture.large} />}
                title={`${user.name.first} ${user.name.last}`}
                description={user.email}
              />
              <Tooltip title="See Detail">
                <Link href={user.email}>
                  <Button
                    type="dashed"
                    shape="circle"
                    icon={<EyeOutlined />}
                    size="medium"
                    className={css(`margin-right: 20px;`)}
                    onClick={() =>
                      setSelectedUser({
                        ...user,
                        description: `${user.name.title} ${user.name.first} ${user.name.last} is a ${user.gender} life at ${user.location.city} ${user.location.state} ${user.location.country}`,
                      })
                    }
                  />
                </Link>
              </Tooltip>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default ListUsersComponent;
