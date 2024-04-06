"use client";
import { useState } from "react";
import Styles from "./Categories.module.css";
import Modal from "@/Components/Modal/Modal";
import { IoMdClose } from "react-icons/io";

const Categories = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categories, setCategories] = useState([{ image: "2.jpg" }]);
  const [error, setError] = useState("");

  const HandlerAddModal = () => {
    setIsOpenModal(false);
    setAdd(false);
  };

  const HandlerEditModal = () => {
    setIsOpenModal(false);
    setEdit(false);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    console.log(categoryImage);
    if (categoryImage) {
      categories.find((category) => category.image === categoryImage)
        ? setError("This Image category already exists")
        : setCategories([...categories, categoryImage]);
      setCategoryImage("");
    }
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
        <button onClick={OpenAddModal}>Add New Category</button>
      </div>

      <table className={Styles.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>Category name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>1</p>
            </td>
            <td>
              <div className="categoryName">
                <p>Categories desc</p>
              </div>
            </td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.edit} onClick={OpenEditModal}>
                  Edit
                </button>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Add new Categories */}
      {isOpenModal && !edit && add && (
        <Modal>
          <div className={Styles.close}>
            <IoMdClose
              className={Styles.icon_Close}
              onClick={HandlerAddModal}
            />
          </div>
          <form
            method="POST"
            className={Styles.form}
            onSubmit={handleAddCategory}
          >
            <div className={Styles.form_group}>
              <label className={Styles.label}>Category name</label>
              <input
                className={Styles.input}
                type="text"
                placeholder="Category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </div>
            <div className={Styles.form_group}>
              <label>Upload Image</label>
              <input
                type="file"
                placeholder="Upload Image"
                value={categoryImage}
                onChange={(e) => setCategoryImage(e.target.value)}
                required
              />
            </div>
            {error && <span>{error}</span>}

            <div className={Styles.form_button}>
              <input
                type="submit"
                value="Add"
                className={Styles.button_submit}
                onClick={handleAddCategory}
              />
            </div>
          </form>
        </Modal>
      )}

      {/* Edit Category */}
      {isOpenModal && edit && !add && (
        <Modal>
          <div className={Styles.close}>
            <IoMdClose
              className={Styles.icon_Close}
              onClick={HandlerEditModal}
            />
          </div>
          <form method="POST" className={Styles.form}>
            <div className={Styles.form_group}>
              <label className={Styles.label}>Category name</label>
              <input
                className={Styles.input}
                type="text"
                placeholder="Category name"
                required
              />
            </div>
            <div className={Styles.form_group}>
              <label>Upload Image</label>
              <input type="file" placeholder="Upload Image" required />
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

export default Categories;
