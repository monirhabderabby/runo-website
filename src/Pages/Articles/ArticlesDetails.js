import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import RunoNavbar from '../../Shared/RunoNavbar';

const ArticlesDetails = () => {
    const {id} = useParams();
    const {data, isLoading} = useQuery("blogbyid", ()=> fetch(`http://localhost:5000/blog/${id}`).then(res=> res.json()))

        if(isLoading){
            return <Loading />
        }
        if(data){
            console.log(data);
        }
    return (
        <div>
            <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${data?.img})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        className="h-[70vh] md:h-[50vh]"
        >
            <RunoNavbar />  

            <div className='flex justify-center w-[90%] lg:w-1/2 mx-auto h-full flex-col '>
            <h1 className='text-white text-[20px]  lg:text-[36px] text-center mx-auto lora'>{data?.title}</h1>
            <span className='text-white text-[12px] ml-6 mt-4 text-left'>By {data?.writter}</span>
            </div>
            

        </div>

        <section className='w-[95%] md:w-1/2 flex mx-auto mt-20'>
            <div className='text-[12px]'>
                <p className='mr-4 md:mr-8 lg:mr-24 w-full'>{data?.post_date}</p>
                <p>{data?.writter}</p>
            </div>
            <p className='ml-8 text-[14px] tracking-wider'>{data?.post}</p>
        </section>

        </div>
    );
};

export default ArticlesDetails;