import React from 'react';
import { useQuery } from 'react-query';
import Tool from '../homepage/Tools/Tool';
import Loading from '../shared/Loading/Loading';

const AllProducts = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`https://mysterious-ravine-35179.herokuapp.com/tools?page=0&quantity=0`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='py-10 bg-neutral'>
            <div className="custom-container">
                <h2 className='text-center text-3xl font-bold text-secondary mb-10'>Products</h2>
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

export default AllProducts;