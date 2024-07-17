import type { FC, ReactNode } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import CheckBoxSelected from '../../../assets/icons/components/CheckBoxSelected'

type Props = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: ReactNode
  onChange: (checked: boolean) => void
  required?: boolean
}

export const Checkbox: FC<Props> = ({
  checked,
  className,
  disabled,
  id,
  onChange,
  required,
}) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, className),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled, className),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
            required={required}
          >
            {checked && (
              <CheckboxRadix.Indicator
                asChild
                className={classNames.indicator}
                forceMount
              >
                <CheckBoxSelected size={24} />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
      </LabelRadix.Root>
    </div>
  )
}
