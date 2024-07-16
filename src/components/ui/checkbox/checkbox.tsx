import type { FC, ReactNode } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

type Props = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: ReactNode
  onChange: (checked: boolean) => void
}

export const Checkbox: FC<Props> = ({ className, disabled }) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, className),
    container: clsx(s.container, className),
    label: clsx(s.label, disabled && s.disabled, className),
  }

  return (
    <div className={clsx(classNames.container)}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root className={clsx(s.checkboxRoot)}>
            <CheckboxRadix.Indicator className={clsx(s.checkboxIndicator)} />
          </CheckboxRadix.Root>
        </div>
      </LabelRadix.Root>
    </div>
  )
}
