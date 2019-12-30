import * as React from 'react';
import ReactModal from 'react-modal';

import Button from '../atoms/Button';
import {
  TextForSmalltitle,
} from '../atoms/Text';
import SocialButtonList from '../organisms/SocialButtonList';

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
    >
      <TextForSmalltitle>
        공유하기
      </TextForSmalltitle>
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
    </ReactModal>
  );

export default ShareModal;
