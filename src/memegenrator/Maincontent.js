import { useState } from "react";
import memesdata from "./memesdata";
function Maincontent() {
  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1bij.jpg");

  function randomPhoto(event) {
    event.preventDefault();
    const memesArray = memesdata.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);

    setMemeImage(memesArray[randomIndex].url);
  }
  return (
    <main className="px-8 py-8">
      <form className="grid grid-cols-2 gap-8">
        <div>
          <label className="flex flex-col gap-2">
            {" "}
            Top Text
            <input
              type="text"
              placeholder="shut up"
              className="rounded-md border-gray-500 border-2 indent-2 outline-none placeholder:text-gray-600 focus:border-black focus:border-2 py-2"
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col gap-2">
            {" "}
            Bottom Text
            <input
              type="text"
              placeholder="and take my money"
              className="rounded-md border-gray-500 border-2 indent-2 outline-none placeholder:text-gray-600 focus:border-black py-2 focus:border-2"
            />
          </label>
        </div>

        <button
          className="col-span-full bg-gradient-to-r from-[#672280] to-[#a626d3] text-white rounded-md hover:bg-gradient-to-r hover:from-[#672280] hover:to-[#672280] py-3"
          onClick={randomPhoto}
        >
          Get a new meme Image 🖼️
        </button>
      </form>
      <div className=" w-full mt-6">
        <img src={memeImage} alt="gn" className="w-full rounded-2xl" />
      </div>
    </main>
  );
}
export default Maincontent;
