'use client'
import axios from 'axios'
import React, { useState } from 'react'

const Section2 = () => {
    const [title, setTitle] = useState<string>()
    const [body, setBody] = useState<string>()
    const [newData, setNewData] = useState<any>()
    const post = async () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => setNewData(json));
        } catch (error) {

        }
    }
    const handlePost = () => {
        if (title && body) {
            post()
            setTitle('')
            setBody('')
        }
    }
    return (
        <>
            {newData &&
                <div className='p-4 bg-white rounded-lg shadow-lg mb-4'>
                    <div className="alert alert-success mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Proses Tambah Berhasil</span>
                    </div>
                    {/* <h1>POST BARU</h1> */}
                    <div className="grid grid-cols-7 mt-4">
                        <>
                            <div className="col-span-2">Judul</div>
                            <div className="col-span-5">{newData.title}</div>
                        </>
                    </div>
                    <div className="grid grid-cols-7">
                        <>
                            <div className="col-span-2">Keterangan</div>
                            <div className="col-span-5">{newData.body}</div>
                        </>
                    </div>
                </div>
            }
            <div className='p-4 bg-white shadow-lg rounded-lg w-full'>
                <h1>TAMBAH</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Judul</span>
                    </label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Masukan judul" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Keterangan</span>
                    </label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} className="textarea textarea-bordered h-24" placeholder="Masukan Keterangan"></textarea>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => handlePost()} className="btn btn-primary lg:btn-wide btn-sm mt-3">Tambah</button>
                </div>
            </div>
        </>
    )
}

export default Section2