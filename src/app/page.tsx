"use client";
import Image from "next/image";
import "./globals.css";
import Script from "next/script";
import { useRef, useState } from "react";

const FAQS = [
  {
    question: "Q1. What is ATIV?",
    answer: `ATIV is the Web3 IP Acceleration company, aiming ATIV
                establishes a positive feedback loop within the IP industry,
                with the aim of redefining the value of IP by elevating it
                through the power of people rather than capital. Our vision as a
                web3 company is to cultivate an environment where the benefits
                derived from creations are equitably distributed among all
                stakeholders within the comprehensive IP ecosystem.`,
    view: true,
  },
  {
    question: "Q2. What is ATIV Music?",
    answer: `ATIV Music is a platform where new artists and music fans come
                together. It's the first app by the ATIV world, where you can
                enjoy music without limits, connect with diverse artists, and
                help them grow in the music industry. It's all about sharing the
                love for music!`,

    view: false,
  },
  {
    question: "Q3. Can I use ATIV Music with Metamask?",
    answer: `Not for now, ATIV is now only support Solana chain. To use it,
                you need a crypto wallet like Phantom, Backpack, or any other
                that supports the Solana chain. In the near future, ATIV team is
                planning to support multi-chain.`,

    view: false,
  },
  {
    question: "Q4. What are the Points in ATIV Music?",
    answer: `Points are like rewards you get for listening to the ATIV
                catalogue while the ATIV music desktop is active. But remember,
                they're not like tokens on the blockchain, so you can't trade
                them or check them on a block explorer. They're just for using
                ATIV and enjoying the music!`,

    view: false,
  },
  {
    question: "Q6. How can I use the points?",
    answer: `During the Beta, you can use your points to swap for $ATIV
                tokens and also to mint beta passes. Just remember, you'll need
                a
                ${(
                  <a
                    className="white underline"
                    href="https://magiceden.io/marketplace/ativ_music_beta_pass"
                    target="_blank"
                  >
                    beta pass
                  </a>
                )}
                to be able to use your points.`,
    view: false,
  },
  {
    question: "Q7. What is the $ATIV token?",
    answer: `$ATIV token is like the currency used in the ATIV world. Through
                the distribution of tokens, users can share the revenue from the
                now streaming, after value from the valuechain. It's all about
                supporting artists and sharing the benefits together! Join the
                journey of Savor the Artist, Reap the Benefit.`,
    view: false,
  },
];

