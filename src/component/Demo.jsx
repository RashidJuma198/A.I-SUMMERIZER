import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const handlesubmit = async () => {
    alert("Sbmitted");
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      {/*search*/}
      <div className="flex flex-col w-full gap-2">
        <form
          className=" relative flex justify-center items-center"
          onSubmit={handlesubmit}
        >
          <img
            src={linkIcon}
            alt="linkIcon"
            className="absolute left-0 my-1 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            className="submit_btn
           peer-focus:border-gray-700
          peer-focus:text-gray-700"
          >
            Send
          </button>
        </form>
        {/* {Browse URL History} */}
      </div>
      {/* Display results */}
    </section>
  );
};

export default Demo;
