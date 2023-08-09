import React from "react"
import Counter from "../components/Card/Counter"
import styles from "@/styles/page.module.css";
import AddItem from "@/components/Card/AddItem";
import SelectItem from "@/components/Card/SelectItem";
import CheckItem from "@/components/Card/CheckItem";

const HomePage: React.FC = () => {
    const options = ['Dodge', 'Ford', 'Chevrolet']
    const items = ['Chevelle', 'Camaro', 'Corvette'];
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
                    <div className={styles.card}>
                        <h2><span>Select Car</span></h2>
                        <SelectItem options={options}/>
                    </div>
                    <div className={styles.card}>
                        <h2><span>Checked Car</span></h2>
                        <CheckItem items={items}/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default HomePage;