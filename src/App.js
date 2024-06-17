import { useState, useEffect } from 'react';

const App  = () => {
  const [items, setItems] = useState([]); // [state, setState
  const [resourceType, setResourceType] = useState('posts');

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const json = await response.json();
      setItems(json);
    };

    fetchResourceTypes();
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: 'flex', alignItems: "center" }}>
        <button onClick={() => changeResourceType('posts')}>Posts</button>
        <button onClick={() => changeResourceType('comments')}>Comments</button>
        <button onClick={() => changeResourceType('todos')}>Todos</button>
       </div> 
  );

     {items.map((item) => (
       <p>{item.title}</p>
       ))}
    </div>
  );  
};

export default App;