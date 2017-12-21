import React, { Component } from "react";
import { Container } from "../../theme/Grid";
import { ImageBackground, RevealText } from "./Home.style";
import WhenInView from '../../components/WhenInView/WhenInView';

class Home extends Component {
  render() {
    return (
      <Container>
        <ImageBackground>
          <h1>Hello, I'm Ting</h1>
          <h3>Software Engineer & Web Developer</h3>
        </ImageBackground>
        <WhenInView>
          {({ isInView }) => 
            <RevealText hide={!isInView}>
              My name is Ting Wang. I am currently enrolled in Lambda School's computer science program. I am a software developer employing JavaScript, NodeJS, and React to create functionality and scalability of websites. Before joining Lambda School, I have worked for one year as a Ruby on Rails developer and one year as a quality assurance engineer. I am passinate about solving problems and providing solutions to any challenge that can be addressed with software applications concepts. I, enjoy the practice of meditation as well as running, in my down-time. 
            </RevealText>
          }
        </WhenInView>
      </Container>
    );
  }
}

export default Home;
