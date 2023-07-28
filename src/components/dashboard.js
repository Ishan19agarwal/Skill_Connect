import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {
  getDonors,
  getActivist,
  getBeneficiary,
  getRevenue,
} from "./../Api/api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [beneficiary, setBeneficiary] = useState(1200);
  const [activist, setActivist] = useState(700);
  const [donors, setDonors] = useState(120);
  const [revenue, setRevenue] = useState(100);

  useEffect(() => {
    // ().then((res) => {
    //   // setOrders(res.total);
    //   // setRevenue(res.discountedTotal);
    // });
    // getInventory().then((res) => {
    //   // setInventory(res.total);
    // });
    // getCustomergetOrders().then((res) => {
    //   // setCustomers(res.total);
    // });
  }, []);

  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
        <DashboardCard
          className=''
          icon={
            <UserOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          style={{
            width: "20vw",
            height: "30vh",
          }}
          title={"Skill Development"}
          value={beneficiary}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Women Empowerment"}
          value={activist}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Agriculture Development"}
          value={donors}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Community Development"}
          value={revenue}
        />
      </Space>
      <Space>
        <DashboardChart />
        <DashboardChart1 />
        ``
      </Space>
      <DashboardChart2 />
      <DashboardChart3 />
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([
    {
      eventName: "sdgfgs",
      duration: "34",
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // getOrders().then((res) => {
    //   setDataSource(res.products.splice(0, 3));
    // });
    setLoading(true);
    // event api
    setLoading(false);
  }, []);

  return (
    <>
      <Typography.Text>Upcomming Events</Typography.Text>
      <Table
        columns={[
          {
            title: "Event Name",
            dataIndex: "eventName",
            key: "eventName",
          },
          {
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [" "],
    datasets: [
      {
        label: "2020",
        data: [100],
        backgroundColor: "#32a852",
      },
      {
        label: "2021",
        data: [200],
        backgroundColor: "#32a8a8",
      },
      {
        label: "2022",
        data: [300],
        backgroundColor: "#a8324a",
      },
      {
        label: "2023",
        data: [400],
        backgroundColor: "#a88c32",
      },
    ],
  });

  useEffect(() => {
    // getRevenue().then((res) => {
    //   const labels = res.carts.map((cart) => {
    //     // return `${cart.userId}`;
    //     // return "fu69"
    //   });
    //   const data = res.carts.map((cart) => {
    //     return cart.discountedTotal;
    //   });
    //   const dataSource = {
    //     labels,
    //     datasets: [
    //       {
    //         label: "Revenue",
    //         data: data,
    //         backgroundColor: "rgba(255, 0, 0, 1)",
    //       },
    //     ],
    //   };
    //   // setReveneuData(dataSource);
    // });
    // graph data logic
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Skill Development",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
function DashboardChart1() {
  const [reveneuData, setReveneuData] = useState({
    labels: [" "],
    datasets: [
      {
        label: "2020",
        data: [100],
        backgroundColor: "#32a852",
      },
      {
        label: "2021",
        data: [200],
        backgroundColor: "#32a8a8",
      },
      {
        label: "2022",
        data: [300],
        backgroundColor: "#a8324a",
      },
      {
        label: "2023",
        data: [400],
        backgroundColor: "#a88c32",
      },
    ],
  });

  useEffect(() => {
    // getRevenue().then((res) => {
    //   const labels = res.carts.map((cart) => {
    //     // return `${cart.userId}`;
    //     // return "fu69"
    //   });
    //   const data = res.carts.map((cart) => {
    //     return cart.discountedTotal;
    //   });
    //   const dataSource = {
    //     labels,
    //     datasets: [
    //       {
    //         label: "Revenue",
    //         data: data,
    //         backgroundColor: "rgba(255, 0, 0, 1)",
    //       },
    //     ],
    //   };
    //   // setReveneuData(dataSource);
    // });
    // graph data logic
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Women Empowerment",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
function DashboardChart2() {
  const [reveneuData, setReveneuData] = useState({
    labels: [" "],
    datasets: [
      {
        label: "2020",
        data: [100],
        backgroundColor: "#32a852",
      },
      {
        label: "2021",
        data: [200],
        backgroundColor: "#32a8a8",
      },
      {
        label: "2022",
        data: [300],
        backgroundColor: "#a8324a",
      },
      {
        label: "2023",
        data: [400],
        backgroundColor: "#a88c32",
      },
    ],
  });

  useEffect(() => {
    // getRevenue().then((res) => {
    //   const labels = res.carts.map((cart) => {
    //     // return `${cart.userId}`;
    //     // return "fu69"
    //   });
    //   const data = res.carts.map((cart) => {
    //     return cart.discountedTotal;
    //   });
    //   const dataSource = {
    //     labels,
    //     datasets: [
    //       {
    //         label: "Revenue",
    //         data: data,
    //         backgroundColor: "rgba(255, 0, 0, 1)",
    //       },
    //     ],
    //   };
    //   // setReveneuData(dataSource);
    // });
    // graph data logic
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Agriculture Development",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
function DashboardChart3() {
  const [reveneuData, setReveneuData] = useState({
    labels: [" "],
    datasets: [
      {
        label: "2020",
        data: [100],
        backgroundColor: "#32a852",
      },
      {
        label: "2021",
        data: [200],
        backgroundColor: "#32a8a8",
      },
      {
        label: "2022",
        data: [300],
        backgroundColor: "#a8324a",
      },
      {
        label: "2023",
        data: [400],
        backgroundColor: "#a88c32",
      },
    ],
  });

  useEffect(() => {
    // getRevenue().then((res) => {
    //   const labels = res.carts.map((cart) => {
    //     // return `${cart.userId}`;
    //     // return "fu69"
    //   });
    //   const data = res.carts.map((cart) => {
    //     return cart.discountedTotal;
    //   });
    //   const dataSource = {
    //     labels,
    //     datasets: [
    //       {
    //         label: "Revenue",
    //         data: data,
    //         backgroundColor: "rgba(255, 0, 0, 1)",
    //       },
    //     ],
    //   };
    //   // setReveneuData(dataSource);
    // });
    // graph data logic
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Community Development",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
export default Dashboard;
