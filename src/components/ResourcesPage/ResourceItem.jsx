function ResourceItem({ resource }) {
    return (
        <div className='resources' key={resource.id}>
            <a href={resource.link} target='_blank'>
                <h1>{resource.title}</h1>
                <p>{resource.description}</p>
                <p>Related to {resource.tag}</p>
            </a>
        </div>
    )
}

export default ResourceItem;