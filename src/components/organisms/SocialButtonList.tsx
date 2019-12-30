import * as React from 'react';
import styled from 'styled-components';

import SocialButton from '../molecules/SocialButton';

import {
  shareWithKakaotalk,
  shareWithFacebook,
} from '../../utils/share';

import facebookLogo from '../../assets/social/facebook.png';
import kakaotalkLogo from '../../assets/social/kakaotalk.png';

type SocialButtonListProps = {
  shareLink: string,
  shareName: string,
};

export const SocialButtonList: React.FC<SocialButtonListProps> = ({ shareLink, shareName }) => (
  <ListContainer>
    <SocialButton
      buttonID="kakao-share-button"
      name="카카오톡"
      source={kakaotalkLogo}
      onClick={() => shareWithKakaotalk(shareLink, shareName)}
    />
    <SocialButton
      name="페이스북"
      source={facebookLogo}
      onClick={() => shareWithFacebook(shareLink, shareName)}
    />
  </ListContainer>
);

export default SocialButtonList;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 400px;
`;
