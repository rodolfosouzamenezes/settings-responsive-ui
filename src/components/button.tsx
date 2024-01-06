import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active: opacity-80',
  ],

  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-800',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:border-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white dark:hover:border-white',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none 0 text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-40',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
