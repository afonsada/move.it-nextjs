import Head from 'next/head'

import { XpBar } from "../components/XpBar";
import { Profile } from "../components/Profile";
import { CompletedChalanges } from "../components/CompletedChalanges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { GetServerSideProps } from 'next';
import styles from "../styles/pages/Home.module.css";
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps{
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience = {props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
      >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <XpBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChalanges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
