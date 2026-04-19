import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://www.minimundi.com.br/cdn/imagens/produtos/det/miniatura-carro-batmovel-1989-c-figura-metals-die-cast-1-32-jada-toys_a.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
