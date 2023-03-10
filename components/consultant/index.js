import { Col, Row, Card } from "antd";

export default function Consultant(second) {
  const data = [
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
    {
      title: "Мэргэжил сонголтын тест",
      subtitle:
        "Мэргэжил сонголтын тест бөглөн та өөрт тохиорох мэргэжилээ олоорой",
    },
  ];

  return (
    <>
      <div
        className="2xl:mx-56 lg:mx-36 h-screen  
      "
      >
        <Col className=" flex flex-wrap justify-center ">
          <Row className="flex items-center">
            <div className="w-10 h-1 bg-yellow-500 mr-2"></div>
            <h1 className="text-2xl font-normal ">Мэргэжилийн зөвөлгөө</h1>
            <div className="w-10 h-1 bg-yellow-500 ml-2"></div>
          </Row>
        </Col>
        <div className="mt-20">
          <div className=" grid grid-cols-4 gap-4">
            {data.map((e) => {
              return (
                <div className="h-3/6 w-full flex flex-col justify-between mt-10">
                  <div className=" w-full h-3/6">
                    <div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md">
                      <div>
                        <div class="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                          <div class="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-8 h-8 fill-current text-red-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        <div class="relative block h-full">
                          <div class="h-32 bg-gray-100 rounded-lg"></div>
                        </div>
                      </div>

                      <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
                        {e.title}
                      </h2>

                      <p class="mt-2 text-gray-800 text-sm">{e.subtitle}</p>

                      <button class="mt-4 px-4 py-2 bg-[#0071DC] hover:bg-[#0579e6] text-white text-sm font-medium rounded-md w-full">
                        унших
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className=" w-3/12">
          <SmallCard />
        </div> */}
      </div>
    </>
  );
}
