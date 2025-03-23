import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="site-title">Viral Sangani</h1>
        <nav style={{ display: "flex", alignItems: "center" }}>
          <Link href="/articles" className="nav-link">
            Articles
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <p>
          I'm currently exploring the intersection of blockchain and AI. I'm
          extremely excited about the new capabilities and possibilities that
          arise when these two powerful technologies converge.
        </p>

        <h2 className="section-title">Previously:</h2>
        <ul>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Led blockchain infrastructure development for decentralized
            applications and protocols.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Won multiple hackathons and participated in prestigious hacker
            houses globally.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Developed machine learning solutions for blockchain analytics and
            data insights.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Created numerous open source tools and products for the Web3
            ecosystem.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Contributed to an identity protocol with over 6M users.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Contributed to a Layer 2 blockchain with 1M DAUs.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Network and security veteran with expertise in building secure
            distributed systems.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Authored research papers on cryptography and its applications in
            blockchain systems.
          </li>
          <li className="list-item">
            <span className="list-item-prefix"></span>
            Spoken at 10+ conferences and served as judge/mentor at 20+
            hackathons.
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
