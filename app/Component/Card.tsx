'use client'
import axios from 'axios'
import React, { useState } from 'react'

const Card = ({ title, id }: { title: string, id: number }) => {
    const [iniDetail, setDetail] = useState<any>()
    const openModal = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            });
            if (data.data) {
                setDetail(data.data)
                const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
                if (modal) {
                    modal.showModal();
                }
            }
        } catch (error) {
        }
    };

    const closeModal = () => {
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
        if (modal) {
            modal.close();
        }
    };
    const [iniDelete, setDelete] = useState<boolean>(false)
    const renderDelete = () => {
        return (
            <div className='fixed w-6/12 p-3 left-2 top-2 z-10'>
                <div className="card p-4 bg-white shadow-lg border">
                    <p className='text-center mb-4'>
                        Yakin Untuk Menghapus?
                    </p>
                    <div className="flex justify-end gap-3">
                        <button className='btn btn-sm'>Ya</button>
                        <button onClick={() => setDelete(false)} className='btn btn-sm'>Tidak</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {iniDelete == true && renderDelete()}
            <div className="card w-full bg-base-100 shadow-xl h-full">
                <div className="card-body">
                    <div className='h-44 flex justify-center items-center'>
                        <h2 className="text-center font-bold mb-4">{title}</h2>
                    </div>
                    {/* <div className="h-full p-3 shadow-md">
                        <p>{body}</p>
                    </div> */}
                    <div className="flex bottom-0  gap-2 mt-2">
                        <button onClick={openModal} className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                        </button>
                        <>
                            {iniDetail &&
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">{iniDetail.title}</h3>
                                        <p className="py-4">{iniDetail.body}</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button onClick={closeModal} className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            }
                        </>
                        <button className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                        <button onClick={() => setDelete(true)} className="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card