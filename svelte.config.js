import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: process.env.GITHUB_ACTIONS ? '/YOUR_REPO_NAME' : ''
    }
  }
};

export default config;
