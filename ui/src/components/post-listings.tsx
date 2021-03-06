import { Component } from 'inferno';
import { Link } from 'inferno-router';
import { Post } from '../interfaces';
import { PostListing } from './post-listing';

interface PostListingsProps {
  posts: Array<Post>;
  showCommunity?: boolean;
}

export class PostListings extends Component<PostListingsProps, any> {

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {this.props.posts.length > 0 ? this.props.posts.map(post => 
          <PostListing post={post} showCommunity={this.props.showCommunity} />) : 
          <div>No posts. {this.props.showCommunity !== undefined  && <span>Subscribe to some <Link to="/communities">communities</Link>.</span>}
        </div>
        }
      </div>
    )
  }
}
