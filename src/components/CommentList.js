import React from 'react'
import Comment from './Comment'
import CommentReplies from './CommentReplies'
const CommentList = ({comments}) => {   
  return (
    <div>
        {comments.map((comment, index) =>
        <div>
         <Comment key={index} comments={comment}/>
            <div className='border border-l-black ml-5 pl-5'>
            <CommentReplies commentId={comment.id} />
            </div>
    </div>
        )
}
</div>
)
}

export default CommentList
