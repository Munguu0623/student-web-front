import { Carousel, Row, Col, Card } from "antd";
import Image from "next/image";
// import Image from "next/image";
import CoverArticle from "./article";
import BigSwiper from "./big-swiper";

export default function HomeCover(second) {
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
          <div className="w-full flex justify-around ">
            <CoverArticle />
          </div>
        </Row>
      </Col>
    </>
  );
}
