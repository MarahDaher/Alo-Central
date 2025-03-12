import { LanguageProvider } from "./shared/contexts/LanguageContext";
import AppRouter from "./shared/router/AppRouter";

function App() {
  return (
    <div className="flex h-screen">
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </div>
  );
}

export default App;
