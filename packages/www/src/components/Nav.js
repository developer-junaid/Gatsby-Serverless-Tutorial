import React, { useState } from "react";

// Theme-ui
import { Flex, NavLink } from "theme-ui";

// Authentication
import netlifyIdentity from "netlify-identity-widget";

// Gatsby
import { Link } from "gatsby";

const Nav = () => {
  const [user, setUser] = useState(); // User Status

  // On login
  netlifyIdentity.on("login", (user) => {
    netlifyIdentity.close();
    setUser(user);
  });

  // On logout
  netlifyIdentity.on("logout", () => setUser());

  return (
    <Flex as="nav">
      <NavLink as={Link} to="/" p={2}>
        Home
      </NavLink>
      <NavLink as={Link} to="/app" p={2}>
        Dashboard
      </NavLink>
      {user && (
        <NavLink href="#!" p={2}>
          {user.user_metadata.full_name}
        </NavLink>
      )}
    </Flex>
  );
};

export default Nav;
