import React, { useEffect } from "react";

// Authentication
import netlifyIdentity from "netlify-identity-widget";

// Theme-ui
import { Container, Heading, Button, Flex } from "theme-ui";

const Home = (props) => {
  useEffect(() => {
    // Initialize netlify-identity
    netlifyIdentity.init({});
  }, []);

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button
          sx={{ marginTop: 2, cursor: "pointer" }}
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Log In
        </Button>
      </Flex>
    </Container>
  );
};

export default Home;
