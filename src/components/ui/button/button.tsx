import type { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type Props = {
  as?: any
  fullWidth?: boolean
  variant?: 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export function Button({
  as = 'button',
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: Props) {
  const Component = as

  return (
    <Component
      {...rest}
      className={clsx(s[variant], fullWidth && s.fullWidth, className)}
      type={'button'}
    />
  )
}
