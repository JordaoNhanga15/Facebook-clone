import '../style/screen/App.css'
import Headers from "../components/Header";
import Stories from "../components/Stories";
import Post from '../components/Post';
import Chat from '../components/Chat';
import Footer from '../components/footer';

function App() {
    return (
      <>
        <Headers />
        <div className="container">
          <div className="lado-b">
          <Stories />
          <Post />
          </div>
          <div className="lado-c">
          <Chat />
          </div>
          <div className="lado-a">
          <Footer />
          </div>
        </div>
      </>
    );
  }
  
  export default App;
  