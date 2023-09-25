import React from 'react';
import './index.css'
import { BiLike } from "react-icons/bi";
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
            <div className='about-us'>
                <h1 className='about titlePage'>About</h1>
                <p className='txt'>
                We are a dedicated team of beauty devotees on the hunt for the coolest cult products the world has to offer - from the latest scientific discoveries to hundred-year-old remedies that have never been bettered - Cult Beauty is the destination for those looking for the next big thing. Whether it’s a problem-solving treatment or a yet unheard-of oil, we pride ourselves on our transparency (we list full ingredients and publish all reviews) and only sell the products that blow us away.
                </p>
                <p className='txt' style={{ marginTop: '10px' }} >
                    It might not seem like it, but product.com has thousands of lines
                    of code powering it and it's quite popular! Jake likes design and I do
                    all the coding as well as make sure the site is fast. If it's running
                    slow or you have any suggestions, please <NavLink className="a" to={'/contact-us'}>contact us</NavLink>.
                </p>
                <h2 className='about subTitle'>About This Site</h2>
                <p className='txt'>
                    <NavLink className="a" to={'/'}>DEU.com</NavLink> currently gets about 500,000+ visitors per month
                    (and growing rapidly!) from other sites who link to us, from people who
                    share it on Facebook, &amp; from the search engines. If you find it
                    useful we hope you will share it around too!</p>
                <div className='icon'>
                    <span className='lsbtn'><BiLike style={{ marginLeft: '3px' }} /><span>Like</span></span>
                    <span className='lsbtn'>Share</span>
                    <span className='txtbtn'>&lt;-- this really helps!</span>
                </div>

                <p className='txt'>
                    Disclosure: DEU.com is a participant in the Amazon Services
                    LLC Associates Program, an affiliate advertising program designed to
                    provide a means for sites to earn advertising fees by advertising and
                    linking to amazon.com. If you buy any products from Amazon after
                    clicking a link on this website, we will earn a small commission which
                    helps us pay for the costs associated with running this site. Please
                    read our <NavLink className="a" to={'./privacy'}>Privacy Policy</NavLink>.
                </p>
                <h2 className='about subTitle2 '>Formulas Used</h2>
                <p className='txt'>
                    At its core, DEU.com uses the <a className='a' href='https://pubmed.ncbi.nlm.nih.gov/15883556/'>Mifflin-St Jeor</a> formula to
                    calculate an estimate of your <a className='a' href='https://en.wikipedia.org/wiki/Basal_metabolic_rate'>Basal Metabolic</a> Rate, and then we adjust
                    the numbers to take your activity level into account.
                </p>
                <h3 className='about subTitle3'>Mifflin-St Jeor Equation</h3>
                <div className='formulas'>
                    <p className='txt'>
                        Mifflin = (10.m + 6.25h - 5.0a) + s
                        <br />
                        m is mass in kg, h is height in cm, a is age in years, s is +5 for males
                        and -151 for females
                    </p>
                </div>
                <h3 className='about subTitle3'>Katch-McArdle Equation</h3>
                <p className='txt'>
                    Optionally, if you fill out the body fat percentage field, the calculator
                    will instead use the Katch-McArdle Formula, which is the most accurate
                    formula of all. If you don't know your body fat %, you can pick up a pair
                    of cheap body fat calipers on Amazon, or find a place (try University
                    health departments) that offers DEXA scans. DEXA scans are the gold-standard
                    in determining your body fat percentage and generally cost between $50 - $100.
                </p>
                <div className='formulas'>
                    <p className='txt'>
                        Katch = 370 + (21.6 * LBM)
                        <br />
                        where LBM is lean body mass
                    </p>
                </div>
                <h3 className='about subTitle3'>Revised Harris-Benedict Equation</h3>
                <p className='txt'>
                    The revised Harris-Benedict equation has been in use since 1984, and we
                    calculate this as well for those who want it.
                </p>
                <div className='formulas'>
                    <p className='txt'>
                        Harris-Benedict = (13.397m + 4.799h - 5.677a) + 88.362 (MEN)
                        <br />
                        Harris-Benedict = (9.247m + 3.098h - 4.330a) + 447.593 (WOMEN)
                        <br />
                        m is mass in kg, h is height in cm, a is age in years
                    </p>
                </div>
            </div>


    );
};

export default About;
