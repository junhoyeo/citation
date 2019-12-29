import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import Field from '../components/molecules/Field';
import Button from '../components/atoms/Button';

import { encodeString } from '../utils/encoding';
import { onChange, OnChangeEvent } from '../utils/events';

const Create: React.FC<RouteComponentProps> = ({ history }) => {
  const [name, setName] = useState<string>('');
  const [thanks, setThanks] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');

  const onChangeName = (event: OnChangeEvent) =>
    onChange(event, setName);

  const onChangeThanks = (event: OnChangeEvent) =>
    onChange(event, setThanks);

  const onChangePrefix = (event: OnChangeEvent) =>
    onChange(event, setPrefix);

  const onClickGenerate = () => {
    const encodedData = [
      encodeString(name),
      encodeString(thanks),
      encodeString(prefix),
    ].join('|');

    history.push(`/result/${encodedData}`);
  };

  return (
    <Layout>
      <Field
        label="고마운 분의 성함"
        value={name}
        onChange={onChangeName}
      />
      <Field
        label="인사 한 마디"
        value={thanks}
        onChange={onChangeThanks}
      />
      <Field
        label="당신을 표현하는 수식어"
        value={prefix}
        onChange={onChangePrefix}
      />
      <Button
        onClick={onClickGenerate}
      >
        감사장 만들기
      </Button>
    </Layout>
  );
};

export default withRouter(Create);
