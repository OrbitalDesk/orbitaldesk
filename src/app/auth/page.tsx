import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[600px] h-[500px] border rounded-lg flex flex-col justify-center items-center gap-6">
        <h1 className="font-bold text-3xl">Login</h1>
        <div className="w-[400px] flex flex-col gap-2">
          <Input placeholder="email@example.com" />
          <Input placeholder="password" />
        </div>
        <Button>Login</Button>
      </div>
    </main>
  );
}
