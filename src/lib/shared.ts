export const appName = 'Fumadocs Template';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// Your actual GitHub info
export const gitConfig = {
  user: 'n0ctanedev',
  repo: 'fumadocs-test',
  branch: 'main',
};

// comment 1st line and uncomment 2nd if u wanna deploy to https://username.github.io/repo-name/
// export const ghpagesBaseRoute = ''; 
export const ghpagesBaseRoute = `/${gitConfig.repo}`; 
