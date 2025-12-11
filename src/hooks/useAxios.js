import { useState } from "react";
import { axiosApi } from "../api/apiAxios";

function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const res = async (method, url, data = null, id) => {
    setLoading(true);
    try {
      const response = await axiosApi({ method, url, data });
      return await response.data;
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    get: (id = "") => res("get", "/allUsers" + id),
    del: (id) => res("delete", `/allUsers/${id}`),
    post: (data) => res("post", "/allUsers", data),
    put: (data, id) => res("put", `/allUsers/${id}`, data),
  };
}

export default useAxios;
