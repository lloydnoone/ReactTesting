import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }
  
  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}
//get comments from the state in redux redux
function mapStateToProps(state) {
  return { comments: state.comments }
}
// connect passes redux state in the helper function, uses it map comments to props
export default connect(mapStateToProps)(CommentList)