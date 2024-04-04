
import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

export default function Header({
  label
}: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center ">
      <h1 className="text-3xl font-semibold">
        Login
      </h1>
      <p className="text-accent-300 text-sm ">
        {label}
      </p>
    </div>
  )
}
