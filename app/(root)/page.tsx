import { ProductList } from "@/components/shared/ProductList/ProductList";
import sampleData from "@/db/sample-data";

const Home = () => {
  console.log(sampleData);
  return (
    <div>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
};

export default Home;
