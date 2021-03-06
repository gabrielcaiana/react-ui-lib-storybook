import React from "react"
import {storiesOf } from "@storybook/react";
import centered from '@storybook/addon-centered/react';

import { Button } from "../components/Button"

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Default', () => <Button>Default</Button>)
  .add('Outlined', () => <Button outlined>Outlined</Button>)
  .add('Disabled', () => <Button disabled>Disabled</Button>)

