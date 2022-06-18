import { MdSearch } from "react-icons/md";
export default function Search({ setSearchText }) {
  return (
    <div className="flex bg-gray-200 rounded-xl p-[5px] mb-[1.5em] ">
      <MdSearch size="1.6em" />
      <input
        className="bg-gray-200 outline-none w-full"
        type="text"
        placeholder="Type to search..."
        onChange={(event)=>setSearchText(event.target.value)}
      />
    </div>
  );
}
