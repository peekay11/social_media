
import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed_stories/Feed'
import StoriesBar from './components/StoriesBar'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '240px', flex: 1, minHeight: '100vh' }}>
        <Navbar />
        <StoriesBar />
        <Feed />
      </div>
    </div>
  )
}

export default App
