import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import PricingSection from "./../../components/PricingSection";
import ContactSection from "./../../components/ContactSection";
import Footer from "./../../components/Footer";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <div className="wrapper">
      <Navbar
        color="warning"
        spaced={true}
        logo="https://a.icons8.com/ZZvdvTlc/T1BkL5/group_3_objects.svg"
      />
      <HeroSection
        backgroundImage="https://images.pexels.com/photos/1598213/pexels-photo-1598213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        backgroundImageOpacity="0.7"
        color="dark"
        size="medium"
        title="Behöver du hjälp att bygga något där hemma?"
        subtitle="Vi på Nickerssons bygg arbetar i huvudsak med små och mellanstora byggentreprenader i Skåne-området. Inget är för litet och inget är för stort (nästan). Vi utför byggnadsarbeten samt mark, betong och byggarbeten."
        buttonText="Få en kostnadsfri offert"
        image="https://svgshare.com/i/E_c.svg"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        color="warning"
        size="medium"
        title="Våra Tjänster"
        subtitle="Vi kan hjälpa er med hela eller delar av byggentreprenaden. Vi samarbetar med de lokala el, ventilation och VVS entreprenörerna."
      />
      <ContactSection
        color="warning"
        size="medium"
        title="Hör av dig till oss för en kostnadsfri offert!"
        subtitle=""
        showNameField={true}
        buttonText="Skicka meddelande"
      />
      <Footer
        color="dark"
        size="medium"
        logo="https://a.icons8.com/ZZvdvTlc/T1BkL5/group_3_objects.svg"
        description="Vi erbjuder markarbete för både privatpersoner, bostadsrättföreningar, företag och offentliga sektorn. Vi finns inte på riktigt."
        copyright="© 2019 Nickerssons bygg"
      />
    </div>
  );
}

export default HomePage;
