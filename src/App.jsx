import ItemProvider from "./context/ItemProvider";
import List from "./views/Shopping/List";

export default function App() {
  return (
    <>
    <ItemProvider>
    <List />
    </ItemProvider>
    </>
  )
}
