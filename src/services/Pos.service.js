import http from "../http-common";

class POSDataService {
  getAll() {
    return http.get("/Inventory");
  }

  get(itemCode) {
    return http.get(`/Inventory/${itemCode}`);
  }

  create(data) {
    return http.post("/Inventory", data);
  }

  update(itemCode, data) {
    return http.put(`/Inventory/${itemCode}`, data);
  }

  delete(itemCode) {
    return http.delete(`/Inventory/${itemCode}`);
  }

  deleteAll() {
    return http.delete(`/Inventory`);
  }

  findByItemCode(itemCode) {
    return http.get(`/Inventory?item_code=${itemCode}`);
  }
}

export default new POSDataService();
