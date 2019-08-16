import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Nybyggnation",
              description:
                "Vi utför nybyggnation av hus i Skåne. Om du vill att byggnationen ska gå enkelt och smidigt så erbjuder vi totalentreprand, så du bara behöver ha kontakt med en person under hela nybyggnationen på ditt hus.",
              image: "https://svgshare.com/i/Ea8.svg"
            },
            {
              title: "Renovering",
              description:
                "Vi har behörigheter att utföra tätskiktsarbeten enligt branschregler BBK och vi är medlemmar i PER. Vi utför renovering av kök och badrum och nyproduktion vid t.ex. utbyggnad. Efter utfört arbete förser vi våra kunder med Byggkeramikrådets tätskiktsintyg som ger en garanti på tätskitningen.",
              image: "https://svgshare.com/i/E_n.svg"
            },
            {
              title: "Tillbyggnation",
              description:
                "Vi bygger tillbyggnader som källarutgrävning, påbyggnader och ombyggnader. När vi bygger uppfyller vi krav på bygg och konstruktionsregler, tillbyggnader är det svåraste att bygga.",
              image: "https://svgshare.com/i/EZZ.svg"
            },
            {
              title: "Markarbeten",
              description:
                "Vi har rätt utrustning för att kunna utföra markarbetet runt om i Skåne och för både stora och små projekt. Vi kan bland annat hjälpa er med att avlägsna förorenad jord och även deponering av jordschaktning, rivning och markberedning. ",
              image: "https://svgshare.com/i/EZq.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
