import styles from './collect.module.css'
import Image from 'next/image'

const CollectionContent = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>
                        Member Only<br></br>Discount
                    </h2>
                    <p>
                        Up to 40% of
                    </p>
                </div>
                <div className={styles.text1}>
                    <p>
                        "Elevate your style with a Cloth membership!Get<br></br>  early 
                        access to the latest collections,
                        member <br></br>discounts, and special gifts. Join now!"
                    </p>
                    <div>Become a member today!</div>
                </div>
            </div>
            <div className={styles.content1}>
                <p>BestSellers</p>
                <div className={styles.content2}>
                    <div className={styles.bs1}>
                        <div className={styles.tobag}>Add to bag +</div>
                        <p className={styles.desc}>Men's grey check twil shirt</p>
                    </div>
                    <div className={styles.bs2}>
                        <div className={styles.tobag}>Add to bag +</div>
                        <p className={styles.desc}>Men's Orange bomber jacket</p>
                    </div>
                    <div className={styles.bs3}>
                        <div className={styles.tobag}>Add to bag +</div>
                        <p className={styles.desc}>Men's Blue jeans jacket</p>
                    </div>
                    <div className={styles.bs4}>
                        <div className={styles.tobag}>Add to bag +</div>
                        <p className={styles.desc}>Men's purple hoodie oversize</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionContent