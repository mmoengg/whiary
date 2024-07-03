import Image from 'next/image';

export default function Layout({ children }) {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<div className="w-full h-full max-w-[393px] p-5 bg-black flex flex-col items-center justify-end">
				{children}
				<ul className="w-full h-[65px] flex items-center justify-between">
					<li className="gnb gnb--active">
						<Image
							src="/images/svg/i-main.svg"
							width={14}
							height={14}
							alt="home"
						/>
					</li>
					<li className="gnb">
						{' '}
						<Image
							src="/images/svg/i-list.svg"
							width={14}
							height={14}
							alt="home"
						/>
					</li>
					<li className="gnb">
						{' '}
						<Image
							src="/images/svg/i-wish.svg"
							width={14}
							height={14}
							alt="home"
						/>
					</li>
					<li className="gnb">
						{' '}
						<Image
							src="/images/svg/i-mypage.svg"
							width={14}
							height={14}
							alt="home"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}
