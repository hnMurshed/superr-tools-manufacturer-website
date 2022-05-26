import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch(`https://mysterious-ravine-35179.herokuapp.com/tools?page=0&quantity=3`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='py-10 bg-neutral'>
            <div className="container mx-auto">
                <h2 className='text-4xl text-center mb-8 text-accent font-bold'>Our Tools Range</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        tools.map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tools;