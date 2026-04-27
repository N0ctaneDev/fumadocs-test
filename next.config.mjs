import { createMDX } from 'fumadocs-mdx/next';
import {ghpagesBaseRoute} from './src/lib/shared';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {

  basePath: ghpagesBaseRoute || '',

  output: 'export',
  reactStrictMode: true,
};

export default withMDX(config);
