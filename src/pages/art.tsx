import worksData from "../works-data.json";
import Image from "next/image";

export default function Art() {
  return (
    <div>
      <h1>this is where the art portfosadsdsadsal a sdsd goes</h1>
      <h2>number of works {worksData.length}</h2>
      {worksData.map((workData) => (
        <>
          <div key={workData.fileName}>
            <Image
              src={"/images/" + workData.fileName}
              alt="painting"
              width={1200}
              height={1200}
            />
            {workData.fileName}
            {workData.title}
            {workData.year}
          </div>
        </>
      ))}
    </div>
  );
}
