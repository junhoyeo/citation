import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Citation from '../components/templates/Citation';

import { decodeString } from '../utils/encoding';
import CreateButton from '../components/molecules/CreateButton';

interface ResultProps {
  match: {
    params: {
      encodedData: string,
    },
  },
};

const Result: React.FC<RouteComponentProps & ResultProps> = ({ history, match }) => {
  const [name, setName] = useState<string>('');
  const [thanks, setThanks] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');
  const [sender, setSender] = useState<string>('');

  useEffect(() => {
    const { params: { encodedData } } = match;
    const [
      encodedName,
      encodedThanks,
      encodedPrefix,
      encodedSender,
    ] = encodedData.split('|');

    const setToDecoded = (
      encodedString: string,
      callback: (value: string) => void
    ) => callback(
      decodeString(encodedString),
    );

    setToDecoded(encodedName, setName);
    setToDecoded(encodedThanks, setThanks);
    setToDecoded(encodedPrefix, setPrefix);
    setToDecoded(encodedSender, setSender);
  }, [match]);

  return (
    <>
      <Citation
        name={name}
        thanks={thanks}
        prefix={prefix}
        sender={sender}
      />
      <CreateButton
        onClick={() => history.push('/')}
      />
    </>
  );
};

export default withRouter(Result);
