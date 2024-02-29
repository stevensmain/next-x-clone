'use client'
import { Button } from '@nextui-org/react'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import AuthButtonClient from '@/components/auth-button-client'

export default function page() {
  const openLoginModal = useLoginModal((state) => state.onOpen)
  const openRegisterModal = useRegisterModal((state) => state.onOpen)

  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-4'>
      <div className='text-white max-w-[600px]'>
        <h1 className='text-6xl font-extrabold'>Happening now</h1>
        <h2 className='text-5xl font-bold'>Join today.</h2>
        <div className='mt-8'>
          <AuthButtonClient />
          <div className='flex items-center my-4'>
            <div className='flex-grow h-px bg-gray-600' />
            <span className='px-4 text-gray-400'>or</span>
            <div className='flex-grow h-px bg-gray-600' />
          </div>
          <Button
            className='bg-[#1d9bf0] text-white w-full'
            onClick={openRegisterModal}
            radius='full'
          >
            Create account
          </Button>
        </div>
        <div className='text-gray-400 text-sm mt-4'>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </div>
        <div className='text-lg font-bold mt-8 mb-4'>
          Already have an account?
        </div>
        <Button
          className='border-gray-700 text-center py-2'
          radius='full'
          variant='bordered'
          fullWidth
          onClick={openLoginModal}
        >
          Sign in
        </Button>
      </div>
    </div>
  )
}
