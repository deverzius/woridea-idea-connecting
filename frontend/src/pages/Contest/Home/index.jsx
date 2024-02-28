import React from 'react'
import styles from './styles.module.scss'
import ContestEventCard from '../../../components/Contest/EventCard'
import { useNavigate } from 'react-router-dom'
// import contestBackground from '../../../assets/contest-bg.jpg'

export default function HomePage() {
  const navigate = useNavigate()

  const handleCreateEventClick = () => {
    navigate('/new')
  }

  return (
    <>
      <div
        className={styles.contestHomeContainer}
      >
        <div className={styles.contestHomeBg} />
        <h1
          style={{
            color: '#FF7510',
            fontSize: '6rem',
            height: 160,
            lineHeight: '160px',
            fontFamily: 'Michroma, sans-serif'
          }}
        >
          INNOVATION COMPETITION
        </h1>
        <div
          style={{
            fontSize: '3rem',
            marginBottom: 10
          }}
        >
          WANNA HOST A STARTUP IDEA COMPETITION?
        </div>
        <div
          style={{
            fontSize: '2rem',
          }}
        >
          GET EVERYTHING TO LAUNCH AN EVENT READY!
        </div>
        <button
          className={styles.createEventButton}
          onClick={handleCreateEventClick}
        >
          CREATE NEW EVENT
        </button>

        {/* List event card */}
      </div>
      <div className={styles.contestEventCardList}>
        <ContestEventCard />
        <ContestEventCard />
        <ContestEventCard />
      </div>
    </>
  )
}