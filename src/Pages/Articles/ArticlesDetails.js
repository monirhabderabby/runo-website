import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const ArticlesDetails = () => {
    const {id} = useParams();
    const {data, isLoading} = useQuery("blogbyid", ()=> fetch(`http://localhost:5000/blog/${id}`).then(res=> res.json()))

        if(isLoading){
            return <Loading />
        }
    
    return (
        <div>
            {
                data?.message
            }
        </div>
    );
};

export default ArticlesDetails;