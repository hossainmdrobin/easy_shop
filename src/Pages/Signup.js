import React, { useState } from 'react';

const Signup = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='login-background h-screen w-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div class="ml-24 hero min-h-screen w-3/5">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Resister now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control relative">
                                <input type={show? "text" : 'password'} placeholder="password" class="input input-bordered" />
                                <div onClick={()=>setShow(!show)} className='absolute right-2 top-2 cursor-pointer text-md btn-sm btn btn-circle btn-outline'>
                                    {!show && <ion-icon name="eye-outline"></ion-icon>}
                                    {show && <ion-icon name="eye-off-outline"></ion-icon>}
                                </div>
                            </div>
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
