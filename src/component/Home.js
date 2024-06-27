import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Header />
            <section className="hero">
                <div className="hero-text">
                    <h1>AlgoExpert</h1>
                    <p>The ultimate resource to prepare for coding interviews. Everything you need, in one streamlined
                        platform.</p>
                    <button>Buy AlgoExpert</button>
                </div>
                <div className="image-hero-wrap">
                    <div className="hero-image image-hero1">
                        <img src="assets/images/bg.jpeg" />
                    </div>
                    <div className="hero-image image-hero1">
                        <img src="assets/images/bg.jpeg" />
                    </div>
                    <div className="hero-image">
                        <img src="assets/images/bg.jpeg" />
                    </div>
                    <div className="hero-image">
                        <img src="assets/images/bg.jpeg" />
                    </div>
                </div>
            </section>
            <section className="features">
                <h2>What is AlgoExpert?</h2>
                <button className="video-button">Watch the Video</button>
                <div className="feature-grid">
                    <div className="feature-item">
                        <img src="assets/images/icon1.png" alt="Icon" />
                        <h3>200 Hand-Picked Questions</h3>
                        <p>Coding interview prep is a numbers game that many candidates lose. We've hand-picked 200 of the
                            best coding interview questions to prepare you for every interview you could encounter.</p>
                        <Link to="">Learn more.</Link>
                    </div>
                    <div className="feature-item">
                        <img src="assets/images/icon2.png" alt="Icon" />
                        <h3>100+ Hours Of Video Explanations</h3>
                        <p>Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video
                            explanation to maximize learning. That's over 100 hours of content, all at your fingertips.</p>
                        <Link to="">Learn more.</Link>
                    </div>
                    <div className="feature-item">
                        <img src="assets/images/icon3.jpeg" alt="Icon" />
                        <h3>Data Structures Crash Course</h3>
                        <p>Data structures are the pillars of coding interviews. Our video series gives you the foundational
                            knowledge you need to be well-versed in all of the popular data structures.</p>
                        <Link to="">Learn more.</Link>
                    </div>
                    <div className="feature-item">
                        <img src="assets/images/icon2.jpeg" alt="Icon" />
                        <h3>Solutions In 9 Languages</h3>
                        <p>Not everyone speaks the same programming language. All of our solutions come in 9 different
                            languages: JavaScript, TypeScript, Python, Swift, Kotlin, C++, Java, C# and Go.</p>
                        <Link to="">Learn more.</Link>
                    </div>
                    <div className="feature-item">
                        <img src="assets/images/icon1.png" alt="Icon" />
                        <h3>Feature-Rich Coding Workspace</h3>
                        <p>Coding out solutions to algorithm problems is the best way to practice. Our coding workspace lets
                            you type out your answers and run them against our test cases right here on the website.</p>
                        <Link to="">Learn more.</Link>
                    </div>
                    <div className="feature-item">
                        <img src="assets/images/icon1.png" alt="Icon" />
                        <h3>Space-Time Complexity Analyses</h3>
                        <p>Understanding how much memory an algorithm uses and how fast it runs is crucial to passing coding
                            interviews. All of our explanations include a rigorous space-time complexity analysis.</p>
                        <Link to="">Learn more.</Link>
                    </div>
                </div>
            </section>
            <section className="comparison">
                <h2>A Better Way to Prep for Coding Interviews.</h2>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Cracking the Coding Interview</th>
                            <th>LeetCode</th>
                            <th className="highlight">AlgoExpert</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100+ Practice Questions</td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Data Structures Content</td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Guided Format</td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="cross">
                                <p>❌</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Coding Workspace</td>
                            <td className="cross">
                                <p>❌</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Multiple Programming Languages</td>
                            <td className="cross">
                                <p>❌</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                        </tr>
                        <tr>
                            <td>High-Quality Solutions</td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                            <td className="cross">
                                <p>❌</p>
                            </td>
                            <td className="check">
                                <p>✓</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="category-wrap">
                <div className="container">
                    <h1>200 Questions Spanning 15 Categories.</h1>
                    <p>If you want to ace the coding interviews, being well-versed in all common data structures and popular
                        problem-solving methods is paramount. With 200 questions spanning 15 categories and 4 difficulty
                        levels,
                        we've got you covered.</p>
                    <button className="explore-button">Explore Questions</button>
                    <div className="categories">
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Arrays</div>
                            </div>

                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Graphs</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Tries</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div> Linked Lists</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Graphs</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Tries</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div> Linked Lists</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Graphs</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Tries</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div> Linked Lists</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Graphs</div>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <div className="white-check">✓</div>
                                <div>Tries</div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="notation">
                <div className="container">
                    <h1>Big <span className="italic">O</span> Notation Made Easy.</h1>
                    <div className="content">
                        <div className="section">
                            <h2>Time Complexity</h2>
                            <p>Why does building a heap only take O(N) time? What does O(logN) really mean? What's the
                                time-complexity difference between appending a value to an array and adding a character to a
                                string? We address all of these things, and more.</p>
                            <img src="assets/images/icon1.png" alt="Hourglass" />
                        </div>
                        <div className="section">
                            <h2>Space Complexity</h2>
                            <p>You know that thing you're kinda familiar with but not really? Yeah, that's space complexity.
                                And it turns out it's pretty important. All of our video explanations dive deep into
                                space-complexity to turn you into a well-rounded Big O expert.</p>
                            <img src="assets/images/icon2.png" alt="Database" />
                        </div>
                    </div>
                    <button className="cta-button">Become An AlgoExpert</button>
                </div>

            </section>
            <section className="carousel-wrap">
                <div className="carousel-containers">
                    <h2>And Over 200,000 Satisfied Engineers.</h2>
                    <div className="carousel">
                        <div className="carousel-items">
                            <img src="assets/images/female.avif" alt="Carlos" className="profile-pic" />
                            <h3>Carlos</h3>
                            <p>Software Developer Intern</p>

                            <div> <img src="assets/images/micro1.png" className="company-logo" /></div>
                            <p className="testimonial">I'm just writing to thank you for this product. I had failed in so many
                                interviews before, but I wanted to get into a top tech company so much that I even enrolled
                                what it takes.</p>
                        </div>
                        <div className="carousel-items">
                            <img src="assets/images/female.avif" alt="Marlies" className="profile-pic" />
                            <h3>Marlies</h3>
                            <p>Software Engineer</p>
                            <div> <img src="assets/images/micro1.png" className="company-logo" /></div>
                            <p className="testimonial">I just accepted an offer with Palantir, and also received an offer from
                                Amazon and a handful of startups. AlgoExpert does a great job selecting problems - many of
                                .</p>
                        </div>
                        <div className="carousel-items">
                            <img src="assets/images/female.avif" className="profile-pic" />
                            <h3>Adarsh</h3>
                            <p>Software Engineer</p>

                            <div> <img src="assets/images/micro1.png" className="company-logo" /></div>
                            <p className="testimonial">I just got a job offer from Oracle and most of the questions they asked,
                                , I was
                                able to break down the problem and write code which I learned from the platform.</p>
                        </div>
                    </div>
                    <div className="carousel-controls">
                        <button id="prev">←</button>
                        <button id="next">→</button>
                    </div>
                    <button className="read-more">Read More Testimonials</button>

                </div>
                <script src="assets/js/scripts.js"></script>
            </section>
            <section className="crash-course">
                <div className="container">
                    <div className="content">
                        <img src="assets/images/bg.jpeg" alt="Memory Diagram" />
                        <div className="text-content">
                            <h1>Data Structures Crash Course.</h1>
                            <p>Algorithms and data structures go hand in hand; the solution to virtually any coding
                                interview problem will require the implementation of some kind of abstract data type in
                                order to access and manipulate information.</p>
                            <p>Our video series on data structures is the ultimate crash course on this important topic. We
                                cover fundamental concepts pertaining to memory, complexity analysis, and Big O notation,
                                and then break down popular data structures to give you a detailed look at how these
                                concepts are applied under the hood. Linked Lists and Binary Trees will never instill fear
                                in your heart again.</p>
                            <button className="cta-button">Start The Course</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home