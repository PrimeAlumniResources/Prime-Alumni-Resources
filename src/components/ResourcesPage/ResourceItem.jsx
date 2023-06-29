function ResourceItem({ resource }) {
    return (
        <div className='shadow-2xl ml-7 w-11/12 opacity-90 shadow-emerald-100  mt-3 flex flex-col items-left pb-5 flex p-4  mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-white dark:text-green-400'>
            <a className="text-emerald-300 " href={resource.link} target='_blank'>
                <h1 className="text-2xl text-emerald-700 hover:underline">{resource.title}</h1>
                <p className="text-emerald-700">{resource.description}</p>
                <p className="text-emerald-700">#{resource.tag}</p>
            </a>
        </div>
    )
}

export default ResourceItem;