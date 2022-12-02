import './App.css';
import ProductForm from '../src/components/ProductForm';
import List from './components/List';
import React, {useState} from 'react';



function App() {
  const [productList, setProductList] = useState([]);

  return (
    <div className="App">
      <ProductForm></ProductForm>
      <List productList = {productList} setProductList = {setProductList}></List>
    </div>
  );
}

export default App;
