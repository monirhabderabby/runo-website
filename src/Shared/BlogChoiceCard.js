import React from 'react';

const BlogChoiceCard = ({blog}) => {
    return (
        <div className="max-w-sm pb-6 relative" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${blog.img})`,
            height: "300px",
            backgroundSize: "cover",
            borderRadius: "5px"
        }}>
            <span className='text-white badge absolute top-4 right-4'>{blog?.category}</span>

            <div className='absolute top-[50%] left-8 w-[90%]'>
                <p className='text-gray-200 text-xs'>{blog?.post_date}</p>
                <p className='text-gray-200 my-3 leading-[139%] font-semibold'>{blog?.title}</p>
            </div>
            
        </div>
    );
};

export default BlogChoiceCard;