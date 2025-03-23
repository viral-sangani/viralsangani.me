import { getAllArticles } from "@/utils/markdown";
import { getReadingMetrics } from "@/utils/readingMetrics";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import Footer from "../components/Footer";

export default function Articles() {
  const articles = getAllArticles();

  // Group articles by year
  const articlesByYear = articles.reduce((acc, article) => {
    const year = article.date.split("-")[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(article);
    return acc;
  }, {} as Record<string, typeof articles>);

  // Sort years in descending order
  const sortedYears = Object.keys(articlesByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div className="container">
      <header className="header">
        <Link href="/" className="site-title">
          Viral Sangani
        </Link>
        <nav style={{ display: "flex", alignItems: "center" }}>
          <Link href="/articles" className="nav-link">
            Articles
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <h1 className="main-title">Articles</h1>

      {sortedYears.map((year) => (
        <div key={year}>
          <h2 className="year-heading">{year}</h2>

          {articlesByYear[year].map((article) => {
            // Get article content to calculate reading time
            const { readingTime } = getReadingMetrics(article.content || "");

            return (
              <div key={article.id} className="article-item">
                <div className="article-title-container">
                  <Link
                    href={`/articles/${article.id}`}
                    className="article-link"
                  >
                    {article.title}
                  </Link>
                </div>
                <span className="article-date">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            );
          })}
        </div>
      ))}

      <Footer />
    </div>
  );
}
