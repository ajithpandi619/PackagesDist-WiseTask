import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import img1 from "../../assets/Packages Imgs/Coolest-Places-In-Tamilnadu.jpg";
import MaduraiPck from "./MaduraiPck";
import ChennaiPck from "./ChennaiPck";
import RameshwaramPck from "./RameshwaramPck";
import KodaikanalPck from "./KodaikanalPck";
import OotyPck from "./OotyPck";
import KaniyakumariPck from "./KaniyakumariPck";
import KumbakonamPck from "./KumbakonamPck";
import YercaudPck from "./YercaudPck";
import TheniPck from "./TheniPck";
import HogenakkalPck from "./HogenakkalPck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
function Packages() {
  return (
    <div className="container mt-5">
      <div>
        <Card style={{ border: "none" }} className="text-center">
          <h2>TAMILNADU TOURISM PACKAGES</h2>

          <Card.Body>
            <Card.Title>
              Explore Tamil Nadu: Unveiling the Riches of the South
            </Card.Title>

            <Card.Text>
              Welcome to our curated selection of captivating Tamil Nadu tourism
              packages that promise to take you on a remarkable journey through
              the cultural, spiritual, and natural wonders of this vibrant
              state. Whether you're a history enthusiast, a nature lover, or a
              seeker of tranquility, we have the perfect package to cater to
              your interests and create lasting memories.
            </Card.Text>
            <div>
              <Card.Title className="mt-5 mb-5">Package Highlights</Card.Title>
              <Card.Text className="mt-4  row row-cols-2">
                <ul>
                  <li>
                    <p style={{ textAlign: "justify" }} className="w-100">
                      <p className=" text-start fw-bolder "> Destinations:</p>{" "}
                      From the ancient city of Madurai to the serene landscapes
                      of Kodaikanal and the coastal beauty of Rameshwaram, each
                      package is thoughtfully designed to offer a unique
                      experience.
                    </p>
                  </li>
                  <li>
                    <p style={{ textAlign: "justify" }} className="w-100">
                      <p className=" text-start fw-bolder "> Experiences:</p>{" "}
                      Immerse yourself in the local culture through guided
                      temple tours, authentic culinary experiences, thrilling
                      adventures, and encounters with local artisans.
                    </p>
                  </li>

                  <li>
                    <p style={{ textAlign: "justify" }} className="w-100">
                      <p className=" text-start fw-bolder "> Accommodation:</p>{" "}
                      Enjoy comfortable stays in carefully selected hotels and
                      resorts that reflect the essence of each destination.
                    </p>
                  </li>
                  <li>
                    <p style={{ textAlign: "justify" }} className="w-100">
                      <p className=" text-start fw-bolder "> Guided Tours:</p>{" "}
                      Our expert guides will unravel the history, architecture,
                      and significance of each site, making your journey both
                      informative and engaging.
                    </p>
                  </li>
                </ul>
                <div>
                  <img
                    style={{
                      width: "600px",
                      height: "420px",
                      paddingLeft: "20px",
                    }}
                    src={img1}
                    alt=""
                  ></img>
                </div>
              </Card.Text>
            </div>

            <Button style={{ border: "none" }}>
              <a href="#chennai_expo">
                <span className="text-light fw-bolder"> Explore</span>
                <span className=" text-light fw-bolder ps-2  ">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </span>
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* sub cards */}
      <ChennaiPck></ChennaiPck>
      <RameshwaramPck></RameshwaramPck>
      <KodaikanalPck></KodaikanalPck>
      <OotyPck></OotyPck>
      <KaniyakumariPck></KaniyakumariPck>
      <KumbakonamPck></KumbakonamPck>
      <MaduraiPck></MaduraiPck>
      <YercaudPck></YercaudPck>
      <TheniPck></TheniPck>
      <HogenakkalPck></HogenakkalPck>
    </div>
  );
}

export default Packages;
