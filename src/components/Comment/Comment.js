import React, { Component } from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { connect } from 'react-redux';
import styles from './comment.module.scss';
// images
import likeIcon from "../../assets/up.png";
import dislikeIcon from "../../assets/down.png";
// import profileImage from "../../assets/Ellipse.png";
import { likeComment, dislikeComment } from '../../actions/comments';

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const { action } = e.target.dataset;
    const { handleLike, handleDislike, comment } = this.props;
    const articleSlug = window.location.pathname.split('/articles/')[1];
    if (action === 'like') {
      return handleLike(e.target.dataset.key, comment.id, articleSlug);
    }
    return handleDislike(e.target.dataset.key, comment.id, articleSlug);
  }

  // Renders highlighted text of comment
  Highlighted = (props) => {
    const { highlighted, cssId } = props.comment
    const style = { display: cssId ? 'block' : 'none' }
    return (
      <div className={`card p-3 ${styles.highlight}`} style={style}>
        <a href={`#${cssId}`}>
          {highlighted}
        </a>
      </div>
    )
  }

  render() {
    const { comment, id } = this.props
    const { Highlighted } = this
    return (
      <div className={`card p-3 ${styles.comment}`}>
        <div className="d-flex ">
          <a href={`/users/${comment.commenter.username}`}>
            <img className={styles.commenterImg} src={comment.commenter.image || `http://i.pravatar.cc/150?u=${comment.commenter.firstName}`} alt="profile" />
          </a>
          <div>
            <span className="font-weight-bold text-secondary p-2">
              <a href={`/users/${comment.commenter.username}`}>
                {comment.commenter.firstName}
              </a>
            </span>
            <br />
            <span className={styles.timestamp}>
              {distanceInWordsToNow(comment.createdAt)} ago
            </span>
          </div>
        </div>
        <Highlighted comment={comment} />
        <p className="text-secondary text-left my-4">
          {comment.body}
        </p>
        <div className="d-flex">
          <div className="px-2">
            <img className={styles.reaction} onClick={this.handleClick} data-key={id} data-action="like" data-comment={comment.id} src={likeIcon} alt="icon" />
            <span>{comment.likesCount || 0}</span>
          </div>
          <div className="px-2">
            <img className={styles.reaction} onClick={this.handleClick} data-key={id} data-action="dislike" data-comment={comment.id} src={dislikeIcon} alt="icon" />
            <span>{comment.dislikesCount || 0}</span>
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleLike(id, commentId, slug) {
    dispatch(likeComment(id, commentId, slug));
  },
  handleDislike(id, commentId, slug) {
    dispatch(dislikeComment(id, commentId, slug));
  }
})

export default connect(null, mapDispatchToProps)(Comment);
