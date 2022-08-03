import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src="img/capa.jpg" alt="Cover Photo" className={styles.coverPhoto} />
      <div className={styles.profilePhoto}>
        <Avatar src="https://avatars.githubusercontent.com/u/91973902?s=400&u=9df236baded2e4bf524d3cd3cb7e7633e74c9eca&v=4" />
      </div>
      <div className={styles.profileInfos}>
        <strong>Leslie Alexander</strong>
        <p>UI Designer</p>
      </div>
      <footer>
        <a href="#" className={styles.editPerfil}>
          <PencilSimpleLine size={20} weight="bold" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
