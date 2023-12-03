"use client";
import React, { useState } from 'react'

import DatePicker, { CalendarContainer } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./customdatepicker.css";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ptBr from 'date-fns/locale/pt-br';
registerLocale('pt-br', ptBr)


export default function Agenda() {
    const [startDate, setStartDate] = useState(new Date());

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0;
    };

    const MyContainer = ({ className, children }) => {
        return (
            <CalendarContainer className={className + ' !w-full'}>
              <div className='!w-full asd' style={{ position: "relative" }}>{children}</div>
            </CalendarContainer>
        );
      };

    return (
        <>
            <main className=" my-4 grid grid-cols-2 gap-4">
                <div className='bg-secondary  rounded-t-lg'>
                    <div className="py-3  border-b border-b-gray-400">
                        <span className='p-3'>
                            Serviços
                        </span>

                    </div>
                    <div className='pt-3 pb-8  px-4'>
                        <DatePicker 
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            locale={ptBr}
                            calendarClassName="!w-full"
                            disabledKeyboardNavigation
                            filterDate={isWeekday}
                            calendarContainer={MyContainer}
                            monthClassName="!w-full bg-red-400"
                            inline
                            wrapperClassName="!w-full text-red-400"
                        />

                    </div>
                </div>
                <div className='bg-secondary  rounded-t-lg'>
                    <div className="py-3  border-b border-b-gray-400">
                        <span className='p-3'>
                            Serviços
                        </span>

                    </div>
                    <div className='pt-3 pb-8  px-4 grid grid-cols-2 gap-4 text-white'>
                        ss
                    </div>
                </div>
            </main>
        </>
    )
}
