import DashboardPage from '@/components/dashboardPages/freelancerDashboardPage';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const overviewData_information = {
  products: 2,
  revenue: '12.99',
  orders: 5,
  feedback: 4.2,
};
const overviewData_informationBlank = {
  products: 0,
  revenue: '0.00',
  orders: 0,
  feedback: 0,
};

export default function DashPage(props: { id: number }) {
  return (
    <main>
      <DashboardPage id={props.id} overviewData={overviewData_informationBlank} />
      {/* <h1>Freelancer Overview</h1> */}
    </main>
  );
}
