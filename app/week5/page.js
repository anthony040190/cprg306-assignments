import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="mx-4">
            <h1 className="text-3xl font-bold my-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}