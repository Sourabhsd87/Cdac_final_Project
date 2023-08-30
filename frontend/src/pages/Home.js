const Home = () => {
    return (<>
      <div className="jumbotron text-center">
    <h1>Road Mate</h1>
    <p>Find like-minded riders and explore new destinations together.</p>
</div>
<div className="container"  style={{ 
  backgroundImage: "url('https://cdn.wallpapersafari.com/34/3/cJuKgk.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
}}>
    <h2>How it Works</h2>
    <div className="row">
        <div className="col-sm-4">
            <h3>Routing and Navigation</h3>
            <p>Turn-by-turn directions to help riders reach their destinations safely and efficiently. Suggest routes, real-time traffic updates, and alerts for road closures or construction.</p>
        </div>
        <div className="col-sm-4">
            <h3>Garages and Service Centers</h3>
            <p>Easily find nearby garages and service centers for routine maintenance and repairs. Ratings and reviews of different service providers to help riders make informed decisions.</p>
        </div>
        <div className="col-sm-4">
            <h3>Safety and Security</h3>
            <p>Safety tips and resources for riders, such as advice on proper gear and equipment, emergency contact information, and alerts for dangerous road conditions or weather patterns.</p>
        </div>
    </div>
</div>
<div className="container-fluid bg-light">
    <h2>Features</h2>
    <div className="row">
        <div className="col-sm-4">
            <h3>Community</h3>
            <p>Get advice and tips from other riders who have travelled the same route by signing up to our Newsletter service, you will get updates through our vast Community.</p>
        </div>
        <div className="col-sm-4">
            <h3>Must-Visit Locations</h3>
            <p>Popular destinations and attractions for riders, such as scenic routes, national parks, and iconic landmarks. This includes descriptions, and reviews from other riders.</p>
        </div>
        <div className="col-sm-4">
            <h3>Feedback and Rating System</h3>
            <p>Allow riders to rate and review different aspects of the app and its services, including route suggestions, service providers, and community members. This can help improve the app and ensure that riders have the best possible experience.</p>
        </div>
    </div>
</div></>

    )
  };
  
  export default Home;