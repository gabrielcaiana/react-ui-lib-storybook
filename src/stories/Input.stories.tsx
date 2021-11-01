import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MdSearch } from 'react-icons/md';

import { Input } from '../components/Input';

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="search"
        placeholder="Pesquisar..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="search"
        icon={<MdSearch />}
        placeholder="Pesquisar..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });