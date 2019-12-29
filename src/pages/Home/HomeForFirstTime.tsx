import React, { useState } from 'react';

import {
  TextForTitle,
  TextForParagraph,
} from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';

import { onChange, OnChangeEvent } from '../../utils/events';
import Field from '../../components/molecules/Field';

export interface HomeForFirstTimeProps {
  onNext: () => void;
}

export const HomeForFirstTime: React.FC<HomeForFirstTimeProps> = ({ onNext }) => {
  const [sender, setSender] = useState<string>('');

  const onChangeSender = (event: OnChangeEvent) =>
    onChange(event, setSender);

  const onClickSave = () => {
    localStorage.setItem('sender', sender);
    onNext();
  };

  return (
    <>
      <TextForTitle>
        반가워요!
      </TextForTitle>
      <TextForParagraph>
        올 한해, 수고한 사람들에게 감사장을 선물해 보세요.
      </TextForParagraph>
      <Field
        label="당신의 이름은"
        value={sender}
        onChange={onChangeSender}
      />
      <Button
        onClick={onClickSave}
      >
        시작하기
      </Button>
    </>
  );
};

export default HomeForFirstTime;
