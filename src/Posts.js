import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js";
import "./projects.css";

// export default function Posts() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
// async function loadPosts() {
//   const response = await fetch(
//     "driventocode.com/graphql?query=driventocode.com/graphql?query={category(id: 'dGVybTo2'){posts{nodes{title, date, status}}}}{category(id: 'dGVybTo2'){posts{nodes{title}}}}"
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   if (!response.ok) {
//     // oups! something went wrong
//     return;
//   }

//   const posts = await response.json();
//   setPosts(posts);
// }

//     loadPosts();
//   }, []);
//   return (
//     <div>
//       {posts.map((post, index) => (
//         <div>
//           <Thumbnail title={posts} />
//         </div>
//       ))}
//     </div>
//   );
// }

class Posts extends Component {
  constructor() {
    super();
    let posts = fetch(
      'https://driventocode.com/graphql?query={category(id: "dGVybTo2"){posts{nodes{title, date, status}}}}'
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.category.posts.nodes);
        return res.data.category.posts.nodes;
      });
    this.state = { posts: posts };
  }

  componentDidMount() {
    this._loadPosts();
  }

  async _loadPosts() {
    await fetch(
      'https://driventocode.com/graphql?query={category(id: "dGVybTo2"){posts{nodes{title, date, status, link, featuredImage{node{link}}}}}}'
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ posts: res.data.category.posts.nodes });
      });
  }

  render() {
    return (
      <div className="projects">
        {this.state.posts.length > 0 ? (
          this.state.posts.map((post, index) => (
            <div key={index} className="project-container">
              <Thumbnail
                title={post.title}
                link={post.link}
                image={
                  post.featuredImage === null
                    ? require("./content/software.png")
                    : post.featuredImage.node.link
                }
              />
            </div>
          ))
        ) : (
          <div>Nothing to see</div>
        )}
      </div>
    );
  }
}

export default Posts;
