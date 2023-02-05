import { Carousel, Row, Col } from "antd";
import Image from "next/image";
// import Image from "next/image";
import CoverArticle from "./article";
import BigSwiper from "./big-swiper";
export default function HomeCover(second) {
  return (
    <>
      <Col>
        <Row className=" flex justify-between h-screen  ">
          <div className="w-8/12 h-3/6 bg-white rounded-lg">
            <BigSwiper />
          </div>
          <div className="w-3/12  h-3/6 bg-white rounded-lg"></div>
          <CoverArticle />
        </Row>
      </Col>

      {/* 
        <Image
          src="/image-01.png"
          alt="Picture of the author"
          width={400}
          height={200}
        /> */}
    </>
  );
}
