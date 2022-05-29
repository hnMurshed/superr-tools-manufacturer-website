import React from 'react';

const Question1 = () => {
    return (
        <div>
            <h4 className='text-xl text-slate-600 font-bold mb-6'>How will you improve the performance of a React Application?</h4>
            <p>There are so many reasons for which a React Application can fall its performance. Here now we will discuss about most 5 reasons and how we can solve them to improve the performance of our react application.</p>
            <p className='my-4'><strong>1. Large bundle size</strong></p>
            <p>We know that react application is a single page application, so when we build a react application, the building process creates several bundle files inside the build folder. That bundle files get so large in size for complexity or large application. So when a react application has large bundle files, It takes so much time to load initially. Beside much initial load time, there are more issues happen caused by large bundle files. So the question is how can we solve this. The best solution for that is to split bundle files into small pieces so that the react application load only required files instead of loading the whole file at a time. We can use react lazy or suspense component to split bunldle files. </p>
            <p className='my-4'><strong>2. Large rendering</strong></p>
            <p>Another reasion that mostly decrease the performance of a react application is large rendering. Large rendering happens when a react application reders so many data at a time. Due to large rendering, a react application can face slow loading, not responding, site crash. To solve the large rendering issue, the more data we have, we cannot load all data at a time. Rather than We need to load data gradualy, which means we load only the visible data on screen. To do that we can use a tool named React Window.</p>
            <p className='my-4'><strong>3. Scaffolding</strong></p>
            <p>As React is a frontend related library, we have to scuffold react application with Laravel, asp.net, or express.js, that's why the react application can fall in performance. So to solve this issue what we have to do is to create the react application as a standalone application and use rest api to communicate with server side.</p>
            <p className='my-4'><strong>4. Unneccessary rendering</strong></p>
            <p>Unneccessary rendering affect bad in react application performance. We know that whenever a state value change the component rerender. When a state value repeatedly change, Unneccessary rendering happens for which the react application falls in performance. So to improve react application performance, we have to prevent Unneccessary rendering of any component. To avoid Unneccessary rendering, we can use reference, dom, or react hook.</p>
            <p className='my-4'><strong>5. Not having download on demand</strong></p>
            <p>One of the most effective way to improve performance of a react application is to use 'Download on demand' process. It actually need to be implemented in the case media files. Download on demand means to download media files based user demand, that means it downloads only the visible media on the screen instead of downloading all media files at a time. To implement 'Download on demand' we can use React Lazy Load</p>
        </div>
    );
};

export default Question1;