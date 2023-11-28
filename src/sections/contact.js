/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';
import axios from 'axios';
import {useState} from 'react';
import $ from "jquery";

const data = [
  {
    id: 1,
    title: 'Set disbursement Instructions',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    title: 'Assembly retrieves funds from your account',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    title: 'Assembly initiates disbursement',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    title: 'Customer receives funds payment',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];


export default function WorkFlow() {
  
  const [beerList, setBeerList] = useState([]) 

  const getBeers = (e) => {
    e.preventDefault()

    axios.get('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
      .then(res => setBeerList(res.data))
      .catch(err => console.log(err))

  }

  return (
    
    <section sx = {{variant: 'section.workflow'}} id = "contact">
      <Container>
       <SectionHeader
        slogan = "Contact"
        title = "Let's get in touch! Leave me a message"
       />
       
       <div className="row">
          <div className="column" style = {{display: "flex", textAlign:'center', alignItems: "center", justifyContent: "center"}}>
            <form id="ContactForm" action="/action_page.php" >
              <label htmlFor="fname" style={{fontWeight: "bold"}}>First Name</label>
              <br/>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              <br/>
              <br/>
              <label htmlFor="lname" style={{fontWeight: "bold"}}>Last Name</label>
              <br/>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
              <br/>
              <br/>
              <label htmlFor="subject" style={{fontWeight: "bold"}}>Subject</label>
              <br/>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '170px'}} defaultValue={""} />
              <br/>
              <input id="submit_form" style = {{backgroundColor: "#00B276", border: "none", 
                              color: "white", padding: "16px 32px", fontWeight: "bold",
                              textDecoration: "none", margin: "4px 2px", cursor: "pointer"}} 
                              type="submit" defaultValue="Submit" />

            </form>

          </div>
        </div>

        
     </Container>

    </section>
    
  );
}



const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
