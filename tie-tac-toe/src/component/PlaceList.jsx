export default function PlaceList({
  places,
  onChangePlace,
  onDeletePlace
}) {
  return (
    <ul>
      {places.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e => {
                onChangePlace({
                  ...item,
                  packed: e.target.checked
                });
              }}
            />
            {' '}
            {item.name}  
          </label>
          <button onClick={() => onDeletePlace(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
