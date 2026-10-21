import '@fontsource/libre-caslon-text/400.css';
import '@fontsource/libre-caslon-text/400-italic.css';
import { YachtSubNav } from '@/components/yacht/YachtSubNav';

// Section layout: global NavBar and Footer come from app/layout.tsx.
// This only adds the section menu under the global header.
export default function PrivateYachtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <YachtSubNav />
      {children}
    </>
  );
}
