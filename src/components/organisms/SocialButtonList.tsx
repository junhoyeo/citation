import * as React from 'react';
import styled from 'styled-components';

import SocialButton from '../molecules/SocialButton';

import {
  ShareWithFacebook,
  ShareWithKakaotalk,
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
      name="페이스북"
      source={facebookLogo}
      onClick={() => ShareWithFacebook(shareLink, shareName)}
    />
    <SocialButton
      name="카카오톡"
      source={kakaotalkLogo}
      onClick={() => ShareWithKakaotalk(shareLink, shareName)}
    />
  </ListContainer>
);

export default SocialButtonList;

const ListContainer = styled.div`
`;
