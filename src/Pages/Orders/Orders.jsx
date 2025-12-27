import React, { useContext, useEffect, useState } from "react";
import styles from "./Orders.module.css";
import Layout from "../../Componets/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Componets/DataProvider/DataProvider";
import ProductCard from "../../Componets/Product/ProductCard";

function Orders() {

  const [{ user }, dispatch] = useContext(DataContext);
   
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.orders_container}>
          <h2>Your Orders</h2>
          {orders.length == 0 && (
            <div style={{ padding: "20px" }}>you don't have orders yet. </div>
          )}

          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <p>Order ID: {eachOrder?.id}</p>

                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;