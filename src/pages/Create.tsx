import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Emoji from 'a11y-react-emoji';

import Layout from '../components/Layout';
import Field from '../components/molecules/Field';
import Button from '../components/atoms/Button';
import Header from '../components/atoms/Header';
import {
  TextForTitle,
  TextForParagraph,
} from '../components/atoms/Text';
import { ICard } from '../components/organisms/Card';
import ShareModal from '../components/templates/ShareModal';

import { encodeString } from '../utils/encoding';
import { onChange, OnChangeEvent } from '../utils/events';

const Create: React.FC<RouteComponentProps> = ({ history }) => {
  const [name, setName] = useState<string>('');
  const [thanks, setThanks] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');
  const [shareLink, setShareLink] = useState<string>('');
  const [shareName, setShareName] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [savedIndex, setSavedIndex] = useState<number>(0);

  useEffect(() => {
    setShareName(
      localStorage.getItem('sender') || '알 수 없음',
    );
  }, []);

  const onGenerate = () => {
    const encodedData = [
      encodeString(name),
      encodeString(thanks),
      encodeString(prefix),
      encodeString(shareName),
    ].join('|');

    const rootURL = window.location.href.split('/').slice(0, -1).join('/');
    setShareLink(`${rootURL}/result/${encodedData}`);
  };

  const onChangeAndGenerate = (
    event: OnChangeEvent,
    handler: React.Dispatch<React.SetStateAction<string>>,
  ) => {
      onChange(event, handler);
      onGenerate();
    };

  const onChangeName = (event: OnChangeEvent) =>
    onChangeAndGenerate(event, setName);

  const onChangeThanks = (event: OnChangeEvent) =>
    onChangeAndGenerate(event, setThanks);

  const onChangePrefix = (event: OnChangeEvent) =>
    onChangeAndGenerate(event, setPrefix);

  const onOpenModal = (): void => {
    if (!name || !thanks) {
      toast.error(`${name ? '감사 인사를' : '이름을'} 입력해 주세요!`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }
    toast.dismiss();

    const currentCard: ICard = {
      name,
      thanks,
      prefix,
    };

    const storedCards = localStorage.getItem('cards');
    const cards = storedCards ? JSON.parse(storedCards) : [];
    if (saved) {
      cards[savedIndex] = currentCard;
      toast.info('수정한 내용 업데이트 성공!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      cards.push(currentCard);
      setSaved(true);
      setSavedIndex(cards.length - 1);
      toast.info('저장 성공!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    localStorage.setItem('cards', JSON.stringify(cards));
    setOpenModal(true);
  };

  const onCloseModal = (): void => setOpenModal(false);

  return (
    <Layout>
      <Header>
        <TextForTitle>
          감사한 분께<br />
          마음을 전하세요!
        </TextForTitle>
        <TextForParagraph>
          <Emoji symbol="🎁" />
          {' '}
          따뜻한 마음을 그대로 전해 드릴게요.
        </TextForParagraph>
      </Header>
      <Field
        label="고마운 분의 성함"
        placeholder="감사장을 받을 사람의 이름을 입력하세요."
        value={name}
        onChange={onChangeName}
      />
      <Field
        label="인사 한 마디"
        placeholder="감사장의 내용을 입력하세요."
        value={thanks}
        onChange={onChangeThanks}
      />
      <Field
        label="당신을 표현하는 수식어 (필수는 아니랍니다!)"
        placeholder="예시: '사랑하는 아들'"
        value={prefix}
        onChange={onChangePrefix}
      />
      <Button
        onClick={onOpenModal}
      >
        저장하고 공유하기
      </Button>
      <Button
        primary={false}
      >
        미리보기
      </Button>
      <ShareModal
        isOpen={openModal}
        shareLink={shareLink}
        shareName={shareName}
        onRequestClose={onCloseModal}
      />
    </Layout>
  );
};

export default withRouter(Create);
