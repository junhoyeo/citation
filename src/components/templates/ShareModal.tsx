import * as React from 'react';
import ReactModal from 'react-modal';

import Button from '../atoms/Button';
import {
  TextForSmalltitle,
} from '../atoms/Text';
import SocialButtonList from '../organisms/SocialButtonList';
import styled from 'styled-components';

const stylesForModal: object = {
  content: {
    borderRadius: '4px',
    bottom: 'unset',
    left: 'unset',
    overflow: 'unset',
    padding: '2rem',
    position: 'relative',
    right: 'unset',
    top: 'unset',
    border: 'none',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.39)',
    display: 'flex',
    justifyContent: 'center',
  },
};

type ShareModalProps = {
  isOpen: boolean,
  shareLink: string,
  shareName: string,
  onRequestClose: () => void,
};

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen, shareLink, shareName, onRequestClose
}) => (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={stylesForModal}
    >
      <ModalContainer>
        <ShareText>
          공유하기
        </ShareText>
        <SocialButtonList
          shareLink={shareLink}
          shareName={shareName}
        />
        <Button>
          링크 복사하기
        </Button>
        <Button
          primary={false}
          onClick={onRequestClose}
        >
          닫기
        </Button>
      </ModalContainer>
    </ReactModal>
  );

export default ShareModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShareText = styled(TextForSmalltitle)`
  margin: 0;
`;
