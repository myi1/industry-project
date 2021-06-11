import React from 'react'
import { Link } from react-router-dom;


function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__hero-section">
                <h2>Welcome back, Name</h2>
                <img></img>
            </div>
            <div className="homepage__info-details">
                <Link></Link>
                <div className="homepage__article-section">
                    <h3 className="homepage__article-section-header">Latest In Health</h3>
                    <article>
                        <h4  className="homepage__article-header">Top 10 foods for ....</h4>
                        <p  className="homepage__article-description"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default HomePage
