import Image from 'next/image';
import SearchBar from './components/SearchBar';
import Flight from './components/Flight';
import Checkout from './components/Checkout';

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'http://localhost:4000',
//   }),
// });

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-3  mx-10">
        <div className="col-span-2">
          <Flight />
        </div>

        <Checkout />
      </div>
    </div>
  );
}
