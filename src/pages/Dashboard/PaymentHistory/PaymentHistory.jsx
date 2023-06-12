import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/payments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, [user]);
  return (
    <div className="w-[80%] mx-auto">
      <div className=" font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {history?.length}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>TransactionId</th>
              <th>Course Quantity</th>
              <th className="text-right">Paid Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history &&
              history.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.quantity}</td>
                  <td className="text-end">${item.price}</td>
                  <td>
                    {" "}
                    <span className="text-green-500">Success</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
