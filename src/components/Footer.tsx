import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import cejlogo1 from "../assets/cejlogo1.png"
import Container from "./UI/Container";

const MyFooter = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <Container>
        <div className="px-4 lg:px-14 py-12">
          <div className="grid grid-cols-1 gap-8 items-start sm:mt-4 md:grid-cols-2 lg:grid-cols-4 md:gap-12 text-white">
            <div className="flex-1">
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img
                  src={cejlogo1}
                  alt=""
                  className="w-10 inline-block items-center"
                />
                <span className="conseil">CONSEIL EJ</span>
              </a>
              <div className="my-8">
                <p className="mb-1">
                  &copy; 2024 CONSEIL EJ, Tous droits réservés
                </p>
              </div>

              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
                <Footer.Icon
                  id="icone1"
                  href="https://www.facebook.com/profile.php?id=61555121257068"
                  icon={BsFacebook}
                  className="text-white"
                />
                <Footer.Icon
                  id="icone1"
                  href="https://www.tiktok.com/@conseil.ej"
                  icon={BsTiktok}
                  className="text-white"
                />
                <Footer.Icon
                  id="icone2"
                  href="https://www.instagram.com/conseilej_officiel"
                  icon={BsInstagram}
                  className="text-white"
                />
              </div>
            </div>
            <div className="flex-1">
              <Footer.Title
                id="footertitle"
                title="NOUS TROUVER"
                className="text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  id="link"
                  href="https://maps.app.goo.gl/nvCKxtpTU79hPnSY6"
                  className="text-white"
                >
                  110 SECTEUR 003132 RES LE GUELIZ BD MED V APT 10B DEVANT LYCCE
                  VICTOR HUGO
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex-1">
              <Footer.Title
                id="footertitle"
                title="COORDONNÉES"
                className="text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link id="link" href="" className="text-white ">
                  Tél : +212 661-656716
                </Footer.Link>
                <Footer.Link id="link" href="" className="text-white">
                  conceilej.contact@gmail.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex-1">
              <Footer.Title
                id="footertitle"
                title="HORAIRES"
                className="text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link id="link" href="" className="text-white">
                  Lundi - Samedi 9h00 à 18h00
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default MyFooter;
