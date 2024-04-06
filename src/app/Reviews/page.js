"use client";
import React, { useState } from "react";
import Styles from "./review.module.css";
import Modal from "@/Components/Modal/Modal";
import { IoMdClose } from "react-icons/io";

const Reviews = () => {
  return (
    <main>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Review</th>
            <th>Item</th>
            <th>User</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>Categories desc</p>
            </td>
            <td>ne</td>
            <td>5</td>
            <td>
              <div className={Styles.actions}>
                <button className={Styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Reviews;
