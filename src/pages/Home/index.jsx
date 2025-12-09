import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import UpdateUi from "../../components/UpdateUi";

function Home() {
  const [data,setData] = useState(null)
  const {get} = useAxios()
  useEffect(()=>{
    get().then((res) => setData(res.data)
    )
  },[])
  
  
  return <div className="mt-10 mb-10">
    <UpdateUi data={data} setData={setData}/>
  </div>;
}

export default Home;
