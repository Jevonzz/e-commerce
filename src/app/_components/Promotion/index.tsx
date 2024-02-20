'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDiff = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDiff === 0) {
        clearInterval(timeInterval)
      }
    }, 1000)
    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textbox}>
        <h3 className={classes.title}> Deals of the Month</h3>
        <p>
          {' '}
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>
        <ul className={classes.stats}>
          <Statbox label="Days" value={time.days} />
          <Statbox label="Hours" value={time.hours} />
          <Statbox label="Minutes" value={time.minutes} />
          <Statbox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const Statbox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
