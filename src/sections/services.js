/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import WebDevIcon from 'assets/key-feature/website-dev.jpg';
import MobileDevIcon from 'assets/key-feature/mobile-dev.jpg';
import QaDevIcon from 'assets/key-feature/qa-dev.png';
import BackendDevIcon from 'assets/key-feature/backend-dev.png';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: MobileDevIcon,
    altText: 'Mobile Development',
    title: 'Mobile Development',
    text:
      'From designing intuitive user interfaces to implementing complex functionalities, my expertise lies in delivering innovative mobile applications.'
  },
  {
    id: 2,
    imgSrc: WebDevIcon,
    altText: 'Frontend Development',
    title: 'Frontend Development',
    text:
      'I specialize in the creation of complex and great quality websites that are fully compatible with all devices, mobile and desktop. Though, I have deep understanding of the entire web development process from concept to deployment.',
  },
  {
    id: 3,
    imgSrc: QaDevIcon,
    altText: 'QA Testing',
    title: 'QA Testing',
    text:
      'I test and evaluate new and existing programs to identify and help remove bugs, glitches, and other user experience issues',
  },
  {
    id: 4,
    imgSrc: BackendDevIcon,
    altText: 'Backend Development',
    title: 'Backend Development',
    text:
      'I develop high-quality application programming interfaces (APIs) to ensure seamless integration with frontend systems while keeping up to date with terminology, concepts and best practices for coding mobile apps.',
  },
];

export default function KeyFeature() {
  return (
   <section sx = {{ variant: 'section.keyFeature' }} id = "service">
     <Container>
       <SectionHeader
          slogan = "My Services"
          title = "Meet the services that I provide"
       />

       <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key = {item.id}
              src = {item.imgSrc}
              alt = {item.FeatureCardColumn}
              title = {item.title}
              text = {item.text}
            />
          ))}
       </Grid>
     </Container>

   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
