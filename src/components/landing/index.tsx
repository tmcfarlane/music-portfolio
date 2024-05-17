import { Button } from 'baseui/button';
import { Heading, HeadingLevel } from 'baseui/heading';
import { ParagraphSmall } from 'baseui/typography';
import { Block } from 'baseui/block';
import { styled } from 'baseui';

const StyledBlock = styled(Block, {
    padding: '48px', // equivalent to scale1200
    textAlign: 'center',
    marginTop: '60px' // Adjust this value based on the navbar height
  });

function Landing() {    
  return (
    <StyledBlock>
      <HeadingLevel>
        <Heading styleLevel={1}>Welcome to your Awakening</Heading>
        <ParagraphSmall>Explore my music, watch my performances, and see what's next!</ParagraphSmall>
        <Button>Watch My Latest Video</Button>
      </HeadingLevel>
    </StyledBlock>
  );
}

export default Landing;
