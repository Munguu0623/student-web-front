import { Card, Row, Col, Space } from "antd";
import Link from "next/link";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from "@apollo/client";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Grid, Pagination } from "swiper";
import useFetch from "@/pages/hooks/fetchData";
import { useState } from "react";
import { Josefin_Sans } from "@next/font/google";
const datas = [
  {
    title: "Мэдээлэл технологи",
    icon: "icon",
  },
  {
    title: "Ангаах ухаан",
    icon: "icon",
  },
  {
    title: "Боловсрол ",
    icon: "icon",
  },
  {
    title: "Эрх зүй  ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
  {
    title: "Уул уурхай ",
    icon: "icon",
  },
];

export default function ProfessionCard({ messages }) {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/profession-card-names"
  );

  // var myObj = JSON.stringify(data);
  // const myArr = Object.values(myObj);
  // allData = data.forEach((el) => {
  //   return el;
  // });
  // console.log(myArr);

  return (
    <div className="2xl:mx-56 lg:mx-36 ">
      <Col className=" flex flex-wrap justify-center">
        <Row className="flex items-center">
          <div className="w-10 h-1 bg-yellow-500 mr-2"></div>
          <h1 className="text-2xl font-normal ">Мэргэжилүүдийн мэдээлэл</h1>
          <div className="w-10 h-1 bg-yellow-500 ml-2"></div>
        </Row>
      </Col>
      <Row
        className="mt-16 flex justify-between"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {datas.map((el) => {
          return (
            <Col span={4} className="flex justify-center items-center my-5  ">
              <Link
                href={
                  "http://localhost:1337/admin/content-manager/collectionType/api::profession-card-name.profession-card-name?page=1&pageSize=10&sort=cardTitle:ASC"
                }
              >
                <Card
                  className=" w-44 h-60  relative"
                  bordered={false}
                  hoverable
                >
                  <div className="bg-white w-full flex justify-end ">
                    <Image
                      src="/shape1.png"
                      width={60}
                      height={80}
                      className="absolute opacity-30  "
                    />
                  </div>
                  <Image
                    src="/Bouncer.svg"
                    className="text-blue-500"
                    alt="icon"
                    width={110}
                    height={110}
                  />

                  <h1 className="text-sm  font-semibold mt-8">{el.title}</h1>
                  <h1 className="  text-sm text-blue-500 ">+20 мэргэжил</h1>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
