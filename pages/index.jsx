import Profile from '@/components/mains/main-profile/Profile';
import MainContainer from '@/components/mains/MainContainer';

export default function Home() {
	return (
		<div className="w-full h-[calc(100%-85px)] flex flex-col items-center justify-center">
			<Profile />
			<MainContainer />
		</div>
	);
}
