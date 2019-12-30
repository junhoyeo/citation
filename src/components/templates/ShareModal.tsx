import * as React from 'react';
import ReactModal from 'react-modal';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
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
}) => {
    const inputToCopy: React.RefObject<HTMLInputElement> = React.createRef();

    const onClickCopy = () => {
      const element: any = inputToCopy.current;
      element.select();
      document.execCommand('copy');
    };

    return (
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
          <ShareLinkInput
            ref={inputToCopy}
            value={shareLink}
            readOnly
          />
          <Button
            onClick={onClickCopy}
          >
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
  };

export default ShareModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShareText = styled(TextForSmalltitle)`
  margin: 0;
`;

const ShareLinkInput = styled(Input)`
  width: 100%;
  margin-bottom: 1rem;
`;
