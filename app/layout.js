
import Nav from './components/nav/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'my-todo',
  description: 'just finish em!!!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full mx-auto lg:w-1/2" >
       <div className='lg:border border-slate-600 rounded-xl lg:p-2 lg:mt-2' style={{ position: 'sticky', top: 0 }}>
       <Nav></Nav>
       </div>
        {children}
        </body>
    </html>
  )
}
