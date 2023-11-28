/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";
import { Flex } from "@theme-ui/components";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "HTML/CSS + JS",
    title: "HTML/CSS + JS",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Vue JS",
    title: "Vue JS",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Next JS",
    title: "Next JS",
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: "Angular JS",
    title: "Angular JS",
  },
  {
    id: 5,
    imgSrc: Subscription,
    altText: "Flutter",
    title: "Flutter",
  },
  {
    id: 6,
    imgSrc: Subscription,
    altText: "React Native",
    title: "React Native",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="about">
      <Container>
        <SectionHeader slogan="About Me" title="Software Engineer" />
        <h1 style={{ fontSize: "20px", textAlign: "center" }}>
          I am passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips?
        </h1>

        <h2
          style={{
            marginTop: "100px",
            fontSize: "30px",
            textAlign: "center",
            color: "red",
          }}
        >
          My skills
        </h2>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.FeatureCardColumn}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "start",
    pt: [0, null, null, null, null, null, 2],
    // px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: "100px 100px 100px 100px",
  },
};
