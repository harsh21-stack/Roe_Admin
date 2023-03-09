import React, { useState, useMemo } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { MdDelete } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";

const Search = ({
  show,
  contactlist,
  setContactList,
  setIsModalOpen,
  search,
  setSearch,
}) => {
  const [searchInput, setSearchInput] = useState(false);

  const searchEvent = () => {
    setSearchInput(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const removeEvent = () => {
    setSearchInput(false);
    setSearch("");
  };

  const deleteAllEvent = () => {
    const contacts = contactlist.filter((data) => !show.includes(data.id));
    setContactList(contacts);
  };

  return (
    <div>
      {searchInput ? (
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AiFillCloseCircle onClick={removeEvent} className="contact-icon" />
        </div>
      ) : show.length > 0 ? (
        <div>
          <BiSearchAlt2 onClick={searchEvent} className="contact-icon" />
          <MdDelete onClick={() => deleteAllEvent()} className="contact-icon" />
          <FiPlusCircle onClick={showModal} className="contact-icon" />
        </div>
      ) : (
        <div>
          <BiSearchAlt2 onClick={searchEvent} className="contact-icon" />
          <FiPlusCircle onClick={showModal} className="contact-icon" />
        </div>
      )}
    </div>
  );
};

export default Search;
