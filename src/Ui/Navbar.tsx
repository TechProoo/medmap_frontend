import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_container bg-white px-5 py-4">
      <div className="flex justify-between items-center">
        <div className="logo_container flex items-center gap-2">
          <svg
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="50"
            height="50"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M786 279l-48-13 48-13 13-48 13 48 49 13-49 13-13 49-13-49zM834 332l-19-4 19-5 4-19 5 19 19 5-19 4-5 19-4-19z"
                fill="#f1f8ff"
              ></path>
              <path
                d="M159 715l-21-5 21-5 5-21 5 21 21 5-21 5-5 21-5-21z"
                fill="#f1f8ff"
              ></path>
              <path
                d="M244 247m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0Z"
                fill="#5546CB"
              ></path>
              <path
                d="M288 821l-27-6 27-7 6-27 7 27 27 7-27 6-7 27-6-27z"
                fill="#f1f8ff"
              ></path>
              <path
                d="M832 828a25 25 0 1 1 25-25 25 25 0 0 1-25 25z m0-36a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"
                fill="#5546CB"
              ></path>
              <path
                d="M627 502l-10-17 11-7V287l-22 14a95 95 0 0 1 3 24c0 28-19 64-58 108 21 7 34 19 34 34s-31 40-71 40-71-17-71-40 13-27 34-34l-25-30-40 26v180h2l11-7 11 17-17 10h-7v112l216-102V501z m-135 83l-16 10-8 5-8 5h-1l-5-9-5-8 9-5 24-15 10 17z m56-35l-33 20-10-17 33-20 10 17z m56-35l-33 20-10-17 17-10 16-10 10 17zM188 640l204 99V427L188 296z m162-74l32 22-11 16-32-22z m-57-31l4-5 8 6 23 16-11 16-15-11-8-6-8-6z m-42-45a29 29 0 1 1-29 29 29 29 0 0 1 30-29zM648 477l12 6-9 18-3-2v141l217 95V428L648 285z m176 68a29 29 0 1 1-29 29 29 29 0 0 1 29-29z m-72-15l36 19-9 18-36-18z m-69-23l5-10 9 4 9 4 18 9-9 18-27-14-9-4z"
                fill="#f1f8ff"
              ></path>
              <path
                d="M640 256l-41 27a95 95 0 0 0-181 43c0 17 7 38 22 61l-37 24-235-151v392l236 115 233-110 248 108V417z m-202 69a75 75 0 0 1 151 0c0 33-40 81-75 118-62-63-76-99-76-118z m97 124c18 4 29 12 29 18s-20 20-51 20-51-12-51-20 11-14 29-18l15 15 7 7 7-7zM392 739l-204-99V296l204 131z m20 2V630h7l17-10-11-17-11 7h-2V429l40-26 25 30c-21 7-34 19-34 34s31 40 71 40 71-17 71-40-13-27-34-34c39-44 58-80 58-108a95 95 0 0 0-3-24l22-14v190l-11 7 10 17h1v138z m453-6l-217-95V499l3 2 9-18-12-6V285l217 143z"
                fill="#5546CB"
              ></path>
              <path
                d="M286 546l8 5 8 6 15 11 12-17-24-16-8-6-4 5-7 12zM371 604l11-16-32-22-11 16 32 22zM481 568l-24 15-9 5 1 1h-1l5 8 5 9v-1l1 1 8-5 9-5h-1l17-11-11-17zM537 534l-33 20 11 17 33-20-10-17h-1zM594 499l-16 10-17 10 10 17 33-20-10-17zM679 515l9 4 27 14 9-17v-1l-18-9-9-4-9-5-5 10-4 8zM779 566l9-18-36-18-9 17v1l36 18z"
                fill="#5546CB"
              ></path>
              <path
                d="M824 585a11 11 0 1 0-11-11 11 11 0 0 0 11 11z"
                fill="#f1f8ff"
              ></path>
              <path
                d="M824 603a29 29 0 1 0-29-29 29 29 0 0 0 29 29z m0-40a11 11 0 1 1-11 11 11 11 0 0 1 11-11z"
                fill="#5546CB"
              ></path>
              <path
                d="M252 530a11 11 0 1 0-11-11 11 11 0 0 0 11 11z"
                fill="#22c3dd"
              ></path>
              <path
                d="M252 548a29 29 0 1 0-29-29 29 29 0 0 0 29 29z m0-40a11 11 0 1 1-11 11 11 11 0 0 1 11-11z"
                fill="#5546CB"
              ></path>
              <path
                d="M507 465l-15-15c-18 4-29 12-29 18s20 20 51 20 51-12 51-20-11-14-29-18l-15 15-7 7z"
                fill="#AFBCF3"
              ></path>
              <path
                d="M514 444c36-37 75-85 75-118a75 75 0 0 0-151 0c0 18 14 54 76 118z m-35-117a35 35 0 1 1 35 35 35 35 0 0 1-35-35z"
                fill="#f1f8ff"
              ></path>
              <path
                d="M514 327m-35 0a35 35 0 1 0 70 0 35 35 0 1 0-70 0Z"
                fill="#22c3dd"
              ></path>
            </g>
          </svg>
          <p className="text-lg">
            Med<span className="heading text-[#22c3dd] text-xl">Map</span>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            to={"/auth/login"}
            className="px-5  py-2 text-sm font-medium text-white bg-[#323432] rounded-xl hover:bg-[#22c3dd] transition duration-300 ease-in-out cursor-pointer"
          >
            Login
          </Link>
          <Link
            to={"/auth/signup"}
            className="px-5  py-2 text-sm font-medium text-white bg-[#22c3dd] rounded-xl hover:bg-[#323432] transition duration-300 ease-in-out cursor-pointer"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
