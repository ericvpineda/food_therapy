import styles from "./Title.module.css";

const Title = () => {
    return (
        <div className={`${styles['bg-img']} `}>
            <main className={`${styles.main}`}>
                <div className={`${styles.title}`}>
                    Food Therapy
                </div>

                <div className={`${styles.motto}`}>
                    Let food lift your spirits
                </div>

               
            </main>

            <footer className={`${styles.enter}`}>
                <button className={`${styles.button}`}>Get Started</button>
            </footer>
        </div>
    )
}

export default Title;