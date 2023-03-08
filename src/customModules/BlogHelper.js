const getBlogs = () => {};

const getAllBlogImages = (r) => {
  return r.keys().map(r);
};

const images = getAllBlogImages(
  require.context("../assets/img/blog/", false, /\.(png|jpe?g|svg)$/)
);

export { images };
