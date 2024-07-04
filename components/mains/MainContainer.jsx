import NewPost from './main-newpost/NewPost';
import Recommend from './main-recommend/Recommend';
import Tried from './main-tried/Tried';

export default function MainContainer() {
	return (
		<div className=" w-full h-full max-h-[calc(100%-57px)] flex flex-col justify-end gap-2">
			<Recommend />
			<NewPost />
			<Tried />
		</div>
	);
}
