
const Modal = ({title, content, action}) => {
    return (
        <div className="modal" role="dialog">
            <div className="modal-box max-w-full max-h-full w-screen lg:max-w-3xl lg:w-[91.666667%] lg:max-h-[calc(100vh-4em)] rounded bg-base-300">
                <h3 className="text-2xl font-bold">{title}</h3>
                {content}
                <div className="modal-action">
                    {action}
                </div>
            </div>
        </div>
    );
}

export default Modal;
