import styles from "./Students-searching.module.css";

type StudentsSearchingProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function StudentsSearching({
  handleInputChange,
}: StudentsSearchingProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}></div>
      <input
        type="search"
        className={styles.inputSearch}
        placeholder="Поиск по имени"
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
export default StudentsSearching;
