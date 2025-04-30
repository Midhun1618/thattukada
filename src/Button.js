import React, { useState } from 'react';

const AddToCartButton = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(prev => prev + 1);
  const handleRemove = () => setCount(prev => (prev > 1 ? prev - 1 : 0));
  const handleInitialAdd = () => setCount(1);

  return (
    <div>
      {count === 0 ? (
        <button 
          onClick={handleInitialAdd}
          style={{
            backgroundColor: '#fc8019',
            color: 'white',
            padding: '6px 20px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          ADD
        </button>
      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solidrgb(154, 252, 25)',
          borderRadius: '8px',
          padding: '4px 10px',
          width: 'fit-content' 
        }}>
          <button onClick={handleRemove}
            style={{
              background: 'none',
              border: 'none',
              color: '#fc8019',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >–</button>
          
          <span style={{ margin: '0 12px', fontWeight: 'bold' }}>{count}</span>
          
          <button onClick={handleAdd}
            style={{
              background: 'none',
              border: 'none',
              color: '#fc8019',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >+</button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
