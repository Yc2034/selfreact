import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h1>  博主追踪 </h1>
      <h2>粉丝数: {invoice.fans}</h2>
      <p>
        {invoice.name}: {invoice.platform}
      </p>
      <p> 类别: {invoice.category}</p>
    </main>
  );
}
