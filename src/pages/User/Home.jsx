import Navbar from '../../components/User/Navbar';
import Banner from '../../components/User/Banner';
import Category from '../../components/User/Category'
import Products from '../../components/User/ProductList'
import Dealsbanner from '../../components/User/Dealsbanner'
import Footer from '../../components/User/Footer';
import Features from '../../components/User/Features';

function Home() {

  return (
    <>

      <Navbar />
      <Banner />
      <Features />
      <Category />
      <Products />
      <Dealsbanner />
      <Footer />

    </>
  );
}

export default Home;