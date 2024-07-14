import { useState } from 'react';
import styles from './Sorting-list.module.css';
import { SortTypesArr } from '../../consts';

export type SortingListProps = {
  sortingType: string;
  onChangeSortingType: (type: string) => void;
};

function SortingList({
  sortingType,
  onChangeSortingType,
}: SortingListProps): JSX.Element {
  const [sortOptionsOpened, setSortOptionsOpened] = useState(false);

  return (
    <div className={styles.shadow}>
      <div
        className={styles.wrapper}
        onClick={() => setSortOptionsOpened(!sortOptionsOpened)}
      >
        <span className={styles.sort_type}>{sortingType}</span>
        <div className={styles.icon}></div>
      </div>
      {sortOptionsOpened && (
        <ul className={styles.sort_list}>
          {SortTypesArr.map((type) => (
            <li
              className={
                type === sortingType
                  ? [styles.list__item, styles.list__item_active].join(' ')
                  : styles.list__item
              }
              onClick={() => {
                onChangeSortingType(type);
                setSortOptionsOpened(!sortOptionsOpened);
              }}
              key={type}
            >
              <span>{type}</span>
              {type === sortingType ? (
                <div className={styles.sort_icon}></div>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default SortingList;
