import "./App.css";
import myImg from "./assets/ccc.jpg";
import { AiFillAccountBook } from "react-icons/ai";

function App() {
  const studentCount = 300;
  const tutorCount = 100;
  const isRight = false;
  const inputType = "number";

  const imgMy =
    "data:image/jpeg;base64,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";
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center w-screen h-40  ">
        <h1 className="text-2xl mb-3 font-bold text-red-600 underline font-poppins  ">
          Hello world!
        </h1>
        <p className="text-[15px] text-green-400 font-black ">
          Student : {studentCount}
        </p>
      </div>

      <p className="main">Tutor : {tutorCount}</p>
      {isRight ? (
        <p className="main">{studentCount}</p>
      ) : (
        <p className="main">{tutorCount}</p>
      )}

      <img
        src={myImg}
        alt="myImg"
        style={{ width: "100px", height: "100px" }}
      />
      <img
        src={imgMy}
        alt="myImg"
        style={{ width: "100px", height: "100px" }}
      />

      <div>
        <AiFillAccountBook className="myicon" />
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={myImg}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8 bg-stone-300 text-blue-700">
            <div class="lowercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p class="mt-2 text-ehmed">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>

      <input type={inputType} />
    </>
  );
}

export default App;
