import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const DeleteProductModal = ({ deleteProduct, refetch }) => {
    const navigate = useNavigate();
    console.log(deleteProduct);
    const handleConfirm = () => {
        fetch(`https://mysterious-ravine-35179.herokuapp.com/deleteproduct/${deleteProduct._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                navigate('/login');
            }
            return res.json();
        })
        .then(data => {
            if (data.deletedCount) {
                refetch();
                toast.success(`${deleteProduct.name} Successfully Deleted`)
            }
        })
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="deleteProductModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h4 className='text-3xl font-bold border-b-2 border-slate-600'>Delete Product</h4>
                    <h3 class="font-bold text-lg my-4">Deleting {deleteProduct.name}</h3>
                    <p class="">Alert!!, If you delete, can't possible to undo again.</p>
                    <p class="">Are you sure you want to delete the item permanently?</p>
                    <div class="modal-action">
                        <label htmlFor="deleteProductModal" class="btn btn-primary">Cancel</label>
                        <label onClick={handleConfirm} htmlFor="deleteProductModal" class="btn bg-pink-400 text-white">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;