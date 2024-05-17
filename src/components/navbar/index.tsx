import { ALIGN, StyledNavigationList, StyledNavigationItem, HeaderNavigation } from 'baseui/header-navigation';
import { Button } from "baseui/button";
import { styled } from "baseui";

const StyledNavbarContainer = styled("div", {
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
});

function Navbar() {
  return (
    <StyledNavbarContainer>
        {/* Ignore the IDE error on this next line.
        The error is due to the fact that the IDE does not recognize the HeaderNavigation component.
        This is because the IDE does not have the type definitions for the Base Web library.
        The code will compile and run without any issues. */}
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>About Me</StyledNavigationItem>
          <StyledNavigationItem>Upcoming Shows</StyledNavigationItem>
          <StyledNavigationItem>Videos</StyledNavigationItem>
          <StyledNavigationItem>Blog</StyledNavigationItem>
          <StyledNavigationItem><Button>Book Me</Button></StyledNavigationItem>
        </StyledNavigationList>
        </HeaderNavigation>
    </StyledNavbarContainer>
  );
}

export default Navbar;