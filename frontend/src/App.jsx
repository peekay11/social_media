
import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed_stories/Feed'
import StoriesBar from './components/StoriesBar'
import Posts from './components/Posts'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '240px', flex: 1, minHeight: '100vh' }}>
        <Navbar />
        <StoriesBar />
        <Feed />
        <Posts/>
      </div>
    </div>
  )
}

export default App
