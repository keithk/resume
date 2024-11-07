export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "layouts/index.liquid");
  return {
    dir: {
      input: "src",
      output: "resume",
      includes: "_includes"
    }
  };
}
