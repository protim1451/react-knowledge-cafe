import PropTypes from 'prop-types'; // ES6
import { MdOutlineBookmarks } from "react-icons/md";



const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, 
        posted_date, hashtags} = blog;
    //console.log(blog);
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover pic of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6 mt-2'>
                    <img className='w-14' src={author_img} alt={`image of ${author}`} />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-600'>
                        <MdOutlineBookmarks /></button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}>
                        <a href="">#{hash}</a>
                    </span>)
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id, reading_time)}
            className='text-purple-600 underline 
            font-semibold'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;