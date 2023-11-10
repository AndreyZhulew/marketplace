import React, { useState } from 'react';
import './faq.css'
import Accordian from '../accordian/accordian';

import { questions } from '../accordian/api';

const Faq = () => {
    const [data] = useState(questions)
    return (
        <div className='faq-div'> 
            <div className='faq-title'> 
                <h2>Часто задаваемые вопросы</h2>
            </div>
            <div className='faq-accordian-part'> 

                {data.map((item) => {
                    return <Accordian key={item.id} question={item.question} answer={item.answer}/>
                })}

            </div>
        </div>
    );
}

export default Faq;
