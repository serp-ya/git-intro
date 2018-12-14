const SimpleList = React.memo(({ items }) => (
  <ul>{items.map(item => (
    <li key={item}>{item}</li>))}
  </ul>
));