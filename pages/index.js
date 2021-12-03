import Head from 'next/head';
import Hero from '../components/Hero';
import Thegame from '../components/Thegame.jsx';
import Community from '../components/Community.jsx';
import Roadmap from '../components/Roadmap.jsx';
import EmailSubscribe from '../components/EmailSubscribe.jsx';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Battle Saga</title>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet"></link>
			</Head>
			<Hero />
			<Thegame />
			<Community />
			<Roadmap />
			<EmailSubscribe />
		</div>
	);
}
