import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../button'

export function Profile() {
  return (
    <div className="flex items-center gap-3 ">
      <Image
        src="https://github.com/rodolfosouzamenezes.png"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        alt="Profile Image"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Rodolfo Menezes
        </span>
        <span className="truncate text-sm text-zinc-500">
          rodolfosouzaofc@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
