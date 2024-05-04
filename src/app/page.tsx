import Header from './components/misc/header'
import Main from './components/misc/main'
//
import Welcome from './components/welcome'

export default function HomePage() {
  return (
    <div id="root" style={{ height: '170vh' }}>
      <Header />
      <Main>
        <Welcome />
      </Main>
    </div>
  )
}
