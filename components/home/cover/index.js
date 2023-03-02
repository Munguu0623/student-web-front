import { Carousel, Row, Col, Card } from "antd";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
// import Image from "next/image";
import CoverArticle from "./article";
import BigSwiper from "./big-swiper";

export default function HomeCover(second) {
  useEffect(() => {
    axios
      .get("/api/profession-card-names")
      .then((res) => {
        console.log(res.data, "axios -------------------");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Col className="">
        <Row className=" flex justify-between h-screen  ">
          <div className="w-8/12 h-3/6 bg-white rounded-lg">
            <BigSwiper />
          </div>
          <Card className="w-3/12  h-3/6 bg-white rounded-lg">
            <Image src="/banner.png" layout="fill" />
          </Card>
          <div className=" ">
            <CoverArticle />
          </div>
        </Row>
      </Col>
    </>
  );
}
