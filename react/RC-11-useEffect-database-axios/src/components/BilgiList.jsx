import axios from "axios";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from "./EditBilgi";

const BilgiList = ({ tutorials, deleteBilgi }) => {
  // console.log(tutorials);

  //   const deleteBilgi = async() => {
  //     await axios.delete(url/id/)
  //   }

  const [updateBilgi, setUpdateBilgi] = useState("");

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((a) => (
            <tr key={a.id}>
              <th>{a.id}</th>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td className="text-center ">
                <AiFillDelete
                  type="button"
                  className="text-danger"
                  size={22}
                  onClick={() => deleteBilgi(a.id)}
                />

                <FaEdit
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  size={20}
                  className="text-warning"
                  onClick={() =>
                    setUpdateBilgi({
                      id: a.id,
                      title: a.title,
                      description: a.description,
                    })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}

      <EditBilgi updateBilgi={updateBilgi} setUpdateBilgi={setUpdateBilgi} />
    </div>
  );
};

export default BilgiList;
