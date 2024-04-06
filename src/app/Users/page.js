"use client";
import Styles from "./users.module.css";
import Image from "next/image";
import images from "../../../public/img.jpeg";
import Modal from "@/Components/Modal/Modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Users = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const HandlerAddModal = () => {
    setIsOpenModal(false);
    setAdd(false);
  };

  const HandlerEditModal = () => {
    setIsOpenModal(false);
    setEdit(false);
  };

  const OpenAddModal = () => {
    setIsOpenModal(!isOpenModal);
    setAdd(!add);
  };

  const OpenEditModal = () => {
    setIsOpenModal(!isOpenModal);
    setEdit(!edit);
  };



  return (
    <main>
      <div className={Styles.buttonContainer}>
        <button onClick={OpenAddModal}>
          Add New User
        </button>
      </div>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={Styles.titleName}>
                <Image src={images} alt="image user" className={Styles.img} />
                <div className={Styles.info_Name}>
                  <h3>Admin</h3>
                  <p>ad@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={Styles.role}>CEO</p>
            </td>
            <td>
              <p className={Styles.Status}>Active</p>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit} onClick={OpenEditModal}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={Styles.titleName}>
                <Image src={images} alt="image user" className={Styles.img} />
                <div className={Styles.info_Name}>
                  <h3>SuberVaisor</h3>
                  <p>su@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className={Styles.role}>CEO</p>
            </td>
            <td>
              <p className={Styles.Status}>Active</p>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit} onClick={OpenEditModal}>Edit</button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Add User Profile */}

      {isOpenModal && !edit && add && (
        <Modal>
          <div className={Styles.close}>
            <IoMdClose className={Styles.icon_Close} onClick={HandlerAddModal} />
          </div>
          <form method="POST" className={Styles.form}>
            <div className={Styles.form_group}>
              <label>Name</label>
              <input type="text" placeholder="Name" required />
            </div>
            <div className={Styles.form_group}>
              <label>Email</label>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className={Styles.form_group}>
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            <div className={Styles.form_group}>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <div className={Styles.form_group}>
              <label>Upload Image</label>
              <input type="file" placeholder="Upload Image" required />
            </div>
            <div className={Styles.form_group}>
              <label>Role</label>
              <select>
                <option value="Admin">Admin</option>
                <option value="supervisor">supervisor</option>
              </select>
            </div>
            <div className={Styles.form_button}>
              <input
                type="submit"
                value="Add"
                className={Styles.button_submit}
              />
            </div>
          </form>
        </Modal>
      )}

      {/* Edit User Profile */}
      {isOpenModal && edit && !add && (
        <Modal>
          <div className={Styles.close}>
            <IoMdClose className={Styles.icon_Close} onClick={HandlerEditModal} />
          </div>
          <form method="POST" className={Styles.form}>
            <div className={Styles.form_group}>
              <label>Name</label>
              <input type="text" placeholder="Name" required />
            </div>
            <div className={Styles.form_group}>
              <label>Email</label>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className={Styles.form_group}>
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            <div className={Styles.form_group}>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <div className={Styles.form_group}>
              <label>Upload Image</label>
              <input type="file" placeholder="Upload Image" required />
            </div>
            <div className={Styles.form_group}>
              <label>Status</label>
              <select>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className={Styles.form_group}>
              <label>Role</label>
              <select>
                <option value="Admin">Admin</option>
                <option value="supervisor">supervisor</option>
              </select>
            </div>
            <div className={Styles.form_button}>
              <input
                type="submit"
                value="Edit"
                className={Styles.button_submit}
              />
            </div>
          </form>
        </Modal>
      )}
    </main>
  );
};

export default Users;
