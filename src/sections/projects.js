/** @jsx jsx */
import { jsx, Container, Grid, Box, Heading, Text, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import projectsData from "lib/projects.data";

export default function Projects() {
  return (
    <section id="blog" sx={styles}>
      <SectionHeader slogan="Projects" title="My projects" />
      <Grid sx={styles.grid}>
        {projectsData.map((item, index) => (
          <div key={index} sx={styles.imgContainer}>
            <Image src={item.img} alt="project-img" sx={styles.img} />
            <div sx={styles.overlay}>
              <div sx={styles.text}>{item.title}</div>
            </div>
          </div>
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    px: "100px",
    gridTemplateColumns: "auto auto auto",
    alignItems: "center"
  },

  imgContainer: { 
    position: "relative", 
    cursor: "pointer",
    "&:hover": {
      opacity: 1
    }, 
  },

  img: { 
    display: "block", 
    width: "100%", 
    height: "auto" ,
    borderRadius: "10px",
    height: "300px"
  },

  overlay: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    height: "100%",
    width: "100%",
    opacity: 0,
    transition: ".5s ease",
    backgroundColor: "black",
    "&:hover": {
      opacity: 0.7
    }, 
  },
  text: {
    color: "white",
    fontSize: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "700"
  },
};
