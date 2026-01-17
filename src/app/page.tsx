import { Hero } from '@/components/app/Home/hero';
import TopSellers from '@/components/app/Home/top-sellers';
import NewArrivals from './new-arrivals/page';
import { Testimonials } from '@/components/app/Home/testimonials';
import Faq from '@/components/app/Home/faq';
import Footer from '@/components/app/Footer/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <TopSellers />
      <NewArrivals />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
