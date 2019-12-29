import styled from 'styled-components';

export const Text = styled.span`
`;

export default Text;

export const TextForTitle = styled(Text.withComponent('h1'))`
`;

export const TextForParagraph = styled(Text.withComponent('p'))`
`;
