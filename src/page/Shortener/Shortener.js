import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BsClipboardCheck } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Shortener = () => {
    const [link, setLink] = useState('')
    const [short, setShort] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [error, setError]=useState("")
 


   

    const validUrl = /(https?:\/\/)(w{3}\.|(?!w{3}))([a-z\d-]+)(\.[^\s]{2,})/.test(link);

    const getShortLink = async () => {
        await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then((res) => {
                setShort(res.data.result.full_short_link)
                setLoading(false)
                setLink('')
                setError('')
            })
            .catch((err)=>{
                if(err){
                    setError(err.message)
                    setLoading(false)
                    setShort("")
                }
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        getShortLink()
    }


const handleCopy=()=>{
    navigator.clipboard.writeText(short)
    Swal.fire(
        'Link Copied!',
        'You clicked the button!',
        'success'
      )
    
}


    return (
        <>
     
        {/* <div className=' grid-cols-1 text-center h-96 lg:mt-52 ml-40 '>
               
            <div className='lg:w-3/4'>
            <div>
               <h1 className=' text-4xl font-semibold text-red-600'> SHORT URL  <span className='text-green-500'>GENERATOR</span>
                </h1>
                <p className='text-xl font-medium mb-5'>URL shortener built to generate short link that creates better click impression.</p>
               </div>
                <form onSubmit={handleSubmit} >
                    <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="http://example.com" className="input input-bordered w-full " required />
                    {
                      !isLoading  && <button disabled={!validUrl} className="btn btn-primary mt-5 rounded-sm">Generate short Link</button>
                    }
                    {
                      isLoading  && <button disabled={!validUrl} className="bg-blue-600 py-2 px-7 rounded-sm text-white mt-5 "><AiOutlineLoading3Quarters/></button>
                    }
                   
                    <br />
                    
                </form>
                {short && <button onClick={handleCopy} className=" bg-blue-600 py-2 px-7 rounded-sm text-white mt-5  flex justify-center items-center gap-3 border-0  lg:ml-80 " >{short} <BsClipboardCheck /></button>}
            </div>
          <p className='text-red-500 mr-80'>{error}</p>
        </div> */}
        <div className="hero h-96 lg:mt-40">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card  ">
        
      <div className="card-body">
        <div className="form-control">
        <div>
               <h1 className=' text-4xl font-semibold text-red-600'> SHORT URL  <span className='text-green-500'>GENERATOR</span>
                </h1>
                <p className='text-xl font-medium mb-5'>URL shortener built to generate short link that creates better click impression.</p>
               </div>
        <form onSubmit={handleSubmit} >
                    <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="http://example.com" className="input input-bordered w-full " required />
                    {
                      !isLoading  && <button disabled={!validUrl} className="btn btn-primary mt-5 rounded-sm w-full">Generate short Link</button>
                    }
                    {
                      isLoading  && <button disabled={!validUrl} className="bg-blue-600 py-2 px-7 rounded-sm text-white mt-5 "><AiOutlineLoading3Quarters/></button>
                    }
                   
               
                    
                </form>
          {/* <input type="text" placeholder="email" className="input input-bordered" /> */}
        </div>
     
        <div className="form-control mt-6">
        {short && <button onClick={handleCopy} className=" bg-blue-600 py-2 px-7 rounded-sm text-white mt-5  flex justify-center items-center gap-3 border-0  " >{short} <BsClipboardCheck /></button>}
        <p className='text-red-500 '>{error}</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Shortener;