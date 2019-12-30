import styled from 'styled-components';

export const Text = styled.span`
  color: #272b6e;
`;

export default Text;

export const TextForTitle = styled(Text.withComponent('h1'))`
  margin: 0;
  font-weight: 900;
  font-size: 2.2rem;
  line-height: 1.45;
`;

export const TextForSubtitle = Text.withComponent('h2');

export const TextForSmalltitle = Text.withComponent('h3');

export const TextForParagraph = Text.withComponent('p');

export const TextForLabel = Text.withComponent('label');
