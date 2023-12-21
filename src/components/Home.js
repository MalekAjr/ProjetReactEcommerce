import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <header>
        {/* Your website logo, navigation, etc. can go here */}
      </header>

      <main>
        <section className="hero">
          {/* This could be a banner with a promotion or featured products */}
          <h1>Welcome to our E-commerce Store</h1>
          <p>Discover amazing products at great prices!</p>
          <a href="/store" className="cta-button">
            <Button>Shop Now</Button></a>
        </section>

        
        <section className="d-flex justify-content-around">
          {/* Display some featured products */}
          <div className="product-card" style={{margin:"20px"}}>
            <img src="./imgs/img1women.jpg" alt="Product 1" style={{height: "500px", width:"450px" , marginBottom:"20px" }}/>
            <h2>Product 1</h2>
            <p>Product Black Dress/Robe Noir</p>
            <span className="price">$19.99</span> <br></br>
            <a href="/store" className="product-link"><Button>View Product</Button></a> 
          </div>

          <div className="product-card" style={{margin:"20px"}}>
            {/* Correct the image src for Product 2 */}
            <img src="./imgs/img5men.jpg" alt="Product 2" style={{height: "500px", width:"450px" , marginBottom:"20px" }}/>
            <h2>Product 2</h2>
            <p>Product Green Shirt</p>
            <span className="price">$29.99</span> <br></br>
            <a href="/store" className="product-link"><Button>View Product</Button></a>
          </div>

          <div className="product-card" style={{margin:"20px"}}>
            <img src="./imgs/img2women.jpg" alt="Product 1" style={{height: "500px", width:"450px" , marginBottom:"20px" }}/>
            <h2>Product 3</h2>
            <p>Product Women's T-Shirt/Tee-Shirt pour femme</p>
            <span className="price">$19.99</span> <br></br>
            <a href="/store" className="product-link"><Button>View Product</Button></a>
          </div>

          
          {/* Add more featured products here */}
        </section>
        
      </main>

      <footer>
        {/* Footer content, links, etc. can go here */}
      </footer>
    </div>
  );
}

export default Home;
