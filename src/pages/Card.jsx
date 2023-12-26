import React, { useEffect, useState } from 'react'
import '../sass/card.scss'

const Card = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://mocki.io/v1/93d929a0-6307-4ead-9d6a-7399461b7775')
            .then((res) => res.json())
            .then((api) => setData(api))
    }, [])
    return (
        <div  className='cards'>
            {data.map((item) => (
                <div  className="card">
                    <div className="view">
                        <img className='img' width={200} src={item.img} alt="" />
                        <div className="write">
                            <h2 >{item.name}</h2>
                            <p>Curabitur non erat purus. Cras eu lorem et magna <br /> facilisis faucibus vel tempor purus. Donec eu lorem <br /> rutrum, condimentum sem feugiat, egestas</p>
                            <button>Read More <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div  className="opacity">
                        <img className='image' src={item.image} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                </div>


            ))}
        </div>
    )
}

export default Card
