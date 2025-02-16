import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

import Image from 'next/image';

import { Eye, EyeOff } from 'lucide-react';

export default function page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[600px] h-[550px] border rounded-lg p-[100px] flex flex-col justify-center gap-6">
        <div>
          <h1 className="font-semibold text-3xl">Login into your account</h1>
          <p>
            You don&apos;t have an account?
            <a href="/auth/register">
              &nbsp;<span className="text-purple-600 text-decoration-line: underline">Register</span>
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="w-[400px] flex flex-col gap-2">
            <Input className="h-10 placeholder:text-sm" placeholder="Email" />
            <Input className="h-10 placeholder:text-sm" type="password" placeholder="Enter your password" />
          </div>
        </div>

        <Button>Login</Button>

        <div className="flex gap-4 justify-center">
          <Separator className="w-1/3 self-center" />
          <p className="w-1/3 text-xs text-center">Or login with</p>
          <Separator className="w-1/3 self-center" />
        </div>

        <div className="flex gap-4">
          <Button variant="outline" className="w-full">
            <Image src="/icons/discord.svg" width={14} height={14} alt="discord" /> Discord
          </Button>
          <Button variant="outline" className="w-full">
            <Image src="/icons/github.svg" width={14} height={14} alt="discord" /> Github
          </Button>
        </div>
      </div>
    </main>
  );
}
