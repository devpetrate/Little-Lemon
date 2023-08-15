import mainimg1 from './icons/mainimg1.jpg'
import React from 'react'
import salad from './icons/greek salad.jpg'
import lemon from './icons/lemon dessert.jpg'
import intro from './icons/intro2.jpg'
import man1 from './icons/man1.png'
import man2 from './icons/man2.png'
import man11 from './/icons/man111.jpg'
import man22 from './/icons/man222.jpg'
import './Main.css'

function Main() {
    return (
        <>
            {/* First Main Content */}
            <section className='sect1'>
                <section className='sect11'>
                    <h1 className='text1'>Little Lemon</h1>
                    <h2 className='text11'>Chicago</h2>
                    <p className='text12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                        unde autem commodi assumenda sint temporibus necessitatibus place</p>
                    <button className='text13'>Reserve A Table</button>
                </section>
                <aside>
                    <img className='img1' src={mainimg1} alt="Food made in Little Lemon" />
                </aside>

            </section>
            {/* Second Main Content */}
            <section className='sect2'>
                <section className='sect21'>
                    <h1 className='text2'>This Weeks Specials!</h1>
                    <button className='text21'>Online Menu</button>
                </section>
                <section className='sect22'>
                    <section className='sect23'>
                        <img className='img2' src={salad} alt="Little lemon salad" width="150px" />
                        <section className='sectn'><h2 className='text22'>Green Salad</h2>
                            <h2 className='text23'>$12.99</h2></section>
                        <p className='text24'>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus, unde autem
                            commodi assumenda sint temporibus
                            necessitatibus place</p>
                        <h3 className='text25'>Order a delivery</h3>
                    </section>
                    <section className='sect23'>
                        <img className='img2' src={lemon} alt="Little lemon salad" width="150px" />
                        <section className='sectn'><h2 className='text22'>Bruchetta</h2>
                            <h2 className='text23'>$13.99</h2></section>
                        <p className='text24'>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus, unde autem
                            commodi assumenda sint temporibus
                            necessitatibus place</p>
                        <h3 className='text25'>Order a delivery</h3>
                    </section>
                    <section className='sect23'>
                        <img className='img2' src={intro} alt="Little lemon salad" width="150px" />
                        <section className='sectn'><h2 className='text22'>Lemon Juice </h2>
                            <h2 className='text23'>$10.99</h2></section>
                        <p className='text24'>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus, unde autem
                            commodi assumenda sint temporibus
                            necessitatibus place</p>
                        <h3 className='text25'>Order a delivery</h3>
                    </section>
                </section>
            </section>
            {/* Third Main Content */}
            <section className='sect3'>
                <h2 className='text3'>Testimonials</h2>
                <section className='sect3n'>
                    <section className='sect31'>
                        <h3 className='text31'>Rating</h3>
                        <section className='sect3nn'><img className='img3' src={man1} alt="Customer Rating 1" />
                            <h3 className='text32'>James</h3></section>
                        <p className='text33'>A 10/10 meal</p>
                    </section>
                    <section className='sect31'>
                        <h3 className='text31'>Rating</h3>
                        <section className='sect3nn'><img className='img3' src={man2} alt="Customer Rating 1" />
                            <h3 className='text32'>Hanson</h3></section>
                        <p className='text33'>A 10/10 meal</p>
                    </section>
                    <section className='sect31'>
                        <h3 className='text31'>Rating</h3>
                        <section className='sect3nn'><img className='img3' src={man1} alt="Customer Rating 1" />
                            <h3 className='text32'>James</h3></section>
                        <p className='text33'>A 10/10 meal</p>
                    </section >
                    <section className='sect31'>
                        <h3 className='text31'>Rating</h3>
                        <section className='sect3nn'><img className='img3' src={man2} alt="Customer Rating 1" />
                            <h3 className='text32'>Hanson</h3></section>
                        <p className='text33'>A 10/10 meal</p>
                    </section >
                </section >
            </section >
            {/* Fourth Main Content */}
            < section className='sect4' >
                <section className='sect41'>
                    <h1 className='text4'>Little Lemon</h1>
                    <h2 className='text41'>Chicago</h2>
                    <p className='text42'>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Accusamus, unde autem
                        commodi assumenda sint temporibus
                        necessitatibus placeat debitis facilis
                        sapiente porro? Ea iste repellendus, assumenda
                        blanditiis harum exercitationem autem porro.</p>
                </section>
                <aside className='sect42'>
                    <img className='img41' src={man11} alt="Customer Rating 1" />
                    <section class="imgn"> <img className='img42' src={man22} alt="Customer Rating 1" /></section>
                </aside>
            </section >
        </>
    )
};
export default Main;