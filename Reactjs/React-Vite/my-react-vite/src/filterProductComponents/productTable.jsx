export default function ProductTable({products , filterText , checkBox}){


    let lastcategory = null;
    let category = null;

    let filteredProducts = products.filter((product)=>{
        // console.log(product.name.toLowerCase().indexOf(filterText.toLowerCase()));
        if(checkBox){
            return product.name.toLowerCase().indexOf(filterText.toLowerCase()) == 0 && product.stocked == true
        }
        return product.name.toLowerCase().indexOf(filterText.toLowerCase()) == 0
    })

   

    let finalresult = findArrayofArray(filteredProducts);

    console.log(filteredProducts);



    return(
        <>
        
        <table className="table_box">
            <thead>
                <tr>
                    <th className="table_head">Name</th>
                    <th className="table_head">Price</th>
                </tr>
            </thead>
            <tbody>
                {finalresult.map((product)=>{
                    
                    if(product.category != lastcategory){
                        category = 
                            <tr>
                                <th>{product.category}</th>
                            </tr>
                        
                    } else {
                        category = null;
                    }
                    lastcategory = product.category;
                    return(
                        <>
                        {category}
                        <tr>
                            <td>{ !product.stocked? <span style={{'color' :  'red'}}>{product.name}</span> : product.name }</td>
                            <td>{product.price}</td>
                        </tr>
                        
                        </>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

function findArrayofArray(filteredProducts){
    let categoryArray = [];
    let arrOfarrProducts = [];
    filteredProducts.forEach(element => {
        let index = categoryArray.indexOf(element.category)
        if(index==-1){
            categoryArray.push(element.category);
            arrOfarrProducts.push([element]);
        } else {
            let copyArray = [...arrOfarrProducts[index] , element];
            arrOfarrProducts[index] = copyArray;
        }
    });

    return arrOfarrProducts.flat();

    console.log("categoryArray = " , categoryArray);
    console.log("arrOfarrProducts = " , arrOfarrProducts);
}