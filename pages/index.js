import Link from 'next/link'

export default function Home(props) {
    return (
        <>
          <div className="text-4xl pt-6 font-bold">
            <h1>Home</h1>
          </div>
          {BotsData.map((bot) => (
            <div key={bot.title}>
              <h2 className="text-2xl pt-3">{bot.title}</h2>
              <p className="pt-2 font-sans">{bot.description}</p>
              <p className="pt-4">
                <a href={bot.downloadLink} className="blue_download_button">Download {bot.title}</a>
              </p>
            </div>
            ))}
        </>
    )
}

const BotsData = [
  {
    title: "Aurora",
    description: "Aurora is a Rocket League bot that specializes in 1v1 matches and has achieved a Diamond 1 rank. Although capable of playing 2v2 and 3v3 matches, it was primarily trained in 1v1 scenarios. Aurora boasts impressive wall play and flicking skills, making it an excellent training partner for anyone ranked Diamond 1 or lower. Whether you're looking to improve your gameplay or simply want a challenging opponent, Aurora is sure to deliver an engaging and rewarding experience.",
    downloadLink: "https://www.mediafire.com/file/zzz16z6vbh4ndaq/AuroraV7098.zip/file",
    rank: "Diamond 1"
  },
  {
    title: "Bubbly",
    description: "Bubbly is a Rocket League bot that specializes in 1v1 matches and has achieved a Gold 3 rank. Although capable of playing 2v2 and 3v3 matches, it was primarily trained in 1v1 scenarios. Bubbly has a few peculiar traits, such as its tendency to flip back to the net when retreating. As my first machine learning bot, Bubbly stands out among the rest, with this unusual behavior setting it apart from the others. Bubbly everywhere else shows good gameplay which makes it indeed a Gold rank.",
    downloadLink: "https://www.mediafire.com/file/n3oa76v8fbv93cw/Bubbly_v2213.zip/file",
    rank: "Gold 3"
  } 
];