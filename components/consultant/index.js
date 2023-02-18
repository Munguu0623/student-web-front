import { Card, Row, Col, Space, Typography, Rate } from "antd";
import { useState } from "react";
import Image from "next/image";
const { Meta } = Card;
const { Title } = Typography;
export default function Consultant(second) {
  const [value, setValue] = useState(2);
  const desc = ["bad", "normal", "good"];
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
    {
      title: "Мэргэжил сонголтонд анхаарах зүйлс",
      description:
        "- Би 10 жилийн дараа хаана байх вэ? Өөрийгөө дэлхийгээр аялж байгаагаар эсвэл оффист ажиллаж буйгаар харж байна уу",
      img: "/consultant-3.png",
    },
  ];

  const cardTitle = {
    maxWidth: "80%",
    wordWrap: "break-word",
  };

  return (
    <>
      <div className="2xl:mx-56 lg:mx-36 h-screen flex flex-col justify-center">
        <Col className=" flex flex-wrap justify-center">
          <Row className="flex items-center">
            <div className="w-10 h-1 bg-yellow-500 mr-2"></div>
            <h1 className="text-2xl font-normal ">Мэргэжилийн зөвөлгөө</h1>
            <div className="w-10 h-1 bg-yellow-500 ml-2"></div>
          </Row>
        </Col>
        <Row className="mt-20 flex justify-around">
          {data.map((el) => {
            return (
              <Row className=" ">
                <Card
                  size="small"
                  className="bg-[#cce6ff]/30 "
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={el.img} />}
                >
                  <div className="flex justify-end">
                    <span className="">
                      <Rate
                        count={3}
                        tooltips={desc}
                        onChange={setValue}
                        value={value}
                        size="small"
                      />
                    </span>
                  </div>
                  <div className="font-medium mb-3 leading-none">
                    {el.title}
                  </div>
                  <div className="font-light  text-xs text-justify ">
                    {el.description}
                  </div>
                </Card>
              </Row>
            );
          })}
        </Row>
      </div>
    </>
  );
}
