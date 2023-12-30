import '@/app/ui/global.css';
import { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Technodss Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
