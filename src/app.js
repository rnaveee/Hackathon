const APIKEY = "AIzaSyCx0whn9cdu9Cf9TCtVnRSTTG9HB8xPihI";
const APIURL =   "https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyCx0whn9cdu9Cf9TCtVnRSTTG9HB8xPihI&parameters";

fetch(APIKEY, APIURL);

const App = () => {
    return (
        <div className="app">
        <p>HELLO!</p>
        </div>
    );
}

export default App;
