import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Oportunidades de negocio con mike</title>
				<meta name='descripcion' content='Educación financiera y oportunidades de negocio' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<p className='text-xs my-8'>
					escríbeme al whatsapp para info sobre oportunidades de negocio
					<a className='text-white mx-1' href='https://api.whatsapp.com/send?phone=573157861921&text=Quiero%20información'>
						3157861921
					</a>
				</p>

				<p className='text-xs'>
					o visita aquí...
					<a className='text-white mx-1' href='https://mikenetwork.vercel.app/acn'>
						3157861921
					</a>
				</p>
			</main>
		</>
	);
}
