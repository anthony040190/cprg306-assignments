export default function Item({name, quantity, category, onSelect}) {

    return (
        <div onClick={() => { onSelect(name) }}>
            <ul className="my-5 rounded px-2 py-2 bg-slate-900 hover:bg-yellow-900 cursor-pointer">
                <li className="text-xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}