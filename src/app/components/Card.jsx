
const Card = ({ index, title, body, actions, badge = false, kebab = false, className, value, setSeeDetails, setActiveTab }) => {

    const setSeeDetailsOpen = () => {
        document.body.style.overflowY = "hidden"
        setActiveTab(index + 1)
        setSeeDetails(true)
    }

    return (
        <div className={`card border border-base-content w-full rounded ${className}`}>
            <div className="card-body">
                <div className="flex items-center justify-between space-x-4 relative">

                    <div className="flex items-center space-x-2">
                        <h2 className="card-title text-2xl text-base-content/80">{title}</h2>
                        {
                            badge ?
                                <div className="badge badge-accent text-primary rounded-sm">POPULAR</div>
                                : null
                        }
                    </div>

                    {
                        kebab ?
                            <div className="dropdown dropdown-bottom dropdown-end rounded-full justify-self-end absolute -right-3">
                                <div tabIndex={0} role="button" className="btn btn-circle">
                                    <svg className="w-6 h-6 text-base-content/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 6h.01M12 12h.01M12 18h.01" />
                                    </svg>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded z-[1] w-28 shadow">
                                    <li><button onClick={setSeeDetailsOpen} className="p-2 rounded-none">Details</button></li>
                                </ul>
                            </div>
                            : null
                    }

                </div>
                <div className="stat">
                    <div className="stat-value">
                        {value}
                    </div>
                </div>
                <div>{body}</div>
                <div className="card-actions">
                    {actions}
                </div>
            </div>
        </div>
    );
}

export default Card;
