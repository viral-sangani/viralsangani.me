import fs from "fs";
import matter from "gray-matter";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export interface ArticleMetadata {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string; // Add content as optional property
}

export function getAllArticleIds(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });
}

export function getAllArticles(): ArticleMetadata[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id and include content for reading time
    return {
      id,
      content: matterResult.content, // Include content for reading time calculation
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
      }),
    };
  });

  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getArticleData(id: string): {
  id: string;
  content: string;
  title: string;
  date: string;
  excerpt: string;
} {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the article metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id and content
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as { title: string; date: string; excerpt: string }),
  };
}
