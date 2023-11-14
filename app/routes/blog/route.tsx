// import React from 'react';
import { LinksFunction } from '@remix-run/node';
import blogStyles from '~/styles/blog.css';

import BlogImg1 from './images/blogImg1.png';
import BlogImg2 from './images/blogImg2.png';
import BlogImg3 from './images/blogImg3.png';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: blogStyles,
  },
];
const Blog = () => {
  return (
    <div className="max-width-1440 blog-page">
      <div className="blog-inner">
        <h1 className="headings blog-heading">Welcome To Our Blogs</h1>
        <p className="blogs-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          since the 1500s
        </p>
        <div className="blog-posts">
          <div className="blog">
            <div className="blog-left">
              <h2 className="blog-title">Blog 1</h2>
              <p className="blog-post-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="blog-post-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="read-more">Read More</button>
            </div>
            <img src={BlogImg1} alt="Blog-Image" className="blog-img" />
          </div>
          <div className="blog">
            <div className="blog-left">
              <h2 className="blog-title">Blog 2</h2>
              <p className="blog-post-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="blog-post-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="read-more">Read More</button>
            </div>
            <img src={BlogImg2} alt="Blog-Image" className="blog-img" />
          </div>
          <div className="blog">
            <div className="blog-left">
              <h2 className="blog-title">Blog 3</h2>
              <p className="blog-post-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="blog-post-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="read-more">Read More</button>
            </div>
            <img src={BlogImg3} alt="Blog-Image" className="blog-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
