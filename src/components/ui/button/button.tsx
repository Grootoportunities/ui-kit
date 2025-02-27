import type { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type Props<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: Props<T>) => {
  const Component = as ?? 'button'

  return (
    <Component
      {...rest}
      className={clsx(
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        className
      )}
    />
  )
}
