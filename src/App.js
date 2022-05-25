import './App.css';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select'

function App() {
  const [date, setDate] = useState(new Date());
  const [product, setProduct] = useState({});

const set=({target})=>{
  const {name,value}=target;
  setProduct((prev)=>
  ({...prev,[name]:value})
  )
}
const options = [
  { value: 'Computer', label: 'Computer' },
  { value: 'Mobile', label: 'Mobile' }
]
const MyComponent = () => (
  <Select options={options} />
)

const submit=(e)=>{
  e.preventDefault();
  alert(JSON.stringify(product, "",2))
}
  return (
    <form className='fr'>
      <div>
        <h3>Type</h3>
        {MyComponent}
      </div>
      
    <div>
      <h3>Name</h3>
      <input type="text" name="Name" value={product.name} onChange={set}></input>
    </div>
      
    <div>
      <h3>Model</h3>
      <input type="text" name="model" value={product.model} onChange={set}></input>
    </div>
      
    <div>
      <h3>Date</h3>
      <DateTimePicker onChange={setDate} value={date} />
    </div>
      
    <div>
    <button onClick={submit}>Submit</button>
    </div>
      
    </form>
  );
}

export default App;
