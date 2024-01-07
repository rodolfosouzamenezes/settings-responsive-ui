import { ChevronDown } from 'lucide-react'
import { ComponentProps, ElementType } from 'react'

interface NavItemProps extends ComponentProps<'button'> {
  title: string
  icon: ElementType
  href?: string
  hasChevron?: boolean
}

export function NavItem({
  title,
  icon: Icon,
  hasChevron = true,
  ...props
}: NavItemProps) {
  return (
    <button
      className="group flex w-full items-center gap-3 rounded px-3 py-2 hover:bg-violet-500/5"
      {...props}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      {hasChevron && (
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
      )}
    </button>
  )
}
