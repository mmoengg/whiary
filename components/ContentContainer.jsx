export default function ContentContainer({ children }) {
	return <div className="p-4 pb-0 w-full h-[calc(100%-77px)] flex flex-col items-center justify-between gap-4">{children}</div>;
}
