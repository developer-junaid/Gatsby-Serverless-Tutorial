import React, { useEffect } from "react";

// Authentication
import netlifyIdentity from "netlify-identity-widget";

// Theme-ui
import { Container } from "theme-ui";

// Components
import Nav from "./../components/Nav";
import HomeContent from "./../components/HomeContent";

// Home
const Home = (props) => {
  useEffect(() => {
    // Initialize netlify-identity
    netlifyIdentity.init({});
  }, []);

  return (
    <Container>
      <Nav />
      <HomeContent />
    </Container>
  );
};

export default Home;
