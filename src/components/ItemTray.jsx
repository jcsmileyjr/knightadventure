export default function ItemTray({ inventory }) {
  const itemCounts = inventory.reduce((counts, item) => {
    counts[item.name] = (counts[item.name] ?? 0) + 1;
    return counts;
  }, {});

  return (
    <aside className="item-tray" aria-label="Inventory">
      <h2 className="item-tray-title">Inventory ({inventory.length})</h2>
      {inventory.length > 0 ? (
        <ul className="item-tray-list">
          {Object.entries(itemCounts).map(([name, count]) => (
            <li className="item-tray-item" key={name}>
              <span>{name}</span>
              {count > 1 && <span className="item-tray-count">× {count}</span>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="item-tray-empty">No items yet.</p>
      )}
    </aside>
  );
}
