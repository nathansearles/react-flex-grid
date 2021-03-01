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
