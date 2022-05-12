import Header from "./components/Header/Header";
import ItemProvider from "./context/ItemProvider";
import List from "./views/Shopping/List";

export default function App() {
  return (
    <>
    <ItemProvider>
      <Header />
    <List />
    </ItemProvider>
    </>
  )
}
