import '@/styles/globals.css';
import { geistMono, geistSans } from '@/config/fonts';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            = {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
