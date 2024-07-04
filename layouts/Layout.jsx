import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
	const router = useRouter();

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-stone-500">
			<div className="w-full h-full max-w-[752px] bg-black flex flex-col items-center justify-end">
				{children}
				<ul className="p-5 w-full flex items-center justify-between">
					<li className={`gnb ${router.pathname === '/' ? 'gnb--active' : ''}`}>
						<Link href="/" className="w-full h-full flex items-center justify-center ">
							<Image src="/images/svg/i-main.svg" width={14} height={14} alt="home" />
						</Link>
					</li>
					<li className={`gnb ${router.pathname === '/lists' ? 'gnb--active' : ''}`}>
						<Link href="/lists" className="w-full h-full flex items-center justify-center ">
							<Image src="/images/svg/i-list.svg" width={16} height={16} alt="home" />
						</Link>
					</li>
					<li className={`gnb ${router.pathname === '/wishs' ? 'gnb--active' : ''}`}>
						<Link href="/wishs" className="w-full h-full flex items-center justify-center ">
							<Image src="/images/svg/i-wish.svg" width={18} height={18} alt="home" />
						</Link>
					</li>
					<li className={`gnb ${router.pathname === '/mypages' ? 'gnb--active' : ''}`}>
						<Link href="/mypages" className="w-full h-full flex items-center justify-center ">
							<Image src="/images/svg/i-mypage.svg" width={11} height={11} alt="home" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
