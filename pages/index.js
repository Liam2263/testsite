import Link from 'next/link'

export default function Home(props) {
    return (
        <>
          <h1 className="text-4xl pt-6 font-semibold">Home</h1>
          <h2 className="text-2xl pt-3">Aurora</h2>
          <p>
            Aurora is a Rocket League bot that specializes in 1v1 matches and has achieved a Diamond 1 rank. Although capable of playing 2v2 and 3v3 matches, it was primarily trained in 1v1 scenarios. Aurora boasts impressive wall play and flicking skills, making it an excellent training partner for anyone ranked Diamond 1 or lower. Whether you're looking to improve your gameplay or simply want a challenging opponent, Aurora is sure to deliver an engaging and rewarding experience.
          </p>
          <p className="pt-2"> 
            <a href="https://www.mediafire.com/file/zzz16z6vbh4ndaq/AuroraV7098.zip/file" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Aurora</a>
          </p>
          <h3 className="text-2xl pt-3">Bubbly</h3>
          <p>
            Bubbly is a Rocket League bot that specializes in 1v1 matches and has achieved a Gold 3 rank. Although capable of playing 2v2 and 3v3 matches, it was primarily trained in 1v1 scenarios. Bubbly has a few peculiar traits, such as its tendency to flip back to the net when retreating. As my first machine learning bot, Bubbly stands out among the rest, with this unusual behavior setting it apart from the others. Bubbly everywhere else shows good gameplay which makes it indeed a Gold rank.
          </p>
          <p className="pt-2">          
            <a href="https://www.mediafire.com/file/n3oa76v8fbv93cw/Bubbly_v2213.zip/file" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Bubbly</a>
          </p>
        </>
    )
}