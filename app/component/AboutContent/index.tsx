import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

export default function index() {
  return (
    <main className={styles.container}>
        <p className={styles.title}>Brand by .Cloth</p>
        <p>Introducing the visionary creator behind .cloth brand: A trailblazer in fashion evolution, seamlessly fusing heritage and innovation. With a rich history of redefining trends,
          <br></br>they've consistently crafted garments that transcend time. Their unique blend of quality craftsmanship and cutting-edge designs sets them apart,
          <br></br>capturing the essence of elegance and modernity.
        </p>
        <Image src='/image2.svg' alt='' width={1000} height={800}></Image>
    </main>
  )
}
