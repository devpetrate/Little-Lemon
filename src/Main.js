import mainimg1 from './icons/mainimg1.jpg'
import React from 'react'
import salad from './icons/greek salad.jpg'
import lemon from './icons/lemon dessert.jpg'
import intro from './icons/intro2.jpg'
import man1 from './icons/man1.png'
import man2 from './icons/man2.png'
import man11 from './/icons/man11.jpg'
import man22 from './/icons/man22.jpg'

function Main() {
    return (
        <>
            {/* First Main Content */}
            <section>
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                        unde autem commodi assumenda sint temporibus necessitatibus place</p>
                    <button>Reserve A Table</button>
                    <aside>
                        <img src={mainimg1} alt="Food made in Little Lemon" width="150px" />
                    </aside>
                </section>
            </section>
            {/* Second Main Content */}
            <section>
                <section>
                    <h1>This Weeks Specials!</h1>
                    <button>Online Menu</button>
                </section>
                <section>
                    <section>
                        <img src={salad} alt="Little lemon salad" width="150px" />
                        <h2>Green Salad</h2>
                        <h2>$12.99</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus, unde autem
                            commodi assumenda sint temporibus
                            necessitatibus place</p>
                        <h3>Order a delivery</h3>
                    </section>
                    <section>
                        <img src={lemon} alt="Little lemon salad" width="150px" />
                        <h2>Bruchetta</h2>
                        <h2>$13.99</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus, unde autem
                            commodi assumenda sint temporibus
                            necessitatibus place</p>
                        <h3>Order a delivery</h3>
                    </section>
                    <section>
                        <img src={intro} alt="Little lemon salad" width="150px" />
                        <h2>Lemon Juice </h2>
                        <h2>$10.99</h2>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Accusamus, unde autem
                            commodi assumenda sint temporibus
                            necessitatibus place</p>
                        <h3>Order a delivery</h3>
                    </section>
                </section>
            </section>
            {/* Third Main Content */}
            <section>
                <h2>Testimonials</h2>
                <section>
                    <section>
                        <h3>Rating</h3>
                        <img src={man1} alt="Customer Rating 1" width="150px" />
                        <h3>James</h3>
                        <p>A 10/10 meal</p>
                    </section>
                    <section>
                        <h3>Rating</h3>
                        <img src={man2} alt="Customer Rating 1" width="150px" />
                        <h3>Hanson</h3>
                        <p>A 10/10 meal</p>
                    </section>
                    <section>
                        <h3>Rating</h3>
                        <img src={man1} alt="Customer Rating 1" width="150px" />
                        <h3>James</h3>
                        <p>A 10/10 meal</p>
                    </section>
                    <section>
                        <h3>Rating</h3>
                        <img src={man2} alt="Customer Rating 1" width="150px" />
                        <h3>Hanson</h3>
                        <p>A 10/10 meal</p>
                    </section>
                </section>
            </section>
            {/* Fourth Main Content */}
            <section>
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Accusamus, unde autem
                        commodi assumenda sint temporibus
                        necessitatibus placeat debitis facilis
                        sapiente porro? Ea iste repellendus, assumenda
                        blanditiis harum exercitationem autem porro.</p>
                </section>
                <aside>
                    <img src={man11} alt="Customer Rating 1" width="150px" />
                    <img src={man22} alt="Customer Rating 1" width="150px" />
                </aside>
            </section>
        </>
    )
};
export default Main;