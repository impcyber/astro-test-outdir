import type { Theme } from '@unocss/preset-uno'
import type { UserShortcuts } from '@unocss/core'
import Common from './common'
import Button from './button'

export default <UserShortcuts<Theme>>[
  ...Common,
  ...Button
]