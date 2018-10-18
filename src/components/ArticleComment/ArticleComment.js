import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// styles
import styles from "./ArticleComment.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import CommentBox from "../Comment/CommentBox";
import Comments from "../Comment/Comments";
// actions
import { getArticleComments } from "../../actions/comments";

export class ArticleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchArticleComments } = this.props;
    const articleSlug = window.location.pathname.split("/articles/")[1];
    fetchArticleComments(articleSlug);
  }

  render() {
    const {
      comments,
      fetchingArticleComments,
      error,
      currentArticle
    } = this.props;
    return (
      <div className={styles.comment}>
        <CommentBox />
        {fetchingArticleComments ? (
          <i className={`fa fa-spinner fa-3x fa-spin ${styles.loading}`} />
        ) : (
          <Comments comments={comments} currentArticleTitle={currentArticle} />
        )}
        {error ? (
          <span style={{ color: "red" }}>
            Unable to fetch comments at this time. Try reloading this page
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }
}

ArticleComment.propTypes = {
  fetchArticleComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  fetchingArticleComments: PropTypes.bool.isRequired,
  error: PropTypes.any.isRequired,
  currentArticle: PropTypes.string
};

ArticleComment.defaultProps = {
  currentArticle: ""
};

const mapStateToProps = state => ({
  comments: state.comments.articleComments.data,
  fetchingArticleComments: state.comments.articleComments.loading,
  error: state.comments.articleComments.error,
  currentArticle: state.oneArticleReducer.article.title
});

const mapDispatchToProps = dispatch => ({
  fetchArticleComments(articleSlug) {
    return dispatch(getArticleComments(articleSlug));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleComment);
