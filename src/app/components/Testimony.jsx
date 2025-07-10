import Image from "next/image";

const Testimony = ({message, image, name, position}) => {
    return (
        <div className="flex flex-col w-full min-w-full">
            <div className="self-end pr-8">
                <svg className="w-6 h-6 text-primary dark:text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clipRule="evenodd" />
                </svg>
            </div>

            <div className="pr-12 mb-4 text-lg">
                {message}
            </div>

            <div className="flex items-center">
                <div className="avatar">
                    <div className="rounded-full">
                        <Image src={image} loading="lazy" width={40} placeholder="blur" alt="Testimonee Image" />
                    </div>
                </div>
                <div className="ml-2">
                    <h4 className="font-bold text-base">{name}</h4>
                    <p className="text-xs">{position}</p>
                </div>
            </div>
        </div>
    );
}

export default Testimony;
