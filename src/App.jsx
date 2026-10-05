import Header from './components/Header'
import Hero from './components/Hero'
import UrlShortener from './components/UrlShortener'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero />
        <UrlShortener />
      </main>
    </div>
  )
}

export default App
