// import News from './components/artcomps/news/news';
// import Contacts from './components/artcomps/contacts/contacts';
// import About from './components/artcomps/about/about';
import Head from './components/head/head';
import Footer from './components/footer/footer';
import {Main} from "./components/main/main";

function App() {
  return (
      <div className="App">
          <Head />
          <main>
              <Main />
          </main>
          <Footer />
      </div>
  );
}

export default App;
