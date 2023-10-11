'use client'
import React, { useEffect, useState } from 'react'
import Card from './Component/Card'
import axios from 'axios'

const Section1 = () => {
    const [iniData, setData] = useState<any>()
    const getData = async () => {
        try {
            const data = await axios({
                method: 'get',
                url: `https://jsonplaceholder.typicode.com/posts`,
            });
            console.log(data.data);
            setData(data.data)
        } catch (error) {
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='p-4 rounded-lg bg-white shadow'>
            <div className="w-full mb-4">
                <h1 className='font-bold text-2xl text-center'>POSTINGAN</h1>
            </div>
            <hr />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center">
                {iniData && iniData.map((item: any, index: number) => {
                    return (
                        <Card id={item.id} title={item.title} />
                    )
                })}
            </div>
        </div>
    )
}

export default Section1