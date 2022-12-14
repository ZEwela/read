export default function Comment ({comment}){
    return (
        <div class="row">
            <div class="collapse multi-collapse show comment" id="multiCollapseExample1">
              <div class="card card-body  comment-card">
                <div class="row">
                  <h6 class="comment-author">{comment.author}</h6>  
                </div>
                <div class="row comment-body">
                    {comment.body}
                </div>
              </div>
            </div>
        </div>
    )
}

