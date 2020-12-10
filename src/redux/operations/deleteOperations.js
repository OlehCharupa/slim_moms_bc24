import axios from "axios";
import { deleteItems } from "../slice/currentDateInfoSlice";
import { resetErrorRequest, setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";

export const deleteElement = (id, dayId, token) => async (dispatch) => {
  const options = (token) => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  try {
    dispatch(resetErrorRequest());
    dispatch(loaderOn());

    const result=await axios.delete("https://slimmom-backend.herokuapp.com/day", {
      data: { dayId: dayId, eatenProductId: id },
      ...options(token),
    });
    const newDaySummary=result.data.newDaySummary
// console.log('result',newDaySummary);
    dispatch(deleteItems({id,newDaySummary}));
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());
  }
};

// export const deleteElement = (id, dayId, token) => async (dispatch) => {

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
