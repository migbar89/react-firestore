import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div className='h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]'>
      <div className='bg-slate-100 max-w-[900px] w-full m-auto rounded-md shadow-xl p-4'>
      <div className='grid grid-col-4  grid-flow-col gap-4'> 
        <div className='col-span-2'> 
          <App completed={false} />
        </div>
        {/* <div className='col-span-2'> 
          <App  completed={true}/>
        </div> */}
      </div>
     </div>   
     </div>
     </React.StrictMode>
);


