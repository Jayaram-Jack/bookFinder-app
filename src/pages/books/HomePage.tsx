import BookGrid from "../../components/BookGrid";
import SearchBar from "../../components/SearchBar";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="space-y-8">
        <SearchBar />
        <BookGrid />
      </div>
    </>
  );
};

export default HomePage;
