import Head from "next/head";
import { Container, Row, Column } from "@nathansearles/react-flex-grid";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Flex Grid Example Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="https://github.com/nathansearles/react-flex-grid"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            className="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          ></path>
        </svg>
      </a>

      <main className={styles.main}>
        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h1 className={styles.title}>
                <a href="https://github.com/nathansearles/react-flex-grid">
                  React Flex Grid
                </a>{" "}
                Example Site
              </h1>
              <div className={styles.description}>
                A simple React based grid system using flex. Uses 12 columns
                based on the 8px grid system.
              </div>
            </Column>
          </Row>
        </Container>
        <div className={styles.breakpoint}>
          current breakpoint: <span className={styles.breakpointLabel}></span>
        </div>
        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h2>Basic grid</h2>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: 12 }}>
              <div className={styles.box}>
                <span>12</span>
              </div>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: 6 }}>
              <div className={styles.box}>
                <span>6</span>
              </div>
            </Column>
            <Column columns={{ xs: 6 }}>
              <div className={styles.box}>
                <span>6</span>
              </div>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: 3 }}>
              <div className={styles.box}>
                <span>3</span>
              </div>
            </Column>
            <Column columns={{ xs: 3 }}>
              <div className={styles.box}>
                <span>3</span>
              </div>
            </Column>
            <Column columns={{ xs: 3 }}>
              <div className={styles.box}>
                <span>3</span>
              </div>
            </Column>
            <Column columns={{ xs: 3 }}>
              <div className={styles.box}>
                <span>3</span>
              </div>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h2>Offset columns</h2>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: 4 }} offsets={{ xs: 8 }}>
              <div className={styles.box}>
                <span>4, offset 8</span>
              </div>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: 5 }} offsets={{ xs: 1 }}>
              <div className={styles.box}>
                <span>5, offset 1</span>
              </div>
            </Column>
            <Column columns={{ xs: 5 }}>
              <div className={styles.box}>
                <span>5</span>
              </div>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h2>Column order</h2>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: 12, md: 6 }} ordering={{ xs: 2, md: 1 }}>
              <div className={styles.box}>
                <span>xs: second, md: first</span>
              </div>
            </Column>
            <Column columns={{ xs: 12, md: 6 }} ordering={{ xs: 1, md: 2 }}>
              <div className={styles.box}>
                <span>xs: first, md: second</span>
              </div>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h2>Auto-layout</h2>
              <p>
                The Auto-layout makes the items equitably share the available
                space. That also means you can set the width of one item and the
                others will automatically resize around it.
              </p>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto</span>
              </div>
            </Column>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto</span>
              </div>
            </Column>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto</span>
              </div>
            </Column>
          </Row>
          <Row className={styles.exampleRow}>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto</span>
              </div>
            </Column>
            <Column columns={{ xs: 6 }}>
              <div className={styles.box}>
                <span>6</span>
              </div>
            </Column>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto</span>
              </div>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h2>Spacing</h2>
              <p>
                Default spacing is 0.5rem or 8px. Enter number between 0 and 4.
                8px * spacing.
              </p>
            </Column>
          </Row>
          <Row className={styles.exampleRow} spacing={{ xs: 0, md: 4, lg: 1 }}>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto - spacing: xs: 0, md: 4, lg: 1</span>
              </div>
            </Column>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto - spacing: xs: 0, md: 4, lg: 1</span>
              </div>
            </Column>
            <Column columns={{ xs: "auto" }}>
              <div className={styles.box}>
                <span>auto - spacing: xs: 0, md: 4, lg: 1</span>
              </div>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h2>Justify</h2>
            </Column>
          </Row>
          <Row
            className={styles.exampleRow}
            justify={{ xs: "center", md: "start", lg: "end" }}
          >
            <Column columns={{ xs: 6 }}>
              <div className={styles.box}>
                <span>6 - xs: center, md: start, lg: end</span>
              </div>
            </Column>
          </Row>
          <Row
            className={styles.exampleRow}
            justify={{ xs: "start", md: "center" }}
          >
            <Column columns={{ xs: 8 }}>
              <div className={styles.box}>
                <span>8 - xs: start, md: center</span>
              </div>
            </Column>
          </Row>
        </Container>

        <Container>
          <Row justify={{ xs: "center" }}>
            <Column columns={{ xs: 12, md: 6 }}>
              <h2>Align</h2>
            </Column>
          </Row>
          <Row
            className={[styles.exampleRow, styles.halfScreen].join(" ")}
            align={{ xs: "center", md: "start", lg: "end" }}
            justify={{ xs: "center" }}
          >
            <Column columns={{ xs: 6 }}>
              <div className={styles.box}>
                <span>6 - xs: center, md: start, lg: end</span>
              </div>
            </Column>
          </Row>

          <Row
            className={[styles.exampleRow, styles.halfScreen].join(" ")}
            align={{ xs: "start", md: "center" }}
            justify={{ xs: "center" }}
          >
            <Column columns={{ xs: 8 }}>
              <div className={styles.box}>
                <span>8 - xs: start, md: center</span>
              </div>
            </Column>
          </Row>
        </Container>

        <Row justify={{ xs: "center" }}>
          <Column columns={{ xs: 12, md: 6 }}>
            <h2>No container</h2>
            <p></p>
          </Column>
        </Row>
        <Row className={styles.exampleRow}>
          <Column columns={{ xs: "auto" }}>
            <div className={styles.box}>
              <span>auto</span>
            </div>
          </Column>
          <Column columns={{ xs: "auto" }}>
            <div className={styles.box}>
              <span>auto</span>
            </div>
          </Column>
          <Column columns={{ xs: "auto" }}>
            <div className={styles.box}>
              <span>auto</span>
            </div>
          </Column>
        </Row>
      </main>
    </div>
  );
}
