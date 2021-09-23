import { View } from "./Home.view";
import { useHock } from "./Home.hocks";

export const Home = () => {
  const props = useHock();
  return <View {...props} />;
};

export default Home;
