'use client';

import { lusitana } from '../ui/font';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
// import { authenticateWithCredentials, authenticateWithOAuth } from '@/app/lib/actions';
import { authenticateWithCredentials,authenticateWithOAuth} from '../lib/action';
import darkTheme from '../lib/dark-theme';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

const GitHubSignIn = authenticateWithOAuth.bind(null, 'github');

function GoogleSignIn() {
  alert(
    "This login option does not work due to Google's privacy protection rules.\n\n" +
    "As this is a test project, I cannot provide all the necessary bureaucracy."
  );
}

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(
    authenticateWithCredentials,
    undefined
  );

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
  <div className="w-full max-w-md rounded-2xl bg-white shadow-sm px-8 py-8 dark:bg-[#212121] ">
     <Navbar/>
      <h1
        className={`${lusitana.className} mb-6 text-2xl text-center text-gray-900 pt-2 ${darkTheme.title}`}
      >
        Please login to <span className="text-violet-600">continue</span>
      </h1>

      <form action={dispatch} className="space-y-4">
        {/* EMAIL */}
        <div>
          <label
            className={`mb-2 block text-xs font-medium ${darkTheme.text}`}
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className={`peer w-full rounded-lg border border-gray-300 py-2.5 pl-10 text-sm 
                outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600
                ${darkTheme.bg} ${darkTheme.text}`}
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <AtSymbolIcon className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2
              text-gray-400 peer-focus:text-violet-600 ${darkTheme.inputIcon}`} />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label
            className={`mb-2 block text-xs font-medium ${darkTheme.text}`}
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className={`peer w-full rounded-lg border border-gray-300 py-2.5 pl-10 text-sm 
                outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600
                ${darkTheme.bg} ${darkTheme.text}`}
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              minLength={6}
            />
            <KeyIcon className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2
              text-gray-400 peer-focus:text-violet-600 ${darkTheme.inputIcon}`} />
          </div>
        </div>

        <LoginButton />

        {errorMessage && (
          <div className="flex items-center gap-2 pt-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </div>
        )}
      </form>

      <CreateAccount />

      <p className="my-4 text-center text-sm text-gray-500">
        or continue with
      </p>

      <GitHubSignInButton />
      <GoogleSignInButton />
    </div>
        
    </main>
  
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full bg-violet-600 hover:bg-violet-700 cursor-pointer"
      aria-disabled={pending}
    >
      Log in
      <ArrowRightIcon className="ml-auto h-5 w-5 text-white" />
    </Button>
  );
}

function CreateAccount() {
  const { pending } = useFormStatus();
  const { replace } = useRouter();

  return (
    <Button
      className="mt-3 w-full bg-violet-100 text-violet-700 hover:bg-violet-200 cursor-pointer"
      aria-disabled={pending}
      onClick={() => replace('/create-account')}
    >
      Create Account
      <ArrowRightIcon className="ml-auto h-5 w-5" />
    </Button>
  );
}

function GitHubSignInButton() {
  return (
    <form action={GitHubSignIn}>
      <button
        type="submit"
        className="flex h-11 w-full items-center gap-3 rounded-lg bg-black px-4
        text-sm font-medium text-white hover:bg-gray-900 transition cursor-pointer"
      >
        <Image src="/githublogo.png" width={40} height={40} alt="GitHub" className='filter brightness-0 invert' />
        <span className="flex-1 text-left">Sign in with GitHub</span>
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </form>
  );
}

function GoogleSignInButton() {
  return (
    <form action={GoogleSignIn}>
      <button
        type="submit"
        className="mt-3 flex h-11 w-full items-center gap-3 rounded-lg
        border bg-white px-4 text-sm font-medium hover:bg-gray-50 transition cursor-pointer"
      >
        <Image src="/google.jpg" width={22} height={22} alt="Google" />
        <span className="flex-1 text-left">Sign in with Google</span>
        <ArrowRightIcon className="h-5 w-5 text-gray-600" />
      </button>
    </form>
  );
}
