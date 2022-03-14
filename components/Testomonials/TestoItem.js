import React from 'react';

const TestoItem = () => {
    return (
        <div className=' text-center m-4 flex-col items-center justify-between'>
           <div className='bg-white text-xs overflow-hidden text-wrap w-full px-2 md:px-10 py-6 text-left text-primary pl-24 md:pl-28'>

                <p>"rbi are the best bla bla iufhbeiubc uifeucvnefiucvnuidfnvcfiun vcni cvdfhiucv bndfiuvc"</p>

           </div>

           <div className='bg-primary text-xs w-full px-2 md:px-10 py-6 text-left pl-24 md:pl-28'>


                <h3 className='text-tiny text-alt'>SurfShark</h3>
                <h4>Hype Factroy</h4>
           </div>

           <div className='w-16 h-16 md:w-20 md:h-20 absolute mt-[-110px] md:mt-[-125px] ml-[10px] z-10 rounded-xl md:rounded-3xl bg-gray-500 border-4 border-gray-200'></div>


           
        </div>
    );
};

export default TestoItem;