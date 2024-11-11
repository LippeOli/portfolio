import React from 'react';
import './styles.css'

function Contact() {

    return (
        <div className='home-panel'>
            <div className='box'>
                <h1>Contato</h1>
                <div className='links'>
                
                    <div class="itemContato">
                        <div className="icon-circle">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="22" 
                                height="22" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#fff" 
                                stroke-width="2" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                class="lucide lucide-phone">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <span>(55) 11 95609-0107</span>
                    </div>

                    <div className="itemContato">
                        <div className="icon-circle">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail"
                            >
                            <path d="M4 4h16v16H4z"/>
                            <path d="M22 6l-10 7L2 6"/>
                            </svg>
                        </div>
                        <span>felipeoliveiracarv@gmail.com</span>
                    </div>
                    
                    <div className="itemContato">
                        <div className="icon-circle">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin"
                            >
                            <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 1 0-4 0v6h-4v-6a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/>
                            <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </div>
                        <div>
                            <a className='link' href="https://www.linkedin.com/in/felipe-oliveira-carvalho-9b6b52285/">LinkedInd/felipeoliveira</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>            
    );

}
export default Contact;