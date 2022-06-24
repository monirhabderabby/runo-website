import React from 'react';
import { useQuery } from 'react-query';
import BlogCard from '../../../Shared/BlogCard';
import Loading from '../../../Shared/Loading';

const Adventure = () => {
    const type = "Adventure"
    const {data,isLoading} = useQuery('blog', ()=> fetch(`https://secret-lake-48299.herokuapp.com/blog/${type}`).then(res=> res.json()))

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

export default Adventure;