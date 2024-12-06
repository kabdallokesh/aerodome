import SubHeading from "../TextComponents/SubHeading";
import Heading from "../TextComponents/Heading";
import NormalText from "../TextComponents/NormalText";
function Services() {
  return (
    <>
      <div>
        <SubHeading txt={"Services"} />
        <Heading txt={"Aerodome"} />
        <NormalText
          txt={
            "A spectacular display of LED-equipped drones transforming the night sky into a canvas of breathtaking visuals - think fireworks, but smarter, brighter, and way more fun!"
          }
        />
      </div>
    </>
  );
}

export default Services;
