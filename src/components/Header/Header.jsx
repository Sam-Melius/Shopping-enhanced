import { useItems } from "../../context/ItemProvider";

export default function Header() {
    const { items } = useItems();
  return (
    <div>Number of items left on list: {items.length}</div>
  )
}
