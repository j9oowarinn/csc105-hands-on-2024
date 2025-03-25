import Navbar from '../components/Navbar';
import { useParams, useSearchParams } from 'react-router-dom';

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <>
      <Navbar />
      <div className="p-4">
        <p>Your favourite post is <strong>{q}</strong>. Post ID is <strong>{id}</strong>. Size is <strong>{size}</strong>.</p>
      </div>
    </>
  );
};

export default FavouriteDetailPage;
