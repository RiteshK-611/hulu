import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex whitespace-nowrap px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <button
            key={key}
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-red-500 active:text-red-500 focus:text-red-500 focus:scale-125 pb-1"
          >
            {title}
          </button>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-0" />
    </nav>
  );
};

export default Nav;
