

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-top">
                <h4>subscribe to Boleto </h4>
                <h2>to get exclusive benifits</h2>
            </div>
            <div className="newsletter-bottom">
                <div className="form-area">
                    <input type="email" name="email" id="email" placeholder="Your Email Address" />
                    <button className="c-btn">Subscribe</button>
                </div>
                <p>We respect your privacy, so we never share your info</p>
            </div>
        </div>
    );
};

export default Newsletter;