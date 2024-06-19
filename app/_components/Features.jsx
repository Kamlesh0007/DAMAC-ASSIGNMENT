import Image from "next/image";
import { features } from "../_constants";

const Features = () => {
  return (
    <div className=" bg-[#F4F9FF]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 ">
        {features.map((features, index) => (
          <div
            key={index}
            className="flex flex-col  items-center my-4 md:my-8 text-[#00357B] font-semibold"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 ">
              <Image
                src={features.src}
                alt={features.title}
                width={48}
                height={48}
                className="object-contain "
              />
            </div>
            <h1 className="mt-4 text-sm">{features.title}</h1>
            <p className="text-2xl sm:text-3xl font-oswald">{features.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
