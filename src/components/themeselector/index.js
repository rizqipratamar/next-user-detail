import { css } from "@emotion/css";
import { Select } from "antd";
import { useAppContext } from "../../contex";
const { Option } = Select;

const ThemeSelector = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <Select
      defaultValue={theme.selected}
      className={css(`
      width: 120px ;
      border-radius: 12px;
      `)}
      onChange={(value) => {
        setTheme({ ...theme, selected: value });
        localStorage.setItem(
          "theme",
          JSON.stringify({ ...theme, selected: value })
        );
      }}
    >
      {theme.list?.map((theme, index) => (
        <Option value={theme} key={index}>
          {theme}
        </Option>
      ))}
    </Select>
  );
};

export default ThemeSelector;
