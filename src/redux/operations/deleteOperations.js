import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { deleteItems } from "../slice/deleteElemSlice";


export const deleteElement = (id, dayId, token) => async (dispatch) => {
  const options = (token) => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    dispatch(loaderOn());
    const result = await axios.delete(
      "https://slimmom-backend.herokuapp.com/day",{ "dayId":"5fd0b058d0cc050004c45622", "eatenProductId":"c55fed6e-ac18-4394-94b1-41b0ea8946aa" },
      // {
      //   "dayId": '5fd0b058d0cc050004c45621',
      //   "eatenProductId": 'ccb24830-6873-47a0-b7f1-5f1155a5f8b1'
      // }
    
       options(token)
    
    );
    console.log(result);
    dispatch(deleteItems(id));
  } catch (error) {
    dispatch(setErrorRequest(error));
  } finally {
    dispatch(loaderOff());
  }
};


// export const deleteElement = (id, dayId, token) => async (dispatch) => {
//   console.log(id, dayId, token);
//   try {
//     dispatch(loaderOn());
//     const result = await axios({
//       url: "https://slimmom-backend.herokuapp.com/day",
//       method: "delete",
//       headers: { Authorization: `Bearer ${token}` },
//       body: {'dayId': dayId, 'eatenProductId': id }, 
//     });
//     dispatch(deleteItems());
//   } catch (error) {
//     dispatch(setErrorRequest(error));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

