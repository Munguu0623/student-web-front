import { Row } from "antd";
import Image from "next/image";
export default function HomeCover(second) {
  return (
    <>
      <Row className="flex  justify-around  mt-16">
        <Image
          src="/image.png"
          alt="Picture of the author"
          width={800}
          height={200}
        />
        <Image
          src="/image-01.png"
          alt="Picture of the author"
          width={400}
          height={200}
        />
      </Row>
    </>
  );
}
