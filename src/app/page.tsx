'use client';
import { 
  Header, 
  Banner,
  Placeholder,
  About
} from '@/app/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Placeholder />
        <About />
      </main>
    </>
  );
}
