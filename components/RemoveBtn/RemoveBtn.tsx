import { MdDelete } from "react-icons/md";
import Styles from "./RemoveBtn.module.css";
export default function RemoveBtn() {
  return (
    <button className={Styles.removeBtn}>
      <MdDelete size={25}/>Delete
    </button>
  );
}
