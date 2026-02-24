const cards = [
  {
    title: 'TRAINING',
    img: '/images/cricket0.jpeg',
    text: 'Our certified and experienced coaches will work with you in a group or in a 1:1 setup to enhance your batting, bowling, fielding, wicket keeping and overall cricketing acumen. The focus of the training would be to instill discipline and develop physical, mental, and technical skills.',
  },
  {
    title: 'TOURNAMENT',
    img: '/images/cricket1.jpeg',
    text: "First time in New Jersey our team is coming up with the hard ball cricket tournament during kids summer break. This allows us to maximize the game time for our kids who otherwise don't get to play outdoors around the year. This will enhance their skill to compete and excel during high pressure situations. This will enormously empower them when they go and play hub, regional, and even national games.",
  },
  {
    title: 'COMMUNITY',
    img: '/images/cricket2.jpeg',
    text: 'To develop cricket in the area at the grass root level, our team has come up with the Vinyl Ball League. Kids with no prior experience in Cricket or who are just getting exposed to the game, can participate in this environment. Our team which consists of trained coaches and parents who themselves have played the game, provide a safe and conducive environment. This is open for all and we are looking for a lot of fun during this summer while playing the sport we all love.',
  },
]

function WhatWeDo() {
  return (
    <section className="section" id="whatwedo">
      <h2>WHAT WE DO</h2>
      <p className="whatwedo-intro">
        We are passionate cricket lovers, with the sole purpose of promoting cricket in the USA, we are
        starting community cricket a.k.a. Vinyl Ball Cricket League, Cricket Coaching and Hard Ball Cricket
        Tournament. If you are a seasoned player or just started with the sport, we have a program for all
        of you.
      </p>
      <div className="whatwedo-cards">
        {cards.map((card) => (
          <div key={card.title} className="whatwedo-card">
            <h3>{card.title}</h3>
            <img src={card.img} alt={card.title} />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatWeDo
