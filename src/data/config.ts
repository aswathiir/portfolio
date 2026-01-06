const config = {
  title: "Aswathi Ranjith | AI Engineer",
  description: {
    long: "Explore the portfolio of Aswathi Ranjith, an AI Engineer specializing in Deep Learning, Computer Vision, and Real-time Image Processing. Discover my latest work in Neuromarketing, Robotics, and Legal Tech.",
    short:
      "Portfolio of Aswathi Ranjith, an AI Engineer specializing in Deep Learning and Computer Vision.",
  },
  keywords: [
    "Aswathi Ranjith",
    "Aswathi",
    "AI Engineer",
    "Computer Vision",
    "Deep Learning",
    "Robotics",
    "Python",
    "TensorFlow",
    "PyTorch",
    "ROS 2",
    "portfolio",
  ],
  author: "Aswathi Ranjith",
  email: "aswathiranjikk@gmail.com",
  site: "https://portfolio-aswathiranjith.com",

  // for github stars button
  githubUsername: "aswathiir",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://www.linkedin.com/in/aswathiranjith/",
    linkedin: "https://www.linkedin.com/in/aswathiranjith/",
    instagram: "https://www.linkedin.com/in/aswathiranjith/",
    facebook: "https://www.linkedin.com/in/aswathiranjith/",
    github: "https://github.com/aswathiir",
  },
};
export { config };
