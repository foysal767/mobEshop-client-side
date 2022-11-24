import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")`, borderRadius: "10px" }}>
            <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-primary">mobEshop</h1>
                    <h1 className="mb-5 text-2xl font-semibold">We make your dreams happen</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;