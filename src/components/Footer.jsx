const footer = () => {
  return (
    <div className="footer flex items-center md:flex-row flex-col justify-between py-10 px-5  text-white mt-10">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <div className="menu flex items-center gap-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Project</a>
      </div>
      <div className="social-media flex items-center gap-5">
        <a href="#">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-reddit-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
