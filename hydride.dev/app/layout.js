import './globals.css'
import { Inter, Golos_Text, Rubik } from 'next/font/google'
import { NavigationBranding, ResponsiveNavigationContainer } from './Navigation.client';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const golos = Golos_Text({ subsets: ['cyrillic'], variable: "--font-golos" });

export const metadata = {
  title: 'hydride',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${golos.variable} ${rubik.variable} font-sans p-8 flex flex-col gap-y-4`}>
        <nav className="w-full flex flex-row items-center justify-between">
            <NavigationBranding />
            <div className="flex flex-row items-center gap-x-2">
                <ResponsiveNavigationContainer params={params} />
            </div>
        </nav>
        <main className="flex flex-col gap-y-2 p-4 w-full">
            {children}
        </main>
      </body>
    </html>
  )
}
