import React from "react"
import {storiesOf } from "@storybook/react"
import { Button } from "../components/button"
import centered from '@storybook/addon-centered/react';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Default', () => <Button backgroundColor="#34D399" color="#fff">Hello World</Button>)

