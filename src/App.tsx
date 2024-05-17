import { ALIGN, StyledNavigationList, StyledNavigationItem, HeaderNavigation } from 'baseui/header-navigation';
import { Button } from 'baseui/button';

function App() { 
  return (
    <>
    
    <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>Dot's Music</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>About</StyledNavigationItem>
          <StyledNavigationItem>Shows</StyledNavigationItem>
          <StyledNavigationItem>Videos</StyledNavigationItem>
          <StyledNavigationItem>Blog</StyledNavigationItem>
          <StyledNavigationItem>Book Me</StyledNavigationItem>
        </StyledNavigationList>
        </HeaderNavigation>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to My Music World</h1>
        <p>Explore my music, watch my performances, and see what's next!</p>
        <Button>Watch My Latest Video</Button>
      </div>
    </>
  );
}

export default App;