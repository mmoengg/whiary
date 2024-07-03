import { useEffect, useState } from 'react';

export default function CommentList() {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		async function fetchComments() {
			const res = await fetch('/api/comments');
			const data = await res.json();
			setComments(data.comments);
			console.log('comments:', data.comments);
		}
		fetchComments();
	}, []);

	return (
		<div>
			<h2>Comments</h2>
			{/* <ul>
				{comments.map(comment => (
					<li key={comment._id}>{comment.content}</li>
				))}
			</ul> */}
		</div>
	);
}
