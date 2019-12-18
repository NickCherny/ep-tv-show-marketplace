import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = ({ children }) => {
  return (
    <main>
      <AppBar position="relative">
        <Toolbar>
          Hmm...
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <article>
          {children}
        </article>
      </Container>
    </main>
  )
};

export default MainLayout;
