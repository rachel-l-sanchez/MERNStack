import React, {useState} from 'react';


const List = () => {
    const {productList, setProductList} = useState([])
    
    return (
        <div>
          {
                productList?.map((task, index) => (
                    <div key={task.id.value}>
                          <p>{task.item}</p>
                    </div>
                )
                )
            }  
        </div>
        );
  }
export default List;
