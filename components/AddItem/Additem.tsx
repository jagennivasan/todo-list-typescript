import Styles from "./Additem.module.css";

export default function AddItem() {
  return (
    <div className={Styles.addContainer}>
      <div className={Styles.addFields}>
        <input
          placeholder="write something"
          type="text"
          className={Styles.input}
        />
        <button className={Styles.addBtn}>Add Item</button>
      </div>
    </div>
  );
}
