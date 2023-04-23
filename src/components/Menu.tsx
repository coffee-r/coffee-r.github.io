export default function Menu() {
	return (
		<aside className="text-center md:w-1/4">
            <a href="/"><img className="w-20 m-auto" src="/avator.jpeg" alt="avator"/></a>
            <div className="md:mt-2 md:mb-6">
                <h1 className="text-2xl">こーひーあーる</h1>
                <h1>@plus_marumaru</h1>
            </div>
            
            <nav>
                <ul className="mt-3 mb-8 flex justify-around md:flex-col">
                    <li className="hover:text-gray-500"><a href="/">About</a></li>
                    <li className="hover:text-gray-500"><a href="/products">Products</a></li>
                    <li className="hover:text-gray-500"><a href="https://twitter.com/plus_marumaru" target="_blank">Twitter</a></li>
                    <li className="hover:text-gray-500"><a href="https://github.com/coffee-r" target="_blank">Github</a></li>
                    <li className="hover:text-gray-500"><a href="https://coffee-ryo.hatenablog.com" target="_blank">Blog</a></li>
                </ul>
            </nav>
        </aside>
	);
}