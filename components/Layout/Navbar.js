import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Space, Row, Button, TreeSelect, Layout, Col } from "antd";
const { Search } = Input;
import Link from "next/link";
import Image from "next/image";
const { Header, Content, Footer, Sider } = Layout;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => {};
export default function Navbar(props) {
  return (
    <>
      <Layout>
        <Header className="p-0" style={{ padding: 0 }}>
          <Row className="h-16 max-w-full shadow-lg flex justify-between  bg-white">
            <Row className="flex justify-between w-full mx-24 items-center">
              <Link href="/" passHref>
                <Image
                  src="/logo.png"
                  height={8}
                  width={150}
                  alt="moli-logo"
                  className="cursor-pointer"
                />
              </Link>
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
        </Header>
        <Content>
          <Row justify="center" style={{ minHeight: "100vh" }}>
            <Col className="content" span={23}>
              {props.children}
            </Col>
          </Row>
        </Content>

        <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Image src="/logo.png" width={100} height={100} />
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Нүүр
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Бидний тухай
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Үйлчилгээ
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Холбоо барих
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 1{" "}
            <a
              href="https://www.facebook.com/mungunerdene.mungnuu"
              class="hover:underline"
            >
              MOLI™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </Layout>
    </>
  );
}
