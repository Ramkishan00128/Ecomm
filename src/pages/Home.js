import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/Product-list/components/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
};

export default Home;
