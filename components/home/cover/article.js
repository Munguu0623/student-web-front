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
    <div className=" flex">
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="2xl:w-20 2xl:h-18 w-16 h-16 rounded-lg bg-green-400/20  flex justify-center items-center">
            <BsBookFill className=" text-xl text-green-400" />
          </div>
          <h1 className="font-semibold 2xl:text-xl text-lg ">Өөрийгөө нээх</h1>
          <h1 className="text-center 2xl:mt-2 mt-0">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="2xl:w-20 2xl:h-18 w-16 h-16 rounded-lg bg-red-400/20  flex justify-center items-center">
            <BsFillEnvelopeFill className=" text-xl text-red-400" />
          </div>
          <h1 className="font-semibold  2xl:text-xl text-lg">Өөрийгөө нээх</h1>
          <h1 className="text-center 2xl:mt-2 mt-0">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="2xl:w-20 2xl:h-18 w-16 h-16 rounded-lg bg-yellow-400/20  flex justify-center items-center">
            <BsFillEmojiHeartEyesFill className=" text-xl text-yellow-400" />
          </div>
          <h1 className="font-semibold 2xl:text-xl text-lg ">Өөрийгөө нээх</h1>
          <h1 className="text-center 2xl:mt-2 mt-0">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
      <Row>
        <div className="w-8/12 flex flex-col items-center">
          <div className="2xl:w-20 2xl:h-18 w-16 h-16 rounded-lg bg-indigo-400/20  flex justify-center items-center">
            <BsFillCalendar2WeekFill className=" text-xl text-indigo-400" />
          </div>
          <h1 className="font-semibold 2xl:text-xl text-lg ">Өөрийгөө нээх</h1>
          <h1 className="text-center 2xl:mt-2 mt-0">
            Хүсэл сонирхолтой байгаа эсэхээ яаж мэдэх вэ
          </h1>
        </div>
      </Row>
    </div>
  );
}
