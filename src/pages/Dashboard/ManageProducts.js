import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteProductModal from '../shared/DeleteProductModal/DeleteProductModal';
import Loading from '../shared/Loading/Loading';

const MangeProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState({});

    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`https://mysterious-ravine-35179.herokuapp.com/tools?page=0&quantity=0`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-center text-2xl'>Manage Products</h4>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr key={tool._id}>
                                <th>{index + 1}</th>
                                <td>{tool.name}</td>
                                <td>{tool.quantity} Pieces</td>
                                <td>${tool.price}</td>
                                <td>
                                    <label onClick={() => setDeleteProduct(tool)} htmlFor="deleteProductModal" class="btn bg-red-300 btn-sm">Remove</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <DeleteProductModal
                deleteProduct={deleteProduct}
                refetch={refetch}
            ></DeleteProductModal>
        </div>
    );
};

export default MangeProducts;