import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import Field from '../components/molecules/Field';
import Button from '../components/atoms/Button';

const encodeString = (value: string) => {
  return (
    window.btoa(
      encodeURIComponent(value)
    )
      .replace(/\./gi, '+')
      .replace(/_/gi, '/')
      .replace(/-/gi, '=')
  );
};

const Create: React.FC<RouteComponentProps> = ({ history }) => {
  const [name, setName] = useState<string>('');
  const [thanks, setThanks] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (value: string) => void
  ) => {
      callback(e.target.value);
    };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e, setName);

  const onChangeThanks = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e, setThanks);

  const onChangePrefix = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e, setPrefix);

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
