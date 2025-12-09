import { useState } from "react";
import { axiosApi } from "../api/apiAxios";

function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const res = async (method, url, data = null ,id) => {
    setLoading(true);
    try {
      const response = await axiosApi({ method, url, data});
      return await response.data;
    } catch (error) {
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    get: () => res("get", "/allUsers"),
    post: (data) => res("post", "/allUsers", data),
    del: (id) => res("delete",`/allUsers/${id}`)
  };
}

export default useAxios;
