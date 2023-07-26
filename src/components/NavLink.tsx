'use client'

import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  children: ReactNode
  href: string
}

export function NavLink({children, href, ...props}: NavLinkProps) {
  const activeHref = usePathname()
  return (
    <Link
      data-active={activeHref === href}
      className="px-4 py-1 border-l border-white/5 text-zinc-400 hover:text-white transition-colors data-[active=true]:border-cyan-400"
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}