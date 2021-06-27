import React from "react";

// Theme-ui
import { Container, Heading, Button, Flex } from "theme-ui";

const Home = (props) => (
  <Container>
    <Flex sx={{ flexDirection: "column", padding: 3 }}>
      <Heading as="h1">Get Stuff Done</Heading>
      <Button
        sx={{ marginTop: 2, cursor: "pointer" }}
        onClick={() => {
          alert("clicked");
        }}
      >
        Log In
      </Button>
    </Flex>
  </Container>
);

export default Home;
