import React from 'react';

const Question4 = () => {
    return (
        <div>
            <h4 className="text-xl text-slate-600 font-bold mb-6">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>

            <p className='mb-4'>If we update the state directly by doing like product = [...] instead setProducts, then UI state wont change immediately. When we update a state value with setState function, every time the state change, the component rernders and so UI state also change. But in the case of direct updating It doesn't happen like that. So we should not update a state value directly. Rather that we must need to use setState function.</p>
            <p className='mb-4'>If we update it directly, calling the setState() afterward may just replace the update you made.</p>
            <p className='mb-4'>When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
            <p className='mb-4'>And we will lose control of the state across all components.</p>

        </div>
    );
};

export default Question4;