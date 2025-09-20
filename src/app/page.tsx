'use client';
import { 
  Header, 
  Banner,
  Placeholder,
  About,
  Services
} from '@/app/components';

export default function Home() {

  return (
    <>
      <Header />
      <main >
        <Banner />
        <Placeholder />
        <About />
        <Services />
      </main>
    </>
  );
}
