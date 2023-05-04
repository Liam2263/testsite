import Link from 'next/link'
import styles from "../styles/post.module.css"

export default function Home(props) {
    return (
        <>
            <h1 className={styles.title}>Home</h1>
            <subheader className={styles.subheading}>Aurora</subheader>
            <p>
              Aurora is a Rocket League bot that specializes in 1v1 matches and has achieved a Diamond 1 rank. Although capable of playing 2v2 and 3v3 matches, it was primarily trained in 1v1 scenarios. Aurora boasts impressive wall play and flicking skills, making it an excellent training partner for anyone ranked Diamond 1 or lower. Whether you're looking to improve your gameplay or simply want a challenging opponent, Aurora is sure to deliver an engaging and rewarding experience.
            </p>
            <p> 
              <a href="Aurora.zip" download>Aurora Latest</a>
            </p>
            <subheader className={styles.subheading}>Bubbly</subheader>
            <p>
              Bubbly is a Rocket League bot that specializes in 1v1 matches and has achieved a Gold 3 rank. Although capable of playing 2v2 and 3v3 matches, it was primarily trained in 1v1 scenarios. Bubbly has a few peculiar traits, such as its tendency to flip back to the net when retreating. As my first machine learning bot, Bubbly stands out among the rest, with this unusual behavior setting it apart from the others. Bubbly everywhere else shows good gameplay which makes it indeed a Gold rank.
            </p>
            <p> 
              <a href="Bubbly.zip" download>Bubbly Latest</a>
            </p>
        </>
    )
}