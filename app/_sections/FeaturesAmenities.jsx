import Features from "../_components/Features";
import FeaturesCard from "../_components/FeaturesCard";
import { featuresDescription } from "../_constants";

const FeaturesAmenities = () => {
  return (
    <section>
      <Features />
      <div className="max-w-6xl mx-auto text-[#00357B] flex flex-col items-center mt-14 px-4">
        <h1 className="text-center text-3xl sm:text-4xl font-light whitespace-pre-wrap leading-[0.8] sm:leading-[0.8] ">
          {`HARBOUR\nLIGHT`}
        </h1>
        <p className="text-[10px] mt-2">de GRISOGONO</p>
        <p className="text-[6px] leading-[0.2]">GENEVE</p>

        <div className="max-w-3xl text-center mt-10">
          <h1 className="text-3xl sm:text-4xl font-medium font-oswald uppercase">
            Features & Amenities
          </h1>
          <p className="text-black my-4">{featuresDescription}</p>
        </div>
      </div>

      <FeaturesCard />
    </section>
  );
};

export default FeaturesAmenities;