export default function Home() {
  const faqRef = useRef();
  const [faqs, setFaqs] =
    useState<{ question: string; answer: string; view: boolean }[]>(FAQS);

  return (
    <>
      <div className="main">
        <div className="hero" id="hero">
          <canvas id="canvas"></canvas>
          <div className="leftimg hero_content">
            <div className="contents align3">
              <div className="slogan">
                <p className="title">Savor the Artistry, </p>
                <p className="title">Reap the Benefit.</p>
              </div>
              <div className="applink desktoponly">
                <p className="headline cdb">DOWNLOAD NOW</p>
                <div className="slogan">
                  <p className="badge">Download Desktop Client</p>
                  <p className="badge">and start earning benefit.</p>
                </div>
                <div className="applink_content">
                  <button className="btn appbtn" id="mac">
                    <img className="appbtn_img" src="/asset/image/mac.svg" />
                    <div id="macchips">
                      <a
                        className="download badge"
                        href="https://api-dev.ativ.ninja/install/desktop/intelmac"
                        target="_blank"
                      >
                        <p>Mac OS</p>
                        <p className="bold">Intel Chip</p>
                      </a>
                      <a
                        className="download badge"
                        href="https://api-dev.ativ.ninja/install/desktop/applemac"
                        target="_blank"
                      >
                        <p>Mac OS</p>
                        <p className="bold">Apple Chip</p>
                      </a>
                    </div>
                  </button>
                  <a
                    className="btn appbtn"
                    id="windows"
                    href="https://api-dev.ativ.ninja/install/desktop/windows"
                    target="_blank"
                  >
                    <img
                      className="appbtn_img"
                      src="/asset/image/windows.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="imgcontainer">
              <img className="heroimg" src="/asset/image/amp_hero.png" />
            </div>
            <div
              className="slogan column wrap"
              style={{ position: "absolute", bottom: "20px" }}
            >
              <p className="badge">
                The ATIV team is currently participating in the
              </p>
              <p className="badge bold blink">
                <img
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: "4px",
                  }}
                  src="/asset/image/solana_white.svg"
                />
                Foundation Grants Program.
              </p>
            </div>
          </div>
        </div>
        <div className="section demo" id="demo">
          <div className="contents align3">
            <p className="headline bold">How to earn $ATIV</p>
            <p className="bod textcenter">
              Just turn on the ATIV Music Desktop, and listen our music!
            </p>
            <div id="player"></div>
            <a
              className="btn hug"
              href="https://docs.ativ.studio/ativ/gettingstarted"
              target="_blank"
            >
              Getting Started
            </a>
            <p className="badge blink mobileonly">
              * The client may not run in mobile and tablet devices.
            </p>
          </div>
        </div>
        <div className="section portal rightimg" id="portal">
          <div className="contents align1">
            <p className="headline bold">ATIV Portal</p>
            <p className="body">
              Welcome to ATIV Portal, your gateway to the immersive world of
              ATIV services and activities! Whether you're a seasoned user or
              just starting your journey with us, this platform offers an
              all-in-one experience like no other. With a simple login using
              your unique wallet address, you can seamlessly connect all your
              existing service accounts to the ATIV Portal, creating a unified
              hub to access every service we offer.
            </p>
            <p className="body">
              Stay in the loop with real-time updates on announcements,
              missions, and token status through our visually appealing and
              intuitive dashboard.
            </p>
            <p className="body">
              Join our growing community and collaborate with like-minded
              individuals to shape the future of ATIV. The adventure awaits -
              start your ATIV journey today and discover the boundless
              possibilities that lie ahead!
            </p>
            <a
              className="btn hug"
              href="https://portal.ativ.studio"
              target="_black"
            >
              Move to ATIV Portal
            </a>
          </div>
          <div className="images">
            <img className="ampsample" src="/asset/image/portal_sample.png" />
          </div>
        </div>
        <div className="section amp leftimg" id="desktop">
          <div className="contents align2">
            <p className="headline bold">ATIV Music Desktop</p>
            <p className="body">
              Introducing the ATIV Music Desktop - your ultimate ally in
              discovering hidden musical gems through ATIV. By simply
              downloading, installing and playing music, you can not only
              immerse yourself in a world of new artists, but also support them
              and reap the rewards.
            </p>
            <p className="body">
              With the ATIV Music Desktop, you enter a universe of sonic
              curation by ATIV. Shine a light on artists who deserve it by
              effortlessly becoming part of the ecosystem.
            </p>
            <p className="body">
              Experience the power on both Windows and MacOS. Take the leap now
              and grab the ATIV Music Desktop from this link. Unleash the music
              that truly deserves your ears.
            </p>
            <a
              className="btn hug"
              href="https://docs.ativ.studio/ativ/resources/downloads"
              target="_blank"
            >
              Download Desktop Client
            </a>
            <p className="badge blink mobileonly">
              * The client may not run in mobile and tablet devices.
            </p>
          </div>
          <div className="images">
            <img className="ampsample" src="/asset/image/amp_hero.png" />
          </div>
        </div>
        <div className="section portal rightimg" id="token">
          <div className="contents align1">
            <p className="headline bold">
              $ATIV
              <img
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: "4px",
                }}
                src="/asset/image/builtonsol.svg"
              />
            </p>
            <p className="body">$ATIV: Empower Artists, Reward Supporters</p>
            <p className="body">
              Redefine content support with the $ATIV movement.
            </p>
            <p className="body">
              - Artists share the value of their work when selected by token
              holders.
            </p>
            <p className="body">
              - Supporters earn tokens through engagement and promotion,
              fostering a sustainable artist ecosystem. Use $ATIV for exclusive
              content, VIP access and voting.
            </p>
            <p className="body">
              - Fiat revenue from content becomes stablecoin for fair
              distribution to $ATIV holders on the blockchain network, ensuring
              equity and sustainability.
            </p>
            <a
              className="btn hug"
              href="https://docs.ativ.studio"
              target="_black"
            >
              See $ATIV Docs
            </a>
          </div>
          <div className="images">
            <img className="ampsample" src="/asset/image/token_sample.png" />
          </div>
        </div>
        <div className="section amp leftimg" id="amp">
          <div className="contents align2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p className="headline bold">ATIV Music App</p>
              <div
                className="body"
                style={{ verticalAlign: "sub", height: "100%" }}
              >
                (To be updated)
              </div>
            </div>

            <p className="body">
              Welcome to ATIV Music Player, the app that grants you access to
              the complete ATIV catalog while immersing you in a world of music
              across various genres. Explore, stream, and enjoy your favorite
              tunes while staying connected to the ATIV Portal.
            </p>
            <p className="body">
              Engage in exciting events within the ATIV ecosystem, combining the
              joy of music with the thrill of participation. Discover new
              releases, timeless classNameics, and hidden gems, making your ATIV
              experience even more enriching and unforgettable.
            </p>
            <p className="body">
              Join now and let the harmony of music and events elevate your
              journey within the ATIV world.
            </p>
          </div>
          <div className="images">
            <img className="ampsample" src="/asset/image/amp_sample.png" />
          </div>
        </div>
        <div className="section column white" id="musician">
          <div className="slogan">
            <p className="body shadowblack">If you are a musician,</p>
            <p className="body shadowblack">join us and make some noise!</p>
          </div>
          <a
            className="btn greenbtn bold"
            href="https://tc1gc07ww3a.typeform.com/applyforativ"
            target="_black"
          >
            Apply for Musician
          </a>
        </div>
        <div className="section column white" id="faq">
          <p className="headline bold">FAQ</p>
          {faqs.map((v, i) => {
            return (
              <div
                className="faq"
                i={i}
                onClick={(e) => {
                  faqs[i].view = !faqs[i].view;
                  setFaqs([...faqs]);
                }}
              >
                <button className="body bold" style={{ textAlign: "left" }}>
                  {v.question}
                </button>
                <div
                  className="column"
                  id="q"
                  style={{ display: v.view ? "flex" : "none" }}
                >
                  <div className="devider"></div>
                  <p className="body">{v.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" section footer column white">
          <div className="row">
            <a
              className="social"
              href="https://discord.gg/ativ"
              target="_blank"
            >
              <img src="/asset/image/discord.svg" />
            </a>
            <a
              className="social"
              href="https://twitter.com/ativ_official"
              target="_blank"
            >
              <img src="/asset/image/twitter.svg" />
            </a>
            <a
              className="social"
              href="https://www.youtube.com/@ativ_official"
              target="_blank"
            >
              <img src="/asset/image/youtube.svg" />
            </a>
            <a
              className="social"
              href="https://www.instagram.com/ativ_official"
              target="_blank"
            >
              <img src="/asset/image/insta.svg" />
            </a>
          </div>
          <p className="badge">
            Copyright © 2023 ATIV Inc. All rights reserved.
          </p>
        </div>
      </div>
      <Script src="/script/demo.js" />
    </>
  );
}
