import React, {ReactNode} from 'react';
import styles from '../styles/button.module.css'

const Button = ({children, onClick}: { children: ReactNode, onClick: () => void }) => {
    return (
        <button className={styles.squareButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;