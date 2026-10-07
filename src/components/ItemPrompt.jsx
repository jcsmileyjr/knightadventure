export default function ItemPrompt({ inventory, onUseItem, onFight }) {
  return (
    <div className="screen item-prompt">
      <h2>Use an item?</h2>

      {inventory.length > 0 ? (
        <>
          <p>Choose an item to use, or save your items and fight.</p>
          <div className="item-prompt-items">
            {inventory.map((item) => (
              <div className="item-prompt-item" key={item.id}>
                <p>
                  <strong>{item.name}</strong>
                </p>
                {item.description && <p>{item.description}</p>}
                <button onClick={() => onUseItem(item)}>Use {item.name}</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>You have no items to use.</p>
      )}

      <button onClick={onFight}>Save my items and fight</button>
    </div>
  );
}
