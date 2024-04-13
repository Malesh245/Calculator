import style from "./Display.module.css";

function Display({ displayVale }) {
  return (
    <div>
      <input
        className={style.display}
        type="text"
        value={displayVale}
        readOnly
      />
    </div>
  );
}
export default Display;
