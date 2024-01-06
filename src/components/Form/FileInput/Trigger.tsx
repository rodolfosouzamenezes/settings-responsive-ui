'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className={`
        group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-300
        hover:bg-violet-25 hover:text-violet-500 dark:border-zinc-800 
        dark:bg-zinc-800/70 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300
      `}
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-600 dark:bg-zinc-700 dark:group-hover:border-violet-800 dark:group-hover:bg-violet-600">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-300 dark:group-hover:text-white" />
      </div>
      <div className="flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 dark:text-zinc-400 dark:group-hover:text-violet-200">
            Click to upload{' '}
          </span>
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
