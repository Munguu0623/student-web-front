
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Row } from "antd";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);
export default function Navbar(second) {
  return (
    <>
      <Row>
        <h1 className="text-blue-500 text-lg font-medium">LOGO</h1>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </Row>
    </>
  );
}
