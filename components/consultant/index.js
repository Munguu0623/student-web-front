import { Col, Row, Card } from "antd";
import SmallCard from "./card";

export default function Consultant(second) {
  return (
    <>
      <div
        className="2xl:mx-56 lg:mx-36 h-screen  bg-gray-500
      "
      >
        <Col className=" flex flex-wrap justify-center ">
          <Row className="flex items-center">
            <div className="w-10 h-1 bg-yellow-500 mr-2"></div>
            <h1 className="text-2xl font-normal ">Мэргэжилийн зөвөлгөө</h1>
            <div className="w-10 h-1 bg-yellow-500 ml-2"></div>
          </Row>
        </Col>
        <div className="flex ">
          <div className=" w-3/12">
            <SmallCard />
          </div>
        </div>

        {/* <div className=" w-3/12">
          <SmallCard />
        </div> */}
      </div>
    </>
  );
}
