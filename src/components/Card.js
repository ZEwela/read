export default function Card () {
    return (
        <div class="card text-center card-adjustment">
            <div class="card-header">
                Title
            </div>
            <div class="card-body">
                <p class="card-text">body</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                 2 days ago
            </div>
            <p>
              <button class="btn btn-primary " type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
            </p>
            <div class="row">
              <div class="row">
                <div class="collapse multi-collapse show" id="multiCollapseExample1">
                  <div class="card card-body comment">
                    <div class="row">
                        <h6 class="comment-author">author</h6>  
                    </div>
                    <div class="row comment-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="collapse multi-collapse show" id="multiCollapseExample1">
                  <div class="card card-body comment">
                    <div class="row">
                        <h6 class="comment-author">author</h6>  
                    </div>
                    <div class="row comment-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}