import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <div className="max-w-sm pb-6 relative">
            <img src={blog.img} className="h-[20rem] rounded-[5px]" alt="" />
            <div className="py-3">
                <div>
                    <p>{blog.post_date}</p>
                    <p className="w-auto absolute top-3 right-3 badge text-white">
                        {blog.category}
                    </p>
                </div>
                <p className="font-semibold">{blog.title}</p>
                <p className="my-3">
                    {blog.post.slice(0, 120)}...
                    <Link to={`/articledetails/${blog?._id}`} className="text-blue-600 font-bold">
                        Read more
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
