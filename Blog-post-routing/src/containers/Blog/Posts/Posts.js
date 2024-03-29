import React from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
import {Route} from 'react-router-dom';

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        // console.log(error);
        this.setState({ error: true });
      });
  }
  postSelectedHandler = id => {
    // this.props.history.push({pathname:"posts/"+id});
    this.props.history.push("/posts/" + id);
  };

  render() {
    // console.log(this.props);
    console.log(this.props.match.url+'/:id');
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          //       <Link to={"fullPost/" + post.id} key={post.id}>
          //         <Post
          //           title={post.title}
          //           author={post.author}
          //           // {...this.props}
          //         />
          //         ;
          //       </Link>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    return (
        <div>
            <section className="Posts">{posts}</section>;
            <Route path={this.props.match.url+'/:postId'} exact component={FullPost} />
        </div>
    );
  }
}
export default Posts;