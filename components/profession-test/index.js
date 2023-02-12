import { Col, Row, Card } from "antd";

export default function ProfessionTest(second) {
  return (
    <>
      <div
        className="2xl:mx-56 lg:mx-36 h-screen 
      "
      >
        <Col className=" flex flex-wrap justify-center ">
          <Row className="flex items-center">
            <div className="w-10 h-1 bg-yellow-500 mr-2"></div>
            <h1 className="text-2xl font-normal ">Мэргэжилийн тест</h1>
            <div className="w-10 h-1 bg-yellow-500 ml-2"></div>
          </Row>
        </Col>

        <Row className=" h-full w-full flex justify-center mt-20">
          <div className="w-2/12 mr-4">
            <div className="h-3/6 w-full flex flex-col justify-between ">
              <div className=" w-full h-3/6">
                <Card hoverable className=" h-full "></Card>
              </div>
              <div className=" w-full h-[12.8rem]">
                <Card hoverable className=" h-full"></Card>
              </div>
            </div>
          </div>
          <div className="w-4/12 h-3/6">
            <Card hoverable className="h-full"></Card>
          </div>
          <div className="w-2/12 ml-4">
            <div className="h-3/6 w-full flex flex-col justify-between ">
              <div className=" w-full h-3/6">
                <Card hoverable className=" h-full "></Card>
              </div>
              <div className=" w-full h-[12.8rem]">
                <Card hoverable className=" h-full"></Card>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
}
