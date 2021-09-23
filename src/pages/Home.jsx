import React from 'react'

import Card from '../components/Card';

export default function Home({data}) {
    const userGreeter = `Hi ${data[0].user_name}`

    const CardArray = data.map((item) => {
        return <Card key = {item.id} parcel={item} />
    })
    return (
      <section id="home">
        <header>
          <h1> {userGreeter}</h1>
        </header>
        <h4 style={{ fontWeight: 300, letterSpacing: 0.5 }}>
          We have some parcels for you:
        </h4>
        <div className="order-list">{CardArray}</div>
      </section>
    );
}
