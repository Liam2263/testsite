import Link from 'next/link'

export default function Home(props) {
    return (
        <>
            <h1>Home</h1>
            <p>The weather is currently {props.forecast}</p>
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()
  
    return {
      props: {
        forecast: data.properties.periods[0].detailedForecast
      }
    }
  }