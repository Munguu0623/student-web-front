import { Card, Row, Col, Space } from "antd";
import Image from "next/image";
const { Meta } = Card;

export default function Consultant(second) {
  const data = [
    {
      title: "Мэргэжил сонголтын зөвөлгөө ",
      description:
        " Нэгдүгээрт, өөрийн сонирхол чухал. Хүн дуртай зүйлдээ цаг хугацаа, сэтгэл зүрхээ зориулахад бэлэн байдаг",
      img: "/consultant-1.png",
    },
    {
      title: "Мэргэжил сонгох 5 алхам ",
      description:
        "Хүн төрөлхтөн одоогийн байдлаар 40 мянга гаруй мэргэжлээр бие биедээ үйлчилгээ үзүүлж байна гэсэн дүгнэлт байдаг аж",
      img: "/consultant-2.png",
    },
    {
      title: "Мэргэжил сонголтонд анхаарах зүйлс",
      description:
        "- Би 10 жилийн дараа хаана байх вэ? Өөрийгөө дэлхийгээр аялж байгаагаар эсвэл оффист ажиллаж буйгаар харж байна уу",
      img: "/consultant-3.png",
    },
  ];

  return (
    <>
      <div className="2xl:mx-56 lg:mx-36 ">
        <Col className=" flex flex-wrap justify-center">
          <Row className="flex items-center">
            <div className="w-10 h-1 bg-yellow-500 mr-2"></div>
            <h1 className="text-2xl font-normal ">Мэргэжилүүдийн мэдээлэл</h1>
            <div className="w-10 h-1 bg-yellow-500 ml-2"></div>
          </Row>
        </Col>

        <Row>
          {data.map((el) => {
            return (
              <Card
                className="bg-[#cce6ff]/30"
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={el.img} />}
              >
                <Meta title={el.title} description={el.description} />
              </Card>
            );
          })}
        </Row>
      </div>
    </>
  );
}
