import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileNames: any) {
  let { meta, default: component } = await import(
    `pages/blogs/${blogFileNames}`
  );
  return {
    slug: blogFileNames.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  let blogFileNames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "pages/blogs"),
  });

  let blogs = await Promise.all(blogFileNames.map(importBlog));

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
