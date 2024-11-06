import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Customers = () => {
    const customerQuery = useQuery({
      queryKey: ["customer"],
      queryFn: () =>  axios("http://localhost:3000/api/customers"),
      refetchOnWindowFocus: false,
    //   cacheTime: 1000 * 20,
      //   refetchOnMount: false, 
      // staleTime: 1000 ,
    //   refetchOnWindowFocus: false,
    //   refetchInterval: 1000,
    //   refetchIntervelInBackground: false,
  
  
    });

    if(customerQuery.isLoading){
        return <p>Patience...</p>
    }
    if(customerQuery?.data?.data?.customers){
      return <div>
        {customerQuery.data.data.customers.map((customer)=> { return (<div key={customer._id}>
          {/* <p>ID: {customer._id}</p> */}
          <p>NAME: {customer.name}</p>
          {/* <p>INDUSTRY: {customer.industry}</p> */}
        </div>)})}
      </div>
    }
};

export default Customers