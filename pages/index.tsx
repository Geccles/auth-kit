import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='container'>
      <header
        style={{ display: "grid", justifyContent: "space-between", padding: 20 }}
      >
        <h1>My Auth Kit App</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton>
            <button className='btn'>
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </header>
    </div>
  )
}
