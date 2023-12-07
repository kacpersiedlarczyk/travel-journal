import Navbar from './Navbar'
import Card from './Card'

import data from './assets/data'
import './App.css'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })

  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App
