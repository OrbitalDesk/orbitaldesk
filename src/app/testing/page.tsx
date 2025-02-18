import DashboardPage from '@/components/dashboardPages/mainDashboardPage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const information = {
  products: 2,
  revenue: '12.99',
  orders: 5,
};
const informationBlank = {
  products: 0,
  revenue: '0.00',
  orders: 0,
};

export default function DashPage(props: { id: number }) {
  return (
    <main>
      <DashboardPage id={props.id} data={informationBlank} />
    </main>
  );
}
