import NewPost from './main-newpost/NewPost';
import Recommend from './main-recommend/Recommend';
import Tried from './main-tried/Tried';

export default function MainContainer() {
	return (
		<>
			<Recommend />
			<NewPost />
			<Tried />
		</>
	);
}
