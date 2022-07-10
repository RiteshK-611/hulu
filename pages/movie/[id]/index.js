const API_KEY = process.env.API_KEY;
const server = "https://api.themoviedb.org/3/movie";
import axios from "axios";
import Image from "next/image";

const Movie = ({ movie }) => {
  console.log(movie);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="p-2">
      <Image
        className="rounded-lg"
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        layout="responsive"
        height={1080}
        width={1920}
      />
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
