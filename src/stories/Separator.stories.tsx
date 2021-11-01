import React from 'react';
import { storiesOf } from '@storybook/react';
import { Separator } from '../components/separator';
import centered from '@storybook/addon-centered/react';

storiesOf('Separator', module)
  .addDecorator(centered)
  .add('Default', () => (
    <div
      style={{
        width: '300px',
        padding: '20px 10px',
        backgroundColor: '#000',
      }}
    >
      <Separator />
    </div>
  ));
