import { Card, Row, Col, Space } from "antd";
import Link from "next/link";
const { Meta } = Card;

import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { gql } from "@apollo/client";
import sdk from "../../pages/api/graphql";
import { useEffect, useState } from "react";
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

export default function ProfessionCard() {
  const [professionNameData, setProfessionNameData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await sdk.query({
      query: gql`
        query {
          professionCardNames(pagination: { limit: 20 }) {
            data {
              attributes {
                cardTitle
              }
            }
          }
        }
      `,
    });
    const datas = result.data.professionCardNames.data.map((el) => {
      return el.attributes.cardTitle;
    });
    setProfessionNameData(datas);
  };

  // console.log(JSON.stringify(professionNameData));

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
        {professionNameData.map((el, index) => {
          return (
            <Col span={4} className="flex justify-center items-center my-5  ">
              <Link
                href={
                  "http://localhost:1337/admin/content-manager/collectionType/api::profession-card-name.profession-card-name?page=1&pageSize=10&sort=cardTitle:ASC"
                }
              >
                <Card
                  className=" w-44 h-60  relative "
                  bordered={false}
                  hoverable
                  key={index}
                  style={{ wordWrap: "break-word" }}
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
                  {/* <Meta title="12 мэргэжил" description={el} /> */}
                  <div className="  text-xs mb-2 text-blue-500 ">
                    +20 мэргэжил
                  </div>
                  <div className=" text-xs  font-normal  text-center  ">
                    {el}
                  </div>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

// export async function getStaticProps() {
//   // const sdk = ApolloSdk.getInstance();
// const result = await sdk.query({
//   query: gql`
//     query {
//       professionCardNames {
//         data {
//           id
//           attributes {
//             cardTitle
//           }
//         }
//       }
//     }
//   `,
// });

//   // console.log("----- result");
//   // console.log(result.data.professionCardNames.data);

//   return {
//     props: { data: result.data.professionCardNames.data },
//   };
// }
