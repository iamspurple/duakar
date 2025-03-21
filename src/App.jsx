import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="logo">DUAKAR</div>
          <span>PROXY</span>
        </header>
        <main className="main">
          <h1 className="title">Telegram без VPN</h1>
          <ul className="list">
            <li className="text setting">
              <span>
                Прокси – это встроенная функция Telegram, которая позволяет
                обойти блокировку.
              </span>
            </li>
            <li className="text secure">
              <span>
                Он работает только в Telegram, он безопасен и не расходует
                заряд, в отличие от VPN.
              </span>
            </li>
            <li className="text check">
              <span>
                <b> Duakar Proxy</b> это удобный способ всегда оставаться на
                связи!
              </span>
            </li>
          </ul>

          <div className="button">
            <a
              className="link"
              href="tg://proxy?server=proxy.duakar.ru&port=446&secret=dd9ade2d0229f4a7828b5be4fb258b164f"
            >
              Подключиться
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
