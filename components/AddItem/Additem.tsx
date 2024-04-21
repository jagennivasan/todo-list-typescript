"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Styles from "./Additem.module.css";
import { IoAddOutline } from "react-icons/io5";
export default function AddItem() {
  const [todos, setTodos] = useState("");
  const router = useRouter();

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todos) {
      alert("title is required");
    }
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ todos }),
      });
      if (res.ok) {
        router.refresh();
        setTodos("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Styles.addContainer}>
      <form onSubmit={handelSubmit} className={Styles.addFields}>
        <input
          placeholder="write something"
          type="text"
          onChange={(e) => {
            setTodos(e.target.value);
          }}
          className={Styles.input}
        />
        <button className={Styles.addBtn}>
          <IoAddOutline size={25} />
          Add Item
        </button>
      </form>
    </div>
  );
}
