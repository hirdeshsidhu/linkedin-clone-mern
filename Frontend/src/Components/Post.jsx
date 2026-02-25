import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

function Post({ post }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">

      {/* Author Section */}
      <div className="flex items-center gap-3">
        <img
          src={post?.author?.profileImage}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover cursor-pointer"
        />
        <div>
          <h3 className="font-semibold cursor-default">
            {post?.author?.firstName} {post?.author?.lastName}
          </h3>
          <p className="text-sm text-gray-500 cursor-default">
            {post?.author?.headline}
          </p>
        </div>
      </div>

      
      <p className="mt-3 text-gray-800">{post?.description}</p>

      {/* Post Image */}
      {post?.image && (
        <img
          src={post?.image}
          alt="post"
          className="w-[85%] max-h-[400px] object-cover mx-auto mt-3 rounded-lg "
        />
      )}

      {/* Actions */}
      <div className="flex justify-around text-gray-600 pt-3 mt-3 border-t">
        <button className="cursor-pointer flex items-center gap-2 hover:text-blue-600">
          <FaRegThumbsUp />
          Like
        </button>

        <button className="cursor-pointer flex items-center gap-2 hover:text-blue-600">
          <FaRegCommentDots />
          Comment
        </button>
      </div>

    </div>
  );
}

export default Post;
