import React from "react";
import { AiOutlineHeart, AiFillCloseCircle } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ListTable = ({
  typeViseData,
  show,
  setShow,
  contactlist,
  setContactList,
  setIsModalOpen,
  setId,
  setInputData,
}) => {
  const likeEvent = (id) => {
    setContactList((oldContacts) => {
      return oldContacts.map((contact) => {
        if (contact.id === id) {
          return {
            ...contact,
            like: !contact.like,
            category: contact.like ? "" : "favorite",
          };
        } else {
          return contact;
        }
      });
    });
  };

  const deleteEvent = (id) => {
    setContactList((prev) => {
      return prev.filter((nil, index) => {
        return index + 1 !== id;
      });
    });
  };

  const editEvent = (id) => {
    setIsModalOpen(true);

    const found = contactlist.find((update, index) => index + 1 === id);
    setInputData(found);
    setId(id);
  };

  const showEvent = (id) => {
    if (show.find((ele) => ele === id)) {
      const data = show.filter((ele) => ele !== id);
      setShow(data);
    } else {
      setShow([...show, id]);
    }
  };

  return (
    <div>
      <div className="contact-list">
        <table className="table  ">
          <tbody>
            {typeViseData.map((contact, index) => {
              return (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={show.includes(contact.id)}
                      onClick={() => showEvent(contact.id)}
                    />
                  </td>
                  <td>
                    <img
                      src={contact.image}
                      alt="display-profile"
                      className="message-img"
                    />
                  </td>
                  <td>
                    <p>{contact.name}</p>
                  </td>
                  <td>
                    <p>{contact.email}</p>
                  </td>
                  <td>
                    <p>{contact.number}</p>
                  </td>

                  <td>
                    {contact.like && contact.category === "favorite" ? (
                      <p onClick={() => likeEvent(contact.id)}>
                        <BsFillHeartFill />
                      </p>
                    ) : (
                      <p onClick={() => likeEvent(contact.id)}>
                        <AiOutlineHeart />
                      </p>
                    )}
                  </td>
                  <td>
                    <p onClick={() => editEvent(index + 1)}>
                      <FaEdit />
                    </p>
                  </td>

                  <td>
                    <p onClick={() => deleteEvent(index + 1)}>
                      <MdDelete />
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTable;
