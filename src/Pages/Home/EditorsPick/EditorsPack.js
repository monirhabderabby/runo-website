import React from 'react';
import { useQuery } from 'react-query';
import BlogChoiceCard from '../../../Shared/BlogChoiceCard';
import Loading from '../../../Shared/Loading';

const EditorsPick = () => {
    const {data, isLoading} = useQuery("allBlogs", ()=> fetch("https://secret-lake-48299.herokuapp.com/blogs").then(res=> res.json()))

    if(isLoading){
        return <Loading />
    }
    return (
        <div className="px-4 md:px-8 lg:px-12 mt-12">
            <h1 className="text-2xl lg:mt-[75px] lg:mb-[25px] md:ml-16 lora">Editor's Pick</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                data.map(blog=> <BlogChoiceCard key={"blog._id"} blog={blog}  />)
            }
            </div>
        </div>
    );
};

export default EditorsPick;