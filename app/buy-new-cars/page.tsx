import React from 'react'

const page = () => {
  return (
    <div className='flex w-200 h-150 bg-gray-300 text-black  '>
        <div className="w-100 h-150">
            <img src="7941368.jpg" alt=""/>
        </div>
        <div className='flex flex-col gap-2'>
            <div>Login To Continue</div>
            <form action="" className='flex flex-col gap-2'>
                <div className="label">
                Mobile Number
                </div>
                <input type="text" placeholder='+91 9999999999'/>
                <button type='submit' className='p-3 bg-amber-600 text-white rounded'>GET OTP</button>
                <p>
                    By logging in, you agree to CARS24
                </p>
                <p>
                    CARS24’s Privacy Privacy Policy and Terms & Conditions
                </p>
                <p>
                    CARS24 NBFC’s Terms & Conditions and TU CIBIL Terms of Use
                </p>
            </form>
        </div>
    </div>
  )
}

export default page