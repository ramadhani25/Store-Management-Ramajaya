import React, { useEffect, useState } from "react";

// Components
import { CardDashboard, ContentTitle, Chart } from "components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// GraphQL
import { useSubscription } from "@apollo/client";
import { GET_ALL_PRODUK } from "graphql/Produk/queries";
import { GET_ALL_CUSTOMER } from "graphql/Customer/queries";
import { GET_ALL_SUPPLIER } from "graphql/Supplier/queries";
import { GET_ALL_KATEGORI } from "graphql/Kategori/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Dashboard",
    desc: "Visual display of all data",
  };

  const [dataCustomer, setDataCustomer] = useState([]);

  // GraphQL
  const {
    data: dataAllProduk,
    loading: loadingAllProduk,
    error: errorAllProduk,
  } = useSubscription(GET_ALL_PRODUK);
  const {
    data: dataAllCustomer,
    loading: loadingAllCustomer,
    error: errorAllCustomer,
  } = useSubscription(GET_ALL_CUSTOMER);
  const {
    data: dataAllSupplier,
    loading: loadingAllSupplier,
    error: errorAllSupplier,
  } = useSubscription(GET_ALL_SUPPLIER);
  const {
    data: dataAllKategori,
    loading: loadingAllKategori,
    error: errorAllKategori,
  } = useSubscription(GET_ALL_KATEGORI);

  useEffect(() => {
    setDataCustomer(dataAllCustomer?.customer);
  }, [loadingAllCustomer, dataAllCustomer]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 p-5">
        {dataAllProduk && (
          <CardDashboard count={dataAllProduk?.produk.length} title="Product" />
        )}
        {dataAllCustomer && (
          <CardDashboard
            count={dataAllCustomer?.customer.length}
            title="Customer"
          />
        )}
        {dataAllSupplier && (
          <CardDashboard
            count={dataAllSupplier?.supplier.length}
            title="Supplier"
          />
        )}
        {dataAllKategori && (
          <CardDashboard
            count={dataAllKategori?.kategori.length}
            title="Kategori"
          />
        )}
        {!dataAllProduk && <Skeleton className="py-7 px-8" />}
        {!dataAllCustomer && <Skeleton className="py-7 px-8" />}
        {!dataAllSupplier && <Skeleton className="py-7 px-8" />}
        {!dataAllKategori && <Skeleton className="py-7 px-8" />}
      </div>

      <hr />
      <div className="grid grid-cols-1 p-5">
        {dataCustomer && <Chart dataCustomer={dataCustomer} />}
        {!dataCustomer && <Skeleton className="py-7 px-8" />}
      </div>
    </div>
  );
};

export default Main;
