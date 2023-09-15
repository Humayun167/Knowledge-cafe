import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmarks/Bookmark'
import Header from './component/Header/Header'

function App() {
  return (
    <>
      
      <Header></Header>
      <div className=' md:flex'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
      
    </>
  )
}

export default App
