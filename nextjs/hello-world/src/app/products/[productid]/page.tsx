export default function ProductDetails({ 
    params,

 }:{
    params:{productid:String}
 } ){
    return <h1>Details about product{params.productid}</h1>
}