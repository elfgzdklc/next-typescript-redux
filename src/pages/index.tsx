import React from "react"
import Counter from "../components/Counter"
import styles from "@/styles/page.module.css";
import AddItem from "@/components/AddItem";

const HomePage: React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2><span>Add Items</span></h2>
                        <AddItem/>
                    </div>
                    <div className={styles.card}>
                        <h2><span>Redux Counter</span></h2>
                        <Counter/>
                    </div>

                </div>
            </main>
        </>
    )
}
export default HomePage;