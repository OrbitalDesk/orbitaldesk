import DashboardPage from '@/components/dashboardPage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const information = {
  products: 2,
  revenue: '12.99',
  orders: 5,
  feedback: 4.2,
};
const informationBlank = {
  products: 0,
  revenue: '0.00',
  orders: 0,
  feedback: 0,
};

export default function DashPage(props: { id: number }) {
  return (
    <main>
      <DashboardPage id={props.id} data={informationBlank} />
    </main>
  );
}
