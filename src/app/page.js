import Image from 'next/image';
import Main from '../app/(route)/main/page';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<Main />
		</main>
	);
}
