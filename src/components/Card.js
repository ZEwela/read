import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comments from "../containers/comments/Comments";
import { getComments } from "../containers/comments/CommentsSlice";
import { selectAllComments } from "../containers/comments/CommentsSlice";

export default function Card({ card }) {
  const dispatch = useDispatch();

  const timestamp = card.created_utc;
  const date = new Date(timestamp * 1000);
  const createdDate = date.toLocaleDateString("en-GB");

  const body = () => {
    if (card?.url.slice(-3) === "jpg") {
      return (
        <figure class="figure">
          <img
            src={card.url}
            class="figure-img img-fluid rounded"
            alt="image"
          />
        </figure>
      );
    } else if (card?.url[8] === "v" && card.media) {
      return (
        <figure class="figure">
          <video width="500" height="400" controls>
            <source src={card.media.reddit_video.fallback_url} />
          </video>
          <p>
            <a class="card-text" href={card.url} target="_blank">
              {`${card.url.slice(0, 28)}...`}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </p>
        </figure>
      );
    } else {
      return (
        <p>
          <a class="card-text" href={card.url} target="_blank">
            {`${card.url.slice(0, 28)}...`}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </p>
      );
    }
  };

  const [isCollapse, setIsCollapse] = useState(false);

  const onClickCollapse = () => {
    setIsCollapse((current) => !current);
  };

  useEffect(() => {
    dispatch(getComments(card.permalink));
  }, [setIsCollapse]);

  const comments = useSelector(selectAllComments);

  return (
    <div class="card card-card text-center">
      <div class="card-header">{card.title}</div>
      <div class="card-body">{body()}</div>
      <div class="card-footer">
        <div class="container">
          <div class="row d-flex justify-content-around footer-card">
            <div class="row d-flex justify-content-around always-display">
              <div class="col-sm-3 align-middle align-self-center">
                {createdDate}
              </div>
              <div class="col-sm-3 align-middle align-self-center">
                {card.author}
              </div>
              <div class="col-sm-3 align-middle">
                <button
                  class="btn btn-outline-secondary btn-comments"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                  onClick={onClickCollapse}
                >
                  <i class="fa-regular fa-comment"></i>
                </button>
              </div>
            </div>
            <div
              class={isCollapse ? "collapse show" : "collapse"}
              id="collapseExample"
            >
              <Comments comments={comments[card.name]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
