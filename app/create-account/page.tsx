import CreateAccountForm from '@/app/ui/create-account-form';

import { Metadata } from 'next'; 
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Create Account',
};
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen mt-10">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-violet-600 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Image src="/logo2.png" alt='Logo' width={150} height={150}/> 
          </div>
         
        </div>
        <CreateAccountForm />
      </div>
    </main>
  );
}