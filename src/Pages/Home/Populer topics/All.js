import React from 'react';
import { useQuery } from 'react-query';
import BlogCard from '../../../Shared/BlogCard';
import Loading from '../../../Shared/Loading';

const All = () => {
    const {data, isLoading} = useQuery("allBlogs", ()=> fetch("https://secret-lake-48299.herokuapp.com/blogs").then(res=> res.json()))

    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                data.map(blog=> <BlogCard key={"blog.title"} blog={blog} />)
            }
            </div>
        </div>
    );
};

export default All;