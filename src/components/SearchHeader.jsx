import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

const SearchHeader = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="flex w-full p-4 mb-5 text-2xl border-b boreder-zinc-600">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="ml-2 text-3xl font-bold">Youtube</h1>
      </Link>
      <form className="flex justify-center w-full" onSubmit={handleSubmit}>
        <input
          className="w-8/12 py-2 pl-5 bg-black rounded-l-full outline-none text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className="px-4 rounded-r-full bg-zinc-600">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
