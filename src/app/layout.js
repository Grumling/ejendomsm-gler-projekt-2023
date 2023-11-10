import './globals.css'
import { montserrat } from '@/utils/fonts.js'
import FooterComponent from '@/components/footer/footer'
import HeaderComponent from '@/components/header/header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}