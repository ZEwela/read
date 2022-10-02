
import Cards from "../containers/cards/Cards";
import Comments from "../containers/comments/Comments"

export default function Card ({card}) {
    const timestamp = card.created_utc;
    const date = new Date(timestamp * 1000);
    const createdDate = date.toLocaleDateString("en-GB");

    const body = () => {
      if (card.url.slice(-3) === 'jpg') {
        return (
          <figure class="figure">
            <img src={card.url} class="figure-img img-fluid rounded" alt="image"/>
          </figure>
        )
      } else {
        return (
          <p>
            <a class="card-text" href={card.url} target="_blank">
              {`${card.url.slice(0,28)}...`}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </p>
        )
      }
    }

    return (
        <div class="card card-card text-center">
            <div class="card-header">
                {card.title}
            </div>
            <div class="card-body">
                {body()}
            </div>
            <div class="card-footer text-muted">
              <div class="container">
                <div class="row d-flex justify-content-around footer-card">
                  <div class="col-sm-3 align-middle align-self-center">
                    {createdDate}
                  </div>
                  <div class="col-sm-3 align-middle align-self-center">
                    {card.author}
                  </div>
                  <div class="col-sm-3 align-middle">
                    <button class="btn btn-outline-secondary " type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <Comments/>
            </div>
        </div>
    )
}
