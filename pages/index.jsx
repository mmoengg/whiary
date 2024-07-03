import Image from 'next/image';
import { Inter } from 'next/font/google';
import Profile from '@/components/mains/main-profile/Profile';
import MainContainer from '@/components/mains/MainContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Profile />
			<MainContainer />
		</>
	);
}
