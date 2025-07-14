import { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    priceGuess: '',
    pin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pin') {
      const raw = value.replace(/\D/g, '').slice(0, 16);
      const formatted = raw.replace(/(.{4})/g, '$1-').slice(0, 19).replace(/-$/, '');
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Price Guess</label>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
              }}
            >
              $
            </span>
            <input
              type="number"
              name="priceGuess"
              value={formData.priceGuess}
              onChange={handleChange}
              style={{ paddingLeft: '25px' }} // space for $
              step="0.01"
              min="0"
            />
          </div>
        </div>
        <div>
          <label>16-digit Pin</label>
          <input
            name="pin"
            placeholder="####-####-####-####"
            value={formData.pin}
            onChange={handleChange}
            maxLength={19}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

