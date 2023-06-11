import './ResourcesPage.css'
import AddResource from './AddResource';

function ResourcesPage () {

    const addResource = () => {
        return <AddResource />     
    }

    return (
        <div>
            <h1>Welcome to your resources!</h1>
            <AddResource />
            <button onClick={addResource}>ADD</button>
        </div>
    )
}

export default ResourcesPage;