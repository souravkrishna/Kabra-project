import axios from "axios";
import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL } from "../constants/productConstants";

export const listProducts =() =>(dispatch) =>{
  dispatch({
    type:PRODUCT_LIST_REQUEST
  });
  axios
    .get("https://api4286.s3.ap-south-1.amazonaws.com/products.json")
    .then((res) => {
      dispatch({
        type:PRODUCT_LIST_SUCCESS,
        payload: res.data
      })
    }).catch((err)=>{
      dispatch({
        type:PRODUCT_LIST_FAIL,
        payload:err
      })
    })
}
