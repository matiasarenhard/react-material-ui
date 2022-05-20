import styles from "./Dashboard.module.css";
import * as React from "react";
import PageLayout from "../../components/PageLayout";
import CustomGrid from "../../components/Grid";


const Dashboard = () => {
  return (
      <PageLayout>
        <CustomGrid/>
      </PageLayout>
    )
 };

export default Dashboard;