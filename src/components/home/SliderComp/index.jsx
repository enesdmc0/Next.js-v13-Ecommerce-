'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComp = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings} >
                <div className="!flex bg-gray-100 p-8">
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-5xl">En Çok Satanlar</h1>
                        <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also th</p>
                        <div
                            className="border border-white rounded-full w-[150px] bg-gray-200 h-16 flex items-center justify-center text-xl ">İncele
                        </div>
                    </div>
                    <div className="relative h-[400px] flex-1">
                        <Image className="object-cover" fill
                               src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dae9dc59-f5f3-4f5a-bdda-f31b5f825805/air-max-plus-ayakkab%C4%B1s%C4%B1-bv1n5M.png"
                               alt=""/>
                    </div>
                </div>
                <div className="!flex bg-gray-100 p-8">
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-5xl">En Çok Satanlar</h1>
                        <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also th</p>
                        <div
                            className="border border-white rounded-full w-[150px] bg-gray-200 h-16 flex items-center justify-center text-xl ">İncele
                        </div>
                    </div>
                    <div className="relative h-[400px] flex-1">
                        <Image fill
                               src="https://aknbarcin.b-cdn.net/products/2023/01/23/1087863/6d6b54f5-4175-4a54-b208-3970654318b2_size900x900_cropCenter.jpg"
                               alt=""/>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComp;
