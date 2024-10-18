import Link from 'next/link';
import styles from '@/app/styles/home.module.css'; // Importa el CSS Module

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>APIs</h1>
                <div className={styles.button_row}>
                    <Link href="/star">
                        <button className={styles.api_button}>StarWars API</button>
                    </Link>
                    <Link href="/holidays">
                        <button className={styles.api_button}>Holidays API</button>
                    </Link>
                    <Link href="/coctel">
                        <button className={styles.api_button}>Coctel API</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
