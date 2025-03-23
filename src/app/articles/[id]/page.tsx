import ReadingTime from "@/app/components/ReadingTime";
import { getAllArticleIds, getArticleData } from "@/utils/markdown";
import { getReadingMetrics } from "@/utils/readingMetrics";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import ThemeToggle from "../../ThemeToggle";
import ArticleMetrics from "../../components/ArticleMetrics";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  const paths = getAllArticleIds();
  return paths.map((id) => ({
    id,
  }));
}

export default async function Article({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const articleData = await getArticleData(id);
  const { wordCount, readingTime } = getReadingMetrics(articleData.content);

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

      <article>
        <div className="article-meta">
          <ReadingTime minutes={readingTime} />
          <h1 className="article-title">{articleData.title}</h1>
        </div>

        <div className="article-content">
          <ReactMarkdown>{articleData.content}</ReactMarkdown>
        </div>

        <ArticleMetrics wordCount={wordCount} date={articleData.date} />
      </article>

      <div>
        <Link href="/articles" className="back-link">
          ← Back to Articles
        </Link>
      </div>

      <Footer />
    </div>
  );
}
