import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['outlined', 'primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full width',
    fullWidth: true,
  },
}

export const AlertOnClick: Story = {
  args: {
    children: 'Alert Button',
    onClick: () => alert('Button clicked'),
  },
}

export const ButtonAsLink: Story = {
  args: {
    as: 'a',
    children: 'Link as button',
    href: 'https://www.google.com/',
    target: '_blank',
  },
}
