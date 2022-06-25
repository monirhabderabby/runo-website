import React from 'react';
import { useQuery } from 'react-query';
import BlogCard from '../../../Shared/BlogCard';
import Loading from '../../../Shared/Loading';

const Travel = () => {
    const type = "Travel"
    const {data,isLoading} = useQuery('travel', ()=> fetch(`https://secret-lake-48299.herokuapp.com/blogs/${type}`).then(res=> res.json()))

    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                data?.map(blog=> <BlogCard key={"blog.title"} blog={blog} />)
            }
            </div>
        </div>
    );
};

export default Travel;