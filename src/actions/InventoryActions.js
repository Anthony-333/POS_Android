import {
  CREATE_ITEM,
  RETRIEVE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  DELETE_ALL_ITEM,
} from "./type";

import POSDataService from "../services/Pos.service";

export const createItem =
  (ItemCode, ItemName, ItemDescription) => async (dispatch) => {
    try {
      const res = await POSDataService.create({
        ItemCode,
        ItemName,
        ItemDescription,
      });

      dispatch({
        type: CREATE_ITEM,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveItem = () => async (dispatch) => {
  try {
    const res = await POSDataService.getAll();

    dispatch({
      type: RETRIEVE_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateItem = (itemCode, data) => async (dispatch) => {
  try {
    const res = await POSDataService.update(itemCode, data);

    dispatch({
      type: UPDATE_ITEM,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteItem = (itemCode) => async (dispatch) => {
  try {
    await POSDataService.delete(itemCode);

    dispatch({
      type: DELETE_ITEM,
      payload: { itemCode },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllItem = () => async (dispatch) => {
  try {
    const res = await POSDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_ITEM,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findItemByItemCode = (itemCode) => async (dispatch) => {
  try {
    const res = await TutorialDataService.findByTitle(itemCode);

    dispatch({
      type: RETRIEVE_ITEM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
