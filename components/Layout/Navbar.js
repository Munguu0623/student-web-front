import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space, Row, Button, TreeSelect } from "antd";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);



const onSearch = (value) => {};
export default function Navbar(second) {
  return (
    <>
      <Row className="h-12 max-w-full shadow-lg flex justify-between  bg-white">
        <Row className="flex justify-between w-full mx-10 items-center">
          <h1 className="text-blue-500 font-semibold text-lg">LOGO</h1>
          <Row>
            <Input
              placeholder="хайх утгаа оруулна уу?"
              style={{ width: 500, height: 33 }}
            />
            <Button
              type="primary"
              icon={<SearchOutlined className=" text-center" />}
              className="ml-2 bg-blue-500 text-white text-center "
            >
              хайх
            </Button>
          </Row>
        </Row>
      </Row>
    </>
  );
}
