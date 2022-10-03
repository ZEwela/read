import Comment from '../../components/Comment';


export default function Comments ({comments}){

    if (!comments) {
        return null
    }

    // if (isLoadingComments) {
    //     return <div>Loading...</div>;
    //   }
    // const commentsForCard = comments[card_id];
    

    return (
        <div class="comments-row">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    )
}
