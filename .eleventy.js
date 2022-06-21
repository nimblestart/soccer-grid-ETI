module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy({'./src/img': '.'});
  eleventyConfig.addPassthroughCopy({'./src/js': '.'});

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}