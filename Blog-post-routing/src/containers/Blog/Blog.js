import React, { Component, Suspense } from "react";

// import NewPost from "./NewPost/NewPost";
import "./Blog.module.css";
// import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import asyncComponent from "../../hoc/asyncComponent";
const asyncNewPost = asyncComponent(() => import("./NewPost/NewPost"));

const Posts = React.lazy(() => import("./Posts/Posts"));

class Blog extends Component {
  state = {
    //for route guard
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  // activeClassName='my-active-class'
                  activeStyle={{
                    color: "orange",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post"
                    // hash:'#submit',
                    // search:'?quick-submit=true'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* <Route path="/:postId" component={FullPost} /> */}
          {this.state.auth ? (
            <Route path="/new-post" component={asyncNewPost} />
          ) : null}{/*this route becomes unreachable if i uncomment above route*/}
          <Route
            path="/posts"
            render={(props) => (
              <Suspense fallback={<h2>Loading....</h2>}>
                <Posts {...props}/>
              </Suspense>
            )}
          />
          {/* <Redirect path='/' to='/posts'/> */}
          <Route render={() => <h1>Not Found</h1>}>
            <h1>Handling 404 not found case</h1>
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Blog;
