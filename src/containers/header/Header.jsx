import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

export const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Lets Build Something amazing using GPT-3 OpenAI
        </h1>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email...' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>16000 people already registered for the program</p>
        </div>
      </div>
      
      <div className='gpt3__header-image'>
          <img src={ai} alt="AI" />
        </div>
    </div>
  )
}
