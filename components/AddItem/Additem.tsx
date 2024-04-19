import Styles from "./Additem.module.css";
import { IoAddOutline } from "react-icons/io5";
export default function AddItem() {
  return (
    <div className={Styles.addContainer}>
      <div className={Styles.addFields}>
        <input
          placeholder="write something"
          type="text"
          className={Styles.input}
        />
        <button className={Styles.addBtn}>
          <IoAddOutline size={25} />
          Add Item
        </button>
      </div>
    </div>
  );
}
