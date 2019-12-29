import React, { useState } from 'react';
import Emoji from 'a11y-react-emoji';

import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import Illust from '../../components/atoms/Illust';
import {
  TextForTitle,
  TextForParagraph,
} from '../../components/atoms/Text';

import { onChange, OnChangeEvent } from '../../utils/events';
import Field from '../../components/molecules/Field';

import welcomeIllust from '../../assets/welcome.png';

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
      <Header>
        <TextForTitle>
          만나서<br />
          반가워요!
        </TextForTitle>
        <TextForParagraph>
          <Emoji symbol="🎉" />
          {' '}
          함께 2019년을 보낸 사람들에게 감사장을 선물해 보세요.
        </TextForParagraph>
      </Header>
      <Field
        label="당신의 이름은"
        placeholder="감사장을 보내는 사람의 이름을 입력하세요."
        value={sender}
        onChange={onChangeSender}
      />
      <Illust
        src={welcomeIllust}
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
