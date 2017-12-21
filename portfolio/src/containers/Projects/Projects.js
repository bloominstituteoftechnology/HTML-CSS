import React, { Component } from "react";
import { ImageButton, Index, Title } from "./Projects.style";
import { Container, Relative, Flex } from "../../theme/Grid";

class Projects extends Component {
  render() {
    return (
      <Container>
        <Title>Projects</Title>
        <Relative marginBottom="50px" marginTop="100px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1>Project Name</h1>
        </Relative>
        <Flex justify={"center"} marginBottom="5rem">
          <ImageButton>
            <img src={require("../../assets/placeholder.jpg")} alt="" />
          </ImageButton>
        </Flex>

        <Relative marginBottom="50px" marginTop="100px">
          <Index>
            <h1>02</h1>
          </Index>
          <h1>Project Name</h1>
        </Relative>
        <Flex justify={"center"} marginBottom="5rem">
          <ImageButton>
            <img src={require("../../assets/placeholder.jpg")} alt="" />
          </ImageButton>
        </Flex>

        <Relative marginBottom="50px" marginTop="100px">
          <Index>
            <h1>03</h1>
          </Index>
          <h1>Project Name</h1>
        </Relative>
        <Flex justify={"center"} marginBottom="5rem">
          <ImageButton>
            <img src={require("../../assets/placeholder.jpg")} alt="" />
          </ImageButton>
        </Flex>
      </Container>
    );
  }
}

export default Projects;
