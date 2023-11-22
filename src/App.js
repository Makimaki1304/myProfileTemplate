import logo from './simarin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          マキマキ
        </h1>
        <h2>プログラマー（勉強中）</h2>
        <h2>趣味</h2>
         <p>ゲーム、アニメ、漫画</p>
        <h2>好きなゲーム</h2>
         <p>真・女神転生３</p>
         <p>ドラッグ・オン・ドラグーン</p>
         <p>アーマードコア・フォーアンサー</p>
        <h2>所属</h2>
         <p>桃山学院大学経済学部、テック部</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
