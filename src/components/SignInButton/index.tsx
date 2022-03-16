import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession } from 'next-auth/react';

import styles from './styles.module.scss';

export function SignInButton(){
    const { status, data } = useSession();

    console.log(status);

    return status == "authenticated" ? (
        <button 
            type="button"
            className={styles.signInButton}
        >
        <FaGithub color="#04d361"/>
        {data.user?.name}
        <FiX color="#737380" className={styles.closeIcon}/>

    </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
        <FaGithub color="#eba417"/>
        Sign in with github
    </button>
    );
}