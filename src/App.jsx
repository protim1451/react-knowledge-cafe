import { useState } from 'react'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bmarks from './components/Bmarks/Bmarks'

import './App.css'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    //console.log(blog);
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (id, time) => {
    //console.log('marking as read', time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    //console.log('remove bookmark',id);
    const remainingBookmarks = bookmarks.filter
      (bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='mx-6 md:mx-14 md:flex'>
        <Blogs handleAddToBookmark= {handleAddToBookmark}
        handleMarkAsRead = {handleMarkAsRead}>  
        </Blogs>
        <Bmarks bookmarks={bookmarks}
        readingTime = {readingTime}>
        </Bmarks>
      </div>
    </>
  )
}

export default App
