import React from "react";

// Theme-ui
import { Heading, Button, Flex } from "theme-ui";

// Authentication
import netlifyIdentity from "netlify-identity-widget";

// Component
const HomeContent = () => {
  // Return
  return (
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
      <Button
        sx={{ marginTop: 2, cursor: "pointer" }}
        onClick={() => {
          console.log(netlifyIdentity.currentUser());
        }}
      >
        Log User
      </Button>
    </Flex>
  );
};

export default HomeContent;
