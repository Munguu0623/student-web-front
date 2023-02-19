import { Card, Row, Col, Avatar } from "antd";
import { useState } from "react";
import Image from "next/image";
import { AntDesignOutlined } from "@ant-design/icons";
export default function University(second) {
  const data = [
    {
      id: "1",
      title: "муис",
      logo: "/muis.png",
    },
    {
      id: "2",
      title: "муис",
      logo: "/muis.png",
    },
    {
      id: "3",
      title: "муис",
      logo: "/muis.png",
    },
    {
      id: "4",
      title: "муис",
      logo: "/muis.png",
    },
    {
      id: "5",
      title: "муис",
      logo: "/muis.png",
    },
    {
      id: "6",
      title: "муис",
      logo: "/muis.png",
    },
    {
      id: "7",
      title: "муис",
      logo: "/muis.png",
    },
  ];

  return (
    <>
      <div className="2xl:mx-56 lg:mx-36 h-screen flex flex-col  ">
        <Col className=" flex flex-wrap justify-center mb-20">
          <Row className="flex items-center">
            <div className="w-10 h-1 bg-yellow-500 mr-2"></div>
            <h1 className="text-2xl font-normal ">Их дээд сургууль</h1>
            <div className="w-10 h-1 bg-yellow-500 ml-2"></div>
          </Row>
        </Col>
        <Image src="/map.png" width={2000} height={1000} />
        <div className="flex mt-20">
          {data.map((el, i) => {
            return (
              <>
                <div className="relative w-full h-full" key={i}>
                  <div className="w-32 h-32 rounded-full bg-white absolute ">
                    <div className="h-full flex justify-center items-center   ">
                      <Image src={el.logo} width={100} height={50} />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
