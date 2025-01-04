import { store } from "./app/store";
import AppRouter from "./router/AppRouter";
import Provider from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
