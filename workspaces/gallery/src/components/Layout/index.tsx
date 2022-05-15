import { ReactNode } from 'react'
import Header from './Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen max-w-screen flex flex-col md:px-20 px-4">
      <Header />
      <main className="flex-1 pb-16">{children}</main>
    </div>
  )
}
