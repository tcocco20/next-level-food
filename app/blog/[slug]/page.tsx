import React from "react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  return <main>{params.slug}</main>;
};

export default BlogPostPage;
