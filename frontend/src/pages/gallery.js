import './App.css';

const Gallery = () => {
    return (<>
        <h3>Gallery</h3>
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
        <div class="box five"></div>
        <div class="box six"></div>
        <div class="box seven"></div>
        <div class="box eight"></div><br/>
        <button onClick={() => window.location.reload(true)}>View More</button>
    </>);
}

export default Gallery;