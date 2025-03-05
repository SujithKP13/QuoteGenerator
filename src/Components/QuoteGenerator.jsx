import React from 'react'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import instance from '../instance';

function QuoteGenerator({ quotes, fetchurl }) {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuotes = async () => {
        try {
            const response = await instance.get(fetchurl);
            const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
            console.log(randomIndex);
            const randomQuote = response.data.quotes[randomIndex];
            console.log(randomQuote);
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        } catch (error) {
            console.log(error)
            alert('An error occurred. While loading.')
            }
    }

  useEffect(() => {
    fetchQuotes()
  }, [])

  const handleReset = () => {
    setQuote('')
    setAuthor('')
  }

  return (
    <>
      <div style={{ backgroundImage:"url('https://w0.peakpx.com/wallpaper/305/217/HD-wallpaper-meditation-calm-pleasant-peace-sun-spiritual-awakening.jpg')",backgroundSize:"cover",backgroundPosition:"center" , height: '100vh' }} className='d-flex justify-content-center align-items-center'>
        <div style={{ backgroundColor: 'white', width: '600px' }} className='rounded p-5'>
          <h2 className='text-center fst-italic border-bottom border-5 pb-1' style={{ color:'lightseagreen' }} ><span>RANDOM QUOTE GENERATOR</span></h2>
          <p className='text-center' style={{color: 'seagreen'}}>Click the button below to generate a random quote</p>
          <h3 className='text-center fst-italic' >"{quote}"</h3>
          <p className='text-center border-bottom border-4 pb-1'>- {author}</p>
          <div className="mb-3 mt-3 d-flex justify-content-between">
            <Button variant="success" style={{width: '210px', padding: '10px'}} onClick = {fetchQuotes} >GENERATE</Button>
            <Button variant="outline-dark" style={{width: '210px', padding: '10px'}} onClick = { handleReset }>RESET</Button>
            </div>
        </div>
      </div>
    </>
  )
}

export default QuoteGenerator