import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <section class="footer-wrap">
                <div class="container-bottom">
                    <div class="botton-wrap">
                        <div>
                            <div class="heading">
                                <h1>A Better Way To Land Interviews.</h1>
                                <p>Earn the AlgoExpert Certificate. Get referred to tech companies.</p>
                            </div>
                            <div class="main">
                                <ul>
                                    <li>No more InMail messages that get ignored.</li>
                                    <li>No more cold emails that go nowhere.</li>
                                </ul>
                                <p>With AlgoExpert, preparing for interviews helps you land interviews.</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div class="line-hr"></div>
                        <nav>
                            <Link to="">Contact Us</Link> |
                            <Link to="">FAQ</Link> |
                            <Link to="">Reviews</Link> |
                            <Link to="">Blog</Link> |
                            <Link to="">Jobs</Link> |
                            <Link to="">SWE Project Contests</Link> |
                            <Link to="">Legal Stuff</Link> |
                            <Link to="">Privacy Policy</Link>
                        </nav>
                        <p>Copyright © 2017-2024 AlgoExpert LLC. All rights reserved.</p>
                    </footer>
                </div>
            </section>
        </div>
    )
}

export default Footer