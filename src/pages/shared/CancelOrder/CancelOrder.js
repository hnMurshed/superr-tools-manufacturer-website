import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const CancelOrder = ({ cancelOrder, refetch }) => {
    const navigate = useNavigate();
    console.log(cancelOrder);
    const handleConfirm = () => {
        fetch(`https://mysterious-ravine-35179.herokuapp.com/cancelorder/${cancelOrder._id}`, {
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
                toast.success(`You cancelled your order for ${cancelOrder.name}`)
            }
        })
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="cancelOrderModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h4 className='text-3xl font-bold border-b-2 border-slate-600'>Cancel Order</h4>
                    <h3 class="font-bold text-lg my-4">Canceling your order for {cancelOrder.item}</h3>
                    <p class="">Alert!!, If you delete, can't possible to undo again.</p>
                    <p class="">Are you sure you want to delete the order permanently?</p>
                    <div class="modal-action">
                        <label htmlFor="cancelOrderModal" class="btn btn-primary">Cancel</label>
                        <label onClick={handleConfirm} htmlFor="cancelOrderModal" class="btn bg-pink-400 text-white">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelOrder;