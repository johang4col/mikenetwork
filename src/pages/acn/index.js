/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import { Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// import { getSession } from 'next-auth/react';
// import { Facebook, Instagram } from '../../utils/iconosLib';

// Import Swiper styles
// import 'swiper/css/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
export const TimeContainer = ({ digits, text }) => (
	<div className='flex flex-col justify-center items-center'>
		<div className='flex justify-center shadow bg-white bg-opacity-60 text-xl sm:text-2xl p-1 sm:p-4 rounded w-12 sm:w-14'>
			<span>{digits}</span>
		</div>
		<p className='text-white'>{text}</p>
	</div>
);

export const CountDownTimer = () => {
	const calculateTimeLeft = () => {
		const year = new Date().getFullYear();
		const difference = +new Date(`4/01/${year}`) - +new Date();

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		// console.log('timer', timer);
		// console.log('timeLeft:', timeLeft);

		return () => clearTimeout(timer);
	});

	return (
		<>
			{timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
				<div className='grid grid-cols-4 gap-4 shadow-xl p-4 rounded bg-blue-s-300 my-4 text-xs'>
					<TimeContainer digits={timeLeft.days} text='Días' />
					<TimeContainer digits={timeLeft.hours} text='Horas' />
					<TimeContainer digits={timeLeft.minutes} text='Minutos' />
					<TimeContainer digits={timeLeft.seconds} text='Segundos' />
				</div>
			) : (
				<div>Evento estrenado</div>
			)}
		</>
	);
};

export const Acn = () => {
	return (
		<>
			<Head>
				<title>Negocio con acn</title>
				{/* <meta name='viewport' content='initial-scale=1.0, width=device-width' /> */}
				<meta property='description' content='Oportunidade de negocio con acn' />
				<meta property='og:title' content='Networking' />
				<meta property='og:description' content='Visita mi web para ver las oportunidades de negocio que tengo' />
				<meta property='og:type' content='' />
				<meta property='og:url' content='' />
				<meta property='og:site_name' content='' />
			</Head>

			<div className='flex flex-col justify-center items-center w-full h-full bg-blue-s-300 px-10'>
				<section className='flex flex-col justify-center items-center bg-white bg-opacity-10 w-full max-w-7xl m-10 py-14 text-white rounded px-2'>
					<h1 className='text-lg mb-10'> Si nos demuestras que tienes el perfil para ser parte de nuestro equipo...</h1>
					<h2 className='text-1xl font-bold'>Te enseño como vamos a </h2>
					<p className='text-3xl font-bold px-4 py-2 mt-1 bg-black text-white rounded'>ganar dinero cada vez que alguien use el celular 😍</p>
					{/* <p className='text-xs'>Aclaración: Este evento no es un sitio de acompañantes o similar.</p> */}
					<p className='text-sm font-bold px-4 py-2 mt-8  text-white rounded'>
						<span className='bg-black text-white px-2 py-1 rounded'>9 cupos</span> restantes
					</p>
				</section>
				<section className='flex flex-col justify-center items-center bg-sapphire-s-300 text-white w-full py-2 max-w-7xl rounded my-8 px-2'>
					<h2 className='text-3xl mb-4'>¿CÓMO FUNCIONA?</h2>
					<section className='flex justify-center items-center bg-sapphire-s-300 bg-opacity-60 w-full max-w-7xl rounded'>
						<div className='grid grid-cols-1  w-full max-w-4xl md:my-20'>
							<div className='relative min-h-full flex justify-center rounded my-4'>
								<iframe className='rounded' width='313' height='557' src='https://www.youtube.com/embed/6b48j4xpToM' title='19 de marzo de 2023' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
							</div>
						</div>
					</section>
				</section>

				<section className='flex justify-center items-center bg-charcoal-t-600 w-full h-full max-w-7xl rounded mb-40'>
					<div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl my-20'>
						<div className='grid grid-cols-1 gap-4 mt-2 h-54 sm:h-[584px]' data-thumb='1_thumb.jpg'>
							<div className='relative min-h-full mx-2'>
								<iframe src='https://www.youtube.com/embed/X12DqRynRWg' allow='autoplay; fullscreen' frameBorder='0' layout='responsive' className='w-full h-full rounded'></iframe>
							</div>
						</div>
						<div className='flex flex-col justify-center items-center'>
							<h2 className='flex justify-center my-4 text-3xl'>
								<b>Requisitos:</b>
							</h2>

							<ul className='grid grid-rows-4 list-none mb-4'>
								<li>Hacer Test cognitivo</li>
								<li>Tener Rut o gestionarlo</li>
								<li>Cuenta bancaria</li>
								<li>Cédula / pasaporte</li>
							</ul>

							<div className='flex flex-col w-10/12 md:w-9/12 px-4 bg-turquoise-t-300 rounded mx-1 my-4 py-2'>
								<h2>
									<a className='flex justify-center text-sm md:text-2xl text-white bg-black rounded mb-6' target='_blank' href='https://api.whatsapp.com/send?phone=573157861921&text=Quiero%20información'>
										<spam className='mx-2'>Toma el test cognitivo</spam>
									</a>
								</h2>
								<h2 className='font-bold'>Este sábado evento de negocios</h2>
								<p className='text-xs'>
									escríbeme al whatsapp para reservarte un cupo:
									<a className='text-white mx-1' target='_blank' href='https://api.whatsapp.com/send?phone=573157861921&text=Quiero%20información'>
										3157861921
									</a>
									(aplica para quienes pasaron test cognitivo)
								</p>
								<CountDownTimer />
							</div>
						</div>
					</div>
				</section>

				{/* <section className='flex flex-col justify-center items-center bg-charcoal-t-600 w-full py-8 max-w-7xl rounded my-2 px-2'>
					<h2 className='text-3xl mb-4 mt-8'>PROGRAMACIÓN</h2>

					<ul className='grid grid-rows-4 list-none mb-4 px-6 mx-2 my-2'>
						<li>1:00 PM Actividad Apertura e Inicio del evento</li>
						<li>1:50 PM Refrigerio</li>
						<li>2:00 PM Citas rápidas</li>
						<li>6:00 PM Cena</li>
						<li>Cierre</li>
					</ul>
				</section> */}

				{/* <section className='hidden md:flex flex-col justify-center items-center bg-sapphire-s-300 bg-opacity-90 text-white w-full py-8 max-w-7xl rounded my-8 px-2'>
					<h2 className='text-3xl mb-4'>¿QUÉ TIPO DE PERSONAS VAN?</h2>
					<ul className='my-4 list-disc grid grid-rows-3 gap-2  px-6 mx-2'>
						<li>Un alto porcentaje de los asistentes, tienen talentos como: académicos, el emprendimiento, liderazgo social, el deporte, manejo de idiomas y relaciones públicas que los ha llevado a ser empresarios, terminar estudios, tener un proyecto de vida claro, ser independientes y viajar </li>
					</ul>
				</section> */}
			</div>
		</>
	);
};

// export async function getServerSideProps(context) {
// 	const userSession = await getSession(context);
// 	const user = userSession;

// 	return {
// 		props: {
// 			user,
// 		},
// 	};
// }

export default Acn;

// for the shorts from youtuibe embebed

// <section className='flex justify-center items-center bg-charcoal-t-600 w-full max-w-7xl rounded'>
// 	<div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl md:my-20'>
// 		<div className='relative min-h-full flex justify-center rounded my-4'>
// 			<iframe className='rounded' width='313' height='557' src='https://www.youtube.com/embed/6b48j4xpToM' title='19 de marzo de 2023' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
// 		</div>

// 		<div className='flex flex-col justify-center items-center'>
// 			{/* <p className='text-sm px-4'>Se reserva lugar privado para los asistentes </p> */}
// 			<h2 className='flex justify-center my-4 text-3xl'>
// 				<b>Requisitos:</b>
// 			</h2>

// 			<ul className='grid grid-rows-4 list-none mb-4  '>
// 				<li>Hacer Test cognitivo</li>
// 				<li>Tener Rut</li>
// 				<li>Cuenta bancaria</li>
// 				<li>Cédula / pasaporte</li>
// 			</ul>

// 			<div className='flex flex-col w-9/12 px-10 bg-peridot-s-300 rounded mx-5 my-4 py-2'>
// 				<h2>
// 					<a className=' text-2xl text-white' href='https://api.whatsapp.com/send?phone=573004381616&text=Quiero%20asistir'>
// 						Escríbeme aquí para tomar el tests
// 					</a>
// 				</h2>
// 			</div>

// 			{/* <CountDownTimer /> */}
// 		</div>
// 	</div>
// </section>;
