import Bookmark from "../Bookmark/Bookmark";

const Bmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-4xl text-center m-4 bg-blue-200 rounded-xl">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => 
                <Bookmark 
                   key={idx} 
                   bookmark={bookmark}>
                </Bookmark>)
            }
        </div>
    );
};

export default Bmarks;