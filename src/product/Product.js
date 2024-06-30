import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, Typography } from '@mui/material';

import b1 from './b1.jpg';
import b2 from './b2.jpg';
import b3 from './b3.jpg';
import b4 from './b4.jpg';
import b5 from './b5.jpg';
import b6 from './b6.jpg';
import b7 from './b7.jpg';
import b8 from './b8.jpg';
import bgg from './bgg.jpg';


import l1 from './l1.jpg';
import l2 from './l2.jpg';
import l3 from './l3.jpg';
import l4 from './l4.jpg';
import l5 from './l5.jpg';
import l6 from './l6.jpg';
import l7 from './l7.jpg';

import j1 from './j1.jpg';
import j2 from './j2.jpg';
import j3 from './j3.jpg';
import j4 from './j4.jpg';

import p1 from './p11.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
import p5 from './p5.jpg';



const Product = () => {
    return (
        <Box sx={{ overflow: 'hidden', p: 0 }}>

            <Box>
                <Box>
                    <Box component='img' src={bgg} alt='background' width='100%' height='100vh' sx={{ objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', top: { xs: '40%', sm: '45%', md: '45%' }, left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'justify', color: '#fff', p: 4, width: { xs: "80%", sm: '70%', md: '50%' } }}>


                        <Typography textAlign='center' sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }, mt: 8, color: '#800020', fontWeight: 700 }}>Our Products</Typography>


                        <Typography sx={{ fontSize: '1.2rem',color: '#COCOCO', pt: 4, display: { xs: 'block', sm: 'none' } }}>
                            Explore our unique collection of handmade products crafted with passion and skill. Each item tells a story of creativity and dedication, making them perfect for adding a touch of artisanal charm to your life
                        </Typography>


                        <Typography sx={{ fontSize: '1.2rem', pt: 4, display: { xs: 'none', sm: 'block' } }}>
                            Handcrafted products embody a rich tapestry of artisanal expertise and cultural heritage. Crafted with meticulous care and using traditional techniques passed down through generations, each piece carries a unique story. These items not only showcase superior quality and durability but also reflect a commitment to sustainability and eco-friendliness. Beyond their functional use, handcrafted products serve as artistic expressions, each bearing the imprint of its creator's creativity and passion. Purchasing handcrafted goods supports local artisans, fostering community and preserving valuable craftsmanship. With their timeless appeal and personalized touch, these products enrich our lives with their beauty, meaning, and the joy of owning something truly special.
                        </Typography>
                    </Box>
                </Box>



                <Box>
                    <Box>
                        <Typography textAlign='center' sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '3rem' }, mt: 6, color: '#800020', fontWeight: 700, }}>Bangles</Typography>

                        <Typography textAlign='center' sx={{ fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' }, mt: 3, color: '#C0C0C0', fontWeight: 700, }}>Muhurtham Bangles Started at RS 800</Typography>
                    </Box>



                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', p: 4 }}>
                            <Box component='img' src={b1} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4,
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={b2} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={b3} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={b4} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={b5} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={b6} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={b7} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={b8} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                        </Box>
                    </Box>


                </Box>



                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Swiper

                        slidesPerView={'auto'}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b1} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b2} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b3} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b4} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b5} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b6} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b7} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={b8} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                    </Swiper>
                </Box>

                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, pt: 4, color: 'white', textAlign: 'justify', mx: { xs: 2, sm: 4, md: 6 } }}>
                    Bangles are traditional accessories worn around the wrist, often crafted from metals like gold, silver, or brass, and adorned with intricate designs or gemstones. They hold cultural significance in various regions worldwide, symbolizing prosperity, beauty, and tradition. Whether worn singly or stacked in multiples, bangles add a timeless elegance to any attire, making them cherished pieces in jewelry collections.
                </Typography>
            </Box>


            <Box>




                <Box>
                    <Box>
                        <Typography textAlign='center' sx={{ fontSize: { xs: '2rem', sm: '2.8rem', md: '2.8rem' }, mt: 8, color: '#800020', fontWeight: 700, }}>Jhumukas</Typography>

                        <Typography textAlign='center' sx={{ fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' }, mt: 3, color: 'white', fontWeight: 700, }}>Jhumukas Started at RS 100</Typography>
                    </Box>



                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', p: 4, }}>
                            <Box component='img' src={j1} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4,
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={j2} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={j3} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={j4} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />


                        </Box>
                    </Box>


                </Box>



                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Swiper

                        slidesPerView={'auto'}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper2"
                    >
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={j1} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={j2} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={j3} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={j4} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>


                    </Swiper>
                </Box>

                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, pt: 4, color: 'white', textAlign: 'justify', mx: { xs: 2, sm: 4, md: 6 } }}>
                    Jhumkas, traditional Indian earrings, are celebrated for their distinctive bell-shaped design adorned with intricate patterns and embellishments. Crafted from metals like gold, silver, or brass, these earrings often feature dangling elements that create a melodious sound with movement. Jhumkas are cherished for their cultural significance, symbolizing femininity, grace, and heritage. Whether worn casually or on festive occasions, these timeless adornments complement traditional attire beautifully, adding a touch of elegance and charm to any ensemble.
                </Typography>
            </Box>


            <Box>




                <Box>
                    <Box>
                        <Typography textAlign='center' sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '3rem' }, mt: 8, color: '#800020', fontWeight: 700, }}>Letter Keychain</Typography>

                        <Typography textAlign='center' sx={{ fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' }, mt: 3, color: 'white', fontWeight: 700, }}>Letter Keychains Started at RS 200</Typography>
                    </Box>



                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', p: 4, }}>
                            <Box component='img' src={l1} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4,
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={l2} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={l3} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={l4} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={l5} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={l6} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={l7} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />

                        </Box>
                    </Box>


                </Box>



                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Swiper

                        slidesPerView={'auto'}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper1"
                    >
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={l1} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={l2} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={l3} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={l4} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={l5} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={l6} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={l7} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>

                    </Swiper>
                </Box>

                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, pt: 4, color: 'white', textAlign: 'justify', mx: { xs: 2, sm: 4, md: 6 } }}>
                    Handmade letter keychains offer a personal touch to everyday items, crafted with care and attention to detail. Each keychain is uniquely designed to feature a specific letter, making it a thoughtful and customizable accessory or gift. Whether as a practical item to organize keys or as a personalized keepsake, handmade letter keychains blend utility with creativity, adding a touch of individuality to your daily essentials.
                </Typography>
            </Box>


            <Box>




                <Box>
                    <Box>
                        <Typography textAlign='center' sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '3rem' }, mt: 8, color: '#800020', fontWeight: 700,  }}>Photo Keychain</Typography>

                        <Typography textAlign='center'  sx={{ fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' }, mt: 3, color: 'white', fontWeight: 700, }}>Photo Keychains Started at RS 200</Typography>
                    </Box>



                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', p: 4, }}>
                            <Box component='img' src={p1} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4,
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={p2} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={p3} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={p4} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                            <Box component='img' src={p5} alt='bangle' width={300} height={300} sx={{
                                borderRadius: '8px', mt: 4, transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                },
                            }} />
                          
                        </Box>
                    </Box>


                </Box>



                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Swiper

                        slidesPerView={'auto'}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper3"
                    >
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={p1} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={p2} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={p3} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={p4} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Box component='img' src={p5} alt='bangle' width={350} height={350} sx={{ borderRadius: '8px', mt: 4 }} />
                        </SwiperSlide>
                      

                    </Swiper>
                </Box>

                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, pt: 4, color: 'white', textAlign: 'justify', mx: { xs: 2, sm: 4, md: 6 } }}>
                    Photo keychains are personalized accessories that feature a small frame or compartment to hold a cherished photograph. They serve as sentimental keepsakes, allowing individuals to carry their favorite memories with them wherever they go. Typically crafted from durable materials like metal or acrylic, photo keychains offer both practicality and emotional value. They make thoughtful gifts for loved ones, commemorating special moments such as birthdays, weddings, or graduations, and are often customizable with various designs and styles to suit personal preferences.

                </Typography>
            </Box>




        </Box>
    );
}

export default Product;
