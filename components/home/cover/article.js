import { Col, Row } from "antd";

import { FaBeer } from "react-icons/fa";
import {
  BsBookFill,
  BsFillCalendar2WeekFill,
  BsFillEmojiHeartEyesFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

export default function CoverArticle(second) {
  return (
    <Row className=" flex flex-nowrap">
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-lg bg-green-400/20  flex justify-center items-center">
            <BsBookFill className=" text-xl text-green-400" />
          </div>
          <h1 className="font-semibold text-xl">Өөрийгөө нээх</h1>
          <h1 className="text-center mt-2">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-lg bg-red-400/20  flex justify-center items-center">
            <BsFillEnvelopeFill className=" text-xl text-red-400" />
          </div>
          <h1 className="font-semibold text-xl">Өөрийгөө нээх</h1>
          <h1 className="text-center mt-2">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-lg bg-yellow-400/20  flex justify-center items-center">
            <BsFillEmojiHeartEyesFill className=" text-xl text-yellow-400" />
          </div>
          <h1 className="font-semibold text-xl">Өөрийгөө нээх</h1>
          <h1 className="text-center mt-2">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-lg bg-indigo-400/20  flex justify-center items-center">
            <BsFillCalendar2WeekFill className=" text-xl text-indigo-400" />
          </div>
          <h1 className="font-semibold text-xl">Өөрийгөө нээх</h1>
          <h1 className="text-center mt-2">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
    </Row>
  );
}
