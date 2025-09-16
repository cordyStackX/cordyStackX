'use client';
import { 
  Header, 
  Banner,
  Placeholder,
  About,
  Static
} from '@/app/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Placeholder />
        <About />
        <Static />
      </main>
    </>
  );
}
