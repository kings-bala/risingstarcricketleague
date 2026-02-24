const schedule = [
  {
    day: 'Monday',
    friday: false,
    sessions: [
      { title: 'Leather ball group', coach: 'Yash', time: '5:30 - 7:30 PM' },
      { title: 'Tennis ball group', coach: 'Sneh', time: '5:30 - 7:30 PM' },
    ],
  },
  {
    day: 'Tuesday',
    friday: false,
    sessions: [
      { title: 'Leather ball 1:1', coach: 'Dhruvil', time: '5:30 - 7:30 PM' },
      { title: 'Leather ball 1:1', coach: 'Yash', time: '5:30 - 7:30 PM' },
    ],
  },
  {
    day: 'Wednesday',
    friday: false,
    sessions: [
      { title: 'Tennis ball group', coach: 'Sneh', time: '5:30 - 7:30 PM' },
      { title: 'Leather ball 1:1', coach: 'Yash', time: '5:30 - 7:30 PM' },
    ],
  },
  {
    day: 'Thursday',
    friday: false,
    sessions: [{ title: 'Leather ball group', coach: 'Dhruvil', time: '5:30 - 7:30 PM' }],
  },
  {
    day: 'Friday',
    friday: true,
    sessions: [
      { title: 'Ground 1: Practice matches', coach: '', time: '5:30 - 7:30 PM' },
      { title: 'Ground 2: Private', coach: 'Sneh', time: '5:30 - 7:30 PM' },
    ],
  },
]

const CALENDAR_EMBED = 'https://calendar.google.com/calendar/embed?src=risingstarcricketacademy%40gmail.com&ctz=America%2FNew_York'
const CALENDAR_ADD = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rising+Star+Cricket+Practice'
const CALENDAR_ICS = 'https://calendar.google.com/calendar/ical/risingstarcricketacademy%40gmail.com/public/basic.ics'

function Schedule() {
  return (
    <section className="section section-dark" id="schedule">
      <h2>SUMMER SCHEDULE</h2>
      <p className="schedule-note">
        Please note the new schedule. All practice sessions will be held at Plainsboro Community Park from
        5:30 PM to 7:30 PM.
      </p>
      <div className="schedule-grid">
        {schedule.map((day) => (
          <div key={day.day} className="schedule-day">
            <div className={`schedule-day-header ${day.friday ? 'friday' : ''}`}>{day.day}</div>
            {day.sessions.map((s, i) => (
              <div key={i} className="schedule-session">
                <strong>{s.title}</strong>
                {s.coach && <>Coach: {s.coach}<br /></>}
                Time: {s.time}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <a href={CALENDAR_EMBED} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.6rem 1.5rem', border: '2px solid #fff', borderRadius: 4, color: '#fff', fontWeight: 600 }}>
          View Full Calendar
        </a>
      </div>
      <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Add these events to your own calendar:</p>
      <div className="schedule-actions">
        <a href={CALENDAR_ADD} target="_blank" rel="noopener noreferrer">Add to Google Calendar</a>
        <a href={CALENDAR_ICS} download="rising_star_cricket_academy_schedule.ics">Download Calendar (ICS)</a>
      </div>
    </section>
  )
}

export default Schedule
