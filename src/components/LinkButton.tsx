export default function LinkButton(props:any) {
	return (
		<div className="text-center">
            <a href={props.url} target="_blank" >
                <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
                    {props.text}
                </button>
            </a>
        </div>
	);
}