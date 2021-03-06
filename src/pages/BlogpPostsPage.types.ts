export type BlogPost = {
  blogPostContent: {
    json: any;
  };
  publishDate: string;
  headlineImage?: {
    url: string;
  };
  headline: string;
  uId: string;
};
export type SingleBlogArticleProps = {
  post: BlogPost;
};
