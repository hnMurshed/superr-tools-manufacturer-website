import React from 'react';

const Question2 = () => {
    return (
        <div>
            <h4 className='text-xl text-slate-600 font-bold mb-6'>What are the different ways to manage a state in a React application?</h4>
            <p className='mb-4'>There are more three main ways to manage a state in a react application which are Global state, Server state, and URL state.</p>
            <p className='mb-4'>Let's discuss about each of these in details</p>
            <p className='mb-4'><strong>Global state - </strong> The data we manage accross multiple components is managed with global state. Global state is required when we want to get and change data anywhere in our react application. A common example of global state is authenticated user state. When a user logged in our application, it's neccessary to get and update thier data throughout our application.</p>
            <p className='mb-4'><strong>Server state - </strong>Server state is data comes from an external server that must be integrated with UI state. However server state data can be managed with local state useState, but sometimes there several states that must be managed everytime you fetch or update data from an exernal server. Fortunately to do that we can use React Query tool or SWR tool to manage server state more easily.</p>
            <p className='mb-4'><strong>URL state - </strong>The data in URL pathname and query parameters. URL state is an improtant one. React application mostly rely on accessing URL state for its lots of major parts.</p>
        </div>
    );
};

export default Question2;