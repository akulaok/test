import { useState } from 'react';
import styles from './Filtration-list.module.css'
import { FilterTypesArr } from '../../consts';

export type FiltrationListProps = {
  filtrationType: string;
  onChangeFiltrationType: (type: string) => void;
};

function FiltrationList({ filtrationType, onChangeFiltrationType }: FiltrationListProps): JSX.Element {
  const [filtrationOptionsOpened, setFiltrationOptionsOpened] = useState(false);

  return (
    <div className={styles.shadow}>
      <div className={styles.wrapper} onClick={() => setFiltrationOptionsOpened(!filtrationOptionsOpened)}>
        <span className={styles.filter_type}>{filtrationType}</span>
        <div className={styles.icon}></div>
      </div>
      {filtrationOptionsOpened &&
        <ul className={styles.filter_list}>
          {FilterTypesArr.map((type) =>
            <li
              className={type === filtrationType ? [styles.list__item, styles.list__item_active].join(' ') : styles.list__item}
              onClick={() => {
                onChangeFiltrationType(type);
                setFiltrationOptionsOpened(!filtrationOptionsOpened);
              }}
            >
              <span>{type}</span>
              {type === filtrationType ?
                <div className={styles.filter_icon}></div>
                : <></>
              }
            </li>
          )}
        </ul>
      }
    </div>

  );
}
export default FiltrationList;
